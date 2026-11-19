/* 에버천사 상품제작 실무도구 — same-origin overlay for ever1004.com
 * Load only when location.hash === '#ptool'. Renders in a Shadow DOM overlay.
 */
(function(){
'use strict';
if(window.__everPtoolInit) return;
window.__everPtoolInit=true;

var HOST_ID='ever-ptool-overlay';
var FONT_HREF=[
  'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&family=Noto+Serif+KR:wght@600;700&display=swap'
];

var TOOL_CSS = ":host{\n  --navy:#1F3A68;\n  --navy-d:#162A4F;\n  --navy-s:#2A4A7C;\n  --gold:#B08D57;\n  --gold-d:#8C6D3F;\n  --gold-s:#C4A36E;\n  --gold-l:#F6F0E6;\n  --ivory:#FBF8F2;\n  --band:#F6F1E8;\n  --card:#FFFFFF;\n  --tx:#2C2A26;\n  --mu:#7A746A;\n  --line:#E6DFD3;\n  --soft:#F7F3EC;\n  --warn:#A85A3A;\n  --warnbg:#FBF1EA;\n  --ok:#1F3A68;\n  --okbg:#F3EEE4;\n  --g:var(--navy);\n  --gd:var(--navy-d);\n  --gl:var(--soft);\n  --b:var(--gold);\n  --bd:var(--gold-d);\n  --bl:var(--gold-l);\n  --bd2:var(--line);\n  --bg:var(--ivory);\n  --warnbg: #FBF1EA;\n}\n*{box-sizing:border-box}\n:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:block;font-family:\"Pretendard\",\"Noto Sans KR\",\"Apple SD Gothic Neo\",\"Malgun Gothic\",\"맑은 고딕\",system-ui,sans-serif;color:var(--tx);line-height:1.6;font-size:15px}\n.et-root{margin:0;min-height:100%;font-family:\"Pretendard\",\"Noto Sans KR\",\"Apple SD Gothic Neo\",\"Malgun Gothic\",\"맑은 고딕\",system-ui,sans-serif;color:var(--tx);background:var(--ivory);line-height:1.6;font-size:15px}\na{color:var(--navy)}\nheader.top{background:var(--band);border-bottom:none;position:relative}\nheader.top::after{content:\"\";display:block;height:1px;background:linear-gradient(90deg,transparent,var(--gold),transparent)}\n.wrap{max-width:1040px;margin:0 auto;padding:0 20px}\n.hrow{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:22px 0 20px}\n.htitle .eyebrow{font-family:\"Noto Serif KR\",serif;font-size:11px;font-weight:600;letter-spacing:.18em;color:var(--gold);margin:0 0 8px;line-height:1}\n.htitle h1{margin:0;font-family:\"Noto Serif KR\",Georgia,serif;font-size:26px;font-weight:700;letter-spacing:-.03em;color:var(--navy);line-height:1.3}\n.htitle h1 span{color:var(--navy)}\n.htitle p{margin:8px 0 0;color:var(--mu);font-size:14px;font-weight:400}\n.brand{display:flex;flex-direction:column;align-items:flex-end;gap:4px;text-decoration:none;flex-shrink:0}\n.brand img{height:52px;width:auto;display:block}\n.brand .url{font-size:12px;font-weight:600;color:var(--navy);letter-spacing:.04em}\n.brand:hover .url{color:var(--gold-d);text-decoration:none}\nnav.tabs{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;padding:22px 0 8px}\nnav.tabs button{border:1px solid var(--line);background:var(--card);border-radius:14px;padding:14px 8px 12px;font:inherit;font-size:13px;font-weight:600;color:var(--navy);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;transition:border-color .18s ease,box-shadow .18s ease,background .18s ease,color .18s ease,transform .18s ease;box-shadow:0 1px 2px rgba(31,58,104,.04),0 6px 16px rgba(31,58,104,.04)}\nnav.tabs button .ic{width:26px;height:26px;display:flex;align-items:center;justify-content:center;color:var(--gold);line-height:1}\nnav.tabs button .ic svg{width:22px;height:22px;display:block}\nnav.tabs button:hover{border-color:var(--gold-s);color:var(--navy);transform:translateY(-1px);box-shadow:0 4px 16px rgba(31,58,104,.08)}\nnav.tabs button.active{background:var(--navy);border-color:var(--navy);color:#fff;box-shadow:0 8px 20px rgba(31,58,104,.22);transform:none}\nnav.tabs button.active .ic{color:#E8D5B0}\nmain{padding:10px 0 40px}\nsection.tool{display:none;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:28px;box-shadow:0 10px 30px rgba(31,58,104,.05)}\nsection.tool.active{display:block}\nsection.tool h2{margin:0 0 6px;font-family:\"Noto Serif KR\",Georgia,serif;font-size:22px;font-weight:700;color:var(--navy);letter-spacing:-.02em;display:flex;align-items:center;gap:10px;line-height:1.3}\nsection.tool h2 .ic{display:flex;color:var(--gold);flex-shrink:0}\nsection.tool h2 .ic svg{width:22px;height:22px;display:block}\nsection.tool h3, .result h3{font-family:\"Noto Serif KR\",Georgia,serif;font-weight:700;color:var(--navy);letter-spacing:-.02em}\n.desc{color:var(--mu);margin:0 0 22px;font-size:14px}\n.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:16px}\nlabel.f{display:flex;flex-direction:column;gap:7px;font-size:13px;font-weight:600;color:#3F3C37}\nlabel.f small{font-weight:400;color:var(--mu)}\ninput[type=text],input[type=number],input[type=date],select{font:inherit;padding:11px 13px;border:1px solid var(--line);border-radius:10px;background:#FFFcf8;width:100%;color:var(--tx);transition:border-color .15s ease,box-shadow .15s ease}\ninput::placeholder,select:invalid{color:#A89F93}\ninput:focus,select:focus{outline:none;border-color:var(--navy);box-shadow:0 0 0 3px rgba(31,58,104,.16);background:#fff}\n.seg{display:inline-flex;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:#fff;width:fit-content;max-width:100%}\n.seg label{padding:9px 14px;cursor:pointer;font-size:14px;font-weight:600;color:var(--mu);transition:background .15s ease,color .15s ease}\n.seg input{display:none}\n.seg label:has(input:checked){background:var(--navy);color:#fff}\n.btnrow{margin-top:20px;display:flex;gap:10px;flex-wrap:wrap}\n.btn{font:inherit;font-weight:600;border:none;border-radius:10px;padding:12px 22px;cursor:pointer;background:var(--navy);color:#fff;letter-spacing:.01em;display:inline-flex;align-items:center;justify-content:center;gap:8px;transition:background .15s ease,box-shadow .15s ease}\n.btn:hover{background:var(--navy-d);box-shadow:0 4px 12px rgba(31,58,104,.18)}\n.btn.ghost{background:transparent;color:var(--navy);border:1px solid var(--navy);box-shadow:none}\n.btn.ghost:hover{background:var(--soft);border-color:var(--navy);box-shadow:none}\n.btn .ic{display:flex;color:currentColor}\n.btn .ic svg{width:16px;height:16px;display:block}\n.result{margin-top:26px;border-top:1px solid var(--gold);padding-top:22px}\n.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px}\n.kpi{background:var(--soft);border:1px solid var(--line);border-radius:14px;padding:16px}\n.kpi .l{font-size:12px;color:var(--mu);font-weight:600;letter-spacing:.02em}\n.kpi .v{font-family:\"Noto Serif KR\",Georgia,serif;font-size:22px;font-weight:700;color:var(--navy);margin-top:4px;letter-spacing:-.02em;line-height:1.25}\n.kpi.main{background:var(--navy);border-color:var(--navy)}\n.kpi.main .l{color:#D4C4A3}\n.kpi.main .v{color:#fff}\ntable.t{width:100%;border-collapse:collapse;margin-top:16px;font-size:14px}\ntable.t th,table.t td{border-bottom:1px solid var(--line);padding:11px 10px;text-align:left;vertical-align:top}\ntable.t th{background:var(--soft);font-size:13px;color:var(--navy);font-weight:600}\ntable.t td.n{text-align:right;font-variant-numeric:tabular-nums}\n.note{font-size:12.5px;color:var(--mu);margin-top:10px}\n.warn{background:var(--warnbg);color:var(--warn);border-radius:10px;padding:12px 16px;font-size:14px;margin-top:12px;font-weight:600;border-left:3px solid var(--warn)}\n.okmsg{background:var(--okbg);color:var(--navy);border-radius:10px;padding:12px 16px;font-size:14px;margin-top:12px;font-weight:600;border-left:3px solid var(--gold)}\n.warn.mute{background:var(--soft);color:var(--mu);border-left-color:var(--gold);font-weight:500}\n.band{display:flex;gap:14px;align-items:flex-start;padding:14px 16px;border:1px solid var(--line);border-radius:12px;margin-top:8px;background:#fff}\n.band.fit{border-color:var(--gold);background:var(--gold-l)}\n.band .p{min-width:96px;font-weight:700;color:var(--navy);font-family:\"Noto Serif KR\",Georgia,serif}\n.band .tag{display:inline-block;background:var(--gold);color:#fff;font-size:11px;font-weight:600;border-radius:20px;padding:1px 8px;margin-left:6px;vertical-align:middle;font-family:\"Pretendard\",\"Noto Sans KR\",sans-serif;letter-spacing:.02em}\n.cta{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px}\n.cta a{flex:1;min-width:200px;text-align:center;text-decoration:none;font-weight:700;padding:14px;border-radius:12px;color:#fff;font-size:15px;transition:background .15s ease,box-shadow .15s ease}\n.cta a.site{background:var(--navy)}.cta a.site:hover{background:var(--navy-d);box-shadow:0 4px 14px rgba(31,58,104,.2)}\n.cta a.ch{background:var(--gold)}.cta a.ch:hover{background:var(--gold-d);box-shadow:0 4px 14px rgba(176,141,87,.25)}\nul.check{list-style:none;padding:0;margin:14px 0 0}\nul.check li{display:flex;gap:12px;align-items:center;padding:12px 14px;border:1px solid var(--line);border-radius:12px;margin-top:8px;background:#fff}\nul.check li.past{border-color:#E8C8B4;background:var(--warnbg)}\nul.check li.done{opacity:.55}ul.check li.done .nm{text-decoration:line-through}\nul.check input{width:20px;height:20px;accent-color:var(--navy)}\nul.check .dn{min-width:64px;font-weight:700;color:var(--navy);font-variant-numeric:tabular-nums;font-family:\"Noto Serif KR\",Georgia,serif}\nul.check li.past .dn{color:var(--warn)}\nul.check .nm{font-weight:700;flex:1}\nul.check .dt{color:var(--mu);font-size:14px;white-space:nowrap}\nul.check .late{display:inline-block;margin-left:6px;font-size:11px;font-weight:700;color:#fff;background:var(--warn);border-radius:20px;padding:1px 7px;letter-spacing:.02em;vertical-align:middle}\n.months{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}\n.months button{font:inherit;font-weight:600;padding:10px 4px;border:1px solid var(--line);border-radius:10px;background:#fff;cursor:pointer;color:var(--tx);transition:border-color .15s ease,background .15s ease,color .15s ease}\n.months button:hover{border-color:var(--gold)}\n.months button.active{background:var(--navy);border-color:var(--navy);color:#fff}\n.months button.now:not(.active){border-color:var(--gold);color:var(--navy)}\n.mcard{margin-top:16px;border:1px solid var(--gold);border-radius:16px;padding:22px;background:linear-gradient(180deg,var(--gold-l),#fff 68%);box-shadow:0 6px 18px rgba(176,141,87,.08)}\n.mcard h3{margin:0 0 12px;font-size:20px;font-family:\"Noto Serif KR\",Georgia,serif;font-weight:700;color:var(--navy)}\n.mcard h4{margin:18px 0 8px;font-size:13px;color:var(--gold-d);font-weight:700;letter-spacing:.04em;display:flex;align-items:center;gap:8px}\n.mcard h4::before{content:\"\";width:14px;height:1px;background:var(--gold);flex-shrink:0}\n.mcard ul{margin:0;padding-left:20px}\n.chips{display:flex;flex-wrap:wrap;gap:6px}\n.chip{background:#fff;border:1px solid var(--gold);color:var(--navy);border-radius:20px;padding:4px 12px;font-size:13.5px;font-weight:600}\n.qgrid{display:grid;grid-template-columns:140px repeat(3,1fr);gap:8px;align-items:center}\n.qgrid .h{font-weight:700;text-align:center;background:var(--gold-l);border-radius:8px;padding:9px 8px;color:var(--navy)}\n.qgrid .rl{font-size:13px;font-weight:600;color:#3F3C37}\n.qgrid input,.qgrid select{padding:8px 10px}\ntd.best{background:var(--gold-l);font-weight:700;color:var(--navy)}\n.badge{display:inline-block;font-size:11px;font-weight:700;border-radius:20px;padding:1px 8px;margin-left:4px;letter-spacing:.02em}\n.badge.c{background:var(--navy);color:#fff}.badge.f{background:var(--gold);color:#fff}\n.rec{border:1px solid var(--line);border-radius:14px;padding:16px;margin-top:10px;background:#fff}\n.rec.top{border-color:var(--gold);background:var(--gold-l)}\n.rec h4{margin:0 0 8px;font-size:16px;font-family:\"Noto Serif KR\",Georgia,serif;font-weight:700;color:var(--navy)}\n.rec .sc{float:right;font-size:12px;font-weight:700;color:var(--gold-d);letter-spacing:.02em}\n.rec.top .sc::before{content:\"\";display:inline-block;width:7px;height:7px;margin-right:6px;border:1px solid var(--gold);transform:rotate(45deg);vertical-align:middle}\n.rec .pc{display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:13.5px}\n.rec .pc b{display:block;font-size:12px;color:var(--mu);margin-bottom:2px;font-weight:700;letter-spacing:.02em}\nfooter{border-top:1px solid var(--line);background:var(--band);padding:20px 0;font-size:13px;color:var(--mu);text-align:center}\nfooter a{color:var(--navy);font-weight:700;text-decoration:none;margin:0 4px}\nfooter a:hover{color:var(--gold-d)}\n@media (max-width:760px){\n .wrap{padding:0 16px}\n .hrow{flex-direction:column-reverse;align-items:flex-start;padding:16px 0}\n .brand{align-self:flex-end}\n .brand img{height:40px}\n .htitle h1{font-size:20px}\n nav.tabs{grid-template-columns:repeat(3,1fr);gap:8px;padding:16px 0 6px}\n nav.tabs button{font-size:12px;padding:12px 4px 10px;border-radius:12px}\n .months{grid-template-columns:repeat(4,1fr)}\n section.tool{padding:18px}\n section.tool h2{font-size:19px}\n .qgrid{grid-template-columns:92px repeat(3,minmax(90px,1fr));overflow-x:auto}\n .rec .pc{grid-template-columns:1fr}\n table.t{font-size:13px}\n .cta a{min-width:0}\n}\n@media print{\n .et-root{background:#fff}\n header.top,nav.tabs,footer,.btnrow,.cta,.noprint{display:none!important}\n section.tool{display:none!important;border:none;box-shadow:none}\n section.tool.active{display:block!important}\n .et-root.print-quote section.tool.active .qgrid{display:none}\n}\n\n/* item search links */\n.band a{color:var(--navy);text-decoration:none;border-bottom:1px solid var(--gold-s);font-weight:600;transition:color .15s ease,border-color .15s ease}\n.band a:hover{color:var(--gold-d);border-bottom-color:var(--gold-d)}\n.band.fit a{color:var(--navy)}\ntextarea{font:inherit;padding:11px 13px;border:1px solid var(--line);border-radius:10px;background:#FFFcf8;width:100%;color:var(--tx);min-height:88px;resize:vertical;transition:border-color .15s ease,box-shadow .15s ease}\ntextarea:focus{outline:none;border-color:var(--navy);box-shadow:0 0 0 3px rgba(31,58,104,.16);background:#fff}\n\n/* proposal builder */\n.pr-add{display:flex;gap:10px;align-items:stretch;flex-wrap:wrap;margin:0 0 10px}\n.pr-add input[type=url],.pr-add input[type=text]{flex:1;min-width:220px}\n.pr-hint{font-size:12.5px;color:var(--mu);margin:0 0 16px}\n.pr-rows{display:flex;flex-direction:column;gap:10px;margin-top:8px}\n.pr-row{display:grid;grid-template-columns:28px 88px 1fr auto;gap:10px 12px;align-items:start;padding:14px;border:1px solid var(--line);border-radius:14px;background:#FFFcf8;box-shadow:0 2px 8px rgba(31,58,104,.03)}\n.pr-row.dragover{border-color:var(--gold);background:var(--gold-l)}\n.pr-move{display:flex;flex-direction:column;gap:4px;padding-top:4px}\n.pr-move button{width:28px;height:28px;border:1px solid var(--line);background:#fff;border-radius:8px;color:var(--navy);cursor:pointer;font-size:12px;line-height:1;padding:0}\n.pr-move button:hover{border-color:var(--gold);background:var(--soft)}\n.pr-thumb{width:88px}\n.pr-thumb .ph,.pr-thumb img{width:88px;height:88px;object-fit:cover;border-radius:10px;border:1px solid var(--line);background:#fff;display:block}\n.pr-thumb .ph{display:flex;align-items:center;justify-content:center;color:var(--mu);font-size:11px;text-align:center;padding:6px}\n.pr-thumb img[src=\"\"],.pr-thumb img.err{display:none}\n.pr-main{min-width:0;display:grid;grid-template-columns:1fr 120px 88px;gap:8px}\n.pr-main .full{grid-column:1/-1}\n.pr-side{display:flex;flex-direction:column;align-items:flex-end;gap:8px;min-width:110px}\n.pr-line{font-family:\"Noto Serif KR\",Georgia,serif;font-weight:700;color:var(--navy);font-size:16px;white-space:nowrap}\n.pr-row .f{font-size:12px}\n.pr-empty{border:1px dashed var(--line);border-radius:14px;padding:22px;text-align:center;color:var(--mu);background:#fff}\n.pr-fetch{font-size:12.5px;color:var(--gold-d);margin:0}\n.pr-actions{margin-top:18px}\n.pr-sheet{margin-top:28px;background:#fff;border:1px solid var(--line);border-radius:6px;box-shadow:0 10px 36px rgba(31,58,104,.08);padding:28px 32px 24px;color:var(--tx);max-width:210mm}\n.pr-sheet-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding-bottom:14px;border-bottom:1px solid var(--gold)}\n.pr-sheet-brand{display:flex;flex-direction:column;align-items:flex-start;gap:4px;text-decoration:none;color:var(--navy)}\n.pr-sheet-brand img{height:48px;width:auto;display:block}\n.pr-sheet-brand .url{font-size:12px;font-weight:600;letter-spacing:.04em;color:var(--navy)}\n.pr-sheet-kicker{font-family:\"Noto Serif KR\",serif;font-size:11px;letter-spacing:.18em;color:var(--gold);font-weight:600;margin:0 0 6px}\n.pr-sheet h2.pr-title{font-family:\"Noto Serif KR\",Georgia,serif;font-size:28px;color:var(--navy);margin:0;letter-spacing:-.03em}\n.pr-meta{display:grid;grid-template-columns:1fr 1fr;gap:8px 24px;margin:18px 0 16px;font-size:13.5px}\n.pr-meta div{display:flex;gap:8px;border-bottom:1px dotted var(--line);padding:4px 0}\n.pr-meta dt,.pr-meta .k{flex:0 0 88px;color:var(--mu);font-weight:600}\n.pr-meta dd,.pr-meta .v{flex:1;margin:0;color:var(--navy);font-weight:600}\n.pr-sheet table{width:100%;border-collapse:collapse;font-size:13px;margin-top:8px}\n.pr-sheet table th{background:var(--soft);color:var(--navy);font-weight:600;padding:9px 8px;border-bottom:1px solid var(--line);text-align:left}\n.pr-sheet table td{padding:10px 8px;border-bottom:1px solid var(--line);vertical-align:middle}\n.pr-sheet table td.n{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}\n.pr-sheet table img{width:52px;height:52px;object-fit:cover;border-radius:6px;border:1px solid var(--line);background:#fff}\n.pr-sheet table a{color:var(--navy);font-weight:600;text-decoration:none;border-bottom:1px solid var(--gold-s)}\n.pr-sheet table a:hover{color:var(--gold-d)}\n.pr-sheet .note-cell{color:var(--mu);font-size:12px;margin-top:2px}\n.pr-sums{width:280px;margin:16px 0 0 auto}\n.pr-sums div{display:flex;justify-content:space-between;padding:6px 0;font-size:14px;border-bottom:1px dotted var(--line)}\n.pr-sums .grand{border-bottom:none;border-top:1px solid var(--navy);margin-top:6px;padding-top:10px;font-family:\"Noto Serif KR\",Georgia,serif;font-size:18px;font-weight:700;color:var(--navy)}\n.pr-sheet-memo{margin-top:18px;padding:12px 14px;background:var(--soft);border-radius:10px;font-size:13.5px;white-space:pre-wrap}\n.pr-sheet-memo .k{font-weight:700;color:var(--navy);margin-bottom:4px}\n.pr-sheet-foot{margin-top:22px;padding-top:12px;border-top:1px solid var(--line);text-align:center;font-size:12px;color:var(--mu)}\n.pr-sheet-foot a{color:var(--navy);font-weight:700;text-decoration:none}\n@media (max-width:760px){\n .pr-row{grid-template-columns:28px 72px 1fr; }\n .pr-side{grid-column:2/-1;flex-direction:row;justify-content:space-between;align-items:center;width:100%}\n .pr-main{grid-template-columns:1fr 1fr}\n .pr-add{flex-direction:column}\n .pr-sheet{padding:18px 14px}\n .pr-meta{grid-template-columns:1fr}\n .pr-sums{width:100%}\n .pr-sheet-head{flex-direction:column-reverse}\n}\n@media print{\n .et-root.print-proposal{background:#fff}\n .et-root.print-proposal header.top,\n .et-root.print-proposal nav.tabs,\n .et-root.print-proposal footer,\n .et-root.print-proposal .btnrow,\n .et-root.print-proposal .cta,\n .et-root.print-proposal .noprint,\n .et-root.print-proposal .pr-form,\n .et-root.print-proposal .pr-actions,\n .et-root.print-proposal .desc,\n .et-root.print-proposal h2{display:none!important}\n .et-root.print-proposal section.tool{display:none!important;border:none;box-shadow:none;background:#fff;padding:0}\n .et-root.print-proposal #tool-proposal{display:block!important}\n .et-root.print-proposal #pr_sheet{display:block!important;margin:0;box-shadow:none;border:none;border-radius:0;max-width:none;padding:0;width:100%}\n .et-root.print-proposal .wrap{max-width:none;padding:0}\n @page{size:A4;margin:12mm}\n}\n\n/* overlay chrome */\n.et-root{position:relative;padding-bottom:8px}\n.et-close{\n  position:fixed;top:14px;right:16px;z-index:20;\n  width:44px;height:44px;border:1px solid var(--line);\n  background:var(--navy);color:#fff;border-radius:50%;\n  font-size:26px;line-height:1;cursor:pointer;padding:0;\n  box-shadow:0 8px 20px rgba(31,58,104,.25);\n  display:flex;align-items:center;justify-content:center;\n  font-family:inherit;transition:background .15s ease,transform .15s ease;\n}\n.et-close:hover{background:var(--navy-d);transform:scale(1.04)}\n.et-close:focus{outline:none;box-shadow:0 0 0 3px rgba(31,58,104,.28),0 8px 20px rgba(31,58,104,.25)}\nheader.top .hrow{padding-right:60px}\n@media (max-width:760px){\n  header.top .hrow{padding-right:0;padding-top:48px}\n  .et-close{top:8px;right:8px;width:40px;height:40px}\n}\n";
var TOOL_HTML = "<button type=\"button\" class=\"et-close\" id=\"et_close\" aria-label=\"도구 닫기\" title=\"닫기\">&times;</button>\n<header class=\"top\">\n <div class=\"wrap\">\n  <div class=\"hrow\">\n   <div class=\"htitle\">\n    <div class=\"eyebrow\">EVER1004 PRO TOOLS</div>\n    <h1><span>에버천사</span> 상품제작 실무도구</h1>\n    <p>마케팅·구매 담당자, 대표님, 사장님, 행사대행사를 위한 무료 계산·체크 도구 모음</p>\n   </div>\n   <a class=\"brand\" href=\"https://www.ever1004.com\" target=\"_blank\" rel=\"noopener\" title=\"에버천사 판촉물 종합쇼핑몰\">\n    <img src=\"data:image/png;base64,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xx57jBkzZsaMGW+99VY0Gr3iiis62i8Os1paWu65554JEyZEIpHu3btrrefOnfvuu+++8MILZ5xxxtChQ0vEx9ChQ5l5dWvInTQi+uKLL0aOHGmM2WGHHZqamqZMmfLAAw+cf/75Xbp0sdaWEHZ1XHB/8jyv9E/nrbjtCsNw9TSKkv0FACeeeOLw4cPdu5RSr7zyysSJEwcOHDhixAiHGmEYVlRUlKyq7zwosIRgClE/uZD5galL/jWldWo+Dak6pUUCi5K0eYmY1kNqWy8eWHtoVZkWYGsEEZQnAIgcKNGMyorRwGx2L4vfv2f3Yxc23zC56eMWBaZCaWC0fqzGtDW/fd27qcZFe513QM+D+xvgwFifCb3vcOqCUzLOHSAipyhKtiUzB0HgdEhZWdlPfvITrbWz5Et6fu7cuX//+98LhQIAVFRU7LrrrjvttFOPHj2MMd27dx83btycOXMmT55sre3bt+9ll13mqAf3Ldls9p133gnDMBaLdVR3zkN2h6GkDGfNmpXL5YYOHdqnT5/1Caq7sMWll166995719XVdenSxQUd/va3v82bN++8884bNmzY7rvvnslkZs+eXVFRUVdX1/E8uyP00UcfTZw4sVu3bhdccIEjI4MgeOCBB0aPHv3aa6/tsMMOJZA66aSTKisrV7GGHM8ahuFrr732yiuvZDKZLl26nHLKKcuXL7/tttsWL1589913n3DCCasYU6WVyWQc6auUymQyCxcudAEdz/OWLl06adKkpqambbfddvXD7C5p1qxZS5cuTSQSROTMCvdM3eU5W8Nte0NDw/z589PpdP/+/b+joCAAKAAgQqRzPj01b/nfpjaMzUSBOsXiBsI2w16I4LXmd46aH+8c/0GvzgmELOdAPFJaQLA9YVELIKJVngIkkpCZxJ5QV7Zv59QD05ffMXHp7Ey8i05vP2nWsBffHTxxQS6Xf2H01O4n7rLvxYeVb1PBlplBqe8eKJSO9Guvvdbc3ByPx5cvX/6vf/1LRBYtWpRIJN5999333nsvlUr1799fKeWMhVXYBETccccdf/SjHy1cuLB///7du3evrKz85JNPfv/735eXl19zzTWHHXbY/Pnz58yZM3fu3H322aeysrJkDGut8/n8s88+29LSUnJ0neBGo1EiCoKgY3TT87xcLheNRvv27bs+wTMRmTFjBjM7LnDGjBkiks/no9FoeXl5Q0PDjBkzrLW+75eXl1trJ0+eXFVV1alTp46Ik0qlHOG/YMGCSCRCRK2trc7wLqGb07EuKFCypNwFLF++fMaMGe+///706dPDMOzTp8+ZZ56ZSCQSicT5559/3333zZs375577tlpp5322muvLl26RCIRh8vOARk9evRTTz0VjUaj0ehnn3326aefus/3PO/VV199/vnntdZXX32144BWuXcievnll0eNGuUoidLz8jxPaz1hwoSxY8d2NEmMMYMGDfrlL3/5HQAFARFH5UkRDwREoKDQZ6R3ludumrL8xcWFUFUmSAeUL3gKTJwzhW5+41kD42cOqO2llRWxBiIYAQQEJmAQACABVEICxYIMEkAERi+wtjOoq7bt/L2u2X+NW5a/+4lhL0zunY3mYtqLJGMFWPDPz/759pQdfzxs3x/u58UUM689zXSLBoXm5ub33nsvFosppRoaGpYsWeLOpNa6oaGBmSsrK0ssQ0cb1Z3h5cuXz507150lRFy8ePH8+fNnzJiRSCS01mPGjCkvL9da19TUVFdXt7S0fPnll3369IlGo+78x+Px888/n5nj8XgJF4IgePrpp5cuXXrYYYcNHDiwpNlcLKN79+5fmfLsbi2Xy911112NjY3uxSXt7QyQl1566eWXX3b/dCettbX1+9///ve///1S5oW1dpdddpk9e/Y777xzxx13xGIxz/Oy2Swi9u3b9+ijj3Y0SiaT6aiHO+7P559//tBDDxFRdXX1sGHDDjvsMHcjiNivX79f/epXzz777EcfffTmm29+/PHHl19+ee/evUvBSACIxWLV1dXJZLKEmA6YnE0Xi8XKy8sdCVriQTqGM/fYY4+6ujoXBi6xpCUTr/R6l66Sy+Vqamq+I+6DoLAACiMyABj2CEDpSdn83yctfmwOL6c0Rcs9wAAsiR+2mQpe8v2e3tkDu+2WiClmFiEkXOlryREBCC6BGVZsD6ACUEoJgLBsn4jftGfPRZldZs5f3vruXBXEIBLNk0pFOxWWm9d+/8rnz3950MWHDDl4OwAphDmPIkT0nWAZ3FHp3bv3VVdd5aIGWmtnUjq333mtqVTq448/Lgllx4OnlPr888/vvPNOF7xw9rZT6VrrbDZ77733ukNSMlPj8fif/vSneDzukhSj0eiOO+4IAB988EFJPwdB4HzsfD7f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\" alt=\"에버천사 판촉물 종합쇼핑몰 로고\">\n    <span class=\"url\">ever1004.com</span>\n   </a>\n  </div>\n </div>\n</header>\n\n<div class=\"wrap\">\n <nav class=\"tabs\" role=\"tablist\">\n  <button data-tab=\"budget\" class=\"active\" role=\"tab\"><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3.5\" y=\"2.5\" width=\"17\" height=\"19\" rx=\"2\"/><path d=\"M7 6.5h10\"/><path d=\"M8 11h2.2M12 11h2.2M16 11h.01\"/><path d=\"M8 14.5h2.2M12 14.5h2.2M16 14.5h.01\"/><path d=\"M8 18h2.2M12 18h2.2\"/></svg></span>예산별 품목추천</button>\n  <button data-tab=\"dday\" role=\"tab\"><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M8 3v4M16 3v4M3 10h18\"/><path d=\"M8.5 14h.01M12 14h.01M15.5 14h.01M8.5 17h.01M12 17h.01\"/></svg></span>행사 D-day</button>\n  <button data-tab=\"cal\" role=\"tab\"><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M8 3v4M16 3v4M3 10h18\"/><rect x=\"7\" y=\"13\" width=\"3.2\" height=\"3.2\" rx=\".4\"/><rect x=\"10.4\" y=\"13\" width=\"3.2\" height=\"3.2\" rx=\".4\"/><rect x=\"13.8\" y=\"13\" width=\"3.2\" height=\"3.2\" rx=\".4\"/></svg></span>마케팅 캘린더</button>\n  <button data-tab=\"quote\" role=\"tab\"><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 19V10M10.5 19V5M16 19v-6\"/><path d=\"M3.5 19h17\"/></svg></span>견적 비교표</button>\n  <button data-tab=\"proposal\" role=\"tab\"><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z\"/><path d=\"M14 3v5h5\"/><path d=\"M9 13h6M9 17h4\"/></svg></span>제안서 만들기</button>\n </nav>\n\n <main>\n <!-- 1 예산 -->\n <section class=\"tool active\" id=\"tool-budget\">\n  <h2><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3.5\" y=\"2.5\" width=\"17\" height=\"19\" rx=\"2\"/><path d=\"M7 6.5h10\"/><path d=\"M8 11h2.2M12 11h2.2M16 11h.01\"/><path d=\"M8 14.5h2.2M12 14.5h2.2M16 14.5h.01\"/><path d=\"M8 18h2.2M12 18h2.2\"/></svg></span>예산별 품목추천</h2>\n  <p class=\"desc\">인원수와 예산을 넣으면 총비용과 1인당 단가 한도, 그 가격대에서 고를 만한 품목을 보여드려요.</p>\n  <div class=\"grid\">\n   <label class=\"f\">인원수(수량)<input type=\"number\" id=\"b_people\" min=\"1\" placeholder=\"예: 200\"></label>\n   <label class=\"f\">예산 입력 방식\n    <span class=\"seg\"><label><input type=\"radio\" name=\"b_mode\" value=\"per\" checked>1인당 예산</label><label><input type=\"radio\" name=\"b_mode\" value=\"total\">총예산</label></span>\n   </label>\n   <label class=\"f\"><span id=\"b_amt_label\">1인당 예산(원)</span><input type=\"number\" id=\"b_amt\" min=\"0\" placeholder=\"예: 5000\"></label>\n   <label class=\"f\">입력한 예산은\n    <span class=\"seg\"><label><input type=\"radio\" name=\"b_vat\" value=\"inc\" checked>VAT 포함</label><label><input type=\"radio\" name=\"b_vat\" value=\"exc\">VAT 별도</label></span>\n   </label>\n  </div>\n  <div class=\"btnrow\"><button class=\"btn\" id=\"b_calc\">계산하기</button><button class=\"btn ghost\" data-reset=\"budget\">초기화</button></div>\n  <div class=\"result\" id=\"b_out\"></div>\n </section>\n\n\n <!-- 3 D-day -->\n <section class=\"tool\" id=\"tool-dday\">\n  <h2><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M8 3v4M16 3v4M3 10h18\"/><path d=\"M8.5 14h.01M12 14h.01M15.5 14h.01M8.5 17h.01M12 17h.01\"/></svg></span>행사 D-day 체크리스트</h2>\n  <p class=\"desc\">행사 날짜를 넣으면 주말을 빼고 영업일 기준으로 견적·시안·주문 마감일을 거꾸로 계산해 드려요. (공휴일은 반영되지 않으니 연휴가 끼면 여유 있게 잡으세요)</p>\n  <div class=\"grid\">\n   <label class=\"f\">행사 날짜<input type=\"date\" id=\"d_date\"></label>\n   <label class=\"f\">제작 소요일(영업일)<input type=\"number\" id=\"d_make\" min=\"1\" value=\"7\"></label>\n   <label class=\"f\">배송 소요일(영업일)<input type=\"number\" id=\"d_ship\" min=\"0\" value=\"2\"></label>\n   <label class=\"f\">시안 확정 소요일(영업일)<input type=\"number\" id=\"d_draft\" min=\"0\" value=\"2\"></label>\n  </div>\n  <div class=\"btnrow\"><button class=\"btn\" id=\"d_calc\">일정 만들기</button><button class=\"btn ghost\" data-reset=\"dday\">초기화</button></div>\n  <div class=\"result\" id=\"d_out\"></div>\n </section>\n\n <!-- 4 캘린더 -->\n <section class=\"tool\" id=\"tool-cal\">\n  <h2><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M8 3v4M16 3v4M3 10h18\"/><rect x=\"7\" y=\"13\" width=\"3.2\" height=\"3.2\" rx=\".4\"/><rect x=\"10.4\" y=\"13\" width=\"3.2\" height=\"3.2\" rx=\".4\"/><rect x=\"13.8\" y=\"13\" width=\"3.2\" height=\"3.2\" rx=\".4\"/></svg></span>월별 마케팅·판촉 캘린더</h2>\n  <p class=\"desc\">달마다 챙길 시즌 이슈·기념일과 어울리는 판촉물 아이디어예요. 보통 행사 3~4주 전에는 준비를 시작하는 게 좋아요.</p>\n  <div class=\"months\" id=\"c_months\"></div>\n  <div class=\"result\" id=\"c_out\" style=\"border-top:none;padding-top:0;margin-top:0\"></div>\n </section>\n\n <!-- 5 견적 -->\n <section class=\"tool\" id=\"tool-quote\">\n  <h2><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 19V10M10.5 19V5M16 19v-6\"/><path d=\"M3.5 19h17\"/></svg></span>견적 비교표</h2>\n  <p class=\"desc\">업체 견적을 최대 3곳까지 넣으면 VAT 포함 기준으로 총액과 개당 실단가를 맞춰 비교해요.</p>\n  <div class=\"qgrid\" id=\"qg\"></div>\n  <div class=\"btnrow\"><button class=\"btn\" id=\"x_calc\">비교하기</button><button class=\"btn ghost\" id=\"x_print\"><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 9V3.5h10V9\"/><path d=\"M7 17.5H5.2A2.2 2.2 0 0 1 3 15.3V10.2A2.2 2.2 0 0 1 5.2 8h13.6A2.2 2.2 0 0 1 21 10.2v5.1a2.2 2.2 0 0 1-2.2 2.2H17\"/><rect x=\"7\" y=\"14\" width=\"10\" height=\"6.5\" rx=\"1\"/><path d=\"M17.2 12h.01\"/></svg></span>인쇄하기</button><button class=\"btn ghost\" data-reset=\"quote\">초기화</button></div>\n  <div class=\"result\" id=\"x_out\"></div>\n </section>\n\n <!-- 5 제안서 -->\n <section class=\"tool\" id=\"tool-proposal\">\n  <h2><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z\"/><path d=\"M14 3v5h5\"/><path d=\"M9 13h6M9 17h4\"/></svg></span>제안서 만들기</h2>\n  <p class=\"desc\">에버천사 상품 링크를 넣으면 제안서에 담고, 단가와 수량을 정리해 인쇄용 제안서를 만들어요. 사이트 정보가 자동으로 안 채워지면 이름·단가·이미지를 직접 입력하면 돼요.</p>\n  <div class=\"pr-form noprint\">\n   <div class=\"grid\">\n    <label class=\"f\">받는 곳 <small>회사명 또는 담당 부서</small><input type=\"text\" id=\"pr_to\" placeholder=\"예: ○○주식회사\"></label>\n    <label class=\"f\">담당자<input type=\"text\" id=\"pr_person\" placeholder=\"예: 홍길동 님\"></label>\n    <label class=\"f\">행사명/용도<input type=\"text\" id=\"pr_event\" placeholder=\"예: 창립기념 답례품\"></label>\n    <label class=\"f\">제안일<input type=\"date\" id=\"pr_date\"></label>\n    <label class=\"f\">유효기간<input type=\"text\" id=\"pr_valid\" placeholder=\"예: 제안일로부터 14일\"></label>\n    <label class=\"f\">금액 기준\n     <span class=\"seg\"><label><input type=\"radio\" name=\"pr_vat\" value=\"exc\" checked>VAT 별도</label><label><input type=\"radio\" name=\"pr_vat\" value=\"inc\">VAT 포함</label></span>\n    </label>\n    <label class=\"f\" style=\"grid-column:1/-1\">메모<textarea id=\"pr_memo\" placeholder=\"인쇄 방식, 납기, 배송 조건 등 전달할 내용을 적어 주세요.\"></textarea></label>\n   </div>\n   <h3 style=\"margin:22px 0 8px;font-size:16px\">상품 추가</h3>\n   <div class=\"pr-add\">\n    <input type=\"url\" id=\"pr_url\" placeholder=\"https://www.ever1004.com/product_w/product_view.asp?p_idx=\">\n    <button type=\"button\" class=\"btn\" id=\"pr_add\">추가</button>\n    <button type=\"button\" class=\"btn ghost\" id=\"pr_add_blank\">직접 추가</button>\n   </div>\n   <p class=\"pr-hint\">상품 상세 페이지 주소(product_view.asp?p_idx=…)를 붙여 넣은 뒤 추가를 눌러 주세요. 같은 사이트에서 열리면 이름·가격·이미지를 자동으로 채우려고 시도해요.</p>\n   <div class=\"pr-rows\" id=\"pr_rows\"></div>\n   <div class=\"btnrow pr-actions\">\n    <button type=\"button\" class=\"btn\" id=\"pr_build\">제안서 만들기</button>\n    <button type=\"button\" class=\"btn ghost\" id=\"pr_print\">인쇄 / PDF 저장</button>\n    <button type=\"button\" class=\"btn ghost\" id=\"pr_copy\">링크 복사/텍스트 복사</button>\n    <button type=\"button\" class=\"btn ghost\" data-reset=\"proposal\">초기화</button>\n   </div>\n  </div>\n  <div class=\"result\" id=\"pr_out\" style=\"border-top:none;padding-top:0;margin-top:0\"></div>\n  <div id=\"pr_sheet\" class=\"pr-sheet\" hidden></div>\n </section>\n\n </main>\n</div>\n\n<footer>\n <div class=\"wrap\">\n  <a href=\"https://www.ever1004.com\" target=\"_blank\" rel=\"noopener\">에버천사 ever1004.com</a> · (주)벨카리노 · <a href=\"https://ever1004.channel.io\" target=\"_blank\" rel=\"noopener\">채널톡 상담</a>\n  <div style=\"margin-top:6px;font-size:12px\">이 도구의 결과는 참고용 예시이며, 실제 단가·납기·가능한 인쇄 방식은 상품과 수량에 따라 달라요.</div>\n </div>\n</footer>";

function ensureFonts(){
  if(!document.head) return;
  if(!document.querySelector('link[data-ever-ptool-font="preconnect-jsd"]')){
    var l1=document.createElement('link'); l1.rel='preconnect'; l1.href='https://cdn.jsdelivr.net'; l1.crossOrigin='anonymous'; l1.setAttribute('data-ever-ptool-font','preconnect-jsd'); document.head.appendChild(l1);
    var l2=document.createElement('link'); l2.rel='preconnect'; l2.href='https://fonts.googleapis.com'; l2.setAttribute('data-ever-ptool-font','preconnect-g'); document.head.appendChild(l2);
    var l3=document.createElement('link'); l3.rel='preconnect'; l3.href='https://fonts.gstatic.com'; l3.crossOrigin='anonymous'; l3.setAttribute('data-ever-ptool-font','preconnect-gs'); document.head.appendChild(l3);
  }
  FONT_HREF.forEach(function(href,i){
    if(document.querySelector('link[data-ever-ptool-font="'+i+'"]')) return;
    var l=document.createElement('link'); l.rel='stylesheet'; l.href=href; l.setAttribute('data-ever-ptool-font', String(i)); document.head.appendChild(l);
  });
}

var host=null, root=null, inited=false, scrollLock=null;

function isActive(){ return String(location.hash||'')==='#ptool'; }

function lockScroll(){
  if(scrollLock) return;
  var html=document.documentElement, body=document.body;
  scrollLock={
    htmlOverflow: html?html.style.overflow:'',
    bodyOverflow: body?body.style.overflow:'',
    htmlPad: html?html.style.paddingRight:'',
    bodyPad: body?body.style.paddingRight:''
  };
  var sb=(window.innerWidth - (html?html.clientWidth:window.innerWidth))||0;
  if(html) html.style.overflow='hidden';
  if(body) body.style.overflow='hidden';
  if(sb>0){
    if(html) html.style.paddingRight=sb+'px';
  }
}
function unlockScroll(){
  if(!scrollLock) return;
  var html=document.documentElement, body=document.body;
  if(html){ html.style.overflow=scrollLock.htmlOverflow; html.style.paddingRight=scrollLock.htmlPad; }
  if(body){ body.style.overflow=scrollLock.bodyOverflow; body.style.paddingRight=scrollLock.bodyPad; }
  scrollLock=null;
}

function hideOverlay(){
  if(host){ host.style.display='none'; host.setAttribute('aria-hidden','true'); }
  unlockScroll();
}

function closeTool(){
  try{
    if(history.replaceState){
      history.replaceState(null, '', location.pathname + location.search + (location.hash==='#ptool'?'':(location.hash||'')));
      if(location.hash==='#ptool'){
        /* some browsers keep the hash; force-clear */
        history.replaceState(null, '', location.pathname + location.search);
      }
    } else {
      location.hash='';
    }
  }catch(e){ try{ location.hash=''; }catch(x){} }
  hideOverlay();
}

function openTool(){
  ensureFonts();
  if(!host){
    host=document.createElement('div');
    host.id=HOST_ID;
    host.setAttribute('role','dialog');
    host.setAttribute('aria-modal','true');
    host.setAttribute('aria-label','에버천사 상품제작 실무도구');
    host.style.cssText='position:fixed;inset:0;z-index:2147483000;overflow:auto;background:#FBF8F2;overscroll-behavior:contain;';
    if(!host.attachShadow){
      host.textContent='이 브라우저는 Shadow DOM을 지원하지 않아 도구를 열 수 없어요.';
      document.body.appendChild(host);
      return;
    }
    root=host.attachShadow({mode:'open'});
    var style=document.createElement('style');
    style.textContent=TOOL_CSS;
    var wrap=document.createElement('div');
    wrap.className='et-root';
    wrap.innerHTML=TOOL_HTML;
    root.appendChild(style);
    root.appendChild(wrap);
    (document.body||document.documentElement).appendChild(host);
    var closeBtn=root.getElementById('et_close');
    if(closeBtn) closeBtn.addEventListener('click', function(e){ e.preventDefault(); closeTool(); });
    if(!inited){ inited=true; initTool(root); }
  }
  host.style.display='block';
  host.setAttribute('aria-hidden','false');
  try{ host.scrollTop=0; }catch(e){}
  lockScroll();
}

function onHash(){
  if(isActive()) openTool();
  else hideOverlay();
}

function initTool(root){
var $=function(id){return root.getElementById(id);};
var $=function(id){return root.getElementById(id);};
var fmt=function(n){return Math.round(n).toLocaleString('ko-KR');};
var won=function(n){return fmt(n)+'원';};
var num=function(id){var v=parseFloat(($(id).value||'').toString().replace(/,/g,''));return isFinite(v)?v:0;};
var esc=function(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});};
var CTA='<div class="cta"><a class="site" href="https://www.ever1004.com" target="_blank" rel="noopener">에버천사 판촉물 보러가기</a><a class="ch" href="https://ever1004.channel.io" target="_blank" rel="noopener">채널톡 상담하기</a></div>';
var LS='ever1004_tools_';
function store(){try{return window.localStorage;}catch(e){return null;}}
function save(tool,ids,radios){var s=store();if(!s)return;var o={};ids.forEach(function(i){o[i]=$(i).value;});(radios||[]).forEach(function(r){var c=root.querySelector('input[name="'+r+'"]:checked');if(c)o['r:'+r]=c.value;});try{s.setItem(LS+tool,JSON.stringify(o));}catch(e){}}
function load(tool,ids,radios){var s=store();if(!s)return false;var o;try{o=JSON.parse(s.getItem(LS+tool)||'null');}catch(e){o=null;}if(!o)return false;ids.forEach(function(i){if(o[i]!=null)$(i).value=o[i];});(radios||[]).forEach(function(r){var v=o['r:'+r];if(v){var el=root.querySelector('input[name="'+r+'"][value="'+v+'"]');if(el)el.checked=true;}});return true;}
function clearLS(tool){var s=store();if(s)try{s.removeItem(LS+tool);}catch(e){}}

/* Tabs */
var tabs=root.querySelectorAll('nav.tabs button');
function show(name){tabs.forEach(function(b){b.classList.toggle('active',b.dataset.tab===name);});root.querySelectorAll('section.tool').forEach(function(s){s.classList.toggle('active',s.id==='tool-'+name);});var s=store();if(s)try{s.setItem(LS+'tab',name);}catch(e){}}
tabs.forEach(function(b){b.addEventListener('click',function(){show(b.dataset.tab);});});

/* 1 Budget */
var B_IDS=['b_people','b_amt'],B_R=['b_mode','b_vat'];
var EUCKR={" ":"%20","(":"%28",")":"%29",",":"%2C","가":"%B0%A1","거":"%B0%C5","건":"%B0%C7","고":"%B0%ED","구":"%B1%B8","그":"%B1%D7","급":"%B1%DE","기":"%B1%E2","다":"%B4%D9","담":"%B4%E3","대":"%B4%EB","데":"%B5%A5","랩":"%B7%A6","량":"%B7%AE","러":"%B7%AF","릎":"%B8%AD","리":"%B8%AE","링":"%B8%B5","마":"%B8%B6","맞":"%B8%C2","머":"%B8%D3","메":"%B8%DE","모":"%B8%F0","무":"%B9%AB","물":"%B9%B0","미":"%B9%CC","배":"%B9%E8","백":"%B9%E9","보":"%BA%B8","볼":"%BA%BC","부":"%BA%CE","블":"%BA%ED","산":"%BB%EA","생":"%BB%FD","선":"%BC%B1","성":"%BC%BA","세":"%BC%BC","소":"%BC%D2","손":"%BC%D5","수":"%BC%F6","슈":"%BD%B4","스":"%BD%BA","어":"%BE%EE","엄":"%BE%F6","에":"%BF%A1","요":"%BF%E4","용":"%BF%EB","우":"%BF%EC","울":"%BF%EF","이":"%C0%CC","장":"%C0%E5","전":"%C0%FC","조":"%C1%B6","지":"%C1%F6","채":"%C3%A4","첩":"%C3%B8","춤":"%C3%E3","충":"%C3%E6","커":"%C4%BF","컵":"%C4%C5","케":"%C4%C9","코":"%C4%DA","크":"%C5%A9","키":"%C5%B0","터":"%C5%CD","텀":"%C5%D2","트":"%C6%AE","티":"%C6%BC","패":"%C6%D0","펜":"%C6%E6","품":"%C7%B0","프":"%C7%C1","형":"%C7%FC","홍":"%C8%AB","활":"%C8%B0"};
function encKR(s){s=String(s);var o='';for(var i=0;i<s.length;i++){var c=s.charAt(i);if(EUCKR[c]!=null)o+=EUCKR[c];else if(/^[A-Za-z0-9._~-]$/.test(c))o+=c;else o+=encodeURIComponent(c);}return o;}
function searchUrl(name){return 'https://www.ever1004.com/product_w/search_keyword.asp?keytype=p_name&keyword='+encKR(name);}
function itemLinks(items){return String(items).split(',').map(function(s){s=s.trim();if(!s)return '';return '<a href="'+searchUrl(s)+'" target="_blank" rel="noopener">'+s+'</a>';}).join('<span class="sep">, </span>');}

var BANDS=[
 {max:1000,label:'~1,000원',items:'볼펜, 물티슈, 부채, 스티커, 홍보용 메모지'},
 {max:3000,label:'~3,000원',items:'텀블러백, 마스크스트랩, 키링, 손거울, 소형 수첩'},
 {max:5000,label:'~5,000원',items:'머그컵, 보조배터리(소형), 에코백, 우산 케이스, 데스크 소품'},
 {max:10000,label:'~10,000원',items:'텀블러, 무릎담요, 장우산, 무선충전기, 다이어리'},
 {max:20000,label:'~20,000원',items:'고급 텀블러, 보조배터리(대용량), 수건 세트, 생활용품 세트'},
 {max:Infinity,label:'20,000원 이상',items:'선물세트, 프리미엄 가전 소품, 맞춤 패키지 구성'}
];
function bModeLabel(){var m=root.querySelector('input[name="b_mode"]:checked').value;$('b_amt_label').textContent=m==='per'?'1인당 예산(원)':'총예산(원)';}
root.querySelectorAll('input[name="b_mode"]').forEach(function(r){r.addEventListener('change',bModeLabel);});
function calcBudget(){
 var n=num('b_people'),amt=num('b_amt');
 var mode=root.querySelector('input[name="b_mode"]:checked').value,vat=root.querySelector('input[name="b_vat"]:checked').value;
 save('budget',B_IDS,B_R);
 if(n<=0||amt<=0){$('b_out').innerHTML='<div class="warn">인원수와 예산을 입력해 주세요.</div>';return;}
 var total=mode==='per'?amt*n:amt;
 var supplyTotal=vat==='inc'?total/1.1:total;
 var goodsSupply=supplyTotal;
 var grandSupply=supplyTotal, grandVat=grandSupply*0.1, grand=grandSupply+grandVat;
 var perSupply=goodsSupply/n, perInc=perSupply*1.1;
 var html='';
 html+='<div class="kpis">'+
  '<div class="kpi"><div class="l">공급가 합계</div><div class="v">'+won(grandSupply)+'</div></div>'+
  '<div class="kpi"><div class="l">VAT (10%)</div><div class="v">'+won(grandVat)+'</div></div>'+
  '<div class="kpi main"><div class="l">총비용 (VAT 포함)</div><div class="v">'+won(grand)+'</div></div>'+
  '<div class="kpi"><div class="l">1인당 상품 단가 한도</div><div class="v">'+won(perSupply)+'</div><div class="l">VAT 별도 · 포함 시 '+won(perInc)+'</div></div>'+
  '</div>';
 html+='<table class="t"><tr><th>항목</th><th style="text-align:right">공급가</th></tr>'+
  '<tr><td>상품 예산 ('+fmt(n)+'개)</td><td class="n">'+won(goodsSupply)+'</td></tr>'+
  '<tr><th>합계 (VAT 별도)</th><th style="text-align:right">'+won(grandSupply)+'</th></tr></table>';
 html+='<h3 style="margin:22px 0 4px;font-size:16px">이 단가로 고를 만한 품목</h3><div class="note" style="margin-top:0">품목 이름을 누르면 에버천사 검색 결과로 이동해요. 가격대는 대략적인 예시이며 수량·인쇄에 따라 달라요.</div>';
 var fitIdx=-1;for(var i=0;i<BANDS.length;i++){if(perSupply<=BANDS[i].max){fitIdx=i;break;}}
 BANDS.forEach(function(b,i){var fit=i===fitIdx,ok=i<=fitIdx;html+='<div class="band'+(fit?' fit':'')+'" style="'+(ok?'':'opacity:.45')+'"><div class="p">'+b.label+(fit?'<span class="tag">추천</span>':'')+'</div><div>'+itemLinks(b.items)+'</div></div>';});
 html+='<div class="note">※ 가격대는 일반적인 시장 예시이며 에버천사 실제 판매가가 아니에요. 정확한 단가는 상품 페이지나 상담으로 확인해 주세요.</div>'+CTA;
 $('b_out').innerHTML=html;
}
$('b_calc').addEventListener('click',calcBudget);

/* 3 D-day */
var D_IDS=['d_date','d_make','d_ship','d_draft'];
function today0(){var t=new Date();return new Date(t.getFullYear(),t.getMonth(),t.getDate());}
function isWknd(d){var w=d.getDay();return w===0||w===6;}
function subBiz(d,n){var r=new Date(d);while(n>0){r.setDate(r.getDate()-1);if(!isWknd(r))n--;}return r;}
function prevBizOrSame(d){var r=new Date(d);while(isWknd(r))r.setDate(r.getDate()-1);return r;}
function ymd(d){return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);}
var WD=['일','월','화','수','목','금','토'];
function kd(d){return d.getFullYear()+'.'+(d.getMonth()+1)+'.'+d.getDate()+' ('+WD[d.getDay()]+')';}
function parseYmd(s){var m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(s||'');return m?new Date(+m[1],+m[2]-1,+m[3]):null;}
function calcDday(){
 save('dday',D_IDS);
 var ev=parseYmd($('d_date').value);
 if(!ev){$('d_out').innerHTML='<div class="warn">행사 날짜를 선택해 주세요.</div>';return;}
 var mk=Math.max(1,Math.round(num('d_make'))),sh=Math.max(0,Math.round(num('d_ship'))),dr=Math.max(0,Math.round(num('d_draft')));
 var inspect=subBiz(ev,1);
 var arrive=subBiz(ev,2);
 var outD=sh>0?subBiz(arrive,sh):prevBizOrSame(arrive);
 var start=subBiz(outD,mk);
 var order=subBiz(start,1);
 var confirm=prevBizOrSame(order);
 var draftReq=subBiz(confirm,Math.max(dr,1));
 var quote=subBiz(draftReq,2);
 var steps=[
  ['견적 요청','품목·수량·인쇄 내용 정리해서 견적 받기',quote],
  ['시안 요청','로고 파일(AI·PDF·고해상도 PNG) 전달',draftReq],
  ['시안 확정','색상·위치·문구 오탈자 최종 확인',confirm],
  ['주문·결제 마감','결제·세금계산서 정보 확인',order],
  ['제작 시작','제작 '+mk+'영업일',start],
  ['출고','배송지·수령인 연락처 재확인',outD],
  ['도착','수량·파손 확인',arrive],
  ['행사 전 검수','포장·배포 동선 준비',inspect]
 ];
 var t=today0(),past=0,key=ymd(ev);
 var chk={};try{chk=JSON.parse((store()&&store().getItem(LS+'dday_chk_'+key))||'{}');}catch(e){}
 var html='<div class="kpis"><div class="kpi main"><div class="l">행사일</div><div class="v">'+kd(ev)+'</div></div><div class="kpi"><div class="l">오늘 기준</div><div class="v">D-'+Math.round((ev-t)/864e5)+'</div></div><div class="kpi"><div class="l">늦어도 견적 요청</div><div class="v">'+kd(quote)+'</div></div></div><ul class="check">';
 steps.forEach(function(s,i){var dn=Math.round((ev-s[2])/864e5),isPast=s[2]<t;if(isPast)past++;html+='<li class="'+(isPast?'past ':'')+(chk[i]?'done':'')+'"><input type="checkbox" data-i="'+i+'"'+(chk[i]?' checked':'')+'><span class="dn">D-'+dn+'</span><span class="nm">'+s[0]+'<div class="note" style="margin:0;font-weight:400">'+s[1]+'</div></span><span class="dt">'+kd(s[2])+(isPast?' <span class="late">지남</span>':'')+'</span></li>';});
 html+='</ul>';
 if(ev<t)html='<div class="warn">행사 날짜가 이미 지났어요. 날짜를 다시 확인해 주세요.</div>'+html;
 else if(past>0)html+='<div class="warn">'+past+'개 일정이 이미 지났어요(오늘 '+kd(t)+'). 빠른 제작이 가능한 품목인지 바로 상담해 보세요.</div>';
 else html+='<div class="okmsg">지금 시작하면 일정 안에 충분히 준비할 수 있어요.</div>';
 html+='<div class="note">※ 주말만 제외한 영업일 계산이에요. 공휴일·연휴, 품목별 제작 기간에 따라 달라질 수 있어요.</div>'+CTA;
 $('d_out').innerHTML=html;
 $('d_out').querySelectorAll('input[type=checkbox]').forEach(function(cb){cb.addEventListener('change',function(){chk[cb.dataset.i]=cb.checked;cb.closest('li').classList.toggle('done',cb.checked);var s=store();if(s)try{s.setItem(LS+'dday_chk_'+key,JSON.stringify(chk));}catch(e){}});});
}
$('d_calc').addEventListener('click',calcDday);

