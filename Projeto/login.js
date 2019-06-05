function validate() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Pitaia" && password == "querominhavaga") {
        window.location = "home.html"; // Redirecting to other page.
        return false;
    } else {
        var aviso = document.querySelector(".show");
        aviso.classList.remove("show");
        aviso.classList.add("alert");
        aviso.classList.add("alert-danger");
    }

}