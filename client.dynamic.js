const CSS_TEXT = `.dtf-toggle{height:28px;padding:0 10px;border-radius:8px;border:1px solid #ffffff22;background:#ffffff10;color:inherit;cursor:pointer;font-size:12px;line-height:1;display:inline-flex;align-items:center;gap:6px;transition:all .25s;font-weight:500}
.dtf-toggle:hover{border-color:#06b6d4aa;color:#67e8f9;background:#06b6d414}
.dtf-toggle.is-on{border-color:#d946ef;color:#e879f9;background:#d946ef1a;box-shadow:0 0 12px #d946ef55}
.dtf-dialog{border:none;padding:0;margin:0;background:transparent;max-width:none;max-height:none;width:100vw;height:100vh;outline:none;overflow:hidden}
.dtf-dialog::backdrop{background:#070b16}
.dtf-full{position:absolute;inset:0;background:#070b16;color:#e6edf7;font-family:'Segoe UI',system-ui,-apple-system,sans-serif;display:flex;flex-direction:column;overflow:hidden;animation:dtf-in .4s ease}
@keyframes dtf-in{from{opacity:0}to{opacity:1}}
.dtf-bg{position:absolute;inset:0;background:linear-gradient(115deg,#0b1026,#141f3d,#0a1c30,#1b1030,#0b1026);background-size:320% 320%;animation:dtf-bg-flow 18s ease infinite;pointer-events:none}
@keyframes dtf-bg-flow{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.dtf-full.think .dtf-bg,.dtf-full.answer .dtf-bg,.dtf-full.tools .dtf-bg,.dtf-full.busy .dtf-bg{background:linear-gradient(115deg,#1c0a30,#3b0f4e,#062033,#3b0f4e,#1c0a30);background-size:320% 320%;animation-duration:9s}
.dtf-glow{position:absolute;inset:-40%;background:conic-gradient(from 0deg,#d946ef26,#06b6d433,#d946ef26,#0ea5e91a,#d946ef26);filter:blur(64px);animation:dtf-spin 46s linear infinite;pointer-events:none}
@keyframes dtf-spin{to{transform:rotate(360deg)}}
.dtf-idle .dtf-glow{opacity:.5;animation:dtf-breathe 4.5s ease-in-out infinite}
.dtf-full.think .dtf-glow,.dtf-full.answer .dtf-glow,.dtf-full.tools .dtf-glow,.dtf-full.busy .dtf-glow{opacity:.85;filter:blur(80px)}
@keyframes dtf-breathe{0%,100%{opacity:.38;transform:scale(1)}50%{opacity:.58;transform:scale(1.04)}}
.dtf-stars{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.dtf-star{position:absolute;top:100%;background:#9be7ff;border-radius:50%;box-shadow:0 0 6px #67e8f988;animation-name:dtf-float;animation-timing-function:linear;animation-iteration-count:infinite}
@keyframes dtf-float{0%{transform:translateY(0);opacity:0}8%{opacity:.85}92%{opacity:.5}100%{transform:translateY(-118vh);opacity:0}}
.dtf-head{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;padding:18px 26px}
.dtf-chip{display:flex;align-items:center;gap:10px;padding:8px 14px;border-radius:12px;background:#0d142488;border:1px solid #ffffff14;backdrop-filter:blur(8px);font-weight:600;letter-spacing:.5px;font-size:14px}
.dtf-dot{width:8px;height:8px;border-radius:50%;background:#22d3ee;box-shadow:0 0 10px #22d3ee}
.dtf-full.think .dtf-dot,.dtf-full.tools .dtf-dot,.dtf-full.answer .dtf-dot,.dtf-full.busy .dtf-dot{background:#e879f9;box-shadow:0 0 12px #e879f9;animation:dtf-pulse 1.2s ease-in-out infinite}
.dtf-badge{font-style:normal;font-size:12px;color:#93a4c3;font-weight:400;border:1px solid #ffffff14;border-radius:6px;padding:1px 8px}
.dtf-full.think .dtf-badge,.dtf-full.tools .dtf-badge,.dtf-full.answer .dtf-badge,.dtf-full.busy .dtf-badge{color:#f0abfc;border-color:#d946ef55}
.dtf-close{width:34px;height:34px;border-radius:10px;border:1px solid #ffffff1a;background:#ffffff08;color:#c9d6ee;font-size:18px;cursor:pointer;transition:all .2s;padding:0;line-height:1}
.dtf-close:hover{border-color:#f472b6;color:#f9a8d4;box-shadow:0 0 10px #f472b644}
.dtf-main{position:relative;z-index:1;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 7vw;min-height:0}
.dtf-stack{display:flex;flex-direction:column;align-items:center;gap:12px;max-height:100%;width:100%;max-width:920px;overflow-y:auto;padding:24px 64px;scrollbar-width:none;-ms-overflow-style:none}
.dtf-stack::-webkit-scrollbar{display:none;width:0;height:0}
.dtf-shadow{max-width:82%;font-size:clamp(12px,1.1vw,15px);line-height:1.6;color:#7d90b0;opacity:.22;filter:blur(1.5px);transform:scale(.9);white-space:pre-wrap;word-break:break-word;margin:0;font-weight:500;text-align:center}
.dtf-line{margin:0;text-align:center;word-break:break-word;white-space:pre-wrap;transition:all .3s ease;position:relative;z-index:0;padding:.15em .5em}
.dtf-line-new{font-size:clamp(22px,2.7vw,36px);font-weight:700;line-height:1.5;color:#f4f8ff;text-shadow:0 0 20px #67e8f9cc,0 0 46px #d946ef66}
.dtf-line-new::before{content:'';position:absolute;inset:-0.15em -0.5em;background:radial-gradient(ellipse at 50% 50%,rgba(103,232,249,.42),rgba(217,70,239,.32) 50%,transparent 78%);filter:blur(14px);border-radius:999px;z-index:-1;animation:dtf-neon 2.4s ease-in-out infinite}
.dtf-line-mid{font-size:clamp(15px,1.8vw,22px);font-weight:600;line-height:1.6;color:#cfe3ff;opacity:.85;text-shadow:0 0 12px #38bdf866}
.dtf-line-mid::before{content:'';position:absolute;inset:-0.1em -0.35em;background:radial-gradient(ellipse at 50% 50%,rgba(103,232,249,.26),rgba(217,70,239,.2) 50%,transparent 74%);filter:blur(10px);border-radius:999px;z-index:-1}
.dtf-line-old{font-size:clamp(12px,1.35vw,16px);font-weight:500;line-height:1.65;color:#8fa6cc;opacity:.42}
@keyframes dtf-neon{0%,100%{opacity:.72}50%{opacity:1}}
.dtf-answer-line.dtf-line-new{color:#ecfdfa;text-shadow:0 0 20px #5eead4cc,0 0 46px #d946ef55}
.dtf-answer-line.dtf-line-mid{color:#ccfbf1}
.dtf-answer-line.dtf-line-old{color:#86c5bd;opacity:.4}
.dtf-wait{font-size:clamp(22px,3.2vw,40px);font-weight:700;letter-spacing:.14em;color:#dbeafe;text-shadow:0 0 18px #38bdf8aa,0 0 48px #d946ef44;margin:0 0 10px;animation:dtf-pulse 2.6s ease-in-out infinite}
@keyframes dtf-pulse{0%,100%{opacity:.5}50%{opacity:1}}
.dtf-sub{margin:0;color:#7d8fb0;font-size:13px;letter-spacing:.3em}
.dtf-think-text{font-size:clamp(16px,1.75vw,24px);font-weight:600;line-height:1.78;color:#dbeafe;text-shadow:0 0 14px #38bdf888;margin:0;word-break:break-word;white-space:pre-wrap;text-align:left}
.dtf-caret{display:inline-block;width:3px;height:1.05em;background:#67e8f9;box-shadow:0 0 12px #67e8f9;margin-left:4px;vertical-align:-0.15em;animation:dtf-caret .8s step-end infinite}
@keyframes dtf-caret{0%,100%{opacity:1}50%{opacity:0}}
.dtf-recap-tag{display:inline-flex;align-items:center;gap:10px;font-size:12px;letter-spacing:.28em;color:#8fa2c2;margin-bottom:14px;font-family:'JetBrains Mono',Consolas,monospace}
.dtf-recap-tag b{width:26px;height:1px;background:#8fa2c288;display:inline-block}
.dtf-think-text.recap{color:#aebdd6;text-shadow:0 0 10px #38bdf855;text-align:center}
.dtf-tools{display:flex;flex-direction:column;gap:10px;margin-top:22px;align-items:center}
.dtf-tool{display:inline-flex;align-items:center;gap:10px;padding:8px 18px;border-radius:999px;background:#0d142488;border:1px solid #06b6d455;font-family:'JetBrains Mono',Consolas,monospace;font-size:13px;color:#a5f3fc;box-shadow:0 0 14px #06b6d433}
.dtf-tool.run{border-color:#d946ef77;color:#f0abfc;box-shadow:0 0 18px #d946ef55;animation:dtf-toolpulse 1.2s ease-in-out infinite}
@keyframes dtf-toolpulse{0%,100%{box-shadow:0 0 10px #d946ef44}50%{box-shadow:0 0 24px #d946ef88}}
.dtf-toolargs{margin-top:12px;font-family:'JetBrains Mono',Consolas,monospace;font-size:12px;color:#7d8fb0;max-width:720px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;direction:rtl;text-align:left}
.dtf-orb{position:relative;width:110px;height:110px;margin-bottom:24px}
.dtf-orb i{position:absolute;inset:0;border-radius:50%;border:2px solid transparent;border-top-color:#67e8f9;box-shadow:0 0 18px #22d3ee44;animation:dtf-orbit 1.15s linear infinite}
.dtf-orb i:nth-child(2){inset:14px;border-top-color:#38bdf8;box-shadow:0 0 18px #d946ef44;animation-duration:1.7s;animation-direction:reverse}
.dtf-orb i:nth-child(3){inset:30px;border-top-color:#38bdf8;animation-duration:2.4s}
@keyframes dtf-orbit{to{transform:rotate(360deg)}}
.dtf-foot{position:relative;z-index:2;display:flex;align-items:flex-end;padding:0;background:linear-gradient(to top,rgba(7,11,22,.92),transparent)}
.dtf-wavebox{width:100%;height:80px;overflow:hidden;position:relative}
.dtf-wave{position:absolute;left:0;top:0;width:200%;height:100%;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;animation:dtf-wave linear infinite}
@keyframes dtf-wave{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.dtf-wave-1{stroke:#57b8d8;animation-duration:6s;opacity:.55}
.dtf-wave-2{stroke:#3d8fb0;animation-duration:4.2s;opacity:.4}
.dtf-wave-3{stroke:#2f7d9e;animation-duration:3s;opacity:.25}
.dtf-full.think .dtf-wave-1,.dtf-full.answer .dtf-wave-1,.dtf-full.busy .dtf-wave-1,.dtf-full.tools .dtf-wave-1{animation-duration:1.3s;stroke:#b06cc8;opacity:.6}
.dtf-full.think .dtf-wave-2,.dtf-full.answer .dtf-wave-2,.dtf-full.busy .dtf-wave-2,.dtf-full.tools .dtf-wave-2{animation-duration:.9s;stroke:#9a4fb8;opacity:.45}
.dtf-full.think .dtf-wave-3,.dtf-full.answer .dtf-wave-3,.dtf-full.busy .dtf-wave-3,.dtf-full.tools .dtf-wave-3{animation-duration:.65s;stroke:#c084d8;opacity:.3}
.dtf-meta{position:absolute;right:22px;top:12px;font-size:12px;color:#6b7d9e;font-family:'JetBrains Mono',Consolas,monospace;letter-spacing:.4px;z-index:3}`

