function hide(){
    var header = document.getElementById("header");
    // var back = document.getElementById("retour");
    header.addEventListener("click", function () {
        setTimeout(function (){
            header.style.display = "none";}, 1000); 
    });

    // back.addEventListener("click", function () {
    //     setTimeout(function () {
    //         header.style.display = "none";}, 1000);
    //     })
    
        
    document.addEventListener("scroll", function(){
        header.style.display = "block";
    })

}
hide();
function contactForm() {
    // Déclaration des variables
    var nom = document.getElementById("nom");
    var firstName = document.getElementById("prenom");
    var naissance = document.getElementById("ddn");
    var email = document.getElementById("mail");
    // var number = "0 1 2 3 4 5 6 7 8 9";
    var caractèreSpéciaux = /[!@#$%^&*(),.?":{}|<1234567890/_]/g;

    // Functions
    // Function for name and firstname without numbers or specifical characters
    nom.addEventListener("keyup",
    function () {
        var nameEnter = nom.value;
        if (caractèreSpéciaux.test(nameEnter)) {
            nom.style.backgroundColor = "red";
        } else {
            nom.style.backgroundColor = "white";
        }
    }
    )

    firstName.addEventListener("keyup",
    function () {
        var fnameEnter = firstName.value;
        if (caractèreSpéciaux.test(fnameEnter)) {
            firstName.style.backgroundColor = "red";
        } else {
            firstName.style.backgroundColor = "white";
        }
    }
    )


}
contactForm();