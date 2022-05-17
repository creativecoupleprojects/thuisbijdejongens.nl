function openMenu() {
    var x = document.getElementById("links-holder");
    var firstLine = document.getElementById("first-line");
    var secondLine = document.getElementById("second-line");
    var thirdLine = document.getElementById("third-line");
    if (x.style.transform === "translate(0px, 0%)") {
      
      x.style.transform = "translate(0px, -200%)"
      
      firstLine.style.transform = "translate(0px, 0px) rotate(0deg)";
      firstLine.style.backgroundImage = 'linear-gradient(to bottom, rgba(220, 6, 126) 100%,rgb(65, 44, 128) 100%,rgba(255,255,255,255) 0%)';
      thirdLine.style.backgroundImage = 'linear-gradient(to bottom, rgba(220, 6, 126) 100%,rgb(65, 44, 128) 100%,rgba(255,255,255,255) 0%)';
      secondLine.style.opacity = "1";
      thirdLine.style.transform = "translate(0px, 0px) rotate(0deg)";
    } else {
   
      x.style.transform = "translate(0px, 0%)"
      firstLine.style.transform = "translate(0px, 6px) rotate(-45deg)";
      firstLine.style.backgroundImage = 'linear-gradient(to bottom, rgba(255,255,255,255) 0%,rgba(255,255,255,255) 1%,rgba(255,255,255,255) 100%)';
      thirdLine.style.backgroundImage = 'linear-gradient(to bottom, rgba(255,255,255,255) 0%,rgba(255,255,255,255) 1%,rgba(255,255,255,255) 100%)';
      thirdLine.style.transform = "translate(0px, -8px) rotate(45deg)";
      secondLine.style.opacity = "0";
    }
  }