/* 4 Calendar */
var LUNAR='<span class="note">(음력 기준 날짜는 매년 달라요)</span>';
var CAL=[
 {e:['신정(1/1) · 새해 인사','설날 연휴 — 1월 또는 2월 '+LUNAR,'신년회·시무식','다이어리·플래너 수요 시즌'],p:['다이어리·플래너','탁상 달력','설 선물세트','텀블러','핫팩·방한용품']},
 {e:['설날 연휴 — 2월일 수도 있어요 '+LUNAR,'졸업식 시즌','밸런타인데이(2/14)','정월대보름 '+LUNAR],p:['졸업 기념품','꽃다발 대체 선물','초콜릿 패키지','머그컵','명함지갑']},
 {e:['삼일절(3/1)','입학·개학 시즌','화이트데이(3/14)','신입사원 입사·봄 워크숍'],p:['학용품 세트','에코백','텀블러','웰컴키트','사탕 패키지']},
 {e:['식목일(4/5)','과학의 날(4/21)','봄 박람회·전시회 시즌','장애인의 날(4/20)'],p:['씨앗·화분 키트','친환경 판촉물','우산','부채(초여름 대비)','박람회 배포용 볼펜']},
 {e:['근로자의 날(5/1)','어린이날(5/5)','어버이날(5/8)','스승의날(5/15)','부처님오신날 '+LUNAR,'가정의 달'],p:['어린이 선물','카네이션 패키지','건강용품','감사 선물세트','직원 복지 선물']},
 {e:['현충일(6/6)','초여름·장마 시작','상반기 결산·하반기 킥오프'],p:['우산·우비','손선풍기','쿨토시','부채','텀블러']},
 {e:['여름휴가 시즌 시작','초복 '+LUNAR,'여름 이벤트·캠페인'],p:['비치타월','쿨링 용품','방수팩','아이스박스·보냉백','선크림 파우치']},
 {e:['광복절(8/15)','여름휴가 피크','중복·말복','하반기 마케팅 준비'],p:['손선풍기','보냉 텀블러','캠핑용품','추석 선물 사전 준비']},
 {e:['추석 연휴 — 9월 또는 10월 '+LUNAR,'가을 행사·체육대회 시즌','하반기 박람회'],p:['추석 선물세트','생활용품 세트','체육대회 단체티','타월 세트','보조배터리']},
 {e:['개천절(10/3)','한글날(10/9)','추석 연휴일 수도 있어요 '+LUNAR,'가을 축제·창립기념일 시즌','할로윈(10/31)'],p:['창립기념품','축제 배포용 굿즈','무릎담요','보온 텀블러','할로윈 사탕 패키지']},
 {e:['수능(보통 11월 셋째 주 목요일 전후, 매년 공지 확인)','빼빼로데이(11/11)','김장철','연말 선물 준비 시작'],p:['수능 응원 선물','빼빼로 패키지','핫팩','무릎담요','연말 선물세트 견적']},
 {e:['크리스마스(12/25)','연말·송년회','종무식','다음해 달력·다이어리 배포'],p:['탁상 달력·다이어리','송년회 경품','크리스마스 선물','방한용품 세트','고객 감사 선물']}
];
var calMonth=null;
function renderCal(m){
 calMonth=m;var s=store();if(s)try{s.setItem(LS+'cal',String(m));}catch(e){}
 var cur=new Date().getMonth();
 var bs='';for(var i=0;i<12;i++)bs+='<button data-m="'+i+'" class="'+(i===m?'active ':'')+(i===cur?'now':'')+'">'+(i+1)+'월'+(i===cur?' •':'')+'</button>';
 $('c_months').innerHTML=bs;
 $('c_months').querySelectorAll('button').forEach(function(b){b.addEventListener('click',function(){renderCal(+b.dataset.m);});});
 var d=CAL[m],nx=(m+1)%12;
 var html='<div class="mcard"><h3>'+(m+1)+'월 마케팅·판촉 포인트</h3><h4>주요 시즌 이슈·기념일</h4><ul>'+d.e.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul><h4>추천 판촉물 아이디어</h4><div class="chips">'+d.p.map(function(x){return '<span class="chip">'+x+'</span>';}).join('')+'</div>'+
  '<h4>미리 준비할 다음 달('+(nx+1)+'월)</h4><div class="chips">'+CAL[nx].p.slice(0,3).map(function(x){return '<span class="chip" style="border-color:var(--b);color:var(--b)">'+x+'</span>';}).join('')+'</div></div>';
 html+='<div class="note">※ 공휴일은 대표적인 날짜 기준이며 대체공휴일·임시공휴일은 해마다 달라요. 제작 기간을 생각해 최소 3~4주 전에 준비하세요.</div>'+CTA;
 $('c_out').innerHTML=html;
}

