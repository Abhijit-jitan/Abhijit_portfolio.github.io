
function toggleTheme(){
 const t=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";
 document.documentElement.setAttribute("data-theme",t);
 localStorage.theme=t;
}
if(localStorage.theme){
 document.documentElement.setAttribute("data-theme",localStorage.theme);
}

document.addEventListener("contextmenu",e=>e.preventDefault());
document.addEventListener("keydown",e=>{
 if(e.key==="PrintScreen"){e.preventDefault();alert("Content protected");}
});
function filterProjects(tag){
 document.querySelectorAll(".project").forEach(p=>{
  p.style.display=(tag==="all"||p.dataset.tech.includes(tag))?"block":"none";
 });
}