const MAX_CHARS = 900

function briefArgs(raw) {
  try {
    if (!raw || typeof raw !== 'string') return ''
    const s = raw.replace(/\s+/g, ' ').trim()
    return s.length > 90 ? s.slice(0, 90) + '…' : s
  } catch (e) { return '' }
}

function cleanMd(t) {
  let s = String(t || '')
  try {
    s = s
      .replace(/```[\s\S]*?(?:```|$)/g, ' [代码略] ')
      .replace(/`([^`\n]*)`/g, '$1')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/^#{1,6}\s+/gm, '')
      .replace(/^\s*\|[^\n]*\|\s*$/gm, '')
      .replace(/^[-*_]{3,}\s*$/gm, '')
      .replace(/(\*\*|__|~~)/g, '')
      .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1$2')
      .replace(/^\s*[-*+]\s+/gm, '· ')
      .replace(/^\s*>\s?/gm, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim()
  } catch (e) {}
  return s
}

function blockText(blocks, kinds) {
  let out = ''
  if (!blocks || !blocks.length) return out
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i]
    if (b && typeof b.kind === 'string' && kinds.indexOf(b.kind) !== -1 && typeof b.text === 'string') {
      out += b.text
      if (out.length > MAX_CHARS) break
    }
  }
  return out
}

function extractLeaf(session) {
  const out = { running: false, liveThink: '', liveAnswer: '', tools: [], lastThink: '', lastAnswer: '' }
  if (!session) return out
  try {
    out.running = !!session.running
    const pb = (session.partial && session.partial.blocks) || []
    out.liveThink = blockText(pb, ['reasoning'])
    out.liveAnswer = blockText(pb, ['text'])
    const tools = []
    for (let i = 0; i < pb.length; i++) {
      const b = pb[i]
      if (b && b.kind === 'tool-call' && b.name) tools.push({ name: b.name, args: briefArgs(b.argsRaw), run: true })
    }
    const rc = session.runningCalls || []
    for (let i = 0; i < rc.length; i++) {
      if (rc[i] && rc[i].name) tools.push({ name: rc[i].name, args: briefArgs(rc[i].argsRaw), run: true })
    }
    out.tools = tools.slice(0, 6)
    const nodes = session.nodes || []
    for (let i = nodes.length - 1; i >= 0; i--) {
      const n = nodes[i]
      if (n && n.kind === 'assistant' && Array.isArray(n.blocks) && n.blocks.length) {
        out.lastThink = blockText(n.blocks, ['reasoning'])
        out.lastAnswer = cleanMd(blockText(n.blocks, ['text']))
        if (out.lastThink.length > MAX_CHARS) out.lastThink = '…' + out.lastThink.slice(-MAX_CHARS)
        if (out.lastAnswer.length > MAX_CHARS) out.lastAnswer = out.lastAnswer.slice(0, MAX_CHARS) + '…'
        break
      }
    }
  } catch (e) {}
  return out
}

function makeWave(amp, periods) {
  const pw = 200
  const cy = 30
  let d = 'M0,' + cy
  for (let i = 0; i < periods; i++) {
    const x = i * pw
    d += ' C' + (x + pw * 0.25) + ',' + (cy - amp) + ' ' + (x + pw * 0.25) + ',' + (cy - amp) + ' ' + (x + pw * 0.5) + ',' + cy
    d += ' C' + (x + pw * 0.75) + ',' + (cy + amp) + ' ' + (x + pw * 0.75) + ',' + (cy + amp) + ' ' + (x + pw) + ',' + cy
  }
  return { d: d, viewW: pw * periods, viewH: 60 }
}

return {
  apply(ctx) {
    const slots = ctx.get('slots')
    if (slots === undefined) return

    styles.insert(CSS_TEXT)

    const store = {
      open: false,
      running: false,
      liveThink: '',
      liveAnswer: '',
      tools: [],
      lastThink: '',
      lastAnswer: ''
    }
    const listeners = new Set()
    let stackEl = null

    function subscribe(fn) {
      listeners.add(fn)
      return function () { listeners.delete(fn) }
    }
    function notify() {
      listeners.forEach(function (fn) { fn() })
    }
    function toggle() {
      store.open = !store.open
      notify()
    }

    function useStore(selector) {
      const pair = React.useState(function () { return selector(store) })
      React.useEffect(function () {
        return subscribe(function () {
          const next = selector(store)
          pair[1](function (prev) { return prev === next ? prev : next })
        })
      }, [])
      return pair[0]
    }

    function Bridge(props) {
      React.useEffect(function () {
        const leaf = extractLeaf(props && props.session)
        store.running = leaf.running
        store.liveThink = leaf.liveThink
        store.liveAnswer = leaf.liveAnswer
        store.tools = leaf.tools
        store.lastThink = leaf.lastThink
        store.lastAnswer = leaf.lastAnswer
        notify()
      })
      return null
    }

    function ToggleButton() {
      const open = useStore(function (s) { return s.open })
      return React.createElement('button', {
        className: 'dtf-toggle' + (open ? ' is-on' : ''),
        onClick: toggle,
        title: '思考全景 · 全屏展示思考流',
        'aria-label': '思考全景'
      }, '◉ 思考全景')
    }

    function Starfield() {
      const stars = React.useState(function () {
        const arr = []
        for (let i = 0; i < 48; i++) {
          arr.push({ left: ((i * 37 + 13) % 100), size: ((i % 3) + 1), opacity: 0.2 + (i % 5) * 0.12, dur: (8 + ((i * 7) % 10)), delay: (-((i * 1.3) % 12)) })
        }
        return arr
      })[0]
      const nodes = stars.map(function (s, i) {
        return React.createElement('span', {
          key: i,
          className: 'dtf-star',
          style: { left: s.left + '%', width: s.size + 'px', height: s.size + 'px', opacity: s.opacity, animationDuration: s.dur + 's', animationDelay: s.delay + 's' }
        })
      })
      return React.createElement('div', { className: 'dtf-stars' }, nodes)
    }

    function Waveform() {
      const w1 = makeWave(16, 4)
      const w2 = makeWave(11, 6)
      const w3 = makeWave(7, 8)
      return React.createElement('div', { className: 'dtf-wavebox' },
        React.createElement('svg', { className: 'dtf-wave dtf-wave-1', viewBox: '0 0 ' + w1.viewW + ' ' + w1.viewH, preserveAspectRatio: 'none' },
          React.createElement('path', { d: w1.d })
        ),
        React.createElement('svg', { className: 'dtf-wave dtf-wave-2', viewBox: '0 0 ' + w2.viewW + ' ' + w2.viewH, preserveAspectRatio: 'none' },
          React.createElement('path', { d: w2.d })
        ),
        React.createElement('svg', { className: 'dtf-wave dtf-wave-3', viewBox: '0 0 ' + w3.viewW + ' ' + w3.viewH, preserveAspectRatio: 'none' },
          React.createElement('path', { d: w3.d })
        )
      )
    }

    function ToolCard(t, i) {
      return React.createElement('span', { key: i, className: 'dtf-tool' + (t.run ? ' run' : '') }, '⚙ ' + t.name)
    }

    function LayerStack(text, cls, live) {
      const items = []
      const raw = String(text || '')
      if (!raw) return items
      let lines = raw.split('\n')
      let dropped = ''
      if (lines.length > 3) {
        dropped = lines.slice(0, lines.length - 3).join(' ')
        lines = lines.slice(-3)
      } else if (raw.length > 320) {
        dropped = raw.slice(0, raw.length - 240)
        lines = raw.slice(raw.length - 240)
        const seg = Math.ceil(lines.length / 2)
        lines = [lines.slice(0, seg), lines.slice(seg)]
      }
      if (dropped) {
        items.push(React.createElement('div', { key: 'drop', className: 'dtf-shadow' }, cleanMd(dropped.slice(-200))))
      }
      const tiers = ['old', 'mid', 'new']
      const startTier = 3 - lines.length
      lines.forEach(function (ln, i) {
        const tier = tiers[startTier + i] || 'old'
        const children = [ln]
        if (live && i === lines.length - 1) {
          children.push(React.createElement('span', { key: 'c', className: 'dtf-caret' }))
        }
        items.push(React.createElement('p', {
          key: i,
          className: 'dtf-line dtf-line-' + tier + (cls ? ' ' + cls : '')
        }, children))
      })
      return items
    }

    function TextView(text, cls, key) {
      if (!text) return null
      return React.createElement('p', { key: key, className: 'dtf-think-text' + (cls ? ' ' + cls : '') }, text)
    }

    function Overlay() {
      const open = useStore(function (s) { return s.open })
      if (!open) return null
      return React.createElement(Dialog)
    }

    function Dialog() {
      const liveThink = useStore(function (x) { return x.liveThink })
      const liveAnswer = useStore(function (x) { return x.liveAnswer })
      const toolKey = useStore(function (x) { return x.tools.map(function (t) { return t.name + (t.run ? '!' : '.') }).join('|') })
      const running = useStore(function (x) { return !!x.running })
      const pastKey = useStore(function (x) { return (x.lastThink ? x.lastThink.length : 0) + ':' + (x.lastAnswer ? x.lastAnswer.length : 0) })
      void pastKey

      React.useEffect(function () {
        if (stackEl) stackEl.scrollTop = stackEl.scrollHeight
      }, [liveThink, liveAnswer, toolKey])

      const liveTools = store.tools.filter(function (t) { return t.run })
      let mode
      if (liveThink) mode = 'think'
      else if (liveTools.length > 0) mode = 'tools'
      else if (liveAnswer) mode = 'answer'
      else if (running) mode = 'busy'
      else mode = 'idle'
      const hasPast = !!(store.lastThink || store.lastAnswer)
      const fullCls = 'dtf-full ' + (mode === 'think' ? 'think' : mode === 'tools' ? 'tools' : mode === 'answer' ? 'answer' : mode === 'busy' ? 'busy' : 'dtf-idle')
      const stackChildren = []
      if (mode === 'think') {
        LayerStack(liveThink, null, true).forEach(function (n) { stackChildren.push(n) })
        if (liveTools.length) {
          stackChildren.push(React.createElement('div', { key: 'tl', className: 'dtf-tools' }, liveTools.map(ToolCard)))
        }
      } else if (mode === 'tools') {
        if (hasPast) {
          stackChildren.push(React.createElement('div', { key: 'sh', className: 'dtf-shadow' }, cleanMd((store.lastAnswer || store.lastThink || '').slice(-160))))
        }
        stackChildren.push(React.createElement('div', { key: 'tl', className: 'dtf-tools', style: { marginTop: 6 } }, liveTools.map(ToolCard)))
        let argLine = ''
        for (let i = 0; i < liveTools.length; i++) { if (liveTools[i].args) { argLine = liveTools[i].args; break } }
        if (argLine) stackChildren.push(React.createElement('div', { key: 'ta', className: 'dtf-toolargs' }, argLine))
      } else if (mode === 'answer') {
        LayerStack(liveAnswer, 'dtf-answer-line', true).forEach(function (n) { stackChildren.push(n) })
      } else if (mode === 'busy') {
        stackChildren.push(React.createElement('div', { key: 'orb', className: 'dtf-orb' },
          React.createElement('i', null), React.createElement('i', null), React.createElement('i', null)
        ))
        stackChildren.push(React.createElement('p', { key: 'bw', className: 'dtf-sub', style: { letterSpacing: '.2em' } }, 'AI 工作中 …'))
      } else if (hasPast) {
        stackChildren.push(React.createElement('div', { key: 'tag', className: 'dtf-recap-tag' },
          React.createElement('b', null), 'RECAP · 已完成', React.createElement('b', null)))
        const recapText = (cleanMd(store.lastAnswer || store.lastThink || '')).slice(0, 420)
        stackChildren.push(TextView(recapText, 'recap', 'rc'))
        stackChildren.push(React.createElement('p', { key: 'wl', className: 'dtf-sub', style: { marginTop: 22 } }, '· 等待下一次唤醒 ·'))
      } else {
        stackChildren.push(React.createElement('p', { key: 'w', className: 'dtf-wait' }, '等待第一个思考'))
        stackChildren.push(React.createElement('p', { key: 's2', className: 'dtf-sub' }, '发起对话后，AI 的思考与动作将实时显示在这里'))
      }
      const badge = mode === 'think' ? '思考中 · LIVE' : mode === 'tools' ? '执行工具' : mode === 'answer' ? '回答生成中' : mode === 'busy' ? 'AI 工作中' : hasPast ? '待命 · 已完成' : '待命'
      return React.createElement('dialog', {
        ref: function (el) {
          if (el && !el.open) { try { el.showModal() } catch (e) {} }
        },
        onCancel: function (ev) {
          ev.preventDefault()
          toggle()
        },
        className: 'dtf-dialog'
      },
      React.createElement('div', { className: fullCls },
        React.createElement('div', { className: 'dtf-bg' }),
        React.createElement('div', { className: 'dtf-glow' }),
        React.createElement(Starfield, null),
        React.createElement('header', { className: 'dtf-head' },
          React.createElement('div', { className: 'dtf-chip' },
            React.createElement('span', { className: 'dtf-dot' }),
            React.createElement('span', null, '思考全景'),
            React.createElement('em', { className: 'dtf-badge' }, badge)
          ),
          React.createElement('button', { className: 'dtf-close', onClick: toggle, title: '退出全屏 (Esc)' }, '×')
        ),
        React.createElement('main', { className: 'dtf-main' },
          React.createElement('div', {
            className: 'dtf-stack',
            ref: function (el) { stackEl = el }
          }, stackChildren)
        ),
        React.createElement('footer', { className: 'dtf-foot' },
          React.createElement(Waveform, null),
          React.createElement('span', { className: 'dtf-meta' },
            (mode === 'think' ? 'THINKING' : mode === 'tools' ? 'TOOLING' : mode === 'answer' ? 'ANSWERING' : mode === 'busy' ? 'WORKING' : 'IDLE') + ' · ' +
            ((liveThink || liveAnswer) ? ((liveThink || liveAnswer).length + ' CHARS') : (hasPast ? 'HISTORY LOADED' : 'NO SIGNAL')))
        )
      ))
    }

    slots.inject('conversation.session.header.actions', function () {
      return slots.register(
        { name: 'conversation.session.header.actions', id: 'dtf-toggle', order: 80, label: '思考全景' },
        function () { return React.createElement(ToggleButton, null) }
      )
    })

    slots.inject('shell.overlay', function () {
      return slots.register(
        { name: 'shell.overlay', id: 'dtf-overlay', order: 900, label: '思考全景覆盖层' },
        function () { return React.createElement(Overlay, null) }
      )
    })

    slots.inject('conversation.composer.dock', function () {
      return slots.register(
        { name: 'conversation.composer.dock', id: 'dtf-bridge', order: 200, label: 'DTF 数据桥' },
        function (props) { return React.createElement(Bridge, props) }
      )
    })
  }
}