/* 5 Quote */
var QF=[['name','업체명','text','예: A업체'],['price','단가(원)','number','0'],['qty','수량','number','0'],['print','인쇄비(원)','number','0'],['plate','판비/동판비(원)','number','0'],['ship','배송비(원)','number','0'],['lead','납기(일)','number','0'],['vat','VAT','select',''],['memo','비고','text','']];
(function(){var h='<div></div>';for(var c=0;c<3;c++)h+='<div class="h">업체 '+(c+1)+'</div>';QF.forEach(function(f){h+='<div class="rl">'+f[1]+'</div>';for(var c=0;c<3;c++){var id='x_'+f[0]+'_'+c;if(f[2]==='select')h+='<select id="'+id+'"><option value="exc">VAT 별도</option><option value="inc">VAT 포함</option></select>';else h+='<input type="'+f[2]+'" id="'+id+'" placeholder="'+f[3]+'"'+(f[2]==='number'?' min="0"':'')+'>';}});$('qg').innerHTML=h;})();
var X_IDS=[];QF.forEach(function(f){for(var c=0;c<3;c++)X_IDS.push('x_'+f[0]+'_'+c);});
function calcQuote(){
 save('quote',X_IDS);
 var rows=[];
 for(var c=0;c<3;c++){var p=num('x_price_'+c),q=num('x_qty_'+c);var nm=$('x_name_'+c).value.trim();if(p<=0||q<=0){if(nm||p||q)rows.push({c:c,name:nm||('업체 '+(c+1)),invalid:true});continue;}
  var sub=p*q+num('x_print_'+c)+num('x_plate_'+c)+num('x_ship_'+c);var inc=$('x_vat_'+c).value==='inc';var total=inc?sub:sub*1.1;
  rows.push({c:c,name:nm||('업체 '+(c+1)),total:total,sub:inc?sub/1.1:sub,unit:total/q,qty:q,lead:num('x_lead_'+c),leadSet:$('x_lead_'+c).value!=='',inc:inc,memo:$('x_memo_'+c).value});}
 var v=rows.filter(function(r){return !r.invalid;});
 if(!v.length){$('x_out').innerHTML='<div class="warn">최소 1개 업체의 단가와 수량을 입력해 주세요.</div>';return;}
 var minU=Math.min.apply(null,v.map(function(r){return r.unit;}));
 var lv=v.filter(function(r){return r.leadSet;});var minL=lv.length?Math.min.apply(null,lv.map(function(r){return r.lead;})):null;
 var html='<table class="t"><tr><th>업체</th><th style="text-align:right">공급가</th><th style="text-align:right">총액(VAT 포함)</th><th style="text-align:right">개당 실단가</th><th style="text-align:right">납기</th><th>비고</th></tr>';
 v.forEach(function(r){var cheap=v.length>1&&Math.abs(r.unit-minU)<0.5,fast=lv.length>1&&r.leadSet&&r.lead===minL;
  html+='<tr><td><b>'+esc(r.name)+'</b>'+(cheap?'<span class="badge c">최저가</span>':'')+(fast?'<span class="badge f">최단납기</span>':'')+'<div class="note" style="margin:0">'+(r.inc?'VAT 포함 견적':'VAT 별도 견적 → 10% 더함')+' · '+fmt(r.qty)+'개</div></td><td class="n">'+won(r.sub)+'</td><td class="n'+(cheap?' best':'')+'">'+won(r.total)+'</td><td class="n'+(cheap?' best':'')+'">'+won(r.unit)+'</td><td class="n'+(fast?' best':'')+'">'+(r.leadSet?fmt(r.lead)+'일':'-')+'</td><td>'+esc(r.memo)+'</td></tr>';});
 html+='</table>';
 rows.filter(function(r){return r.invalid;}).forEach(function(r){html+='<div class="warn">'+esc(r.name)+': 단가와 수량을 입력해야 비교에 포함돼요.</div>';});
 html+='<div class="note">※ 개당 실단가 = (단가×수량 + 인쇄비 + 판비 + 배송비, VAT 포함 기준) ÷ 수량. 수량이 다르면 총액보다 개당 실단가로 비교하세요. 샘플 비용·재고·A/S 조건도 함께 확인하세요.</div>'+CTA;
 $('x_out').innerHTML=html;
}
$('x_calc').addEventListener('click',calcQuote);
$('x_print').addEventListener('click',function(){calcQuote();printSection($('x_out'),'견적 비교표');});

