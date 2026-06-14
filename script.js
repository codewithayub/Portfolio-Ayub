const topBtn=document.getElementById('topBtn');

window.addEventListener('scroll',()=>{
topBtn.style.display=window.scrollY>300?'block':'none';
});

topBtn.addEventListener('click',()=>{
window.scrollTo({top:0,behavior:'smooth'});
});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.addEventListener('click',function(e){
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
});
});

document.getElementById('contactForm').addEventListener('submit',function(e){
e.preventDefault();
alert('Form submitted. Connect EmailJS to receive emails.');
this.reset();
});
