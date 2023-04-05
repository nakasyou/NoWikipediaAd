window.addEventListener("load", () => {
  setInterval(()=>{
    document.getElementById("frb-inline")?.remove();
    document.getElementById("frb-main")?.remove();
  },100);
});
