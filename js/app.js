const screens=document.querySelectorAll('.screen');
const navs=document.querySelectorAll('.nav-fab');
const bgm=document.getElementById('bgm');
const audioBtn=document.getElementById('audioToggle');

function show(i){
screens.forEach(s=>s.classList.remove('screen--active'));
screens[i].classList.add('screen--active');
}

/* Navegación */
navs.forEach(btn=>{
btn.addEventListener('click',()=>{
bgm.play().catch(()=>{});
show(parseInt(btn.dataset.go));
});
});

/* Toggle audio */
audioBtn.addEventListener('click',()=>{
if(bgm.paused){
bgm.play();
audioBtn.textContent="🔊";
}else{
bgm.pause();
audioBtn.textContent="🔇";
}
});
