// Page bridge: every role page opens the same interactive application route.
// This keeps the prototype modular at file level while app.js owns the shared SPA state.
const role = document.body.dataset.role;
const page = document.body.dataset.page;
if (role && page) {
  const base = document.body.dataset.base || "../../index.html";
  location.replace(`${base}#${encodeURIComponent(role)}/${encodeURIComponent(page)}`);
}
