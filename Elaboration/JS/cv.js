function divHide() {
   
    var cliquer1 = document.getElementById("more1");
    var cliquer2 = document.getElementById("more2");
    var cliquer3 = document.getElementById("more3");
    var cliquer4 = document.getElementById("more4");
    var affi = document.getElementsByClassName("aff");
    // var compTrans = document.getElementById("compTrans");
    affi[0].style.display = "none";
    
        cliquer1.addEventListener("click", function() {
            if (affi[0].style.display == "block") {
                affi[0].style.display = "none";
                compTrans.style.height = "80"+"px";
            } else {
                affi[0].style.display = "block";
                compTrans.style.height = "auto";
            }
        })
       
        affi[1].style.display = "none";
        cliquer2.addEventListener("click", function() {
            if (affi[1].style.display == "block") {
                affi[1].style.display = "none";
                comp.style.height = "80"+"px";
            } else {
                affi[1].style.display = "block";
                comp.style.height = "auto";
            }
        })

        affi[2].style.display = "none";
        cliquer3.addEventListener("click", function() {
            if (affi[2].style.display == "block") {
                affi[2].style.display = "none";
                experiences.style.height = "80"+"px";
            } else {
                affi[2].style.display = "block";
                experiences.style.height = "auto";
            }
        })

        affi[3].style.display = "none";
        cliquer4.addEventListener("click", function() {
            if (affi[3].style.display == "block") {
                affi[3].style.display = "none";
                formations.style.height = "80"+"px";
            } else {
                affi[3].style.display = "block";
                formations.style.height = "auto";
            }
        })
}
divHide();