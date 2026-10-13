"use strict";
const menuButton=document.querySelector(".menu-toggle");
const navigation=document.querySelector("#nav-links");
menuButton.addEventListener("click",()=>{
  const expanded=menuButton.getAttribute("aria-expanded")==="true";
  menuButton.setAttribute("aria-expanded",String(!expanded));
  menuButton.setAttribute("aria-label",expanded?"Abrir menú":"Cerrar menú");
  navigation.classList.toggle("open",!expanded);
});
navigation.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded","false");
  menuButton.setAttribute("aria-label","Abrir menú");
}));
document.querySelector("#year").textContent=new Date().getFullYear();
// Demostración: no se cargan etiquetas de analítica ni publicidad.
const banner=document.querySelector("#cookie-banner");
const preferenceKey="constructora-demo-cookie-preference";
function showPreferences(){banner.hidden=false;}
if(!localStorage.getItem(preferenceKey))showPreferences();
document.querySelector("#cookie-settings").addEventListener("click",showPreferences);
document.querySelectorAll("[data-consent]").forEach(button=>{
  button.addEventListener("click",()=>{
    localStorage.setItem(preferenceKey,button.dataset.consent);
    banner.hidden=true;
  });
});
// El formulario permanece deshabilitado hasta contar con teléfono y aviso de privacidad reales.
