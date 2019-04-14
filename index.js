

  function panelFocus() {
    panels.forEach(function(el) {
        let itemOffset = Math.abs(el.getBoundingClientRect().top);
        if (itemOffset < 50) {
             let currentPanel = parseInt(el.id.split("panel", 2)[1]);
             panelLinks[currentPanel].checked = true;
             panelLinks[currentPanel].focus(); 	
        }
        })
}

let panels = document.querySelectorAll("#slidingpanels section"),
panelnav = document.createElement("nav");
panelnav.id = "panelnav";
for (var i = 0; i < panels.length; i++) {
    panels[i].id = "panel"+i;
  let panelLabel = document.createElement("label");
  panelLabel.setAttribute("for", "panelLink"+i);
    panelLink = document.createElement("input");
    panelLink.type = "radio";
    panelLink.name = "panelradio";
    panelLink.value = "panel"+i;
  panelLink.id = "panelLink"+i;
  panelnav.appendChild(panelLink);
  panelnav.appendChild(panelLabel);
}
document.body.appendChild(panelnav);
let panelLinks = document.querySelectorAll("#panelnav input");

panelFocus();

if (window.scrollTo) {
panelnav.addEventListener("click", 
     function(e) {
        let dest = document.getElementById(e.target.value);
        window.scroll({top: dest.offsetTop, behavior: 'smooth'});
    })}

window.addEventListener("scroll", function() {
panelFocus();
})


