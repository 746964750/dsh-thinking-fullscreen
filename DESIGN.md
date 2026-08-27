# DSH 思考过程全屏展示插件 · 设计文档 v1.0（定稿）

> 状态：按 t3 终审意见落实 R1/R2 强制修订后的最终版
> 流程：captain 起草（t2）→ reviewer 终审（t3 有条件通过）→ 修订落实 → 本稿
> 用户拍板记录：Q1 按钮位置=侧边栏底部；Q2 接受页面内全屏；Q3 默认主题=赛博朋克；Q4 性能模式默认关；Q5 频谱=底部状态栏

## 一、功能设计

### 1.1 定位
DSH Web GUI 内的全屏沉浸层：实时可视化当前会话思考流（reasoning）与工具调用过程，科技感动效背景，类全屏歌词观感。

### 1.2 业务闭环
点击开关按钮 → 全屏覆盖层淡入 + Fullscreen API 页面全屏（绑定当时活动会话并重置内容流，见 N1）→ 订阅会话数据实时渲染 → 对话结束显示完成态（呼吸背景+统计）→ ESC/关闭钮/再点开关退出（监听 fullscreenchange 同步收起，杜绝半退态）。

### 1.3 功能点
| # | 功能 | 规格 |
|---|------|------|
| F1 | 开关按钮 | `sidebar.footer.action` 增量注册 {id, order, label}；激活态高亮；hover「思考全景」 |
| F2 | 全屏切换 | `shell.overlay` 渲染覆盖层 + `requestFullscreen()`；退出=ESC/右上角关闭钮/再点开关；`fullscreenchange` 监听同步状态 |
| F3 | 思考流展示 | 会话快照中 assistant-step 节点 reasoning；相邻快照 diff 补间实现「逐字渐入」（N2）；霓虹渐入+光标尾迹 |
| F4 | 工具调用卡片 | tool-call 节点→紧凑卡片（等宽字体工具名+参数摘要+状态）；执行中脉冲边框；完成辉光脉冲 1.5s 衰减 |
| F5 | 状态背景 | 三态流体渐变（CSS conic）：思考=品红系深阶→青 缓旋 40s；工具=品红/琥珀脉冲 1.2s；空闲=深蓝呼吸 4s |
| F6 | 思考频谱 | 底部状态栏 32 条 LED；振幅=快照字符增量÷100ms 采样间隔估算（N3）；工具调用插入尖峰；空闲呼吸微动 |
| F7 | 信息卡 | 左上角会话名+状态徽章（思考中/调用 bash/read/write…/等待输入/已完成） |
| F8 | 设置 | 仅性能模式开关一项（收敛，防过度设计）；内存态不持久化 |

### 1.4 边界与空态
- 无思考内容：占位动画「等待第一个思考…」
- 会话结束：保留最后内容+徽章「已完成」+背景转呼吸态
- 刷新页面：覆盖层消失、按钮回关闭态（内存态设计，可接受）
- 非活动会话/无会话：按钮禁用置灰
- 主题适配：恒深色底（覆盖层自身配色恒定深色），辉光强度随应用主题档位微调（浅色主题降低辉光防刺眼）

### 1.5 明确不做（v1）
OS 级置顶窗口（Web 无法实现）；歌词卡片分享导出（v2）；多会话同屏对比（v2）；设置持久化。

## 二、UI/UE 设计

### 2.1 布局分区（参考 BetterLyrics ref-fs2/fs3）
```
┌─────────────────────────────────────────┐
│ [信息卡: 图标|会话名|状态徽章]      [×] │ ← 顶部 60px
│        （历史块 scale .92→.85 递减模糊） │
│         ┌───────────────────┐           │
│         │ 当前思考行(大字重)  │           │ ← 中央焦点区 ±5 块虚拟化
│         │ 工具摘要行(等宽)    │           │
│         └───────────────────┘           │
│ ▁▂▃▅▂▆▃▂▁ 思考频谱 · 12 tools · 3.2k tok │ ← 底部 80px
└─────────────────────────────────────────┘
```
双行结构：思考主行粗字重 + 工具摘要行 JetBrains Mono 次级色；行距 1.7 无衬线。

