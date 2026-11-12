const COMPER_ADDED_AT='2026-11-12T00:00:00+02:00';
const COMPER_TEST_1=[
 {q:'Din ce număr trebuie scăzut de 6 ori câte 8 pentru a obține cel mai mic număr de două cifre cu cifre diferite?',options:['48','58','68','78'],answer:1},
 {q:'Trei creioane costă cât 9 radiere. O radieră costă 2 lei. Cât costă două creioane?',options:['6 lei','9 lei','12 lei','18 lei'],answer:2},
 {q:'Câte numere naturale de două cifre au produsul cifrelor egal cu 12?',options:['2','3','4','5'],answer:2},
 {q:'Anei îi mai trebuie 8 lei ca să cumpere 5 caiete a câte 6 lei. Câți lei are Ana?',options:['18 lei','22 lei','30 lei','38 lei'],answer:1},
 {q:'Suma a două numere este 100. Dacă adăugăm 27 la fiecare număr, care va fi noua sumă?',options:['127','154','173','200'],answer:1},
 {q:'Diferența dintre cel mai mare și cel mai mic număr de forma aa6 este:',options:['880','890','996','1000'],answer:0},
 {q:'Sonia are 10 lalele roșii. La fiecare schimb dă 3 lalele roșii și primește 5 galbene. Câte lalele are după două schimburi?',options:['12','14','16','20'],answer:1},
 {q:'Un album are 4 pagini cu câte 9 timbre. Pe fiecare pagină se mai lipesc câte 3 timbre. Câte timbre sunt acum în album?',options:['36','42','48','54'],answer:2},
 {q:'Melcul a parcurs un sfert din drum. Dacă mai are de parcurs 18 metri, cât măsoară drumul în total?',options:['18 m','21 m','24 m','72 m'],answer:2},
 {q:'Alex are 36 de timbre în două plicuri, în mod egal. Le împarte în mod egal cu cele două prietene ale sale. Câte timbre primește Alex?',options:['6','12','18','24'],answer:1},
 {q:'În 3 săculețe sunt câte 7 nasturi, iar în 5 săculețe sunt câte 4 nasturi. Câți nasturi sunt în total?',options:['35','41','40','45'],answer:1},
 {q:'Dana rezolvă 72 de probleme. După fiecare grup de 18 probleme face o pauză de 5 minute, dar nu mai face pauză după ultimul grup. Câte minute durează pauzele?',options:['10 minute','15 minute','20 minute','25 minute'],answer:1},
 {q:'Radu a colecționat 48 de timbre, iar Victor de 6 ori mai puține. Câte timbre le mai trebuie împreună pentru a avea 100?',options:['42','44','52','56'],answer:1},
 {q:'Dacă aduni un număr cu predecesorul și succesorul său, obții 42. Care este numărul?',options:['13','14','15','12'],answer:1},
 {q:'Dublul unui număr a fost mărit cu 5 și s-a obținut 45. Care este numărul?',options:['17','20','25','40'],answer:1},
 {q:'Într-o cutie încap 3 bile roșii, 2 negre și 4 albe. Câte bile albe și negre încap în 10 cutii?',options:['40','50','60','70'],answer:2},
 {q:'Pentru fiecare 2 boabe de grâu se află 1 bob de porumb, iar la 3 boabe de porumb se află 1 bob de fasole. Dacă sunt 80 de boabe în total, câte sunt de porumb?',options:['16','20','24','32'],answer:2},
 {q:'Ce număr se mărește cu 72 atunci când i se adaugă un zero la dreapta?',options:['6','7','8','9'],answer:2}
];
FRIENDLY_ROUTES['matematica/antrenament-comper']=['math','comper'];
FRIENDLY_ROUTES['matematica/antrenament-comper/testul-1']=['math','comper','test1'];
const comperOldView=view;
view=function(html){if(route[0]==='math'&&!route[1])html=html.replace('<div class="cards">','<div class="cards">'+card('🎯 Antrenament Comper','Teste de antrenament pentru concurs',"go('math','comper')",COMPER_ADDED_AT));return comperOldView(html);};
const comperOldCrumbs=crumbs;
crumbs=function(){return comperOldCrumbs().replace('>comper</button>','>Antrenament Comper</button>').replace('>test1</button>','>Testul 1</button>');};
function comperSet(i,value){state['comper-'+i]=String(value);saveProgress();const score=document.getElementById('comper-score');if(score)score.replaceChildren();}
function comperTask(item,i){
 const letters=['a','b','c','d'];
 const options=item.options.map((option,j)=>'<label class="option"><input type="radio" name="comper-'+i+'" value="'+j+'" '+(String(state['comper-'+i])===String(j)?'checked':'')+' onchange="comperSet('+i+',this.value)"> <b>'+letters[j]+'.</b> '+esc(option)+'</label>').join('');
 return '<div class="task" id="comper-task-'+i+'"><p><b>'+(i+1)+'.</b> '+esc(item.q)+'</p><div class="options">'+options+'</div><div class="comper-feedback" aria-live="polite"></div></div>';
}
function comperRender(level){
 if(level!=='test1')return view('<div class="hero"><h2>🎯 Antrenament Comper</h2><p>Exersează matematica prin teste cu variante de răspuns.</p></div><div class="cards">'+card('📝 Testul 1','18 exerciții • timp orientativ 90 de minute',"go('math','comper','test1')",COMPER_ADDED_AT)+'</div>');
 const standard=COMPER_TEST_1.slice(0,16).map(comperTask).join('');
 const excellence=COMPER_TEST_1.slice(16).map((item,i)=>comperTask(item,i+16)).join('');
 return view('<div class="hero"><div class="section-label">Antrenament Comper · Clasa a III-a</div><h2>📝 Testul 1</h2><p>18 exerciții cu variante de răspuns. Timp orientativ: 90 de minute.</p><p>Alege o singură variantă la fiecare exercițiu.</p></div><div class="panel"><h3>Standard · 5 puncte pentru fiecare exercițiu</h3>'+standard+'<h3>Excelență · 10 puncte pentru fiecare exercițiu</h3>'+excellence+'<div class="row"><button class="btn" onclick="comperVerify()">✓ Verifică</button><button class="btn alt" onclick="comperRepeat()">↺ Reîncearcă</button></div><div id="comper-score" aria-live="polite"></div></div>');
}
function comperVerify(){
 let correctCount=0,points=0,correctIds=[];
 COMPER_TEST_1.forEach((item,i)=>{const correct=String(state['comper-'+i])===String(item.answer),task=document.getElementById('comper-task-'+i);task.classList.toggle('good',correct);task.classList.toggle('bad',!correct);task.querySelector('.comper-feedback').textContent=correct?'✓ Corect!':'Mai încearcă! 💡';if(correct){correctCount++;points+=i<16?5:10;correctIds.push(String(i));}});
 document.getElementById('comper-score').innerHTML='<div class="result">'+correctCount+' din 18 răspunsuri corecte · '+points+' din 100 de puncte. '+(points===100?'Bravo! 🌟':'Poți corecta răspunsurile și verifica din nou.')+'</div>';
 rewardAfter(correctIds,18,'#comper-score','math');
}
function comperRepeat(){for(let i=0;i<COMPER_TEST_1.length;i++)delete state['comper-'+i];saveProgress();comperRender('test1');window.scrollTo(0,0);}
const comperStyle=document.createElement('style');comperStyle.textContent='.comper-feedback{font-weight:650;margin-top:7px}';document.head.appendChild(comperStyle);
const comperOldRender=render;render=function(){if(route[0]==='math'&&route[1]==='comper')return comperRender(route[2]);return comperOldRender();};
const comperResolved=routeFromPath();if(JSON.stringify(comperResolved)!==JSON.stringify(route)){route=comperResolved;state=loadProgress();}render();
