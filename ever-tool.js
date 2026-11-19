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

var TOOL_CSS = ":host{\n  --navy:#1F3A68;\n  --navy-d:#162A4F;\n  --navy-s:#2A4A7C;\n  --gold:#B08D57;\n  --gold-d:#8C6D3F;\n  --gold-s:#C4A36E;\n  --gold-l:#F6F0E6;\n  --ivory:#FBF8F2;\n  --band:#F6F1E8;\n  --card:#FFFFFF;\n  --tx:#2C2A26;\n  --mu:#7A746A;\n  --line:#E6DFD3;\n  --soft:#F7F3EC;\n  --warn:#A85A3A;\n  --warnbg:#FBF1EA;\n  --ok:#1F3A68;\n  --okbg:#F3EEE4;\n  --g:var(--navy);\n  --gd:var(--navy-d);\n  --gl:var(--soft);\n  --b:var(--gold);\n  --bd:var(--gold-d);\n  --bl:var(--gold-l);\n  --bd2:var(--line);\n  --bg:var(--ivory);\n  --warnbg: #FBF1EA;\n}\n*{box-sizing:border-box}\n:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:block;font-family:\"Pretendard\",\"Noto Sans KR\",\"Apple SD Gothic Neo\",\"Malgun Gothic\",\"맑은 고딕\",system-ui,sans-serif;color:var(--tx);line-height:1.6;font-size:15px}\n.et-root{margin:0;min-height:100%;font-family:\"Pretendard\",\"Noto Sans KR\",\"Apple SD Gothic Neo\",\"Malgun Gothic\",\"맑은 고딕\",system-ui,sans-serif;color:var(--tx);background:var(--ivory);line-height:1.6;font-size:15px}\na{color:var(--navy)}\nheader.top{background:var(--band);border-bottom:none;position:relative}\nheader.top::after{content:\"\";display:block;height:1px;background:linear-gradient(90deg,transparent,var(--gold),transparent)}\n.wrap{max-width:1040px;margin:0 auto;padding:0 20px}\n.hrow{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:22px 0 20px}\n.htitle .eyebrow{font-family:\"Noto Serif KR\",serif;font-size:11px;font-weight:600;letter-spacing:.18em;color:var(--gold);margin:0 0 8px;line-height:1}\n.htitle h1{margin:0;font-family:\"Noto Serif KR\",Georgia,serif;font-size:26px;font-weight:700;letter-spacing:-.03em;color:var(--navy);line-height:1.3}\n.htitle h1 span{color:var(--navy)}\n.htitle p{margin:8px 0 0;color:var(--mu);font-size:14px;font-weight:400}\n.brand{display:flex;flex-direction:column;align-items:flex-end;gap:4px;text-decoration:none;flex-shrink:0}\n.brand img{height:52px;width:auto;display:block}\n.brand .url{font-size:12px;font-weight:600;color:var(--navy);letter-spacing:.04em}\n.brand:hover .url{color:var(--gold-d);text-decoration:none}\nnav.tabs{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;padding:22px 0 8px}\nnav.tabs button{border:1px solid var(--line);background:var(--card);border-radius:14px;padding:14px 8px 12px;font:inherit;font-size:13px;font-weight:600;color:var(--navy);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;transition:border-color .18s ease,box-shadow .18s ease,background .18s ease,color .18s ease,transform .18s ease;box-shadow:0 1px 2px rgba(31,58,104,.04),0 6px 16px rgba(31,58,104,.04)}\nnav.tabs button .ic{width:26px;height:26px;display:flex;align-items:center;justify-content:center;color:var(--gold);line-height:1}\nnav.tabs button .ic svg{width:22px;height:22px;display:block}\nnav.tabs button:hover{border-color:var(--gold-s);color:var(--navy);transform:translateY(-1px);box-shadow:0 4px 16px rgba(31,58,104,.08)}\nnav.tabs button.active{background:var(--navy);border-color:var(--navy);color:#fff;box-shadow:0 8px 20px rgba(31,58,104,.22);transform:none}\nnav.tabs button.active .ic{color:#E8D5B0}\nmain{padding:10px 0 40px}\nsection.tool{display:none;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:28px;box-shadow:0 10px 30px rgba(31,58,104,.05)}\nsection.tool.active{display:block}\nsection.tool h2{margin:0 0 6px;font-family:\"Noto Serif KR\",Georgia,serif;font-size:22px;font-weight:700;color:var(--navy);letter-spacing:-.02em;display:flex;align-items:center;gap:10px;line-height:1.3}\nsection.tool h2 .ic{display:flex;color:var(--gold);flex-shrink:0}\nsection.tool h2 .ic svg{width:22px;height:22px;display:block}\nsection.tool h3, .result h3{font-family:\"Noto Serif KR\",Georgia,serif;font-weight:700;color:var(--navy);letter-spacing:-.02em}\n.desc{color:var(--mu);margin:0 0 22px;font-size:14px}\n.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:16px}\nlabel.f{display:flex;flex-direction:column;gap:7px;font-size:13px;font-weight:600;color:#3F3C37}\nlabel.f small{font-weight:400;color:var(--mu)}\ninput[type=text],input[type=number],input[type=date],select{font:inherit;padding:11px 13px;border:1px solid var(--line);border-radius:10px;background:#FFFcf8;width:100%;color:var(--tx);transition:border-color .15s ease,box-shadow .15s ease}\ninput::placeholder,select:invalid{color:#A89F93}\ninput:focus,select:focus{outline:none;border-color:var(--navy);box-shadow:0 0 0 3px rgba(31,58,104,.16);background:#fff}\n.seg{display:inline-flex;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:#fff;width:fit-content;max-width:100%}\n.seg label{padding:9px 14px;cursor:pointer;font-size:14px;font-weight:600;color:var(--mu);transition:background .15s ease,color .15s ease}\n.seg input{display:none}\n.seg label:has(input:checked){background:var(--navy);color:#fff}\n.btnrow{margin-top:20px;display:flex;gap:10px;flex-wrap:wrap}\n.btn{font:inherit;font-weight:600;border:none;border-radius:10px;padding:12px 22px;cursor:pointer;background:var(--navy);color:#fff;letter-spacing:.01em;display:inline-flex;align-items:center;justify-content:center;gap:8px;transition:background .15s ease,box-shadow .15s ease}\n.btn:hover{background:var(--navy-d);box-shadow:0 4px 12px rgba(31,58,104,.18)}\n.btn.ghost{background:transparent;color:var(--navy);border:1px solid var(--navy);box-shadow:none}\n.btn.ghost:hover{background:var(--soft);border-color:var(--navy);box-shadow:none}\n.btn .ic{display:flex;color:currentColor}\n.btn .ic svg{width:16px;height:16px;display:block}\n.result{margin-top:26px;border-top:1px solid var(--gold);padding-top:22px}\n.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px}\n.kpi{background:var(--soft);border:1px solid var(--line);border-radius:14px;padding:16px}\n.kpi .l{font-size:12px;color:var(--mu);font-weight:600;letter-spacing:.02em}\n.kpi .v{font-family:\"Noto Serif KR\",Georgia,serif;font-size:22px;font-weight:700;color:var(--navy);margin-top:4px;letter-spacing:-.02em;line-height:1.25}\n.kpi.main{background:var(--navy);border-color:var(--navy)}\n.kpi.main .l{color:#D4C4A3}\n.kpi.main .v{color:#fff}\ntable.t{width:100%;border-collapse:collapse;margin-top:16px;font-size:14px}\ntable.t th,table.t td{border-bottom:1px solid var(--line);padding:11px 10px;text-align:left;vertical-align:top}\ntable.t th{background:var(--soft);font-size:13px;color:var(--navy);font-weight:600}\ntable.t td.n{text-align:right;font-variant-numeric:tabular-nums}\n.note{font-size:12.5px;color:var(--mu);margin-top:10px}\n.warn{background:var(--warnbg);color:var(--warn);border-radius:10px;padding:12px 16px;font-size:14px;margin-top:12px;font-weight:600;border-left:3px solid var(--warn)}\n.okmsg{background:var(--okbg);color:var(--navy);border-radius:10px;padding:12px 16px;font-size:14px;margin-top:12px;font-weight:600;border-left:3px solid var(--gold)}\n.warn.mute{background:var(--soft);color:var(--mu);border-left-color:var(--gold);font-weight:500}\n.band{display:flex;gap:14px;align-items:flex-start;padding:14px 16px;border:1px solid var(--line);border-radius:12px;margin-top:8px;background:#fff}\n.band.fit{border-color:var(--gold);background:var(--gold-l)}\n.band .p{min-width:96px;font-weight:700;color:var(--navy);font-family:\"Noto Serif KR\",Georgia,serif}\n.band .tag{display:inline-block;background:var(--gold);color:#fff;font-size:11px;font-weight:600;border-radius:20px;padding:1px 8px;margin-left:6px;vertical-align:middle;font-family:\"Pretendard\",\"Noto Sans KR\",sans-serif;letter-spacing:.02em}\n.cta{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px}\n.cta a{flex:1;min-width:200px;text-align:center;text-decoration:none;font-weight:700;padding:14px;border-radius:12px;color:#fff;font-size:15px;transition:background .15s ease,box-shadow .15s ease}\n.cta a.site{background:var(--navy)}.cta a.site:hover{background:var(--navy-d);box-shadow:0 4px 14px rgba(31,58,104,.2)}\n.cta a.ch{background:var(--gold)}.cta a.ch:hover{background:var(--gold-d);box-shadow:0 4px 14px rgba(176,141,87,.25)}\nul.check{list-style:none;padding:0;margin:14px 0 0}\nul.check li{display:flex;gap:12px;align-items:center;padding:12px 14px;border:1px solid var(--line);border-radius:12px;margin-top:8px;background:#fff}\nul.check li.past{border-color:#E8C8B4;background:var(--warnbg)}\nul.check li.done{opacity:.55}ul.check li.done .nm{text-decoration:line-through}\nul.check input{width:20px;height:20px;accent-color:var(--navy)}\nul.check .dn{min-width:64px;font-weight:700;color:var(--navy);font-variant-numeric:tabular-nums;font-family:\"Noto Serif KR\",Georgia,serif}\nul.check li.past .dn{color:var(--warn)}\nul.check .nm{font-weight:700;flex:1}\nul.check .dt{color:var(--mu);font-size:14px;white-space:nowrap}\nul.check .late{display:inline-block;margin-left:6px;font-size:11px;font-weight:700;color:#fff;background:var(--warn);border-radius:20px;padding:1px 7px;letter-spacing:.02em;vertical-align:middle}\n.months{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}\n.months button{font:inherit;font-weight:600;padding:10px 4px;border:1px solid var(--line);border-radius:10px;background:#fff;cursor:pointer;color:var(--tx);transition:border-color .15s ease,background .15s ease,color .15s ease}\n.months button:hover{border-color:var(--gold)}\n.months button.active{background:var(--navy);border-color:var(--navy);color:#fff}\n.months button.now:not(.active){border-color:var(--gold);color:var(--navy)}\n.mcard{margin-top:16px;border:1px solid var(--gold);border-radius:16px;padding:22px;background:linear-gradient(180deg,var(--gold-l),#fff 68%);box-shadow:0 6px 18px rgba(176,141,87,.08)}\n.mcard h3{margin:0 0 12px;font-size:20px;font-family:\"Noto Serif KR\",Georgia,serif;font-weight:700;color:var(--navy)}\n.mcard h4{margin:18px 0 8px;font-size:13px;color:var(--gold-d);font-weight:700;letter-spacing:.04em;display:flex;align-items:center;gap:8px}\n.mcard h4::before{content:\"\";width:14px;height:1px;background:var(--gold);flex-shrink:0}\n.mcard ul{margin:0;padding-left:20px}\n.chips{display:flex;flex-wrap:wrap;gap:6px}\n.chip{background:#fff;border:1px solid var(--gold);color:var(--navy);border-radius:20px;padding:4px 12px;font-size:13.5px;font-weight:600}\n.qgrid{display:grid;grid-template-columns:140px repeat(3,1fr);gap:8px;align-items:center}\n.qgrid .h{font-weight:700;text-align:center;background:var(--gold-l);border-radius:8px;padding:9px 8px;color:var(--navy)}\n.qgrid .rl{font-size:13px;font-weight:600;color:#3F3C37}\n.qgrid input,.qgrid select{padding:8px 10px}\ntd.best{background:var(--gold-l);font-weight:700;color:var(--navy)}\n.badge{display:inline-block;font-size:11px;font-weight:700;border-radius:20px;padding:1px 8px;margin-left:4px;letter-spacing:.02em}\n.badge.c{background:var(--navy);color:#fff}.badge.f{background:var(--gold);color:#fff}\n.rec{border:1px solid var(--line);border-radius:14px;padding:16px;margin-top:10px;background:#fff}\n.rec.top{border-color:var(--gold);background:var(--gold-l)}\n.rec h4{margin:0 0 8px;font-size:16px;font-family:\"Noto Serif KR\",Georgia,serif;font-weight:700;color:var(--navy)}\n.rec .sc{float:right;font-size:12px;font-weight:700;color:var(--gold-d);letter-spacing:.02em}\n.rec.top .sc::before{content:\"\";display:inline-block;width:7px;height:7px;margin-right:6px;border:1px solid var(--gold);transform:rotate(45deg);vertical-align:middle}\n.rec .pc{display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:13.5px}\n.rec .pc b{display:block;font-size:12px;color:var(--mu);margin-bottom:2px;font-weight:700;letter-spacing:.02em}\nfooter{border-top:1px solid var(--line);background:var(--band);padding:20px 0;font-size:13px;color:var(--mu);text-align:center}\nfooter a{color:var(--navy);font-weight:700;text-decoration:none;margin:0 4px}\nfooter a:hover{color:var(--gold-d)}\n@media (max-width:760px){\n .wrap{padding:0 16px}\n .hrow{flex-direction:column-reverse;align-items:flex-start;padding:16px 0}\n .brand{align-self:flex-end}\n .brand img{height:40px}\n .htitle h1{font-size:20px}\n nav.tabs{grid-template-columns:repeat(3,1fr);gap:8px;padding:16px 0 6px}\n nav.tabs button{font-size:12px;padding:12px 4px 10px;border-radius:12px}\n .months{grid-template-columns:repeat(4,1fr)}\n section.tool{padding:18px}\n section.tool h2{font-size:19px}\n .qgrid{grid-template-columns:92px repeat(3,minmax(90px,1fr));overflow-x:auto}\n .rec .pc{grid-template-columns:1fr}\n table.t{font-size:13px}\n .cta a{min-width:0}\n}\n@media print{\n .et-root{background:#fff}\n header.top,nav.tabs,footer,.btnrow,.cta,.noprint{display:none!important}\n section.tool{display:none!important;border:none;box-shadow:none}\n section.tool.active{display:block!important}\n .et-root.print-quote section.tool.active .qgrid{display:none}\n}\n\n/* item search links */\n.band a{color:var(--navy);text-decoration:none;border-bottom:1px solid var(--gold-s);font-weight:600;transition:color .15s ease,border-color .15s ease}\n.band a:hover{color:var(--gold-d);border-bottom-color:var(--gold-d)}\n.band.fit a{color:var(--navy)}\ntextarea{font:inherit;padding:11px 13px;border:1px solid var(--line);border-radius:10px;background:#FFFcf8;width:100%;color:var(--tx);min-height:88px;resize:vertical;transition:border-color .15s ease,box-shadow .15s ease}\ntextarea:focus{outline:none;border-color:var(--navy);box-shadow:0 0 0 3px rgba(31,58,104,.16);background:#fff}\n\n/* proposal builder */\n.pr-add{display:flex;gap:10px;align-items:stretch;flex-wrap:wrap;margin:0 0 10px}\n.pr-add input[type=url],.pr-add input[type=text]{flex:1;min-width:220px}\n.pr-hint{font-size:12.5px;color:var(--mu);margin:0 0 16px}\n.pr-rows{display:flex;flex-direction:column;gap:10px;margin-top:8px}\n.pr-row{display:grid;grid-template-columns:28px 88px 1fr auto;gap:10px 12px;align-items:start;padding:14px;border:1px solid var(--line);border-radius:14px;background:#FFFcf8;box-shadow:0 2px 8px rgba(31,58,104,.03)}\n.pr-row.dragover{border-color:var(--gold);background:var(--gold-l)}\n.pr-move{display:flex;flex-direction:column;gap:4px;padding-top:4px}\n.pr-move button{width:28px;height:28px;border:1px solid var(--line);background:#fff;border-radius:8px;color:var(--navy);cursor:pointer;font-size:12px;line-height:1;padding:0}\n.pr-move button:hover{border-color:var(--gold);background:var(--soft)}\n.pr-thumb{width:88px}\n.pr-thumb .ph,.pr-thumb img{width:88px;height:88px;object-fit:cover;border-radius:10px;border:1px solid var(--line);background:#fff;display:block}\n.pr-thumb .ph{display:flex;align-items:center;justify-content:center;color:var(--mu);font-size:11px;text-align:center;padding:6px}\n.pr-thumb img[src=\"\"],.pr-thumb img.err{display:none}\n.pr-main{min-width:0;display:grid;grid-template-columns:1fr 120px 88px;gap:8px}\n.pr-main .full{grid-column:1/-1}\n.pr-side{display:flex;flex-direction:column;align-items:flex-end;gap:8px;min-width:110px}\n.pr-line{font-family:\"Noto Serif KR\",Georgia,serif;font-weight:700;color:var(--navy);font-size:16px;white-space:nowrap}\n.pr-row .f{font-size:12px}\n.pr-empty{border:1px dashed var(--line);border-radius:14px;padding:22px;text-align:center;color:var(--mu);background:#fff}\n.pr-fetch{font-size:12.5px;color:var(--gold-d);margin:0}\n.pr-actions{margin-top:18px}\n.pr-sheet{margin-top:28px;background:#fff;border:1px solid var(--line);border-radius:6px;box-shadow:0 10px 36px rgba(31,58,104,.08);padding:28px 32px 24px;color:var(--tx);max-width:210mm}\n.pr-sheet-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding-bottom:14px;border-bottom:1px solid var(--gold)}\n.pr-sheet-brand{display:flex;flex-direction:column;align-items:flex-start;gap:4px;text-decoration:none;color:var(--navy)}\n.pr-sheet-brand img{height:48px;width:auto;display:block}\n.pr-sheet-brand .url{font-size:12px;font-weight:600;letter-spacing:.04em;color:var(--navy)}\n.pr-sheet-kicker{font-family:\"Noto Serif KR\",serif;font-size:11px;letter-spacing:.18em;color:var(--gold);font-weight:600;margin:0 0 6px}\n.pr-sheet h2.pr-title{font-family:\"Noto Serif KR\",Georgia,serif;font-size:28px;color:var(--navy);margin:0;letter-spacing:-.03em}\n.pr-meta{display:grid;grid-template-columns:1fr 1fr;gap:8px 24px;margin:18px 0 16px;font-size:13.5px}\n.pr-meta div{display:flex;gap:8px;border-bottom:1px dotted var(--line);padding:4px 0}\n.pr-meta dt,.pr-meta .k{flex:0 0 88px;color:var(--mu);font-weight:600}\n.pr-meta dd,.pr-meta .v{flex:1;margin:0;color:var(--navy);font-weight:600}\n.pr-sheet table{width:100%;border-collapse:collapse;font-size:13px;margin-top:8px}\n.pr-sheet table th{background:var(--soft);color:var(--navy);font-weight:600;padding:9px 8px;border-bottom:1px solid var(--line);text-align:left}\n.pr-sheet table td{padding:10px 8px;border-bottom:1px solid var(--line);vertical-align:middle}\n.pr-sheet table td.n{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}\n.pr-sheet table img{width:52px;height:52px;object-fit:cover;border-radius:6px;border:1px solid var(--line);background:#fff}\n.pr-sheet table a{color:var(--navy);font-weight:600;text-decoration:none;border-bottom:1px solid var(--gold-s)}\n.pr-sheet table a:hover{color:var(--gold-d)}\n.pr-sheet .note-cell{color:var(--mu);font-size:12px;margin-top:2px}\n.pr-sums{width:280px;margin:16px 0 0 auto}\n.pr-sums div{display:flex;justify-content:space-between;padding:6px 0;font-size:14px;border-bottom:1px dotted var(--line)}\n.pr-sums .grand{border-bottom:none;border-top:1px solid var(--navy);margin-top:6px;padding-top:10px;font-family:\"Noto Serif KR\",Georgia,serif;font-size:18px;font-weight:700;color:var(--navy)}\n.pr-sheet-memo{margin-top:18px;padding:12px 14px;background:var(--soft);border-radius:10px;font-size:13.5px;white-space:pre-wrap}\n.pr-sheet-memo .k{font-weight:700;color:var(--navy);margin-bottom:4px}\n.pr-sheet-foot{margin-top:22px;padding-top:12px;border-top:1px solid var(--line);text-align:center;font-size:12px;color:var(--mu)}\n.pr-sheet-foot a{color:var(--navy);font-weight:700;text-decoration:none}\n@media (max-width:760px){\n .pr-row{grid-template-columns:28px 72px 1fr; }\n .pr-side{grid-column:2/-1;flex-direction:row;justify-content:space-between;align-items:center;width:100%}\n .pr-main{grid-template-columns:1fr 1fr}\n .pr-add{flex-direction:column}\n .pr-sheet{padding:18px 14px}\n .pr-meta{grid-template-columns:1fr}\n .pr-sums{width:100%}\n .pr-sheet-head{flex-direction:column-reverse}\n}\n@media print{\n .et-root.print-proposal{background:#fff}\n .et-root.print-proposal header.top,\n .et-root.print-proposal nav.tabs,\n .et-root.print-proposal footer,\n .et-root.print-proposal .btnrow,\n .et-root.print-proposal .cta,\n .et-root.print-proposal .noprint,\n .et-root.print-proposal .pr-form,\n .et-root.print-proposal .pr-actions,\n .et-root.print-proposal .desc,\n .et-root.print-proposal h2{display:none!important}\n .et-root.print-proposal section.tool{display:none!important;border:none;box-shadow:none;background:#fff;padding:0}\n .et-root.print-proposal #tool-proposal{display:block!important}\n .et-root.print-proposal #pr_sheet{display:block!important;margin:0;box-shadow:none;border:none;border-radius:0;max-width:none;padding:0;width:100%}\n .et-root.print-proposal .wrap{max-width:none;padding:0}\n @page{size:A4;margin:12mm}\n}\n\n/* overlay chrome */\n.et-root{position:relative;padding-bottom:8px}\n.et-close{\n  position:fixed;top:14px;right:16px;z-index:20;\n  width:44px;height:44px;border:1px solid var(--line);\n  background:var(--navy);color:#fff;border-radius:50%;\n  font-size:26px;line-height:1;cursor:pointer;padding:0;\n  box-shadow:0 8px 20px rgba(31,58,104,.25);\n  display:flex;align-items:center;justify-content:center;\n  font-family:inherit;transition:background .15s ease,transform .15s ease;\n}\n.et-close:hover{background:var(--navy-d);transform:scale(1.04)}\n.et-close:focus{outline:none;box-shadow:0 0 0 3px rgba(31,58,104,.28),0 8px 20px rgba(31,58,104,.25)}\nheader.top .hrow{padding-right:60px}\n@media (max-width:760px){\n  header.top .hrow{padding-right:0;padding-top:48px}\n  .et-close{top:8px;right:8px;width:40px;height:40px}\n}\n\n/* ===== proposal (v3): cards ===== */\n.pr-h{margin:22px 0 8px;font-size:16px}\n.pr-h small{font-weight:400;color:var(--mu);font-size:12px;margin-left:6px}\n.pr-add textarea{flex:1;min-width:220px;min-height:78px}\n.pc{border:1px solid var(--line);border-radius:14px;background:#FFFcf8;padding:14px;box-shadow:0 2px 8px rgba(31,58,104,.05)}\n.pc-head{display:flex;gap:12px;align-items:center;margin-bottom:12px}\n.pc-thumb{width:64px;height:64px;flex:0 0 64px;border:1px solid var(--line);border-radius:10px;background:#fff;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--mu);font-size:11px;text-align:center}\n.pc-thumb img{max-width:100%;max-height:100%;display:block}\n.pc-ti{flex:1;min-width:0}\n.pc-ti b{display:block;color:var(--navy);font-size:15px;word-break:break-all}\n.pc-ti span{display:block;font-size:12px;color:var(--gold-d)}\n.pc-ti span.warn2{color:var(--warn)}\n.pc-btns{display:flex;gap:6px}\n.pc-btns button{border:1px solid var(--line);background:#fff;border-radius:8px;color:var(--navy);cursor:pointer;font:inherit;font-size:12px;padding:6px 10px}\n.pc-btns button:hover{border-color:var(--gold);background:var(--soft)}\n.pc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:12px}\n.pc-grid .full{grid-column:1/-1}\n.pc-grid label.f{font-size:12px}\n.pc-grid textarea{min-height:70px;font-size:13px}\n.pc-grid .tall textarea{min-height:120px}\n/* ===== proposal (v3): A4 page ===== */\n.pp-wrap{margin-top:26px;overflow-x:auto;background:#E9EDF3;padding:18px;border-radius:12px}\n.pp-wrap[hidden]{display:none}\n.pp-page{width:186mm;height:272mm;margin:0 auto 16px;background:#fff;overflow:hidden;box-shadow:0 6px 24px rgba(31,58,104,.18);box-sizing:border-box;font-family:\"Malgun Gothic\",\"맑은 고딕\",\"Noto Sans KR\",\"Pretendard\",\"Apple SD Gothic Neo\",sans-serif;color:#000;font-size:8.8pt;line-height:1.35;-webkit-print-color-adjust:exact;print-color-adjust:exact}\n.pp-page *{box-sizing:border-box}\n.pp-in{width:100%}\n.pp-brand{background:#1F3864;color:#fff;font-size:19pt;font-weight:700;padding:3.4mm 4mm 2.8mm;line-height:1.2}\n.pp-sub{background:#2F5597;color:#fff;font-size:8pt;padding:1.4mm 4mm}\n.pp-rep{width:100%;border-collapse:collapse;margin-top:2.6mm;table-layout:fixed}\n.pp-rep th{background:#DCE6F1;font-weight:700;border:1px solid #8497B0;padding:1mm 1.2mm;font-size:8pt;width:14%;text-align:center}\n.pp-rep td{border:1px solid #8497B0;padding:1mm 1.8mm;font-size:8.6pt;width:19.3%;word-break:break-all}\n.pp-title{font-size:14pt;font-weight:700;color:#1F3864;margin:3mm 0 0.8mm;line-height:1.3;word-break:break-all}\n.pp-cat{font-size:8pt;color:#595959;margin-bottom:2mm}\n.pp-top{display:flex;gap:5mm;align-items:flex-start;margin-top:1.5mm}\n.pp-img{flex:1 1 auto;height:56mm;display:flex;align-items:center;justify-content:center;overflow:hidden}\n.pp-img img{max-width:100%;max-height:56mm;display:block}\n.pp-info{flex:0 0 76mm}\n.pp-t{width:100%;border-collapse:collapse;table-layout:fixed}\n.pp-page table{font-size:8.6pt;line-height:1.3;margin:0}\n.pp-t th,.pp-t td{font-size:8.6pt;border:1px solid #7F8FA6;padding:0.9mm 1.6mm;vertical-align:middle;word-break:break-all}\n.pp-t th{background:#DCE6F1;font-weight:700;text-align:center}\n.pp-t th.nv{background:#2F5597;color:#fff}\n.pp-t td.c{text-align:center}\n.pp-t .red{color:#C00000;font-weight:700}\n.pp-t .navy{color:#1F3864;font-weight:700}\n.pp-t a{color:#0563C1;text-decoration:underline}\n.pp-info .pp-t th:first-child{width:30mm}\n.pp-h{font-size:10.5pt;font-weight:700;color:#1F3864;margin:3.2mm 0 1.2mm}\n.pp-feat{border:1px solid #7F8FA6;padding:1.6mm 2mm;font-size:8.6pt;line-height:1.45;word-break:break-all}\n.pp-note{font-size:7.8pt;color:#595959;margin-top:1.2mm;line-height:1.4}\n.pp-t tr.hl td,.pp-t tr.hl th{background:#FFF2CC}\n.pp-est{margin-top:2mm}\n.pp-est th{background:#FFF2CC;width:21%}\n.pp-est td{width:29%}\n.pp-est th.nv{background:#1F3864;color:#fff;width:auto;text-align:left;padding-left:2mm}\n.pp-est .tot{font-size:10pt}\n.pp-bar{background:#1F3864;color:#fff;font-weight:700;padding:2mm 3mm;margin-top:3.6mm;font-size:9pt}\n.pp-foot{background:#F2F2F2;color:#595959;font-size:7pt;padding:1.8mm 3mm}\n@media print{\n .pp-wrap{background:#fff;padding:0;margin:0;overflow:visible}\n .pp-page{box-shadow:none;margin:0 auto;page-break-after:always;break-after:page}\n .pp-page:last-child{page-break-after:auto;break-after:auto}\n}\n";
var TOOL_HTML = "<button type=\"button\" class=\"et-close\" id=\"et_close\" aria-label=\"도구 닫기\" title=\"닫기\">&times;</button>\n<header class=\"top\">\n <div class=\"wrap\">\n  <div class=\"hrow\">\n   <div class=\"htitle\">\n    <div class=\"eyebrow\">EVER1004 PRO TOOLS</div>\n    <h1><span>에버천사</span> 상품제작 실무도구</h1>\n    <p>마케팅·구매 담당자, 대표님, 사장님, 행사대행사를 위한 무료 계산·체크 도구 모음</p>\n   </div>\n   <a class=\"brand\" href=\"https://www.ever1004.com\" target=\"_blank\" rel=\"noopener\" title=\"에버천사 판촉물 종합쇼핑몰\">\n    <img src=\"data:image/png;base64,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\" alt=\"에버천사 판촉물 종합쇼핑몰 로고\">\n    <span class=\"url\">ever1004.com</span>\n   </a>\n  </div>\n </div>\n</header>\n\n<div class=\"wrap\">\n <nav class=\"tabs\" role=\"tablist\">\n  <button data-tab=\"budget\" class=\"active\" role=\"tab\"><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3.5\" y=\"2.5\" width=\"17\" height=\"19\" rx=\"2\"/><path d=\"M7 6.5h10\"/><path d=\"M8 11h2.2M12 11h2.2M16 11h.01\"/><path d=\"M8 14.5h2.2M12 14.5h2.2M16 14.5h.01\"/><path d=\"M8 18h2.2M12 18h2.2\"/></svg></span>예산별 품목추천</button>\n  <button data-tab=\"dday\" role=\"tab\"><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M8 3v4M16 3v4M3 10h18\"/><path d=\"M8.5 14h.01M12 14h.01M15.5 14h.01M8.5 17h.01M12 17h.01\"/></svg></span>행사 D-day</button>\n  <button data-tab=\"cal\" role=\"tab\"><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M8 3v4M16 3v4M3 10h18\"/><rect x=\"7\" y=\"13\" width=\"3.2\" height=\"3.2\" rx=\".4\"/><rect x=\"10.4\" y=\"13\" width=\"3.2\" height=\"3.2\" rx=\".4\"/><rect x=\"13.8\" y=\"13\" width=\"3.2\" height=\"3.2\" rx=\".4\"/></svg></span>마케팅 캘린더</button>\n  <button data-tab=\"quote\" role=\"tab\"><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 19V10M10.5 19V5M16 19v-6\"/><path d=\"M3.5 19h17\"/></svg></span>견적 비교표</button>\n  <button data-tab=\"proposal\" role=\"tab\"><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z\"/><path d=\"M14 3v5h5\"/><path d=\"M9 13h6M9 17h4\"/></svg></span>제안서 만들기</button>\n </nav>\n\n <main>\n <!-- 1 예산 -->\n <section class=\"tool active\" id=\"tool-budget\">\n  <h2><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3.5\" y=\"2.5\" width=\"17\" height=\"19\" rx=\"2\"/><path d=\"M7 6.5h10\"/><path d=\"M8 11h2.2M12 11h2.2M16 11h.01\"/><path d=\"M8 14.5h2.2M12 14.5h2.2M16 14.5h.01\"/><path d=\"M8 18h2.2M12 18h2.2\"/></svg></span>예산별 품목추천</h2>\n  <p class=\"desc\">인원수와 예산을 넣으면 총비용과 1인당 단가 한도, 그 가격대에서 고를 만한 품목을 보여드려요.</p>\n  <div class=\"grid\">\n   <label class=\"f\">인원수(수량)<input type=\"number\" id=\"b_people\" min=\"1\" placeholder=\"예: 200\"></label>\n   <label class=\"f\">예산 입력 방식\n    <span class=\"seg\"><label><input type=\"radio\" name=\"b_mode\" value=\"per\" checked>1인당 예산</label><label><input type=\"radio\" name=\"b_mode\" value=\"total\">총예산</label></span>\n   </label>\n   <label class=\"f\"><span id=\"b_amt_label\">1인당 예산(원)</span><input type=\"number\" id=\"b_amt\" min=\"0\" placeholder=\"예: 5000\"></label>\n   <label class=\"f\">입력한 예산은\n    <span class=\"seg\"><label><input type=\"radio\" name=\"b_vat\" value=\"inc\" checked>VAT 포함</label><label><input type=\"radio\" name=\"b_vat\" value=\"exc\">VAT 별도</label></span>\n   </label>\n  </div>\n  <div class=\"btnrow\"><button class=\"btn\" id=\"b_calc\">계산하기</button><button class=\"btn ghost\" data-reset=\"budget\">초기화</button></div>\n  <div class=\"result\" id=\"b_out\"></div>\n </section>\n\n\n <!-- 3 D-day -->\n <section class=\"tool\" id=\"tool-dday\">\n  <h2><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M8 3v4M16 3v4M3 10h18\"/><path d=\"M8.5 14h.01M12 14h.01M15.5 14h.01M8.5 17h.01M12 17h.01\"/></svg></span>행사 D-day 체크리스트</h2>\n  <p class=\"desc\">행사 날짜를 넣으면 주말을 빼고 영업일 기준으로 견적·시안·주문 마감일을 거꾸로 계산해 드려요. (공휴일은 반영되지 않으니 연휴가 끼면 여유 있게 잡으세요)</p>\n  <div class=\"grid\">\n   <label class=\"f\">행사 날짜<input type=\"date\" id=\"d_date\"></label>\n   <label class=\"f\">제작 소요일(영업일)<input type=\"number\" id=\"d_make\" min=\"1\" value=\"7\"></label>\n   <label class=\"f\">배송 소요일(영업일)<input type=\"number\" id=\"d_ship\" min=\"0\" value=\"2\"></label>\n   <label class=\"f\">시안 확정 소요일(영업일)<input type=\"number\" id=\"d_draft\" min=\"0\" value=\"2\"></label>\n  </div>\n  <div class=\"btnrow\"><button class=\"btn\" id=\"d_calc\">일정 만들기</button><button class=\"btn ghost\" data-reset=\"dday\">초기화</button></div>\n  <div class=\"result\" id=\"d_out\"></div>\n </section>\n\n <!-- 4 캘린더 -->\n <section class=\"tool\" id=\"tool-cal\">\n  <h2><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M8 3v4M16 3v4M3 10h18\"/><rect x=\"7\" y=\"13\" width=\"3.2\" height=\"3.2\" rx=\".4\"/><rect x=\"10.4\" y=\"13\" width=\"3.2\" height=\"3.2\" rx=\".4\"/><rect x=\"13.8\" y=\"13\" width=\"3.2\" height=\"3.2\" rx=\".4\"/></svg></span>월별 마케팅·판촉 캘린더</h2>\n  <p class=\"desc\">달마다 챙길 시즌 이슈·기념일과 어울리는 판촉물 아이디어예요. 보통 행사 3~4주 전에는 준비를 시작하는 게 좋아요.</p>\n  <div class=\"months\" id=\"c_months\"></div>\n  <div class=\"result\" id=\"c_out\" style=\"border-top:none;padding-top:0;margin-top:0\"></div>\n </section>\n\n <!-- 5 견적 -->\n <section class=\"tool\" id=\"tool-quote\">\n  <h2><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 19V10M10.5 19V5M16 19v-6\"/><path d=\"M3.5 19h17\"/></svg></span>견적 비교표</h2>\n  <p class=\"desc\">업체 견적을 최대 3곳까지 넣으면 VAT 포함 기준으로 총액과 개당 실단가를 맞춰 비교해요.</p>\n  <div class=\"qgrid\" id=\"qg\"></div>\n  <div class=\"btnrow\"><button class=\"btn\" id=\"x_calc\">비교하기</button><button class=\"btn ghost\" id=\"x_print\"><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 9V3.5h10V9\"/><path d=\"M7 17.5H5.2A2.2 2.2 0 0 1 3 15.3V10.2A2.2 2.2 0 0 1 5.2 8h13.6A2.2 2.2 0 0 1 21 10.2v5.1a2.2 2.2 0 0 1-2.2 2.2H17\"/><rect x=\"7\" y=\"14\" width=\"10\" height=\"6.5\" rx=\"1\"/><path d=\"M17.2 12h.01\"/></svg></span>인쇄하기</button><button class=\"btn ghost\" data-reset=\"quote\">초기화</button></div>\n  <div class=\"result\" id=\"x_out\"></div>\n </section>\n\n <!-- 5 제안서 -->\n <section class=\"tool\" id=\"tool-proposal\">\n  <h2><span class=\"ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z\"/><path d=\"M14 3v5h5\"/><path d=\"M9 13h6M9 17h4\"/></svg></span>제안서 만들기</h2>\n  <p class=\"desc\">에버천사 상품 링크를 붙여 넣고 추가를 누르면 상품 정보를 자동으로 채워 줘요. 만들기 버튼을 누르면 상품 1개당 A4 한 장짜리 제품 제안서가 나오고, 인쇄/PDF와 엑셀로 저장할 수 있어요.</p>\n  <div class=\"pr-form noprint\">\n   <h3 class=\"pr-h\">상품 링크</h3>\n   <div class=\"pr-add\">\n    <textarea id=\"pr_url\" placeholder=\"https://www.ever1004.com/product_w/product_view.asp?p_idx=&#10;여러 개는 한 줄에 하나씩 붙여 넣어 주세요.\"></textarea>\n    <button type=\"button\" class=\"btn\" id=\"pr_add\">추가</button>\n    <button type=\"button\" class=\"btn ghost\" id=\"pr_add_blank\">직접 입력</button>\n   </div>\n   <p class=\"pr-hint\">상품 상세 페이지 주소(product_view.asp?p_idx=…)를 붙여 넣으면 이름·사진·단가표·옵션을 읽어 와요. 자동으로 못 읽은 칸은 카드에서 직접 고치면 돼요.</p>\n   <div class=\"pr-rows\" id=\"pr_rows\"></div>\n\n   <h3 class=\"pr-h\">보고 정보 <small>선택 · 비워 두면 제안서에 나오지 않아요</small></h3>\n   <div class=\"grid\">\n    <label class=\"f\">보고일<input type=\"date\" id=\"pr_rdate\"></label>\n    <label class=\"f\">수신<input type=\"text\" id=\"pr_rto\" placeholder=\"예: 대표님 / 팀장님\"></label>\n    <label class=\"f\">용도 / 행사명<input type=\"text\" id=\"pr_revent\" placeholder=\"예: 창립기념 답례품\"></label>\n    <label class=\"f\">필요수량<input type=\"text\" id=\"pr_rqty\" inputmode=\"numeric\" placeholder=\"예: 100\"></label>\n    <label class=\"f\">예산 <small>VAT 포함 총액(원)</small><input type=\"text\" id=\"pr_budget\" inputmode=\"numeric\" placeholder=\"예: 3,000,000\"></label>\n   </div>\n   <h3 class=\"pr-h\">공통 정보</h3>\n   <div class=\"grid\">\n    <label class=\"f\">브랜드 문구 <small>제안서 맨 위 큰 글씨</small><input type=\"text\" id=\"pr_brand\" placeholder=\"에버천사  EVER1004\"></label>\n    <label class=\"f\">담당자 <small>보고자</small><input type=\"text\" id=\"pr_person\" placeholder=\"예: 홍길동\"></label>\n    <label class=\"f\">연락처<input type=\"text\" id=\"pr_phone\" placeholder=\"예: 010-0000-0000\"></label>\n    <label class=\"f\">이메일<input type=\"text\" id=\"pr_email\" placeholder=\"예: name@company.com\"></label>\n   </div>\n   <div class=\"btnrow pr-actions\">\n    <button type=\"button\" class=\"btn\" id=\"pr_build\">제안서 만들기</button>\n    <button type=\"button\" class=\"btn ghost\" id=\"pr_print\">인쇄 / PDF 저장</button>\n    <button type=\"button\" class=\"btn ghost\" id=\"pr_xlsx\">엑셀 다운로드</button>\n    <button type=\"button\" class=\"btn ghost\" data-reset=\"proposal\">초기화</button>\n   </div>\n  </div>\n  <div class=\"result\" id=\"pr_out\" style=\"border-top:none;padding-top:0;margin-top:0\"></div>\n  <div id=\"pr_sheet\" class=\"pp-wrap\" hidden></div>\n </section>\n\n </main>\n</div>\n\n<footer>\n <div class=\"wrap\">\n  <a href=\"https://www.ever1004.com\" target=\"_blank\" rel=\"noopener\">에버천사 ever1004.com</a> · (주)벨카리노 · <a href=\"https://ever1004.channel.io\" target=\"_blank\" rel=\"noopener\">채널톡 상담</a>\n  <div style=\"margin-top:6px;font-size:12px\">이 도구의 결과는 참고용 예시이며, 실제 단가·납기·가능한 인쇄 방식은 상품과 수량에 따라 달라요.</div>\n </div>\n</footer>";
var PP_CSS = "/* ===== proposal (v3): A4 page ===== */\n.pp-wrap{margin-top:26px;overflow-x:auto;background:#E9EDF3;padding:18px;border-radius:12px}\n.pp-wrap[hidden]{display:none}\n.pp-page{width:186mm;height:272mm;margin:0 auto 16px;background:#fff;overflow:hidden;box-shadow:0 6px 24px rgba(31,58,104,.18);box-sizing:border-box;font-family:\"Malgun Gothic\",\"맑은 고딕\",\"Noto Sans KR\",\"Pretendard\",\"Apple SD Gothic Neo\",sans-serif;color:#000;font-size:8.8pt;line-height:1.35;-webkit-print-color-adjust:exact;print-color-adjust:exact}\n.pp-page *{box-sizing:border-box}\n.pp-in{width:100%}\n.pp-brand{background:#1F3864;color:#fff;font-size:19pt;font-weight:700;padding:3.4mm 4mm 2.8mm;line-height:1.2}\n.pp-sub{background:#2F5597;color:#fff;font-size:8pt;padding:1.4mm 4mm}\n.pp-rep{width:100%;border-collapse:collapse;margin-top:2.6mm;table-layout:fixed}\n.pp-rep th{background:#DCE6F1;font-weight:700;border:1px solid #8497B0;padding:1mm 1.2mm;font-size:8pt;width:14%;text-align:center}\n.pp-rep td{border:1px solid #8497B0;padding:1mm 1.8mm;font-size:8.6pt;width:19.3%;word-break:break-all}\n.pp-title{font-size:14pt;font-weight:700;color:#1F3864;margin:3mm 0 0.8mm;line-height:1.3;word-break:break-all}\n.pp-cat{font-size:8pt;color:#595959;margin-bottom:2mm}\n.pp-top{display:flex;gap:5mm;align-items:flex-start;margin-top:1.5mm}\n.pp-img{flex:1 1 auto;height:56mm;display:flex;align-items:center;justify-content:center;overflow:hidden}\n.pp-img img{max-width:100%;max-height:56mm;display:block}\n.pp-info{flex:0 0 76mm}\n.pp-t{width:100%;border-collapse:collapse;table-layout:fixed}\n.pp-page table{font-size:8.6pt;line-height:1.3;margin:0}\n.pp-t th,.pp-t td{font-size:8.6pt;border:1px solid #7F8FA6;padding:0.9mm 1.6mm;vertical-align:middle;word-break:break-all}\n.pp-t th{background:#DCE6F1;font-weight:700;text-align:center}\n.pp-t th.nv{background:#2F5597;color:#fff}\n.pp-t td.c{text-align:center}\n.pp-t .red{color:#C00000;font-weight:700}\n.pp-t .navy{color:#1F3864;font-weight:700}\n.pp-t a{color:#0563C1;text-decoration:underline}\n.pp-info .pp-t th:first-child{width:30mm}\n.pp-h{font-size:10.5pt;font-weight:700;color:#1F3864;margin:3.2mm 0 1.2mm}\n.pp-feat{border:1px solid #7F8FA6;padding:1.6mm 2mm;font-size:8.6pt;line-height:1.45;word-break:break-all}\n.pp-note{font-size:7.8pt;color:#595959;margin-top:1.2mm;line-height:1.4}\n.pp-t tr.hl td,.pp-t tr.hl th{background:#FFF2CC}\n.pp-est{margin-top:2mm}\n.pp-est th{background:#FFF2CC;width:21%}\n.pp-est td{width:29%}\n.pp-est th.nv{background:#1F3864;color:#fff;width:auto;text-align:left;padding-left:2mm}\n.pp-est .tot{font-size:10pt}\n.pp-bar{background:#1F3864;color:#fff;font-weight:700;padding:2mm 3mm;margin-top:3.6mm;font-size:9pt}\n.pp-foot{background:#F2F2F2;color:#595959;font-size:7pt;padding:1.8mm 3mm}\n@media print{\n .pp-wrap{background:#fff;padding:0;margin:0;overflow:visible}\n .pp-page{box-shadow:none;margin:0 auto;page-break-after:always;break-after:page}\n .pp-page:last-child{page-break-after:auto;break-after:auto}\n}\n";

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
    host.style.cssText='position:fixed;inset:0;z-index:2147483000;overflow:auto;background:#D3C8B6;overscroll-behavior:contain;';
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
    style.textContent+=":host{--ivory:#D3C8B6;--band:#C8BBA6;--card:#E8E1D5;--soft:#DCD3C4;--line:#BFB29D;--gold-l:#E0D1B8;--okbg:#DCD3C4}.et-root{padding-bottom:84px}input[type=text],input[type=number],input[type=date],select,textarea,.seg,.band,ul.check li,.months button,.chip{background:#EFE9DF}input:focus,select:focus,textarea:focus{background:#E8E1D5}.mcard{background:linear-gradient(180deg,var(--gold-l),var(--card) 68%)}.brand img{mix-blend-mode:normal;background:transparent}section .cta{display:none!important}.et-dock{position:fixed;left:0;right:0;bottom:0;z-index:20;display:flex;gap:12px;justify-content:center;padding:12px 20px;background:rgba(211,200,182,.96);border-top:1px solid var(--line);box-shadow:0 -6px 18px rgba(31,58,104,.08)}.et-dock a{flex:1;max-width:340px;text-align:center;text-decoration:none;font-weight:700;padding:13px;border-radius:12px;color:#fff;font-size:15px;transition:background .15s ease}.et-dock a.site{background:var(--navy)}.et-dock a.site:hover{background:var(--navy-d)}.et-dock a.ch{background:var(--gold)}.et-dock a.ch:hover{background:var(--gold-d)}@media print{.et-dock{display:none!important}.et-root{padding-bottom:0}}";
    var dock=document.createElement('div');dock.className='et-dock';dock.innerHTML='<a class="site" href="https://www.ever1004.com" target="_blank" rel="noopener">에버천사 판촉물 보러가기</a><a class="ch" href="https://ever1004.channel.io" target="_blank" rel="noopener">채널톡 상담하기</a>';wrap.appendChild(dock);
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

