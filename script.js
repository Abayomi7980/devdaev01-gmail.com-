// Nav scroll
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>50));

// Mobile menu
const ham=document.getElementById('ham');
const menu=document.getElementById('mobileMenu');
ham.addEventListener('click',()=>menu.classList.toggle('open'));
document.querySelectorAll('.mob-link').forEach(l=>l.addEventListener('click',()=>menu.classList.remove('open')));

// Scroll animations
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      e.target.querySelectorAll('.bar-fill').forEach(b=>b.style.width=b.dataset.w+'%');
    }
  });
},{threshold:.15});
document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));

// Contact form
document.getElementById('submitBtn').addEventListener('click',function(){
  const inputs=document.querySelectorAll('.contact-form input,.contact-form textarea');
  let ok=true;inputs.forEach(i=>{if(!i.value.trim())ok=false});
  if(ok){this.textContent='Sending...';setTimeout(()=>{this.style.display='none';document.getElementById('formSuccess').style.display='block';},1200);}
});

// Case study modals
function openCS(id){
  const el=document.getElementById('cs-'+id);
  el.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeCS(id){
  const el=document.getElementById('cs-'+id);
  el.classList.remove('open');
  document.body.style.overflow='';
}
// Close on backdrop click
document.querySelectorAll('.cs-overlay').forEach(o=>{
  o.addEventListener('click',e=>{if(e.target===o){o.classList.remove('open');document.body.style.overflow='';}});
});
// Close on Escape
document.addEventListener('keydown',e=>{
  if(e.key==='Escape')document.querySelectorAll('.cs-overlay.open').forEach(o=>{o.classList.remove('open');document.body.style.overflow='';});
});
