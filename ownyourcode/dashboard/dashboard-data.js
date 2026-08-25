/* ════════════════════════════════════════════════════════════════════
   OwnYourCode — Dashboard DATA  (the single source the /own:* commands write)
   ════════════════════════════════════════════════════════════════════
   This file is the machine-readable state of the project's SDD workflow.
   It is the ONLY file the commands rewrite to keep the dashboard in sync:

     /own:init     → fills this file from your answers (mission + roadmap)
     /own:feature  → adds a phase's spec / design / tasks here
     /own:done     → flips task.done = true (and phase.status at boundary)
     /own:status   → reads the counts here

   dashboard.html is a stable VIEW that loads this via <script src> (which
   works on file://, unlike fetch). Edit data here, refresh the dashboard.
   Do not hand-edit dashboard.html for content — only styling lives there.

   Schema authority: ownyourcode/dashboard/DASHBOARD_CONTRACT.md. Keep this file valid
   JavaScript — every command verifies it with `node --check` after writing.

   ← Initialized 2026-08-25 via /own:init. KISS: one phase only.
   ════════════════════════════════════════════════════════════════════ */
window.PROJECT = {
  meta: {
    name: "storyspin.chara",
    tagline: "UT Chara 光世界 boss 战(MTT 位),先用 MGR 把 UT 式 UI 立起来",
    audience: "myself",
    mission: "用 MGR 的 LightBattle 框架做一场 UT Chara 的光世界 boss 战。本阶段只做一件事:把 MGR 光世界 UI 定制成右图那种 UT 式演出战斗框(按钮右侧竖排、敌人栏右上、白黑高对比),做到这场战能启动、能跑、能结算,全程零改库。",
    generated: "2026-08-25",
    version: "2.7.0",
  },
  dod: [],
  stack: [
    ["引擎", "Kristal", "v0.11.0-dev", "mod.json", "战斗引擎框架"],
    ["战斗系统", "MagicalGlassRedux", "v0.1.0", "lib.json", "UT 风格光世界战斗 (LightBattle)"],
    ["语言", "Lua", "—", "manual", "脚本语言"],
    ["运行时", "LÖVE (Love2D)", "—", "manual", "Kristal 底层运行时"],
  ],
  phases: [
    {
      n: 1, name: "光世界战斗框架 + UT 式 UI", slug: "light-framework-ut-ui",
      priority: "high", status: "roadmap-only",
      description: "启动一场能跑的 Chara 光世界战斗,把 MGR 光世界 UI 定制成 UT 式演出战斗框(零改库)。",
      items: [
        "注册一个 Chara 光世界 enemy + encounter,让 LightBattle 能启动、能跑、能结算",
        "gauge_style=undertale 切换血条/敌人栏/MERCY 条到 UT 式",
        "mod 侧 hook(getLightActionButtons + LightActionBox 布局)把按钮从底部横排挪到右侧竖排",
        "文本框、敌人栏、按钮整体调整为右图那种 UT 白黑高对比布局",
      ],
    },
  ],
};