### 2.2 视觉规格
- 背景三态（赛博朋克主题色系统一）：思考=品红 #d946ef 深阶→青 #06b6d4 conic 缓旋；工具=品红→琥珀 #f59e0b 脉冲；空闲=深蓝 #0f172a 呼吸
- 霓虹描边：当前块 border 1px 半透明青 + 双层 box-shadow（0 0 20px / 0 0 60px）
- 逐字渐入：相邻快照 diff 补间（N2），text-shadow 霓虹 + opacity 300ms + 光标尾迹
- 星尘粒子【R2 修订】：DOM 元素 + CSS transform 上浮 + opacity 动画（GPU 合成零 JS 逐帧），40~120 颗密度档位，性能模式一键关
- 性能护栏：密度上限 120、性能模式开关、尊重 prefers-reduced-motion、动画全 CSS 优先

### 2.3 动效节奏
入场 backdrop 模糊淡入 400ms + 内容 stagger 上浮；流式跟随真实生成速率（不设流速微调项，与 F8 收敛一致）；退场反向淡出 300ms 卸载。

## 三、技术依据

| 红线 | 落点 |
|------|------|
| 数据源禁猜 API | 见 §三.1 数据通路专节 |
| 全屏层 shell.overlay | list 型 replaceRisk none；V2 首日验证 pointer-events/层级 |
| 按钮 sidebar.footer.action | {id, order, label} 增量注册不动 sidebar 本体 |
| 定时器 | inject:['timer']+ctx.interval 仅频谱采样 100ms；其余动画全 CSS |
| Fiber 可逆清理 | slots.inject/styles.insert/ctx.effect 全可逆；插件停止全屏层自动消失 |
| 边界场景 | §1.4 全覆盖 |

### 三.1 数据通路【R1 修订·核心】
覆盖层（root scope）获取会话数据的三层方案，按序降级：
- **a 主方案**：首日验证全局组件可直接使用 useSession/useSessions 类标准 hook 或 props（skill 文档提示 session/workspace 数据经标准 props 提供，全局槽位可能同样可用）
- **b 备选**：session 域槽位（如 conversation.composer.dock）挂隐形桥组件 → 从其 session props 提取叶子标量（reasoning 文本片段/tool-call 摘要/会话名/运行状态；只取所需叶子字段，禁整对象拷贝与 stringify）→ 写入 Package 内存 store → overlay 组件订阅 store。合法：数据仍源自标准 props，不违反禁 Host RPC 红线
- **c 兜底**：按钮改挂 conversation.session.header.actions + 在 session 域内自绘全屏容器（position:fixed 铺满视口）

#### 三.1+ 补充证据（researcher 迟到报告采纳）
Host 侧已核实的服务面（若 a 失败，以下构成更优的 b' 变体）：
- `session/event`（emit）：块级增量追加流——思考/工具块的天然增量源
- `sessionProjections.snapshot(session) / stateOf() / onChanged(listener)`：UI 投影层+变更订阅
- `sessionQuery.readSurface(id) / readSession(id)→SessionLogSnapshot`：快照读取
- `sessionPersistence.readFrom(id, fromSeq)`：序号增量补拉
- b' 变体：Host 半订阅 sessionProjections.onChanged → 提取叶子标量 → harness.handle RPC 供 Client 拉取/推送。合规性说明：红线的"禁 Host RPC"前提是 Slot props 已有数据；若主方案 a 验证失败（全局槽位无会话 props），此路不属绕行，是正当通路。V1 验证时与 a 一并测试，取先通过者。
- token 级增强备选：llm/stream waterfall 包装 next() 透传（侵入强，仅作 v2 增强）

### 三.2 开发期注意事项（N1-N6）
- N1 fullscreenchange 监听同步收起覆盖层；再次打开绑定当时活动会话并重置内容流
- N2 props 为全量快照非增量流；「逐字渐入」基于相邻快照 diff 补间防跳字
- N3 频谱振幅=快照字符增量÷100ms 采样间隔估算
- N4 赛博朋克主题色统一：品红 #d946ef 为主题主色（背景用其同系深阶）
- N5 styles.insert 全部类名 `.dtf-*` 前缀隔离；恒深色底+辉光随主题档位微调
- N6 requestFullscreen 可用性首日验证；document 访问若被拦截则降级视口铺满覆盖层（不进系统全屏）

### 三.3 首日验证清单（优先级序）
V1 R1 数据通路走向（最高优先，决定架构）→ V2 shell.overlay pointer-events/层级 → V3 requestFullscreen+ESC 行为 → V4 props 叶子字段名

## 四、待确认清单
Q1-Q5 用户已全部拍板，环节关闭，无遗留开放问题。
