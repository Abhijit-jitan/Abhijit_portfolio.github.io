
// Dark mode
function toggleTheme(){
 const t=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";
 document.documentElement.setAttribute("data-theme",t);
 localStorage.theme=t;
}
if(localStorage.theme){
 document.documentElement.setAttribute("data-theme",localStorage.theme);
}

// Disable right-click & common screenshot keys (deterrence only)
document.addEventListener("contextmenu",e=>e.preventDefault());
document.addEventListener("keydown",e=>{
 if(
   e.key==="PrintScreen" ||
   (e.ctrlKey && ["c","s","p","u"].includes(e.key.toLowerCase())) ||
   (e.ctrlKey && e.shiftKey && ["i","j"].includes(e.key.toLowerCase()))
 ){
   e.preventDefault();
   alert("Content protection enabled");
 }
});

// Project filter & search
function filterProjects(tag){
 document.querySelectorAll(".project").forEach(p=>{
  p.style.display=(tag==="all"||p.dataset.tech.includes(tag))?"block":"none";
 });
}
function searchProjects(q){
 q=q.toLowerCase();
 document.querySelectorAll(".project").forEach(p=>{
  p.style.display=p.innerText.toLowerCase().includes(q)?"block":"none";
 });
}

// Markdown loader
async function loadMarkdown(file,id){
 const r=await fetch(file); const t=await r.text();
 document.getElementById(id).innerHTML=t
 .replace(/^# (.*$)/gim,"<h1>$1</h1>")
 .replace(/^## (.*$)/gim,"<h2>$1</h2>")
 .replace(/\*\*(.*?)\*\*/gim,"<b>$1</b>")
 .replace(/\n/g,"<br>");
}