/* 5 Proposal (v3): one-product-per-page A4 product proposal */
var PP_USES='기업 기념품 · 창립/개교 기념품 · 임직원 선물 · 공공기관/학교 행사 기념품 · VIP/고객 감사 선물 · 판촉/홍보용품';
var PP_FOOT='(주)벨카리노 | 대표전화 02-460-0500 | 팩스 02-3409-1322 | 서울특별시 성동구 아차산로 103 영동테크노타워 지하1층 2103-2호 | www.ever1004.com';
var PP_BRAND='에버천사  EVER1004';
var PP_BRANDS=['벨카리노','에버천사','송월','락앤락','해피콜','테팔','삼성','필립스','샤오미','스위스밀리터리','모나미','파카','크로스'];
var PR_IDS=['pr_rdate','pr_rto','pr_revent','pr_rqty','pr_budget','pr_brand','pr_person','pr_phone','pr_email'];
var PP_ITEMS=[];
var PP_FIELDS=[
 ['title','상품명','t','full'],['model','모델명','t'],['code','상품코드','t'],['price','판매가 (VAT 별도)','t'],
 ['maker','제조사/브랜드','t'],['origin','원산지','t'],['color','색상','t'],['minqty','최소주문수량','t'],
 ['category','카테고리','t','full'],['img','이미지 주소','t','full'],['url','제품 페이지 주소','t','full'],
 ['specs','주요 사양 (한 줄에 하나: 항목: 내용)','a','full'],['features','제품 특징 (한 줄에 하나)','a','full tall'],
 ['tiers','수량별 단가 (한 줄에 하나: 수량 단가, VAT 별도)','a','full'],['memo','가격 안내 참고 문구 (선택)','a','full'],
 ['print','로고 인쇄/각인','a'],['pack','포장/케이스','a'],['lead','제작 기간','a'],['uses','추천 용도','a','full']
];
function ppUid(){return 'p'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);}
function ppToday(){var t=new Date();return t.getFullYear()+'-'+('0'+(t.getMonth()+1)).slice(-2)+'-'+('0'+t.getDate()).slice(-2);}
function ppShared(){var o={};PR_IDS.forEach(function(i){o[i]=$(i).value;});return o;}
function ppSave(){var s=store();if(!s)return;try{s.setItem(LS+'proposal2',JSON.stringify({items:PP_ITEMS,shared:ppShared()}));}catch(e){}}
function ppLoad(){
 var s=store();if(!s)return false;var o;try{o=JSON.parse(s.getItem(LS+'proposal2')||'null');}catch(e){o=null;}
 if(!o)return false;
 if(o.shared)PR_IDS.forEach(function(i){if(o.shared[i]!=null)$(i).value=o.shared[i];});
 PP_ITEMS=Array.isArray(o.items)?o.items:[];
 PP_ITEMS.forEach(function(it){if(it.status==='loading')it.status='manual';});
 return true;
}
function ppNew(p){
 var it={id:ppUid(),status:'',miss:[],url:'',title:'',model:'',code:'',category:'',price:'',maker:'',origin:'',color:'',minqty:'',img:'',specs:'',features:'',tiers:'',memo:'',print:'',pack:'',lead:'',uses:PP_USES,baseQty:0};
 for(var k in (p||{}))it[k]=p[k];
 return it;
}
function ppFind(id){for(var i=0;i<PP_ITEMS.length;i++){if(PP_ITEMS[i].id===id)return i;}return -1;}

