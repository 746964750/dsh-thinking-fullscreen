# AGENTS.md — dsh-thinking-fullscreen

DSH Web 纯客户端插件：会话顶栏一键打开全屏沉浸层，实时展示思考流 / 工具调用 / 回答流（类桌面歌词观感）。Host 半边 noop。

## Map

| Path | Role |
|------|------|
| `lib/client.js` | **Source of truth** — 正式 bundle（`__ModuleLoader__` + `require('react')`） |
| `client.dynamic.js` | 动态插件体（`cordis_define` 的 `code.client`）；进程重启丢失 |
| `lib/index.js` | Host `apply()` noop |
| `package.json` → `dsh.bundle` + `dsh.client` | profile 层声明 + client inject |
| `cordis.patch.yml` | bundle patch：insert Host 插件行 |
| `DESIGN.md` | 设计意图、红线、验证清单（与实现有偏差时以代码为准） |
| `README.md` | 安装与双轨用法 |
| `profile-backup/` | 历史 profile 备份，默认不改 |

改 UI / 数据 / 动效 → 先改 `lib/client.js`，再决定是否同步 `client.dynamic.js`。只做动态试跑 → 只动 `client.dynamic.js`。

## Architecture (as shipped)

```
conversation.composer.dock  →  Bridge(extractLeaf)  →  memory store
conversation.session.header.actions  →  ToggleButton
shell.overlay  →  Overlay → <dialog showModal> Top Layer
```

数据只取 session **叶子标量**（`partial.blocks` / `runningCalls` / `nodes` / `running`），经 Slot props 进 store；禁整对象拷贝与 stringify。无 Host RPC。

五态：`think` | `tools` | `answer` | `busy` | `idle`（含 RECAP）。CSS 类名前缀 `.dtf-*`；动画走 CSS/GPU，零 JS 逐帧。

## Guardrails

1. **叶子通路** — 新字段只从 Slot session props 抽标量进 store；保持「桥 → store → overlay」单向。
2. **可逆注入** — 继续用 `ctx.slots.inject` / `register`；样式用 `data-plugin="dsh-thinking-fullscreen"` 单例 style 标签。
3. **视觉恒深色** — 覆盖层自带赛博配色；主题色主轴品红 `#d946ef` + 青 `#06b6d4`。
4. **v1 不做** — OS 置顶窗、歌词分享导出、多会话同屏、设置持久化。

## DESIGN.md vs code

读设计前先认清已落地差异（代码为真）：

| DESIGN | 实现 |
|--------|------|
| 按钮 `sidebar.footer.action` | `conversation.session.header.actions` |
| `requestFullscreen` | `<dialog showModal>` Top Layer |
| 底部 32 条 LED 频谱 | 三层 SVG 波浪 |
| 性能模式设置项 | 无设置 UI（星尘固定 48） |

功能规格 / 边界空态 / 首日验证序 → 打开 `DESIGN.md`。安装与动态 vs 固化 → 打开 `README.md`。

## Done when

- 改动能在 `lib/client.js`（或约定的动态副本）里定位到具体组件/函数。
- 未破坏叶子通路与 `.dtf-*` 隔离。
- 若改了正式包行为，`package.json` exports / `dsh.bundle` / `dsh.client` 与 `cordis.patch.yml` 仍一致。