/* 5 Proposal */
var PR_HEAD=['pr_to','pr_person','pr_event','pr_date','pr_valid','pr_memo'];
var PR_ITEMS=[];
var PR_DRAG=null;
function prToday(){var t=new Date();return t.getFullYear()+'-'+('0'+(t.getMonth()+1)).slice(-2)+'-'+('0'+t.getDate()).slice(-2);}
function prUid(){return 'p'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);}
function prVat(){var el=root.querySelector('input[name="pr_vat"]:checked');return el?el.value:'exc';}
function prSave(){
 var o={items:PR_ITEMS,vat:prVat()};
 PR_HEAD.forEach(function(i){o[i]=$(i).value;});
 var s=store();if(!s)return;
 try{s.setItem(LS+'proposal',JSON.stringify(o));}catch(e){}
}
function prLoad(){
 var s=store();if(!s)return false;
 var o;try{o=JSON.parse(s.getItem(LS+'proposal')||'null');}catch(e){o=null;}
 if(!o)return false;
 PR_HEAD.forEach(function(i){if(o[i]!=null)$(i).value=o[i];});
 if(o.vat){var el=root.querySelector('input[name="pr_vat"][value="'+o.vat+'"]');if(el)el.checked=true;}
 PR_ITEMS=Array.isArray(o.items)?o.items:[];
 return true;
}
function prAbs(src,base){
 if(!src)return '';
 src=String(src).trim();
 if(/^https?:\/\//i.test(src)) return src.replace(/^http:\/\//i,'https://');
 if(src.indexOf('//')===0) return 'https:'+src;
 if(src.charAt(0)==='/') return 'https://www.ever1004.com'+src;
 try{return new URL(src, base||'https://www.ever1004.com/').href;}catch(e){return src;}
}
function prParseUrl(url){
 var out={raw:url,canonical:url,p_idx:''};
 try{
  var u=new URL(url, 'https://www.ever1004.com/');
  var id=u.searchParams.get('p_idx')||u.searchParams.get('P_IDX')||'';
  if(!id){var m=/p_idx=(\d+)/i.exec(url);if(m)id=m[1];}
  out.p_idx=id||'';
  if(id) out.canonical='https://www.ever1004.com/product_w/product_view.asp?p_idx='+id;
  else if(/ever1004\.com/i.test(u.hostname)) out.canonical=u.href;
 }catch(e){}
 return out;
}
function prTxt(el){return el?(el.textContent||'').replace(/\s+/g,' ').trim():'';}
function prParseNum(s){var v=parseFloat(String(s||'').replace(/,/g,''));return isFinite(v)?v:0;}
function prParseDoc(doc, pageUrl){
 var name='', img='', price=0, note='';
 var ogt=doc.querySelector('meta[property="og:title"]');
 if(ogt) name=(ogt.getAttribute('content')||'').trim();
 if(!name) name=prTxt(doc.querySelector('.ProductViewTitle .Title'));
 var ogi=doc.querySelector('meta[property="og:image"]');
 if(ogi) img=ogi.getAttribute('content')||'';
 if(!img){var im=doc.querySelector('#target_img'); if(im) img=im.getAttribute('src')||'';}
 img=prAbs(img, pageUrl);
 var tb=doc.querySelector('table.BuyType2');
 if(tb){
  var qs=[],ps=[];
  tb.querySelectorAll('tr').forEach(function(tr){
   var th=prTxt(tr.querySelector('th'));
   var vals=[];tr.querySelectorAll('td').forEach(function(td){vals.push(prTxt(td));});
   if(/수\s*량/.test(th)) qs=vals;
   else if(/단\s*가/.test(th)) ps=vals;
  });
  if(ps.length){
   price=prParseNum(ps[ps.length-1]);
   if(qs.length===ps.length) note='기본 '+qs[qs.length-1]+'개 기준 단가';
  }
 }
 var unit=prTxt(doc.querySelector('.ProductViewTitle2'));
 if(/부가세\s*별도/.test(unit)) note+=(note?', ':'')+'부가세 별도';
 return {name:name,img:img,price:price,note:note};
}
function prDecodeBuf(buf){
 var u8=new Uint8Array(buf);
 var head=new TextDecoder('utf-8').decode(u8.subarray(0,1200));
 var euc=/charset\s*=\s*["']?\s*(euc-kr|ks_c_5601-1987|windows-949)/i.test(head);
 function dec(label){try{return new TextDecoder(label).decode(u8);}catch(e){return '';}}
 if(euc){var k=dec('euc-kr'); if(k) return k;}
 var u=dec('utf-8');
 if(/�/.test(u) || (u && !/[\uac00-\ud7a3]/.test(u) && /charset\s*=\s*["']?\s*euc-kr/i.test(head))){
  var k2=dec('euc-kr'); if(k2) return k2;
 }
 return u;
}
function prLooksHtml(html){
 return html && html.length>1000 && /ProductViewTitle|og:title|og:image|BuyType2|target_img/i.test(html);
}
function prFetch(url){
 return new Promise(function(resolve,reject){
  var done=false;
  function ok(v){if(done)return;done=true;resolve(v);}
  function fail(e){if(done)return;done=true;reject(e||new Error('fail'));}
  var t=setTimeout(function(){fail(new Error('timeout'));},8000);
  function wrap(p){p.then(function(v){clearTimeout(t);ok(v);},function(e){/* try next */});return p;}
  var triedIframe=false;
  function tryIframe(){
   if(triedIframe) {clearTimeout(t);fail(new Error('no-data'));return;}
   triedIframe=true;
   var ifr=document.createElement('iframe');
   ifr.setAttribute('aria-hidden','true');
   ifr.style.cssText='position:absolute;left:-9999px;width:0;height:0;border:0;';
   var timer=setTimeout(function(){try{document.body.removeChild(ifr);}catch(e){} fail(new Error('iframe-timeout'));},7000);
   ifr.onload=function(){
    clearTimeout(timer);
    try{
     var doc=ifr.contentDocument;
     if(!doc) throw new Error('cross-origin');
     var parsed=prParseDoc(doc, url);
     try{document.body.removeChild(ifr);}catch(e){}
     if(parsed.name||parsed.img||parsed.price) ok(parsed); else fail(new Error('empty'));
    }catch(e){ try{document.body.removeChild(ifr);}catch(x){} fail(e); }
   };
   ifr.onerror=function(){clearTimeout(timer);try{document.body.removeChild(ifr);}catch(e){} fail(new Error('iframe'));};
   ifr.src=url;
   document.body.appendChild(ifr);
  }
  if(typeof fetch==='function'){
   fetch(url, {mode:'cors', credentials:'omit', headers:{'Accept':'text/html'}})
    .then(function(r){ if(!r.ok) throw new Error('http'); return r.arrayBuffer(); })
    .then(function(buf){
      var html=prDecodeBuf(buf);
      if(!prLooksHtml(html)) throw new Error('stub');
      var doc=new DOMParser().parseFromString(html,'text/html');
      var parsed=prParseDoc(doc, url);
      if(!parsed.name && !parsed.img && !parsed.price) throw new Error('empty');
      clearTimeout(t); ok(parsed);
    })
    .catch(function(){ tryIframe(); });
  } else tryIframe();
 });
}
function prNew(partial){
 return {id:prUid(),url:partial.url||'',name:partial.name||'',img:partial.img||'',price:partial.price||0,qty:partial.qty||1,note:partial.note||'',status:partial.status||''};
}
function prTotals(){
 var sum=0;
 PR_ITEMS.forEach(function(it){sum += (Number(it.price)||0)*(Number(it.qty)||0);});
 var vatMode=prVat();
 if(vatMode==='inc'){var supply=sum/1.1, vat=sum-supply; return {sum:sum,supply:supply,vat:vat,total:sum,inc:true};}
 return {sum:sum,supply:sum,vat:sum*0.1,total:sum*1.1,inc:false};
}
function prRenderRows(){
 var box=$('pr_rows');
 if(!PR_ITEMS.length){
  box.innerHTML='<div class="pr-empty">아직 담긴 상품이 없어요. 위쪽에 상품 링크를 넣고 추가해 주세요.</div>';
  prSave();return;
 }
 box.innerHTML=PR_ITEMS.map(function(it,i){
  var line=(Number(it.price)||0)*(Number(it.qty)||0);
  var st=it.status==='manual'?'<p class="pr-fetch">상품 정보를 자동으로 가져오지 못했어요. 이름·단가·이미지 주소를 직접 입력해 주세요.</p>':'';
  if(it.status==='loading') st='<p class="pr-fetch">상품 정보를 불러오는 중이에요…</p>';
  var img=it.img?esc(it.img):'';
  return '<div class="pr-row" draggable="true" data-id="'+it.id+'">'+
   '<div class="pr-move"><button type="button" data-act="up" data-id="'+it.id+'" title="위로" '+(i===0?'disabled':'')+'>▲</button>'+
   '<button type="button" data-act="down" data-id="'+it.id+'" title="아래로" '+(i===PR_ITEMS.length-1?'disabled':'')+'>▼</button></div>'+
   '<div class="pr-thumb">'+(it.img?'<img src="'+img+'" alt="" data-id="'+it.id+'">':'<div class="ph">이미지 없음</div>')+'</div>'+
   '<div class="pr-main">'+
    '<label class="f">상품명<input type="text" data-f="name" data-id="'+it.id+'" value="'+esc(it.name)+'" placeholder="상품 이름"></label>'+
    '<label class="f">단가(원)<input type="number" data-f="price" data-id="'+it.id+'" min="0" value="'+(it.price||'')+'"></label>'+
    '<label class="f">수량<input type="number" data-f="qty" data-id="'+it.id+'" min="1" value="'+(it.qty||1)+'"></label>'+
    '<label class="f full">상품 링크<input type="text" data-f="url" data-id="'+it.id+'" value="'+esc(it.url)+'" placeholder="https://www.ever1004.com/..."></label>'+
    '<label class="f full">이미지 URL<input type="text" data-f="img" data-id="'+it.id+'" value="'+img+'" placeholder="https://"></label>'+
    '<label class="f full">인쇄/옵션 메모<input type="text" data-f="note" data-id="'+it.id+'" value="'+esc(it.note)+'" placeholder="예: 1도 실크인쇄, 로고 위치 중앙"></label>'+
    (st?'<div class="full">'+st+'</div>':'')+
   '</div>'+
   '<div class="pr-side"><div class="pr-line">'+won(line)+'</div>'+
    '<button type="button" class="btn ghost" data-act="del" data-id="'+it.id+'">삭제</button></div>'+
  '</div>';
 }).join('');
 prBindRows();
 prSave();
}
function prFind(id){for(var i=0;i<PR_ITEMS.length;i++){if(PR_ITEMS[i].id===id)return i;}return -1;}
function prBindRows(){
 var box=$('pr_rows');
 box.querySelectorAll('input[data-f]').forEach(function(inp){
  var ev=inp.type==='number'||inp.type==='text'||inp.tagName==='INPUT'?'input':'change';
  inp.addEventListener('input',function(){
   var i=prFind(inp.dataset.id); if(i<0)return;
   var f=inp.dataset.f, v=inp.value;
   if(f==='price'||f==='qty') v=prParseNum(v);
   if(f==='qty' && v<1) v=1;
   PR_ITEMS[i][f]=v;
   if(f==='img'){
    var thumb=inp.closest('.pr-row').querySelector('.pr-thumb');
    var img=thumb.querySelector('img');
    var ph=thumb.querySelector('.ph');
    v=prAbs(String(v));
    if(v){
     if(!img){img=document.createElement('img');img.alt='';thumb.innerHTML='';thumb.appendChild(img);}
     img.src=v; img.style.display='';
     if(ph) ph.style.display='none';
    } else {
     if(img) img.style.display='none';
     if(!thumb.querySelector('.ph')){var d=document.createElement('div');d.className='ph';d.textContent='이미지 없음';thumb.appendChild(d);}
    }
    PR_ITEMS[i].img=v;
   }
   var lineEl=inp.closest('.pr-row').querySelector('.pr-line');
   if(lineEl) lineEl.textContent=won((Number(PR_ITEMS[i].price)||0)*(Number(PR_ITEMS[i].qty)||0));
   prSave();
  });
 });
 box.querySelectorAll('img').forEach(function(img){
  img.addEventListener('error',function(){img.style.display='none';});
 });
 box.querySelectorAll('[data-act]').forEach(function(b){
  b.addEventListener('click',function(){
   var id=b.dataset.id, act=b.dataset.act, i=prFind(id);
   if(i<0)return;
   if(act==='del') PR_ITEMS.splice(i,1);
   if(act==='up' && i>0){var t=PR_ITEMS[i-1];PR_ITEMS[i-1]=PR_ITEMS[i];PR_ITEMS[i]=t;}
   if(act==='down' && i<PR_ITEMS.length-1){var t2=PR_ITEMS[i+1];PR_ITEMS[i+1]=PR_ITEMS[i];PR_ITEMS[i]=t2;}
   prRenderRows();
  });
 });
 box.querySelectorAll('.pr-row').forEach(function(row){
  row.addEventListener('dragstart',function(e){PR_DRAG=row.dataset.id;row.style.opacity='.6';if(e.dataTransfer)e.dataTransfer.setData('text/plain',PR_DRAG);});
  row.addEventListener('dragend',function(){PR_DRAG=null;row.style.opacity='';box.querySelectorAll('.pr-row').forEach(function(r){r.classList.remove('dragover');});});
  row.addEventListener('dragover',function(e){e.preventDefault();row.classList.add('dragover');});
  row.addEventListener('dragleave',function(){row.classList.remove('dragover');});
  row.addEventListener('drop',function(e){
   e.preventDefault();row.classList.remove('dragover');
   var from=prFind(PR_DRAG|| (e.dataTransfer&&e.dataTransfer.getData('text/plain')));
   var to=prFind(row.dataset.id);
   if(from<0||to<0||from===to)return;
   var item=PR_ITEMS.splice(from,1)[0];
   PR_ITEMS.splice(to,0,item);
   prRenderRows();
  });
 });
}
function prAddBlank(partial, status){
 var it=prNew(partial||{});
 it.status=status||'';
 PR_ITEMS.push(it);
 prRenderRows();
 return it;
}
function prAddFromUrl(){
 var raw=($('pr_url').value||'').trim();
 if(!raw){$('pr_out').innerHTML='<div class="warn">상품 페이지 주소를 붙여 넣어 주세요.</div>';return;}
 if(!/^https?:\/\//i.test(raw)) raw='https://'+raw.replace(/^\/+/,'');
 var meta=prParseUrl(raw);
 var it=prAddBlank({url:meta.canonical, name: meta.p_idx?('상품번호 '+meta.p_idx):''}, 'loading');
 $('pr_url').value='';
 $('pr_out').innerHTML='';
 prFetch(meta.canonical).then(function(p){
  var i=prFind(it.id); if(i<0)return;
  if(p.name) PR_ITEMS[i].name=p.name;
  if(p.img) PR_ITEMS[i].img=p.img;
  if(p.price) PR_ITEMS[i].price=p.price;
  if(p.note && !PR_ITEMS[i].note) PR_ITEMS[i].note=p.note;
  PR_ITEMS[i].status='';
  prRenderRows();
 }).catch(function(){
  var i=prFind(it.id); if(i<0)return;
  PR_ITEMS[i].status='manual';
  prRenderRows();
 });
}
function prLogoSrc(){
 var img=root.querySelector('header.top .brand img');
 return img?img.getAttribute('src'):'';
}
function prBuild(){
 if(!PR_ITEMS.length){$('pr_out').innerHTML='<div class="warn">제안서에 담을 상품을 먼저 추가해 주세요.</div>';$('pr_sheet').hidden=true;$('pr_sheet').innerHTML='';return;}
 prSave();
 var tot=prTotals();
 var logo=prLogoSrc();
 var to=esc($('pr_to').value||'-'), person=esc($('pr_person').value||'-'), ev=esc($('pr_event').value||'-');
 var date=esc((function(s){var m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(s||'');return m?m[1]+'.'+m[2]+'.'+m[3]:(s||'-');})($('pr_date').value)), valid=esc($('pr_valid').value||'-');
 var memo=$('pr_memo').value;
 var rows=PR_ITEMS.map(function(it,i){
  var href=esc(it.url||'#');
  var name=esc(it.name||('상품 '+(i+1)));
  var nameHtml=it.url?'<a href="'+href+'" target="_blank" rel="noopener">'+name+'</a>':name;
  var thumb=it.img?'<img src="'+esc(it.img)+'" alt="">':'';
  var note=it.note?'<div class="note-cell">'+esc(it.note)+'</div>':'';
  var line=(Number(it.price)||0)*(Number(it.qty)||0);
  return '<tr><td>'+thumb+'</td><td>'+nameHtml+note+'</td><td class="n">'+fmt(it.qty||0)+'</td><td class="n">'+won(it.price||0)+'</td><td class="n">'+won(line)+'</td></tr>';
 }).join('');
 var html='<div class="pr-sheet-head"><div><p class="pr-sheet-kicker">EVER1004 PRO TOOLS</p><h2 class="pr-title">판촉물 제안서</h2></div>'+
  '<a class="pr-sheet-brand" href="https://www.ever1004.com" target="_blank" rel="noopener">'+(logo?'<img src="'+logo+'" alt="에버천사 로고">':'')+'<span class="url">ever1004.com</span></a></div>'+
  '<div class="pr-meta">'+
   '<div><span class="k">받는 곳</span><span class="v">'+to+'</span></div>'+
   '<div><span class="k">담당자</span><span class="v">'+person+'</span></div>'+
   '<div><span class="k">행사명/용도</span><span class="v">'+ev+'</span></div>'+
   '<div><span class="k">제안일</span><span class="v">'+date+'</span></div>'+
   '<div><span class="k">유효기간</span><span class="v">'+valid+'</span></div>'+
   '<div><span class="k">금액 기준</span><span class="v">'+(tot.inc?'VAT 포함':'VAT 별도')+'</span></div>'+
  '</div>'+
  '<table><thead><tr><th style="width:64px">이미지</th><th>품목</th><th class="n" style="text-align:right;width:70px">수량</th><th class="n" style="text-align:right;width:110px">단가</th><th class="n" style="text-align:right;width:120px">금액</th></tr></thead><tbody>'+rows+'</tbody></table>'+
  '<div class="pr-sums">'+
   '<div><span>공급가 합계</span><span>'+won(tot.supply)+'</span></div>'+
   '<div><span>VAT (10%)</span><span>'+won(tot.vat)+'</span></div>'+
   '<div class="grand"><span>합계 (VAT 포함)</span><span>'+won(tot.total)+'</span></div>'+
  '</div>'+
  (memo?'<div class="pr-sheet-memo"><div class="k">메모</div>'+esc(memo)+'</div>':'')+
  '<div class="pr-sheet-foot"><a href="https://www.ever1004.com" target="_blank" rel="noopener">에버천사 ever1004.com</a> · (주)벨카리노 · <a href="https://ever1004.channel.io" target="_blank" rel="noopener">채널톡 상담</a>'+
  '<div style="margin-top:6px">이 제안서의 단가·납기·인쇄 가능 여부는 수량과 사양에 따라 달라질 수 있어요. 정확한 견적은 상담으로 확인해 주세요.</div></div>';
 $('pr_sheet').innerHTML=html;
 $('pr_sheet').hidden=false;
 $('pr_out').innerHTML='';
 try{$('pr_sheet').scrollIntoView({behavior:'smooth',block:'start'});}catch(e){}
}
function prPrint(){
 if($('pr_sheet').hidden || !$('pr_sheet').innerHTML){prBuild(); if($('pr_sheet').hidden) return;}
 document.body.classList.add('print-proposal');
 document.body.classList.remove('print-quote');
 window.print();
}
function prCopy(){
 if(!PR_ITEMS.length){$('pr_out').innerHTML='<div class="warn">복사할 상품이 없어요.</div>';return;}
 var tot=prTotals();
 var lines=['에버천사 판촉물 제안서','받는 곳: '+($('pr_to').value||'-'),'담당자: '+($('pr_person').value||'-'),'행사명/용도: '+($('pr_event').value||'-'),'제안일: '+($('pr_date').value||'-'),'유효기간: '+($('pr_valid').value||'-'),'금액 기준: '+(tot.inc?'VAT 포함':'VAT 별도'),''];
 PR_ITEMS.forEach(function(it,i){
  var line=(Number(it.price)||0)*(Number(it.qty)||0);
  lines.push((i+1)+'. '+(it.name||('상품 '+(i+1))));
  if(it.url) lines.push('   '+it.url);
  lines.push('   단가 '+won(it.price||0)+' × '+fmt(it.qty||0)+'개 = '+won(line));
  if(it.note) lines.push('   인쇄/옵션: '+it.note);
  lines.push('');
 });
 lines.push('공급가 합계: '+won(tot.supply));
 lines.push('VAT (10%): '+won(tot.vat));
 lines.push('합계 (VAT 포함): '+won(tot.total));
 if($('pr_memo').value){lines.push('');lines.push('메모:');lines.push($('pr_memo').value);}
 lines.push(''); lines.push('에버천사 ever1004.com · (주)벨카리노');
 lines.push('https://www.ever1004.com');
 var text=lines.join('\n');
 function ok(){$('pr_out').innerHTML='<div class="okmsg">제안서 내용을 클립보드에 복사했어요.</div>';}
 function fail(){$('pr_out').innerHTML='<div class="warn">복사에 실패했어요. 아래 내용을 직접 복사해 주세요.</div><textarea readonly style="margin-top:8px;min-height:160px">'+esc(text)+'</textarea>';}
 if(navigator.clipboard&&navigator.clipboard.writeText){
  navigator.clipboard.writeText(text).then(ok).catch(fail);
 }else{
  var ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();
  try{document.execCommand('copy');ok();}catch(e){fail();}
  document.body.removeChild(ta);
 }
}
function prReset(){
 PR_ITEMS=[];
 PR_HEAD.forEach(function(i){$(i).value='';});
 $('pr_date').value=prToday();
 root.querySelector('input[name="pr_vat"][value="exc"]').checked=true;
 $('pr_url').value='';
 $('pr_sheet').hidden=true;$('pr_sheet').innerHTML='';
 $('pr_out').innerHTML='';
 prRenderRows();
 var s=store();if(s)try{s.removeItem(LS+'proposal');}catch(e){}
}
$('pr_add').addEventListener('click',prAddFromUrl);
$('pr_add_blank').addEventListener('click',function(){prAddBlank({}, '');});
$('pr_build').addEventListener('click',prBuild);
$('pr_print').addEventListener('click',prPrint);
$('pr_copy').addEventListener('click',prCopy);
PR_HEAD.forEach(function(i){$(i).addEventListener('input',prSave);});
root.querySelectorAll('input[name="pr_vat"]').forEach(function(r){r.addEventListener('change',function(){prSave();if(!$('pr_sheet').hidden)prBuild();});});



/* Reset */
var RESET={budget:[B_IDS,function(){root.querySelector('input[name="b_mode"][value="per"]').checked=true;root.querySelector('input[name="b_vat"][value="inc"]').checked=true;bModeLabel();},'b_out'],
 dday:[D_IDS,function(){$('d_make').value=7;$('d_ship').value=2;$('d_draft').value=2;},'d_out'],
 quote:[X_IDS,function(){for(var c=0;c<3;c++)$('x_vat_'+c).value='exc';},'x_out'],
 proposal:[PR_HEAD,function(){PR_ITEMS=[];$('pr_date').value=prToday();root.querySelector('input[name="pr_vat"][value="exc"]').checked=true;$('pr_url').value='';$('pr_sheet').hidden=true;$('pr_sheet').innerHTML='';prRenderRows();},'pr_out']};
root.querySelectorAll('[data-reset]').forEach(function(b){b.addEventListener('click',function(){var k=b.dataset.reset,r=RESET[k];r[0].forEach(function(i){var el=$(i);if(el.tagName!=='SELECT')el.value='';});r[1]();$(r[2]).innerHTML='';clearLS(k);});});

/* Enter key triggers calc */
[['tool-budget',calcBudget],['tool-dday',calcDday],['tool-quote',calcQuote],['tool-proposal',function(){if(root.activeElement&&root.activeElement.id==='pr_url')prAddFromUrl();}]].forEach(function(p){$(p[0]).addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target.tagName==='INPUT')p[1]();});});

/* Init: restore */
if(load('budget',B_IDS,B_R)){bModeLabel();if(num('b_people')&&num('b_amt'))calcBudget();}
if(load('dday',D_IDS)&&$('d_date').value)calcDday();
if(load('quote',X_IDS))calcQuote();
if(!prLoad()){/* no draft */}
if(!$('pr_date').value)$('pr_date').value=prToday();
prRenderRows();
var cm=new Date().getMonth();try{var sv=store()&&store().getItem(LS+'cal');if(sv!=null&&sv!=='')cm=+sv;}catch(e){}
renderCal(cm);
try{var st=store()&&store().getItem(LS+'tab');if(st&&$('tool-'+st))show(st);}catch(e){}

/* ===== same-origin auto-fill overrides (hoisted; win over originals) ===== */
function prNormalizeInput(raw){
  raw=String(raw||'').trim();
  if(!raw) return '';
  if(/^https?:\/\//i.test(raw)) return raw;
  if(/^\/\//.test(raw)) return 'https:'+raw;
  if(raw.charAt(0)==='/' || /product_view\.asp/i.test(raw) || /^(www\.)?ever1004\.com/i.test(raw)){
    try{ return new URL(raw, 'https://www.ever1004.com/').href; }catch(e){}
  }
  return 'https://'+raw.replace(/^\/+/,'');
}
function prParseUrl(url){
  var out={raw:url,canonical:url,p_idx:''};
  try{
    var u=new URL(url, 'https://www.ever1004.com/');
    var id=u.searchParams.get('p_idx')||u.searchParams.get('P_IDX')||'';
    if(!id){var m=/p_idx=(\d+)/i.exec(url);if(m)id=m[1];}
    out.p_idx=id||'';
    if(id) out.canonical='https://www.ever1004.com/product_w/product_view.asp?p_idx='+id;
    else if(/ever1004\.com$/i.test(u.hostname)) out.canonical=u.href;
  }catch(e){}
  return out;
}
function prParseDoc(doc, pageUrl){
  var name='', img='', price=0, note='';
  name=prTxt(doc.querySelector('.ProductViewTitle .Title'));
  if(!name){
    var ogt=doc.querySelector('meta[property="og:title"]');
    if(ogt) name=(ogt.getAttribute('content')||'').trim();
  }
  if(!name){
    var tEl=doc.querySelector('title');
    var t=prTxt(tEl);
    if(t && !/여성기업\s*에버천사/.test(t)) name=t;
  }
  var im=doc.querySelector('#target_img');
  if(im) img=im.getAttribute('src')||im.getAttribute('data-src')||'';
  if(!img){
    var ogi=doc.querySelector('meta[property="og:image"]');
    if(ogi) img=ogi.getAttribute('content')||'';
  }
  img=prAbs(img, pageUrl);

  var baseQty=null;
  var t2txt=prTxt(doc.querySelector('.ProductViewTitle2'));
  var bm=/기본\s*([\d,]+)\s*개/.exec(t2txt);
  if(bm) baseQty=prParseNum(bm[1]);
  if(/부가세\s*별도/.test(t2txt)) note+=(note?', ':'')+'부가세 별도';

  var tb=doc.querySelector('table.BuyType2');
  if(tb){
    var qs=[], ps=[];
    tb.querySelectorAll('tr').forEach(function(tr){
      var th=prTxt(tr.querySelector('th'));
      var vals=[];
      tr.querySelectorAll('td').forEach(function(td){vals.push(prTxt(td));});
      if(/수\s*량/.test(th)) qs=vals.map(prParseNum);
      else if(/판매가/.test(th) || /단\s*가/.test(th)) ps=vals.map(prParseNum);
    });
    if(ps.length){
      var idx=ps.length-1;
      if(qs.length===ps.length){
        var minQ=Infinity;
        for(var i=0;i<qs.length;i++){
          if(qs[i]>0 && qs[i]<=minQ){ minQ=qs[i]; idx=i; }
        }
        if(baseQty){
          for(var j=0;j<qs.length;j++){
            if(qs[j]===baseQty){ idx=j; break; }
          }
        }
        note=(note?note+', ':'')+'기본 '+fmt(qs[idx])+'개 기준 단가';
      }
      price=ps[idx]||0;
    }
  }
  if(!price){
    var bodyTxt=prTxt(doc.body||doc.documentElement);
    var bq=/기본\s*수량\s*[:：]?\s*([\d,]+)\s*개/.exec(bodyTxt) || /기본\s*([\d,]+)\s*개/.exec(bodyTxt);
    var bq2=bq?prParseNum(bq[1]):null;
    var tables=doc.querySelectorAll('table');
    for(var k=0;k<tables.length && !price;k++){
      var qs2=null, ps2=null;
      tables[k].querySelectorAll('tr').forEach(function(tr){
        var cells=tr.querySelectorAll('th,td'); if(cells.length<2) return;
        var head=prTxt(cells[0]).replace(/\s+/g,'');
        var vals=[]; for(var c=1;c<cells.length;c++) vals.push(prParseNum(prTxt(cells[c])));
        if(head==='수량' && !qs2) qs2=vals;
        else if((head==='단가'||head==='판매가') && !ps2) ps2=vals;
      });
      if(ps2 && ps2.some(function(v){return v>0;})){
        var id2=ps2.length-1;
        if(qs2 && qs2.length===ps2.length){
          var mq=Infinity; for(var a=0;a<qs2.length;a++){ if(qs2[a]>0 && qs2[a]<=mq){mq=qs2[a]; id2=a;} }
          if(bq2){ for(var b=0;b<qs2.length;b++){ if(qs2[b]===bq2){id2=b;break;} } }
          note=(note?note+', ':'')+'기본 '+fmt(qs2[id2])+'개 기준 단가';
        }
        price=ps2[id2]||0;
      }
    }
    if(!price){ var am=/적용\s*단가\s*([\d,]+)\s*원/.exec(bodyTxt); if(am) price=prParseNum(am[1]); }
  }
  return {name:name,img:img,price:price,note:note};
}
function prDecodeBuf(buf){
  var u8=new Uint8Array(buf);
  function dec(label){try{return new TextDecoder(label).decode(u8);}catch(e){return '';}}
  var euc=dec('euc-kr');
  var utf=dec('utf-8');
  var head=(utf||euc).slice(0,1600);
  if(/charset\s*=\s*["']?\s*utf-8/i.test(head) && utf && /[\uac00-\ud7a3]/.test(utf)) return utf;
  if(euc) return euc;
  return utf;
}
function prLooksHtml(html){
  return html && html.length>1000 && /ProductViewTitle|og:title|og:image|BuyType2|target_img/i.test(html);
}
function prSameOriginUrl(url){
  try{
    var base=(typeof location!=='undefined' && location.href) ? location.href : 'https://www.ever1004.com/';
    var u=new URL(url, base);
    if(typeof location!=='undefined' && /ever1004\.com$/i.test(location.hostname) && /ever1004\.com$/i.test(u.hostname)){
      return u.pathname + u.search + u.hash;
    }
    return u.href;
  }catch(e){ return url; }
}
function prFetch(url){
  return new Promise(function(resolve,reject){
    if(typeof fetch!=='function'){ reject(new Error('no-fetch')); return; }
    var fetchUrl=prSameOriginUrl(url);
    var finished=false;
    var t=setTimeout(function(){ if(!finished){ finished=true; reject(new Error('timeout')); } },12000);
    fetch(fetchUrl, {credentials:'same-origin', headers:{'Accept':'text/html'}})
      .then(function(r){ if(!r.ok) throw new Error('http '+r.status); return r.arrayBuffer(); })
      .then(function(buf){
        var html=prDecodeBuf(buf);
        if(!prLooksHtml(html)) throw new Error('stub');
        var doc=new DOMParser().parseFromString(html,'text/html');
        var parsed=prParseDoc(doc, url);
        if(!parsed.name && !parsed.img && !parsed.price) throw new Error('empty');
        if(finished) return;
        finished=true; clearTimeout(t); resolve(parsed);
      })
      .catch(function(e){ if(finished) return; finished=true; clearTimeout(t); reject(e); });
  });
}
function prAddFromUrl(){
  var raw=($('pr_url').value||'').trim();
  if(!raw){$('pr_out').innerHTML='<div class="warn">상품 페이지 주소를 붙여 넣어 주세요.</div>';return;}
  raw=prNormalizeInput(raw);
  var meta=prParseUrl(raw);
  var it=prAddBlank({url:meta.canonical, name: meta.p_idx?('상품번호 '+meta.p_idx):''}, 'loading');
  $('pr_url').value='';
  $('pr_out').innerHTML='';
  prFetch(meta.canonical).then(function(p){
    var i=prFind(it.id); if(i<0)return;
    var missing=[];
    if(p.name) PR_ITEMS[i].name=p.name; else missing.push('이름');
    if(p.img) PR_ITEMS[i].img=p.img; else missing.push('이미지');
    if(p.price) PR_ITEMS[i].price=p.price; else missing.push('단가');
    if(p.note && !PR_ITEMS[i].note) PR_ITEMS[i].note=p.note;
    PR_ITEMS[i].miss=missing;
    PR_ITEMS[i].status=missing.length?'partial':'';
    prRenderRows();
  }).catch(function(){
    var i=prFind(it.id); if(i<0)return;
    PR_ITEMS[i].status='manual';
    prRenderRows();
  });
}
function printWindow(title, inner, extraCss){
  var w=window.open('', 'ever-ptool-print', 'noopener,width=900,height=1200');
  if(!w){
    if($('pr_out')) $('pr_out').innerHTML='<div class="warn">팝업이 차단되어 인쇄 창을 열 수 없어요. 브라우저에서 팝업을 허용해 주세요.</div>';
    return null;
  }
  var fontLinks='<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">'
    +'<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&family=Noto+Serif+KR:wght@600;700&display=swap" rel="stylesheet">';
  var html='<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><title>'+esc(title||'인쇄')+'</title>'
    +fontLinks+'<style>'+TOOL_CSS+'\n'+(extraCss||'')
    +'\n@page{size:A4;margin:12mm}body,.et-root{background:#fff;margin:0;padding:0;min-height:0}'
    +'\n.et-close,header.top,nav.tabs,footer,.btnrow,.cta,.noprint,.pr-form,.pr-actions{display:none!important}'
    +'\n</style></head><body><div class="et-root" style="background:#fff;padding:0">'+inner+'</div></body></html>';
  w.document.open();
  w.document.write(html);
  w.document.close();
  function go(){ try{ w.focus(); w.print(); }catch(e){} }
  var pending=0;
  try{
    var imgs=w.document.images;
    for(var i=0;i<imgs.length;i++){
      if(!imgs[i].complete){ pending++; imgs[i].addEventListener('load',function(){pending--; if(pending<=0) go();}); imgs[i].addEventListener('error',function(){pending--; if(pending<=0) go();}); }
    }
  }catch(e){}
  if(pending<=0) setTimeout(go, 350);
  else setTimeout(go, 1500);
  return w;
}
function prPrint(){
  if($('pr_sheet').hidden || !$('pr_sheet').innerHTML){prBuild(); if($('pr_sheet').hidden) return;}
  printWindow('판촉물 제안서', $('pr_sheet').outerHTML);
}
function printSection(el, title){
  if(!el || !el.innerHTML){ return; }
  printWindow(title||'인쇄', el.innerHTML);
}
function prLogoSrc(){
  var img=root.querySelector('header.top .brand img');
  return img?img.getAttribute('src'):'';
}

} /* end initTool */

window.addEventListener('hashchange', onHash);
document.addEventListener('keydown', function(e){
  if(e.key==='Escape' && isActive() && host && host.style.display!=='none'){
    var tag=(root && root.activeElement && root.activeElement.tagName)||'';
    /* still close — overlay should dismiss */
    closeTool();
  }
});
if(isActive()) onHash();
})();
