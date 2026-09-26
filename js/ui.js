// Shared UI utilities
export function qs(selector){ return document.querySelector(selector); }
export function showToast(message){ const el=qs("#toast"); if(el){el.textContent=message; el.classList.add("show"); setTimeout(()=>el.classList.remove("show"),2400);} }
