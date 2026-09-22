const canvas=document.querySelector("#sky"),ctx=canvas.getContext("2d");let stars=[],w,h,dpr;
function resize(){dpr=Math.min(devicePixelRatio||1,2);w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+"px";canvas.style.height=h+"px";ctx.setTransform(dpr,0,0,dpr,0,0);stars=Array.from({length:Math.floor(w*h/3200)},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.15+.15,a:Math.random()*.75+.15,p:Math.random()*6.28,s:Math.random()*.012+.004}))}addEventListener("resize",resize);resize();
function draw(t){ctx.clearRect(0,0,w,h);for(const s of stars){let a=s.a*(.7+.3*Math.sin(t*s.s+s.p));ctx.beginPath();const view=document.querySelector("#universe");const sx=((s.x-(view?.scrollLeft||0)*.22)%w+w)%w,sy=((s.y-(view?.scrollTop||0)*.22)%h+h)%h;ctx.arc(sx,sy,s.r,0,7);ctx.fillStyle=`rgba(244,241,224,${a})`;ctx.fill()}requestAnimationFrame(draw)}requestAnimationFrame(draw);

// Edita aquí las 30 estrellas. Las cinco cartas llevan letter: true.
const memories=[
  {
    "date": "PARA TI",
    "title": "Así te quiero",
    "text": "Así, tal cual eres, con tus manías y tu manera de mirar el mundo. Así te quiero.",
    "photo": "photos/m01.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Mi persona favorita",
    "text": "De todas las personas que he conocido, elijo seguir escogiéndote a ti cada día.",
    "photo": "photos/m02.jpg",
    "big": false
  },
  {
    "date": "SOLO PARA TI",
    "title": "Desde que llegaste",
    "text": "No sé si alguna vez te he explicado de verdad cuánto cambió mi vida desde que llegaste.\n\nAntes de ti había muchas cosas que imaginaba sobre el amor, pero contigo entendí que amar a alguien va mucho más allá de decir “te quiero”. Es encontrar a una persona con la que quieres compartir hasta los días más normales.\n\nDesde que estás conmigo, muchos momentos que podrían haber sido simplemente un día más se convirtieron en recuerdos que quiero guardar para siempre.\n\nY si pudiera volver atrás y vivirlo todo otra vez, volvería a elegir el camino que me llevó hasta ti.\n\nTu futuro marido",
    "letter": true,
    "secret": true
  },
  {
    "date": "PARA TI",
    "title": "Tu risa",
    "text": "Hay un sonido que reconozco entre mil: el de tu risa. Ojalá no deje de escucharlo nunca.",
    "photo": "photos/m03.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "A tu lado",
    "text": "No necesito un lugar exacto. Cualquier sitio contigo se convierte en mi favorito.",
    "photo": "photos/m04.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Nuestra mayor certeza",
    "text": "Contigo tengo clarísimo lo que quiero: seguir sumando días juntos.",
    "photo": "photos/m05.jpg",
    "big": true
  },
  {
    "date": "PARA TI",
    "title": "Lo que viene",
    "text": "Me hace ilusión todo lo que aún no hemos vivido, sabiendo que lo viviremos juntos.\n\nTu futuro marido",
    "photo": "photos/m06.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Tu mirada",
    "text": "Hay algo en tu mirada que me sigue desarmando, aunque ya la conozca de memoria.",
    "photo": "photos/m07.jpg",
    "big": false
  },
  {
    "date": "SOLO PARA TI",
    "title": "Lo que amo de ti",
    "text": "Amo muchas cosas de ti, pero sobre todo amo esas pequeñas cosas que quizá tú ni siquiera notas.\n\nTu manera de ser, tus gestos, tus ocurrencias, la forma en la que me miras, nuestras bromas, nuestras conversaciones y hasta esos momentos en los que no estamos de acuerdo.\n\nAmo poder ser yo cuando estoy contigo.\n\nNo eres perfecta, yo tampoco lo soy, y precisamente por eso me gusta tanto lo nuestro. Porque no necesito una historia perfecta.\n\nSolo quiero nuestra historia.\n\nTu futuro marido",
    "letter": true,
    "secret": false
  },
  {
    "date": "PARA TI",
    "title": "Hablar contigo",
    "text": "Podría hablar contigo de cualquier cosa durante horas y nunca aburrirme.",
    "photo": "photos/m08.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Caminar juntos",
    "text": "Me gusta caminar a tu paso, sin prisa, sin necesitar llegar a ningún sitio.",
    "photo": "photos/m09.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Nuestra canción",
    "text": "Hay canciones que ya no puedo escuchar sin pensar en ti.",
    "photo": "photos/m10.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Lo cotidiano",
    "text": "Me gustan sobre todo los planes pequeños: un café, una charla, estar.",
    "photo": "photos/m11.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Tus abrazos",
    "text": "Tus abrazos tienen la manía de arreglarlo todo, aunque nada haya cambiado.",
    "photo": "photos/m12.jpg",
    "big": false
  },
  {
    "date": "SOLO PARA TI",
    "title": "Gracias",
    "text": "Gracias.\n\nPor estar conmigo. Por tener paciencia conmigo cuando no siempre soy fácil. Por celebrar mis alegrías y acompañarme cuando las cosas no salen como esperaba.\n\nGracias por cada abrazo, cada conversación, cada tontería que nos ha hecho reír y cada momento difícil que hemos conseguido superar juntos.\n\nCuando miro todo lo que hemos vivido, me doy cuenta de que nuestra historia no está hecha solamente de grandes momentos.\n\nEstá hecha de cientos de pequeños momentos en los que, de una manera u otra, seguimos eligiéndonos.\n\nY por eso, gracias por elegirme.\n\nTu futuro marido",
    "letter": true,
    "secret": false
  },
  {
    "date": "PARA TI",
    "title": "Perdernos juntos",
    "text": "Contigo hasta perderse tiene su gracia. Cualquier camino está bien si es a tu lado.",
    "photo": "photos/m13.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Lo que aún nos queda",
    "text": "Tengo ganas de todos los planes que todavía no hemos hecho.",
    "photo": "photos/m14.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Reírnos de tonterías",
    "text": "Nuestras tonterías privadas son de mis cosas favoritas del mundo.",
    "photo": "photos/m15.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Las cosas simples",
    "text": "No hace falta que salga perfecto. Contigo, hasta lo simple sabe mejor.",
    "photo": "photos/m16.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Pase lo que pase",
    "text": "Con buen o mal tiempo, prefiero estar contigo antes que en cualquier otro sitio.",
    "photo": "photos/m17.jpg",
    "big": false
  },
  {
    "date": "SOLO PARA TI",
    "title": "Lo que viene",
    "text": "Cuando pienso en nosotros, una de las cosas que más ilusión me hace es saber que todavía nos queda muchísimo por vivir.\n\nNos queda casarnos.\n\nNos queda construir nuestro hogar.\n\nNos quedan viajes, domingos tranquilos, decisiones importantes, días increíbles y seguramente también algunos días complicados.\n\nNos queda crecer, aprender y cambiar.\n\nY no sé exactamente cómo será nuestra vida dentro de diez, veinte o cincuenta años.\n\nPero sí sé algo:\n\nquiero descubrirla contigo.",
    "letter": true,
    "secret": false
  },
  {
    "date": "PARA TI",
    "title": "Detalles bonitos",
    "text": "Hay momentos pequeños del día que me gusta guardar solo porque los vivo contigo.",
    "photo": "photos/m18.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Tus gestos",
    "text": "A veces no hacen falta palabras. Tus gestos ya me lo dicen todo.",
    "photo": "photos/m19.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Ir contigo",
    "text": "No importa tanto el destino cuando el trayecto es contigo.",
    "photo": "photos/m20.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Sin prisa",
    "text": "Me gustan los planes sin agenda, sin reloj, solo nosotros dos.",
    "photo": "photos/m21.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Mi refugio",
    "text": "Contigo he encontrado ese lugar tranquilo al que siempre quiero volver.",
    "photo": "photos/m22.jpg",
    "big": false
  },
  {
    "date": "SOLO PARA TI",
    "title": "Siempre tú",
    "text": "Si has llegado hasta esta estrella, ya has recorrido muchos de nuestros recuerdos.\n\nHas visto fotografías, momentos, lugares y pequeñas partes de nuestra historia.\n\nPero quería que la última estrella no tuviera una fotografía.\n\nPorque todavía no existe.\n\nEsta estrella representa todos los recuerdos que todavía nos quedan por crear.\n\nNuestra boda. Nuestro matrimonio. Nuestro hogar. Nuestros viajes. Las noches hablando hasta tarde. Las mañanas despertándonos juntos. Las nuevas fotografías que algún día ocuparán lugares que hoy están vacíos.\n\nY entre todas esas cosas hay algo que espero que nunca cambie.\n\nQue cuando pasen los años y miremos hacia atrás, podamos seguir diciendo:\n\nentre millones de personas, nos encontramos tú y yo.\n\nY si tuviera que volver a empezar…\n\nvolvería a elegirte a ti. ❤️\n\nTu futuro marido",
    "letter": true,
    "secret": false
  },
  {
    "date": "PARA TI",
    "title": "Celebrarte",
    "text": "Me gusta celebrar lo pequeño y lo grande, y sobre todo, celebrarte a ti.",
    "photo": "photos/m23.jpg",
    "big": false
  },
  {
    "date": "PARA TI",
    "title": "Lo que sigue",
    "text": "Estoy deseando seguir escribiendo esta historia contigo, letra a letra.",
    "photo": "photos/m24.jpg",
    "big": false
  },
  {
    "date": "24 · 07 · 2027",
    "title": "Nuestra próxima gran aventura",
    "text": "Ese día comenzará un capítulo nuevo. Hasta entonces, seguimos llenando nuestro cielo de recuerdos.",
    "photo": "photos/m25.jpg",
    "wedding": true,
    "big": true
  }
];
const zone=document.querySelector("#memories");
memories.forEach((m,i)=>{const b=document.createElement("button");b.className=`memory ${m.big?"big":""} ${m.letter?"letter":""}`;b.style.setProperty("--speed",(2.2+(i%7)*.31)+"s");b.setAttribute("aria-label",`Explorar estrella ${i+1}`);b.onclick=()=>openMemory(m);zone.appendChild(b)});
// A spacious, scrollable sky. Positions stay fixed as the viewport changes.
const viewport=document.querySelector('#universe');
const worldWidth=2400,worldHeight=1800;
zone.style.width=worldWidth+'px';zone.style.height=worldHeight+'px';
[...zone.children].forEach((b,i)=>{
 const col=i%6,row=Math.floor(i/6);
 b.style.left=(180+col*400+Math.sin(i*2.4)*90)+'px';
 b.style.top=(180+row*350+Math.cos(i*1.7)*75)+'px';
 b.addEventListener('focus',()=>{if(!drag)b.scrollIntoView({block:'nearest',inline:'nearest'})});
});
function home(){viewport.scrollTo({left:(worldWidth-viewport.clientWidth)/2,top:(worldHeight-viewport.clientHeight)/2})}
document.querySelector('#home').onclick=home;
requestAnimationFrame(home);
let drag=null,suppressClick=false;
viewport.addEventListener('pointerdown',e=>{
 if(e.button!==0||!e.isPrimary)return;
 drag={id:e.pointerId,x:e.clientX,y:e.clientY,left:viewport.scrollLeft,top:viewport.scrollTop,moved:false};suppressClick=false;
});
viewport.addEventListener('pointermove',e=>{
 if(!drag||e.pointerId!==drag.id)return;
 const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
 if(!drag.moved&&Math.hypot(dx,dy)>7){drag.moved=true;viewport.setPointerCapture(e.pointerId);viewport.classList.add('dragging')}
 if(drag.moved){viewport.scrollLeft=drag.left-dx;viewport.scrollTop=drag.top-dy;e.preventDefault()}
});
function endDrag(e){if(!drag||e.pointerId!==drag.id)return;suppressClick=drag.moved;drag=null;viewport.classList.remove('dragging');if(viewport.hasPointerCapture(e.pointerId))viewport.releasePointerCapture(e.pointerId)}
viewport.addEventListener('pointerup',endDrag);viewport.addEventListener('pointercancel',endDrag);
viewport.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopPropagation();suppressClick=false}},true);
viewport.addEventListener('keydown',e=>{
 const delta={ArrowLeft:[-120,0],ArrowRight:[120,0],ArrowUp:[0,-120],ArrowDown:[0,120]}[e.key];
 if(delta){e.preventDefault();viewport.scrollBy({left:delta[0],top:delta[1]})}
});
const modal=document.querySelector("#modal");
let lastFocus;
function openMemory(m){lastFocus=document.activeElement;document.querySelector("#date").textContent=m.date;document.querySelector("#title").textContent=m.title;document.querySelector("#text").textContent=m.text;const photo=document.querySelector('#photo'),photoImg=document.querySelector('#photo-img'),photoPlaceholder=document.querySelector('#photo-placeholder');photo.hidden=!!m.letter;if(m.photo){photoImg.src=m.photo;photoImg.hidden=false;photoPlaceholder.hidden=true}else{photoImg.hidden=true;photoImg.removeAttribute('src');photoPlaceholder.hidden=false}document.querySelector('#reveal').hidden=!m.secret;modal.classList.add("show");modal.setAttribute("aria-hidden","false");document.querySelector('#close').focus()}
function closeModal(){modal.classList.remove("show");modal.setAttribute("aria-hidden","true");lastFocus?.focus()}
document.querySelector("#close").onclick=closeModal;document.querySelector(".backdrop").onclick=closeModal;
const wedding={date:"24 · 07 · 2027",title:"Nuestra próxima gran aventura",text:"Ese día comenzará un capítulo nuevo. Hasta entonces, seguimos llenando nuestro cielo de recuerdos."};
document.querySelector("#wedding").onclick=()=>openMemory(wedding);document.querySelector("#wedding").onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openMemory(wedding)}};
function countdown(){const target=new Date("2027-07-24T13:00:00+02:00"),now=new Date(),ms=Math.max(0,target-now),d=Math.floor(ms/86400000),hr=Math.floor(ms%86400000/3600000);document.querySelector("#countdown").textContent=`Faltan ${d} días y ${hr} horas para nuestro “sí”`};countdown();setInterval(countdown,60000);
const finale=document.querySelector("#finale");function showFinal(){finale.classList.add("show");finale.setAttribute("aria-hidden","false")}function closeFinal(){finale.classList.remove("show");finale.setAttribute("aria-hidden","true");lastFocus?.focus()}document.querySelector("#finalClose").onclick=closeFinal;document.querySelector("#reveal").onclick=()=>{closeModal();showFinal();document.querySelector("#finalClose").focus()};
// Local background music: starts only after a visitor's gesture.
const music=document.querySelector('#background-music'),soundButton=document.querySelector('#sound'),welcome=document.querySelector('#welcome'),musicStatus=document.querySelector('#music-status');
music.volume=.22;
function updateMusicButton(){const playing=!music.paused;soundButton.textContent=playing?'♪':'♫';soundButton.setAttribute('aria-pressed',String(playing));soundButton.setAttribute('aria-label',playing?'Pausar música':'Reproducir música')}
async function playMusic(){try{await music.play();musicStatus.textContent=''}catch{musicStatus.textContent='No se ha podido iniciar la música. Pulsa ♫ para volver a intentarlo.'}updateMusicButton()}
function enterUniverse(withMusic){welcome.hidden=true;document.querySelector('#universe').focus();if(withMusic)playMusic()}
document.querySelector('#enter').onclick=()=>enterUniverse(true);
document.querySelector('#enter-silent').onclick=()=>enterUniverse(false);
soundButton.onclick=()=>{if(music.paused)playMusic();else music.pause()};
music.addEventListener('play',updateMusicButton);music.addEventListener('pause',updateMusicButton);
music.addEventListener('error',()=>{musicStatus.textContent='No se pudo cargar la música. Comprueba que la carpeta audio acompaña a la web.'});
document.querySelector('#enter').focus();
welcome.addEventListener('keydown',e=>{if(e.key==='Tab'){e.preventDefault();const first=document.querySelector('#enter'),last=document.querySelector('#enter-silent');(document.activeElement===first?last:first).focus()}});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(finale.classList.contains("show"))closeFinal();else closeModal()}});
document.addEventListener('keydown',e=>{if(e.key!=='Tab')return;const layer=finale.classList.contains('show')?finale:modal.classList.contains('show')?modal:null;if(!layer)return;const items=[...layer.querySelectorAll('button')].filter(b=>!b.hidden);const first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}});