/* ---------- parsing helpers ---------- */
function ppClean(s){
 return String(s==null?'':s).replace(/\[\s*공급가[^\]]*\]/g,'').replace(/\(\s*공급가[^)]*\)/g,'').replace(/공급가\s*[:：]?\s*[\d,]*\s*원?/g,'').replace(/[\s\u00a0]+/g,' ').trim();
}
function ppNorm(s){return String(s||'').replace(/[\s\u00a0]+/g,'').replace(/[:：]/g,'');}
function ppTxt(el){return el?(el.textContent||'').replace(/[\s\u00a0]+/g,' ').trim():'';}
function ppNum(s){var v=parseFloat(String(s||'').replace(/[^\d.]/g,''));return isFinite(v)?v:0;}
function ppLines(root){
 var out=[],cur='';
 function flush(){var t=cur.replace(/[\s\u00a0]+/g,' ').trim();if(t)out.push(t);cur='';}
 (function w(n){
  if(n.nodeType===3){cur+=n.nodeValue;return;}
  if(n.nodeType!==1)return;
  var tg=n.tagName.toLowerCase();
  if(/^(script|style|select|option|noscript|iframe|img|head|title)$/.test(tg))return;
  if(tg==='br'){flush();return;}
  var blk=/^(p|div|li|ul|ol|tr|table|h\d|dl|dt|dd|section|article|center|form|td|th|pre)$/.test(tg);
  if(blk)flush();
  for(var c=n.firstChild;c;c=c.nextSibling)w(c);
  if(blk)flush();
 })(root);
 flush();
 return out;
}
function ppInfoKey(label){
 var n=ppNorm(label);
 if(!n||n.length>24)return '';
 if(/^구성/.test(n))return 'comp';
 if(/^(제품규격|규격|사이즈|크기|치수)/.test(n))return 'size';
 if(/^(제품재질|재질|소재|제품소재)/.test(n))return 'mat';
 if(/^(색상|컬러)/.test(n))return 'color';
 if(/^인쇄/.test(n))return 'print';
 if(/^포장/.test(n))return 'pack';
 if(/^(원산지|제조국)/.test(n))return 'origin';
 if(/^(법적허가사항|인증)/.test(n))return 'legal';
 if(/^(제작기간|납기|제작일)/.test(n))return 'lead';
 if(/^(제조사|제조자|브랜드|제조원)/.test(n))return 'maker';
 return '';
}
function ppInfoTable(doc){
 var m={};
 function put(label,val){
  var k=ppInfoKey(label);val=ppClean(val);
  if(!k||!val||m[k]!=null)return;
  if(val.length>260)return;
  m[k]=val;
 }
 doc.querySelectorAll('tr').forEach(function(tr){
  if(tr.querySelector('table'))return;
  var cells=[];for(var c=tr.firstElementChild;c;c=c.nextElementSibling){if(/^(th|td)$/i.test(c.tagName))cells.push(c);}
  for(var i=0;i+1<cells.length;i++){put(ppTxt(cells[i]),ppTxt(cells[i+1]));}
 });
 doc.querySelectorAll('dl').forEach(function(dl){
  var ch=dl.children;
  for(var i=0;i+1<ch.length;i++){if(/^dt$/i.test(ch[i].tagName)&&/^dd$/i.test(ch[i+1].tagName))put(ppTxt(ch[i]),ppTxt(ch[i+1]));}
 });
 return m;
}
function ppSelectOptions(sel){
 var out=[];
 if(!sel)return out;
 sel.querySelectorAll('option').forEach(function(o){
  var t=ppClean(o.textContent);
  if(!t||/^[-\s]*선택/.test(t)||/선택해\s*주세요/.test(t))return;
  out.push(t);
 });
 return out;
}
function ppOptionsByLabel(doc,label){
 var els=doc.querySelectorAll('.Title,dt,th,strong,b,label,span,div,td,li,h4,h5');
 for(var i=0;i<els.length;i++){
  var el=els[i];
  if(ppNorm(ppTxt(el))!==label)continue;
  var c=el.parentElement;
  for(var up=0;c&&up<3;up++,c=c.parentElement){
   var sel=c.querySelector('select');
   if(sel){var o=ppSelectOptions(sel);if(o.length)return o;break;}
  }
 }
 return [];
}
function ppBreadcrumb(doc,name){
 var cands=doc.querySelectorAll('div,p,span,td,ul,li,h2,h3,dl,nav,ol'),best='';
 for(var i=0;i<cands.length;i++){
  var t=ppTxt(cands[i]);
  if(t.length<5||t.length>220)continue;
  if(/^(홈|HOME|Home)\s*[>›»\/]\s*\S/.test(t)&&/[>›»]/.test(t)){
   if(!best||t.length<best.length)best=t;
  }
 }
 if(!best)return '';
 var parts=best.replace(/^(홈|HOME|Home)\s*[>›»\/]\s*/,'').split(/\s*[>›»]\s*/).map(function(s){return s.trim();}).filter(Boolean);
 if(parts.length&&name&&ppNorm(parts[parts.length-1])===ppNorm(name))parts.pop();
 return parts.join(' > ');
}
function ppTiers(doc){
 var tables=doc.querySelectorAll('table.pv_tbl,table.BuyType2,table'),res=null;
 for(var k=0;k<tables.length&&!res;k++){
  var qs=null,ps=null,ps2=null;
  var rows=tables[k].querySelectorAll('tr');
  for(var r=0;r<rows.length;r++){
   var tr=rows[r];
   if(tr.closest&&tr.closest('table')!==tables[k])continue;
   var cells=[];for(var c=tr.firstElementChild;c;c=c.nextElementSibling){if(/^(th|td)$/i.test(c.tagName))cells.push(c);}
   if(cells.length<2)continue;
   var head=ppNorm(ppTxt(cells[0]));
   var vals=[];for(var j=1;j<cells.length;j++)vals.push(ppNum(ppTxt(cells[j])));
   if(head==='수량'&&!qs)qs=vals;
   else if(head==='단가'&&!ps)ps=vals;
   else if(/^(판매가|정상가)$/.test(head)&&!ps2)ps2=vals;
  }
  var pp=ps||ps2;
  if(qs&&pp&&qs.length===pp.length&&pp.some(function(v){return v>0;})){
   res=[];
   for(var q=0;q<qs.length;q++){if(qs[q]>0&&pp[q]>0)res.push({q:qs[q],p:pp[q]});}
  }
 }
 if(!res)return [];
 res.sort(function(a,b){return a.q-b.q;});
 return res;
}
function ppDetail(doc){
 var kvRe=/^(모\s*델\s*명?|색\s*상|사\s*이\s*즈|규\s*격|재\s*질)\s*[:：]\s*(.*)$/;
 var anchorRe=/^[\s\u00a0]*(모\s*델\s*명?|색\s*상|사\s*이\s*즈|규\s*격|재\s*질)\s*[:：]/;
 var body=doc.body||doc.documentElement,found=null;
 var tw=doc.createTreeWalker(body,4,null);
 var n;
 while((n=tw.nextNode())){
  if(!anchorRe.test(n.nodeValue||''))continue;
  var p=n.parentElement,bad=false;
  for(var a=p;a;a=a.parentElement){
   var tg=a.tagName.toLowerCase();
   if(/^(script|style|select|option|title|head)$/.test(tg)||(a.classList&&(a.classList.contains('ProductViewTitle2')||a.classList.contains('BuyType2')))){bad=true;break;}
  }
  if(bad)continue;
  found=p;break;
 }
 var lines=[];
 if(found){
  var el=found;
  while(el&&el!==body&&el.parentElement&&ppLines(el).length<3&&ppTxt(el.parentElement).length<1600)el=el.parentElement;
  lines=ppLines(el);
 }
 var kv={},feats=[];
 var junk=/공급가|회원가|배송비|택배|교환|반품|환불|고객센터|1577|전화|무통장|결제|상품정보고시|저작권|www\.|https?:|단가표|수량별|장바구니|바로구매|^\*|^※/;
 lines.forEach(function(ln){
  ln=ppClean(ln);
  var m=kvRe.exec(ln);
  if(m){
   var key=m[1].replace(/\s+/g,'');
   if(/모델/.test(key))kv.model=kv.model||m[2].trim();
   else if(/색상/.test(key))kv.color=kv.color||m[2].trim();
   else if(/사이즈|규격/.test(key))kv.size=kv.size||m[2].trim();
   else if(/재질/.test(key))kv.mat=kv.mat||m[2].trim();
   return;
  }
  if(ln.length<2||junk.test(ln))return;
  ln=ln.replace(/^[-·•▶▷■□○●◆◇]+\s*/,'');
  if(ln.length<2||ln.length>200)return;
  if(feats.length<12)feats.push(ln);
 });
 return {kv:kv,feats:feats};
}
function ppMemo(doc){
 var out=[],lines=ppLines(doc.body||doc.documentElement);
 lines.forEach(function(ln){
  ln=ppClean(ln);
  if(/^\*/.test(ln)&&/소량|배송비|구매/.test(ln)&&!/공급가|회원가/.test(ln)&&ln.length<150&&out.indexOf(ln)<0&&out.length<3)out.push(ln);
 });
 return out;
}
function ppBrandOf(name){
 var w=String(name||'').trim().split(/[\s\[]/)[0]||'';
 if(PP_BRANDS.indexOf(w)>=0)return w;
 return '';
}
function ppParseDoc(doc,pageUrl){
 var out={};
 var name=ppClean(ppTxt(doc.querySelector('.ProductViewTitle .Title')));
 if(!name){var ogt=doc.querySelector('meta[property="og:title"]');if(ogt)name=ppClean(ogt.getAttribute('content')||'');}
 if(!name){var h=doc.querySelector('h1,h2.title,.ViewTitle');if(h)name=ppClean(ppTxt(h));}
 if(!name){var t=ppTxt(doc.querySelector('title'));if(t&&!/여성기업\s*에버천사/.test(t))name=ppClean(t);}
 out.title=name;
 var img='',im=doc.querySelector('#target_img');
 if(im)img=im.getAttribute('src')||im.getAttribute('data-src')||'';
 if(!img){var oi=doc.querySelector('meta[property="og:image"]');if(oi)img=oi.getAttribute('content')||'';}
 out.img=prAbs(img,pageUrl);
 var code=ppTxt(doc.querySelector('.ViewCode span'));
 if(!/^\d{3,}$/.test(code)){var cm=/상품코드\s*[:：]?\s*(\d{3,})/.exec(ppTxt(doc.body||doc.documentElement));code=cm?cm[1]:'';}
 out.code=code;
 out.category=ppBreadcrumb(doc,name);
 var info=ppInfoTable(doc),det=ppDetail(doc);
 var mm=name.match(/\[([^\[\]]+)\]/g);
 var model=mm?mm[mm.length-1].replace(/[\[\]]/g,'').trim():'';
 out.model=model||det.kv.model||'';
 out.maker=info.maker||ppBrandOf(name)||'';
 out.origin=info.origin||'';
 out.color=info.color||det.kv.color||'';
 var specs=[];
 var comp=info.comp,size=info.size||det.kv.size,mat=info.mat||det.kv.mat;
 if(comp)specs.push('구성: '+comp);
 if(size)specs.push('제품규격: '+size);
 if(mat)specs.push('제품재질: '+mat);
 if(info.legal)specs.push('법적허가사항: '+info.legal);
 out.specs=specs.join('\n');
 var tiers=ppTiers(doc);
 var body=ppTxt(doc.body||doc.documentElement);
 var bm=/기본\s*수량\s*[:：]?\s*([\d,]+)\s*개/.exec(body)||/수량별\s*단가표[^\d]{0,12}기본\s*([\d,]+)\s*개/.exec(body)||/기본\s*([\d,]+)\s*개/.exec(body);
 var base=bm?ppNum(bm[1]):0;
 if(!base&&tiers.length)base=tiers[0].q;
 out.baseQty=base;
 out.tiers=tiers.map(function(x){return x.q+'개 '+fmt(x.p)+'원';}).join('\n');
 var bt=null;tiers.forEach(function(x){if(x.q===base)bt=x;});
 if(!bt&&tiers.length)bt=tiers[0];
 out.price=bt?fmt(bt.p)+'원':'';
 out.minqty=base?base+'개':'';
 var po=ppSelectOptions(doc.querySelector('select#option_print_value,select[name="option_print_value"]'));
 if(!po.length)po=ppOptionsByLabel(doc,'인쇄옵션');
 var bo=ppSelectOptions(doc.querySelector('select#option_print_value_C,select[name="option_print_value_C"]'));
 if(!bo.length)bo=ppOptionsByLabel(doc,'박스옵션');
 var to=ppSelectOptions(doc.querySelector('select#option_print_value_T,select[name="option_print_value_T"]'));
 if(!to.length)to=ppOptionsByLabel(doc,'포장옵션');
 if(!po.length||!bo.length||!to.length){
  ppLines(doc.body||doc.documentElement).forEach(function(ln){
   var m=/^(인쇄옵션|박스옵션|포장옵션)\s*[:：]\s*(.+)$/.exec(ln);
   if(!m)return;
   var v=ppClean(m[2]);if(!v)return;
   if(m[1]==='인쇄옵션'&&!po.length)po=[v];
   if(m[1]==='박스옵션'&&!bo.length)bo=[v];
   if(m[1]==='포장옵션'&&!to.length)to=[v];
  });
 }
 out.print=po.length?po.join(' / '):(info.print||'');
 var pk=bo.concat(to);
 out.pack=pk.length?pk.join(' / '):(info.pack||'');
 out.lead=info.lead||'';
 out.features=det.feats.join('\n');
 out.memo=ppMemo(doc).join('\n');
 return out;
}
function ppDecodeBuf(buf){
 var u8=new Uint8Array(buf);
 function dec(l){try{return new TextDecoder(l).decode(u8);}catch(e){return '';}}
 var utf=dec('utf-8'),euc=dec('euc-kr');
 var head=(utf||euc).slice(0,2000);
 if(/charset\s*=\s*["']?\s*utf-8/i.test(head)&&utf&&/[\uac00-\ud7a3]/.test(utf))return utf;
 if(/charset\s*=\s*["']?\s*(euc-kr|ks_c_5601|ksc5601)/i.test(head)&&euc)return euc;
 if(utf&&utf.indexOf('\ufffd')<0&&/[\uac00-\ud7a3]/.test(utf))return utf;
 return euc||utf;
}
function ppLooksHtml(h){return h&&h.length>1000&&/ProductViewTitle|og:title|og:image|BuyType2|pv_tbl|target_img|수량별\s*단가표/i.test(h);}
function ppSameOrigin(url){
 try{
  var base=(typeof location!=='undefined'&&location.href)?location.href:'https://www.ever1004.com/';
  var u=new URL(url,base);
  if(typeof location!=='undefined'&&/ever1004\.com$/i.test(location.hostname)&&/ever1004\.com$/i.test(u.hostname))return u.pathname+u.search+u.hash;
  return u.href;
 }catch(e){return url;}
}
function ppNormalizeInput(raw){
 raw=String(raw||'').trim();
 if(!raw)return '';
 if(/^https?:\/\//i.test(raw))return raw;
 if(/^\/\//.test(raw))return 'https:'+raw;
 if(raw.charAt(0)==='/'||/product_view\.asp/i.test(raw)||/^(www\.)?ever1004\.com/i.test(raw)){try{return new URL(raw,'https://www.ever1004.com/').href;}catch(e){}}
 return 'https://'+raw.replace(/^\/+/,'');
}
function ppFetch(url){
 return new Promise(function(resolve,reject){
  if(typeof fetch!=='function'){reject(new Error('no-fetch'));return;}
  var done=false;
  var t=setTimeout(function(){if(!done){done=true;reject(new Error('timeout'));}},15000);
  fetch(ppSameOrigin(url),{credentials:'same-origin',headers:{'Accept':'text/html'}})
   .then(function(r){if(!r.ok)throw new Error('http '+r.status);return r.arrayBuffer();})
   .then(function(buf){
    var html=ppDecodeBuf(buf);
    if(!ppLooksHtml(html))throw new Error('stub');
    var doc=new DOMParser().parseFromString(html,'text/html');
    var p=ppParseDoc(doc,url);
    if(!p.title&&!p.img&&!p.tiers)throw new Error('empty');
    if(done)return;done=true;clearTimeout(t);resolve(p);
   })
   .catch(function(e){if(done)return;done=true;clearTimeout(t);reject(e);});
 });
}

/* ---------- cards ---------- */
function ppStatus(it){
 if(it.status==='loading')return '<span>상품 정보를 읽는 중…</span>';
 if(it.status==='manual')return '<span class="warn2">자동으로 읽지 못했어요. 아래 칸을 직접 채워 주세요.</span>';
 if(it.status==='partial')return '<span class="warn2">자동 입력 완료 · 비어 있는 칸: '+esc((it.miss||[]).join(', '))+'</span>';
 if(it.status==='ok')return '<span>자동 입력 완료 · 내용을 확인하고 필요하면 고쳐 주세요.</span>';
 return '';
}
function ppRenderRows(){
 var box=$('pr_rows');
 if(!PP_ITEMS.length){box.innerHTML='<div class="pr-empty">상품 링크를 붙여 넣고 추가를 눌러 주세요.</div>';return;}
 box.innerHTML=PP_ITEMS.map(function(it,idx){
  var fields=PP_FIELDS.map(function(f){
   var cls=f[3]?' '+f[3]:'';
   var inner=f[2]==='a'?'<textarea data-f="'+f[0]+'">'+esc(it[f[0]]||'')+'</textarea>':'<input type="text" data-f="'+f[0]+'" value="'+esc(it[f[0]]||'')+'">';
   return '<label class="f'+cls+'">'+esc(f[1])+inner+'</label>';
  }).join('');
  return '<div class="pc" data-id="'+it.id+'"><div class="pc-head"><div class="pc-thumb">'+(it.img?'<img src="'+esc(it.img)+'" alt="">':'사진')+'</div>'
   +'<div class="pc-ti"><b>'+esc(it.title||('상품 '+(idx+1)))+'</b>'+ppStatus(it)+'</div>'
   +'<div class="pc-btns"><button type="button" data-act="up" title="위로">▲</button><button type="button" data-act="down" title="아래로">▼</button><button type="button" data-act="del">삭제</button></div></div>'
   +'<div class="pc-grid">'+fields+'</div></div>';
 }).join('');
}
$('pr_rows').addEventListener('input',function(e){
 var el=e.target,f=el.getAttribute&&el.getAttribute('data-f');if(!f)return;
 var card=el.closest('.pc');if(!card)return;
 var i=ppFind(card.getAttribute('data-id'));if(i<0)return;
 PP_ITEMS[i][f]=el.value;
 if(f==='title'){var b=card.querySelector('.pc-ti b');if(b)b.textContent=el.value||('상품 '+(i+1));}
 if(f==='img'){var th=card.querySelector('.pc-thumb');if(th)th.innerHTML=el.value?'<img src="'+esc(el.value)+'" alt="">':'사진';}
 ppSave();
});
$('pr_rows').addEventListener('click',function(e){
 var b=e.target.closest&&e.target.closest('button[data-act]');if(!b)return;
 var card=b.closest('.pc');var i=ppFind(card.getAttribute('data-id'));if(i<0)return;
 var act=b.getAttribute('data-act');
 if(act==='del')PP_ITEMS.splice(i,1);
 else if(act==='up'&&i>0){var t=PP_ITEMS[i];PP_ITEMS[i]=PP_ITEMS[i-1];PP_ITEMS[i-1]=t;}
 else if(act==='down'&&i<PP_ITEMS.length-1){var t2=PP_ITEMS[i];PP_ITEMS[i]=PP_ITEMS[i+1];PP_ITEMS[i+1]=t2;}
 ppSave();ppRenderRows();
});
function ppAddFromUrls(){
 var raw=($('pr_url').value||'');
 var list=raw.split(/[\r\n\s,]+/).map(function(s){return s.trim();}).filter(Boolean);
 if(!list.length){$('pr_out').innerHTML='<div class="warn">상품 페이지 주소를 붙여 넣어 주세요.</div>';return;}
 $('pr_url').value='';$('pr_out').innerHTML='';
 list.forEach(function(r){
  var meta=prParseUrl(ppNormalizeInput(r));
  var it=ppNew({url:meta.canonical,code:meta.p_idx,title:meta.p_idx?('상품번호 '+meta.p_idx):'',status:'loading'});
  PP_ITEMS.push(it);
  ppFetch(meta.canonical).then(function(p){
   var i=ppFind(it.id);if(i<0)return;
   var cur=PP_ITEMS[i],miss=[];
   ['title','model','code','category','price','maker','origin','color','minqty','img','specs','features','tiers','memo','print','pack','lead'].forEach(function(k){if(p[k])cur[k]=p[k];});
   cur.baseQty=p.baseQty||0;
   if(!p.title)miss.push('상품명');if(!p.img)miss.push('이미지');if(!p.tiers)miss.push('단가표');
   cur.miss=miss;cur.status=miss.length?'partial':'ok';
   ppSave();ppRenderRows();
  }).catch(function(){
   var i=ppFind(it.id);if(i<0)return;
   PP_ITEMS[i].status='manual';ppSave();ppRenderRows();
  });
 });
 ppSave();ppRenderRows();
}

/* ---------- proposal data model ---------- */
function ppVal(v){
 v=ppClean(v);
 if(!v||/^[-–—]+$/.test(v))return '문의';
 if(/^상세\s*참조\.?$/.test(v)||/^상세\s*페이지\s*참조$/.test(v))return '상세페이지 참조';
 return v;
}
function ppParseTiers(s){
 var out=[];
 String(s||'').split(/\n/).forEach(function(ln){
  var m=ln.match(/\d[\d,]*/g);
  if(m&&m.length>=2){var q=ppNum(m[0]),p=ppNum(m[1]);if(q>0&&p>0)out.push({q:q,p:p});}
 });
 out.sort(function(a,b){return a.q-b.q;});
 return out;
}
function ppSpecs(s){
 var out=[];
 String(s||'').split(/\n/).forEach(function(ln){
  ln=ppClean(ln);if(!ln)return;
  var i=ln.search(/[:：]/);
  if(i>0)out.push([ln.slice(0,i).trim(),ln.slice(i+1).trim()]);else out.push([ln,'']);
 });
 return out;
}
function ppFeatLines(s){
 return String(s||'').split(/\n/).map(function(l){return ppClean(l);}).filter(Boolean).map(function(l){return /^[·•\-]/.test(l)?l.replace(/^[•\-]\s*/,'· ').replace(/^·(?!\s)/,'· '):'· '+l;});
}
function ppFmtDate(s){var m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(s||'');return m?m[1]+'.'+m[2]+'.'+m[3]:ppClean(s);}
function ppWon(n){return fmt(n)+'원';}
function ppSheetData(it,sh){
 var d={};
 var model=ppClean(it.model),code=ppClean(it.code);
 var title=ppClean(it.title)||'상품명 문의';
 d.title=title;
 d.category=ppClean(it.category);
 d.brand=ppClean(sh.pr_brand)||PP_BRAND;
 var rep=[];
 if(sh.pr_rdate)rep.push(['보고일',ppFmtDate(sh.pr_rdate)]);
 if(ppClean(sh.pr_rto))rep.push(['수신',ppClean(sh.pr_rto)]);
 if(ppClean(sh.pr_person))rep.push(['보고자',ppClean(sh.pr_person)]);
 if(ppClean(sh.pr_revent))rep.push(['용도/행사명',ppClean(sh.pr_revent)]);
 var qty=ppNum(sh.pr_rqty),budget=ppNum(sh.pr_budget);
 if(qty>0)rep.push(['필요수량',fmt(qty)+'개']);
 if(budget>0)rep.push(['예산 (VAT 포함)',ppWon(budget)]);
 d.rep=rep;
 d.info=[
  ['모델명',ppVal(model)],['상품코드',ppVal(code)],['판매가\n(VAT 별도)',ppVal(it.price),'red'],
  ['제조사/브랜드',ppVal(it.maker)],['원산지',ppVal(it.origin)],['색상',ppVal(it.color)],
  ['최소주문수량',ppVal(it.minqty)],['제품 페이지','바로가기','link']
 ];
 d.url=ppClean(it.url)||'';
 d.img=ppClean(it.img);
 var specs=ppSpecs(it.specs);
 if(!specs.length)specs=[['구성','문의'],['제품규격','문의'],['제품재질','문의']];
 d.specs=specs.map(function(s){return [s[0],ppVal(s[1])];});
 d.features=ppFeatLines(it.features);
 if(!d.features.length)d.features=['· '+title+' — 기업 기념품·판촉물로 활용하기 좋은 제품입니다.','· 로고 인쇄 등 맞춤 제작은 문의 바랍니다.'];
 var tiers=ppParseTiers(it.tiers);
 var base=it.baseQty||ppNum(it.minqty)||(tiers.length?tiers[0].q:0);
 var hlIdx=-1,est=null;
 if(qty>0&&tiers.length){
  hlIdx=0;
  for(var i=0;i<tiers.length;i++){if(tiers[i].q<=qty)hlIdx=i;}
  var tr=tiers[hlIdx];
  var amt=tr.p*qty,vat=Math.round(amt*0.1),total=amt+vat;
  est={qty:qty,unit:tr.p,tierQ:tr.q,below:qty<tiers[0].q,amt:amt,vat:vat,total:total,budget:budget>0?budget:0};
  if(est.budget){est.diff=est.budget-total;est.pct=Math.abs(est.diff)/est.budget*100;}
 }
 d.tiers=tiers.map(function(t,i){return {gubun:t.q===base?'기본수량':'단체/대량 구매',qty:t.q===base?fmt(t.q)+'개':fmt(t.q)+'개 이상',price:ppWon(t.p)+' (VAT 별도)',hl:i===hlIdx};});
 if(!d.tiers.length)d.tiers=[{gubun:'기본수량',qty:'문의',price:'문의',hl:false}];
 d.est=est;
 var notes=['※ 단가는 VAT 별도이며 인쇄비·포장비·배송비는 별도 견적 문의 바랍니다.'];
 String(it.memo||'').split(/\n/).forEach(function(l){l=ppClean(l);if(l)notes.push(l);});
 if(est)notes.push('※ 예상 금액은 수량별 단가 기준의 참고용 금액이며, 인쇄비·포장비·배송비는 포함되어 있지 않습니다.'+(est.below?' (필요수량이 기본수량보다 적어 기본수량 단가를 적용했습니다.)':''));
 d.notes=notes;
 d.custom=[['로고 인쇄/각인',ppVal(it.print)],['포장/케이스',ppVal(it.pack)],['제작 기간',ppVal(it.lead)]];
 d.uses=ppClean(it.uses)||PP_USES;
 var c=[];
 var pe=ppClean(sh.pr_person),ph=ppClean(sh.pr_phone),em=ppClean(sh.pr_email);
 if(pe)c.push('담당자: '+pe);if(ph)c.push('연락처: '+ph);if(em)c.push('이메일: '+em);
 d.contact=c.length?c.join('     '):'담당자: [담당자]     연락처: [연락처]     이메일: [이메일]';
 d.foot=PP_FOOT;
 return d;
}
function ppEstRows(est){
 var rows=[];
 rows.push(['적용 단가',ppWon(est.unit)+' ('+(est.below?'기본수량':fmt(est.tierQ)+'개 이상')+' 구간)','금액 (VAT 별도)',ppWon(est.amt)]);
 rows.push(['VAT (10%)',ppWon(est.vat),'합계 (VAT 포함)',ppWon(est.total),'tot']);
 if(est.budget){
  var over=est.diff<0;
  rows.push(['예산 (VAT 포함)',ppWon(est.budget),'예산 대비',(over?'초과 ':'여유 ')+ppWon(Math.abs(est.diff))+' ('+est.pct.toFixed(1)+'%)',over?'over':'ok']);
 }
 return rows;
}
function ppPageHtml(it,sh){
 var d=ppSheetData(it,sh),h='';
 h+='<div class="pp-page"><div class="pp-in">';
 h+='<div class="pp-brand">'+esc(d.brand)+'</div><div class="pp-sub">제품 제안서&nbsp;&nbsp;|&nbsp;&nbsp;기업 기념품 · 판촉물</div>';
 if(d.rep.length){
  h+='<table class="pp-rep">';
  for(var i=0;i<d.rep.length;i+=3){
   var ch=d.rep.slice(i,i+3);
   h+='<tr>';
   ch.forEach(function(f,j){
    var last=j===ch.length-1;
    h+='<th>'+esc(f[0])+'</th><td'+(last&&ch.length<3?' colspan="'+((3-ch.length)*2+1)+'"':'')+'>'+esc(f[1])+'</td>';
   });
   h+='</tr>';
  }
  h+='</table>';
 }
 h+='<div class="pp-title">'+esc(d.title)+'</div>';
 if(d.category)h+='<div class="pp-cat">카테고리: '+esc(d.category)+'</div>';
 h+='<div class="pp-top"><div class="pp-img">'+(d.img?'<img src="'+esc(d.img)+'" alt="">':'')+'</div><div class="pp-info"><table class="pp-t"><tr><th class="nv" colspan="2">기본 정보</th></tr>';
 d.info.forEach(function(r){
  var v=r[2]==='link'?(d.url?'<a href="'+esc(d.url)+'" target="_blank" rel="noopener">바로가기</a>':'문의'):('<span class="'+(r[2]||'')+'">'+esc(r[1])+'</span>');
  h+='<tr><th>'+esc(r[0]).replace(/\n/g,'<br>')+'</th><td>'+v+'</td></tr>';
 });
 h+='</table></div></div>';
 h+='<div class="pp-h">■ 주요 사양</div><table class="pp-t">';
 d.specs.forEach(function(s){h+='<tr><th style="width:30mm">'+esc(s[0])+'</th><td>'+esc(s[1])+'</td></tr>';});
 h+='</table>';
 h+='<div class="pp-h">■ 제품 특징</div><div class="pp-feat">'+d.features.map(esc).join('<br>')+'</div>';
 h+='<div class="pp-h">■ 가격 안내</div><table class="pp-t"><tr><th class="nv" style="width:34%">구분</th><th class="nv" style="width:30%">수량</th><th class="nv">단가</th></tr>';
 d.tiers.forEach(function(t){h+='<tr'+(t.hl?' class="hl"':'')+'><th>'+esc(t.gubun)+'</th><td class="c">'+esc(t.qty)+'</td><td class="c red">'+esc(t.price)+'</td></tr>';});
 h+='</table>';
 if(d.est){
  h+='<table class="pp-t pp-est"><tr><th class="nv" colspan="4">예상 금액 &nbsp;(필요수량 '+fmt(d.est.qty)+'개 기준)</th></tr>';
  ppEstRows(d.est).forEach(function(r){
   h+='<tr><th>'+esc(r[0])+'</th><td>'+esc(r[1])+'</td><th>'+esc(r[2])+'</th><td class="'+(r[4]==='tot'?'red tot':r[4]==='over'?'red':r[4]==='ok'?'navy':'')+'">'+esc(r[3])+'</td></tr>';
  });
  h+='</table>';
 }
 h+='<div class="pp-note">'+d.notes.map(esc).join('<br>')+'</div>';
 h+='<div class="pp-h">■ 인쇄 / 커스터마이징</div><table class="pp-t">';
 d.custom.forEach(function(s){h+='<tr><th style="width:30mm">'+esc(s[0])+'</th><td>'+esc(s[1])+'</td></tr>';});
 h+='</table>';
 h+='<div class="pp-h">■ 추천 용도</div><div class="pp-feat">'+esc(d.uses)+'</div>';
 h+='<div class="pp-bar">'+esc(d.contact).replace(/ {5}/g,'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')+'</div><div class="pp-foot">'+esc(d.foot)+'</div>';
 h+='</div></div>';
 return h;
}
function ppFit(rootEl){
 var pages=rootEl.querySelectorAll('.pp-page');
 for(var i=0;i<pages.length;i++){
  var pg=pages[i],inn=pg.querySelector('.pp-in');if(!inn)continue;
  inn.style.zoom='';
  var avail=pg.clientHeight,hh=inn.scrollHeight;
  if(avail>0&&hh>avail)inn.style.zoom=(avail/hh*0.995).toFixed(4);
 }
}
function ppBuild(){
 if(!PP_ITEMS.length){$('pr_out').innerHTML='<div class="warn">먼저 상품 링크를 추가해 주세요.</div>';$('pr_sheet').hidden=true;return false;}
 var sh=ppShared();
 $('pr_out').innerHTML='';
 var box=$('pr_sheet');
 box.innerHTML=PP_ITEMS.map(function(it){return ppPageHtml(it,sh);}).join('');
 box.hidden=false;
 ppFit(box);
 try{if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){ppFit(box);});}catch(e){}
 ppSave();
 return true;
}
function ppPrint(){
 if(!ppBuild())return;
 var sh=ppShared();
 var w=window.open('','ever-ptool-print','width=900,height=1200');
 if(!w){$('pr_out').innerHTML='<div class="warn">팝업이 차단되어 인쇄 창을 열 수 없어요. 브라우저에서 팝업을 허용해 주세요.</div>';return;}
 var fontLinks='<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">';
 var html='<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><title>제품 제안서</title>'+fontLinks+'<style>'+PP_CSS
  +'\n@page{size:A4;margin:12mm}html,body{margin:0;padding:0;background:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact}.pp-wrap{margin:0;padding:0;background:#fff}.pp-page{margin:0 auto;box-shadow:none}'
  +'\n</style></head><body><div class="pp-wrap">'+PP_ITEMS.map(function(it){return ppPageHtml(it,sh);}).join('')+'</div></body></html>';
 w.document.open();w.document.write(html);w.document.close();
 function go(){try{ppFit(w.document);}catch(e){}try{w.focus();w.print();}catch(e){}}
 var pending=0;
 try{
  var imgs=w.document.images;
  for(var i=0;i<imgs.length;i++){if(!imgs[i].complete){pending++;var f=function(){pending--;if(pending<=0)go();};imgs[i].addEventListener('load',f);imgs[i].addEventListener('error',f);}}
 }catch(e){}
 if(pending<=0)setTimeout(go,500);else setTimeout(go,2500);
}

/* ---------- xlsx export ---------- */
var PP_XLSX_URL='https://cdn.jsdelivr.net/npm/exceljs@4.4.0/dist/exceljs.min.js';
function ppLoadExcel(){
 return new Promise(function(res,rej){
  if(window.ExcelJS){res(window.ExcelJS);return;}
  var s=document.createElement('script');s.src=PP_XLSX_URL;s.async=true;
  s.onload=function(){window.ExcelJS?res(window.ExcelJS):rej(new Error('exceljs'));};
  s.onerror=function(){rej(new Error('exceljs-load'));};
  (document.head||document.documentElement).appendChild(s);
 });
}
function ppImgBytes(url){
 return new Promise(function(resolve){
  if(!url){resolve(null);return;}
  function viaFetch(opts){return fetch(ppSameOrigin(url),opts).then(function(r){if(!r.ok)throw new Error('http');return r.arrayBuffer();});}
  viaFetch({credentials:'same-origin'}).catch(function(){return viaFetch({mode:'cors'});}).then(function(buf){
   var u8=new Uint8Array(buf),ext='';
   if(u8[0]===0xFF&&u8[1]===0xD8)ext='jpeg';
   else if(u8[0]===0x89&&u8[1]===0x50)ext='png';
   else if(u8[0]===0x47&&u8[1]===0x49)ext='gif';
   var blob=new Blob([u8],{type:ext?'image/'+ext:'image/webp'});
   var u=URL.createObjectURL(blob),im=new Image();
   im.onload=function(){
    var w=im.naturalWidth,h=im.naturalHeight;
    if(ext){URL.revokeObjectURL(u);resolve({buf:buf,ext:ext,w:w,h:h});return;}
    try{
     var cv=document.createElement('canvas');cv.width=w;cv.height=h;cv.getContext('2d').drawImage(im,0,0);
     cv.toBlob(function(b){URL.revokeObjectURL(u);if(!b){resolve(null);return;}b.arrayBuffer().then(function(pb){resolve({buf:pb,ext:'png',w:w,h:h});});},'image/png');
    }catch(e){URL.revokeObjectURL(u);resolve(null);}
   };
   im.onerror=function(){URL.revokeObjectURL(u);resolve(null);};
   im.src=u;
  }).catch(function(){resolve(null);});
 });
}
function ppSheetName(n,used){
 var s=String(n||'제안서').replace(/[\\\/\?\*\[\]:]/g,' ').replace(/\s+/g,' ').trim().slice(0,31)||'제안서';
 var b=s,k=2;
 while(used[s.toLowerCase()]){var suf=' ('+k+')';s=b.slice(0,31-suf.length)+suf;k++;}
 used[s.toLowerCase()]=1;
 return s;
}
function ppRowH(text,cols,minH,line){
 var lines=0;
 String(text||'').split('\n').forEach(function(l){
  var w=0;for(var i=0;i<l.length;i++)w+=l.charCodeAt(i)>255?2:1.05;
  lines+=Math.max(1,Math.ceil(w/cols));
 });
 return Math.max(minH,lines*(line||14)+6);
}
function ppBuildSheet(wb,it,sh,imgInfo,used){
 var d=ppSheetData(it,sh);
 var FONT='맑은 고딕',NAVY='FF1F3864',BLUE='FF2F5597',LB='FFDCE6F1',RED='FFC00000',GRAY='FF595959',HL='FFFFF2CC';
 var ws=wb.addWorksheet(ppSheetName(d.title,used),{views:[{showGridLines:false}],pageSetup:{paperSize:9,orientation:'portrait',fitToPage:true,fitToWidth:1,fitToHeight:1,horizontalCentered:true,margins:{left:0.4,right:0.4,top:0.5,bottom:0.5,header:0.5,footer:0.5}}});
 [14,14,14,14,4,16,16,16].forEach(function(w,i){ws.getColumn(i+1).width=w;});
 var thin={style:'thin',color:{argb:'FF7F8FA6'}};
 var BOX={top:thin,left:thin,bottom:thin,right:thin};
 function put(r1,c1,r2,c2,val,o){
  o=o||{};
  if(r1!==r2||c1!==c2)ws.mergeCells(r1,c1,r2,c2);
  for(var r=r1;r<=r2;r++)for(var c=c1;c<=c2;c++){
   var cell=ws.getCell(r,c);
   if(o.fill)cell.fill={type:'pattern',pattern:'solid',fgColor:{argb:o.fill}};
   if(o.border)cell.border=BOX;
  }
  var cl=ws.getCell(r1,c1);
  cl.value=val;
  cl.font={name:FONT,size:o.size||10,bold:!!o.bold,color:{argb:o.color||'FF000000'},underline:!!o.underline};
  cl.alignment={horizontal:o.h||'left',vertical:'middle',wrapText:true,indent:o.indent||0};
  return cl;
 }
 var r=1;
 put(r,1,r,8,'',{fill:NAVY,color:'FFFFFFFF',bold:true,size:18,indent:1}).value={richText:[{text:'에버천사 판촉물',font:{name:FONT,size:18,bold:true,color:{argb:'FFFFFFFF'}}},{text:'   www.ever1004.com',font:{name:FONT,size:11,color:{argb:'FFFFFFFF'}}}]};ws.getRow(r).height=33.95;r++;
 put(r,1,r,8,'제품 제안서  |  기업 기념품 · 판촉물',{fill:BLUE,color:'FFFFFFFF',size:10,indent:1});ws.getRow(r).height=20.1;r++;
 ws.getRow(r).height=8.1;r++;
 if(d.rep.length){
  for(var i=0;i<d.rep.length;i+=2){
   var a=d.rep[i],b=d.rep[i+1];
   put(r,1,r,1,a[0],{fill:LB,bold:true,border:true,h:'center'});
   if(b){put(r,2,r,4,a[1],{border:true});put(r,6,r,6,b[0],{fill:LB,bold:true,border:true,h:'center'});put(r,7,r,8,b[1],{border:true});}
   else put(r,2,r,8,a[1],{border:true});
   ws.getRow(r).height=20.1;r++;
  }
  ws.getRow(r).height=8.1;r++;
 }
 put(r,1,r,8,d.title,{bold:true,size:15,color:NAVY});ws.getRow(r).height=ppRowH(d.title,70,30,20);r++;
 if(d.category){put(r,1,r,8,'카테고리: '+d.category,{size:9,color:GRAY});ws.getRow(r).height=16;r++;}
 ws.getRow(r).height=6;r++;
 var r0=r;
 for(var k=0;k<14;k++)ws.getRow(r0+k).height=20.1;
 put(r0,6,r0,8,'기본 정보',{fill:BLUE,color:'FFFFFFFF',bold:true,size:11,h:'center',border:true});
 d.info.forEach(function(row,i){
  var rr=r0+1+i;
  put(rr,6,rr,6,row[0],{fill:LB,bold:true,border:true,h:'center'});
  if(row[2]==='link'){
   var c=put(rr,7,rr,8,d.url?{text:'바로가기',hyperlink:d.url}:'문의',{border:true,color:'FF0563C1',underline:!!d.url});
  }else put(rr,7,rr,8,row[1],{border:true,bold:row[2]==='red',color:row[2]==='red'?RED:'FF000000'});
  if(row[0].indexOf('\n')>=0)ws.getRow(rr).height=30;
 });
 if(imgInfo){
  var id=wb.addImage({buffer:imgInfo.buf,extension:imgInfo.ext});
  var maxW=400,maxH=14*26.8-8,sc=Math.min(maxW/imgInfo.w,maxH/imgInfo.h,1.6);
  ws.addImage(id,{tl:{col:0,row:r0-1},ext:{width:Math.round(imgInfo.w*sc),height:Math.round(imgInfo.h*sc)}});
 }
 r=r0+14;
 ws.getRow(r).height=8.1;r++;
 function head(t){put(r,1,r,8,t,{bold:true,size:12,color:NAVY});ws.getRow(r).height=21.95;r++;}
 head('■ 주요 사양');
 d.specs.forEach(function(s){put(r,1,r,2,s[0],{fill:LB,bold:true,border:true,h:'center'});put(r,3,r,8,s[1],{border:true});ws.getRow(r).height=ppRowH(s[1],58,20.1);r++;});
 ws.getRow(r).height=8.1;r++;
 head('■ 제품 특징');
 var ft=d.features.join('\n');
 put(r,1,r,8,ft,{border:true});ws.getRow(r).height=ppRowH(ft,100,40,14.5);r++;
 ws.getRow(r).height=8.1;r++;
 head('■ 가격 안내');
 put(r,1,r,2,'구분',{fill:BLUE,color:'FFFFFFFF',bold:true,border:true,h:'center'});put(r,3,r,5,'수량',{fill:BLUE,color:'FFFFFFFF',bold:true,border:true,h:'center'});put(r,6,r,8,'단가',{fill:BLUE,color:'FFFFFFFF',bold:true,border:true,h:'center'});ws.getRow(r).height=20.1;r++;
 d.tiers.forEach(function(t){
  put(r,1,r,2,t.gubun,{fill:t.hl?HL:LB,bold:true,border:true,h:'center'});
  put(r,3,r,5,t.qty,{border:true,h:'center',fill:t.hl?HL:null});
  put(r,6,r,8,t.price,{border:true,h:'center',bold:true,color:RED,fill:t.hl?HL:null});
  ws.getRow(r).height=20.1;r++;
 });
 if(d.est){
  ws.getRow(r).height=6;r++;
  put(r,1,r,8,'예상 금액  (필요수량 '+fmt(d.est.qty)+'개 기준)',{fill:NAVY,color:'FFFFFFFF',bold:true,border:true,indent:1});ws.getRow(r).height=21.95;r++;
  ppEstRows(d.est).forEach(function(row){
   put(r,1,r,2,row[0],{fill:HL,bold:true,border:true,h:'center'});
   put(r,3,r,5,row[1],{border:true,h:'center'});
   put(r,6,r,6,row[2],{fill:HL,bold:true,border:true,h:'center'});
   var isTot=row[4]==='tot',isOver=row[4]==='over';
   put(r,7,r,8,row[3],{border:true,h:'center',bold:isTot||isOver||row[4]==='ok',color:(isTot||isOver)?RED:(row[4]==='ok'?NAVY:'FF000000'),size:isTot?11:10});
   ws.getRow(r).height=isTot?24:21;r++;
  });
 }
 d.notes.forEach(function(n){put(r,1,r,8,n,{size:9,color:GRAY});ws.getRow(r).height=ppRowH(n,110,18,13);r++;});
 ws.getRow(r).height=8.1;r++;
 head('■ 인쇄 / 커스터마이징');
 d.custom.forEach(function(s){put(r,1,r,2,s[0],{fill:LB,bold:true,border:true,h:'center'});put(r,3,r,8,s[1],{border:true});ws.getRow(r).height=ppRowH(s[1],58,20.1);r++;});
 ws.getRow(r).height=8.1;r++;
 head('■ 추천 용도');
 put(r,1,r,8,d.uses,{border:true});ws.getRow(r).height=ppRowH(d.uses,100,32.1);r++;
 ws.getRow(r).height=8.1;r++;
 put(r,1,r,8,d.contact,{fill:NAVY,color:'FFFFFFFF',bold:true,indent:1});ws.getRow(r).height=24;r++;
 put(r,1,r,8,d.foot,{fill:'FFF2F2F2',color:GRAY,size:8,indent:1});ws.getRow(r).height=26.1;
 ws.pageSetup.printArea='A1:H'+r;
}
function ppXlsx(){
 if(!PP_ITEMS.length){$('pr_out').innerHTML='<div class="warn">먼저 상품 링크를 추가해 주세요.</div>';return;}
 var sh=ppShared(),btn=$('pr_xlsx');
 $('pr_out').innerHTML='<div class="okmsg">엑셀 파일을 만드는 중이에요…</div>';
 btn.disabled=true;
 ppLoadExcel().then(function(Ex){
  return Promise.all(PP_ITEMS.map(function(it){return ppImgBytes(it.img);})).then(function(imgs){
   var wb=new Ex.Workbook();wb.creator='에버천사';
   var used={};
   PP_ITEMS.forEach(function(it,i){ppBuildSheet(wb,it,sh,imgs[i],used);});
   return wb.xlsx.writeBuffer();
  });
 }).then(function(buf){
  var blob=new Blob([buf],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  var a=document.createElement('a');a.href=URL.createObjectURL(blob);
  var nm=ppClean(PP_ITEMS[0].title).replace(/[\\\/:*?"<>|\[\]]/g,' ').trim().slice(0,30)||'제품';
  a.download='제품제안서_'+nm+(PP_ITEMS.length>1?' 외 '+(PP_ITEMS.length-1)+'건':'')+'.xlsx';
  (document.body||document.documentElement).appendChild(a);a.click();
  setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},2000);
  $('pr_out').innerHTML='<div class="okmsg">엑셀 파일을 내려받았어요. (상품 '+PP_ITEMS.length+'개, 시트 '+PP_ITEMS.length+'개)</div>';
 }).catch(function(e){
  $('pr_out').innerHTML='<div class="warn">엑셀 파일을 만들지 못했어요. 인터넷 연결을 확인하고 다시 시도해 주세요. ('+esc(e&&e.message||'')+')</div>';
 }).then(function(){btn.disabled=false;});
}
function ppReset(){
 PP_ITEMS=[];
 PR_IDS.forEach(function(i){$(i).value='';});
 $('pr_rdate').value=ppToday();
 $('pr_url').value='';
 $('pr_sheet').hidden=true;$('pr_sheet').innerHTML='';
 ppRenderRows();
 var s=store();if(s)try{s.removeItem(LS+'proposal2');}catch(e){}
}
$('pr_add').addEventListener('click',ppAddFromUrls);
$('pr_add_blank').addEventListener('click',function(){PP_ITEMS.push(ppNew({}));ppSave();ppRenderRows();});
$('pr_build').addEventListener('click',function(){if(ppBuild()){try{$('pr_sheet').scrollIntoView({behavior:'smooth',block:'start'});}catch(e){}}});
$('pr_print').addEventListener('click',ppPrint);
$('pr_xlsx').addEventListener('click',ppXlsx);
PR_IDS.forEach(function(i){$(i).addEventListener('input',function(){ppSave();});});

function prAbs(src,base){
 if(!src)return '';
 src=String(src).trim();
 if(/^https?:\/\//i.test(src))return src.replace(/^http:\/\//i,'https://');
 if(src.indexOf('//')===0)return 'https:'+src;
 if(src.charAt(0)==='/')return 'https://www.ever1004.com'+src;
 try{return new URL(src,base||'https://www.ever1004.com/').href;}catch(e){return src;}
}
function prParseUrl(url){
 var out={raw:url,canonical:url,p_idx:''};
 try{
  var u=new URL(url,'https://www.ever1004.com/');
  var id=u.searchParams.get('p_idx')||u.searchParams.get('P_IDX')||'';
  if(!id){var m=/p_idx=(\d+)/i.exec(url);if(m)id=m[1];}
  out.p_idx=id||'';
  if(id)out.canonical='https://www.ever1004.com/product_w/product_view.asp?p_idx='+id;
  else if(/ever1004\.com$/i.test(u.hostname))out.canonical=u.href;
 }catch(e){}
 return out;
}

/* Reset */
var RESET={budget:[B_IDS,function(){root.querySelector('input[name="b_mode"][value="per"]').checked=true;root.querySelector('input[name="b_vat"][value="inc"]').checked=true;bModeLabel();},'b_out'],
 dday:[D_IDS,function(){$('d_make').value=7;$('d_ship').value=2;$('d_draft').value=2;},'d_out'],
 quote:[X_IDS,function(){for(var c=0;c<3;c++)$('x_vat_'+c).value='exc';},'x_out'],
 proposal:[PR_IDS,function(){ppReset();},'pr_out']};
root.querySelectorAll('[data-reset]').forEach(function(b){b.addEventListener('click',function(){var k=b.dataset.reset,r=RESET[k];r[0].forEach(function(i){var el=$(i);if(el.tagName!=='SELECT')el.value='';});r[1]();$(r[2]).innerHTML='';clearLS(k);});});

/* Enter key triggers calc */
[['tool-budget',calcBudget],['tool-dday',calcDday],['tool-quote',calcQuote],['tool-proposal',function(){}]].forEach(function(p){$(p[0]).addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target.tagName==='INPUT')p[1]();});});

/* Init: restore */
if(load('budget',B_IDS,B_R)){bModeLabel();if(num('b_people')&&num('b_amt'))calcBudget();}
if(load('dday',D_IDS)&&$('d_date').value)calcDday();
if(load('quote',X_IDS))calcQuote();
ppLoad();
if(!$('pr_rdate').value)$('pr_rdate').value=ppToday();
ppRenderRows();
var cm=new Date().getMonth();try{var sv=store()&&store().getItem(LS+'cal');if(sv!=null&&sv!=='')cm=+sv;}catch(e){}
renderCal(cm);
try{var st=store()&&store().getItem(LS+'tab');if(st&&$('tool-'+st))show(st);}catch(e){}

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
function printSection(el, title){
  if(!el || !el.innerHTML){ return; }
  printWindow(title||'인쇄', el.innerHTML);
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
