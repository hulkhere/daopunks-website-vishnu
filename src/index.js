function chichu() {
  var bhupathi = document.getElementById('tryy');
  if (bhupathi.src.match("../assets/images/hero/hamburger-icon.png")) {
    bhupathi.src = "../assets/images/hero/hamburger-icon.png";
  } else {
    bhupathi.src = "../assets/images/hero/close.png";
  }
  }

  

  function myFunction(){

    var y = document.getElementById("aaa");
    if (y.textContent.match("show more")) {
        y.textContent = "show less";
    } else {
        y.textContent = "show more"
    }
  }