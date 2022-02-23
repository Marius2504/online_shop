window.onload = function () {
    
    //myStorage = window.localStorage;
    if (localStorage.getItem("email")) {
        var v = document.querySelector(".login");
        v.parentNode.removeChild(v);
        const div = document.createElement("li");
        div.style.position = 'absolute';
        div.style.right = '20px';
        div.innerHTML = "Bine ai venit, " + localStorage.getItem("email") + " !";
        var meniu = document.querySelector(".meniu").appendChild(div);
    }
    else {
        var butonLogin = document.getElementById("loginbtn");
        var email = document.getElementById("email");
        var parola = document.getElementById("parola");
        butonLogin.onclick = function () {
            if (parola.value && email.value) {
                if (!localStorage.getItem("email") && !localStorage.getItem("parola")) {
                    localStorage.setItem("email", email.value);
                    localStorage.setItem("parola", parola.value)
                }
                email.value = "";
                parola.value = "";
                var v = document.querySelector(".login");
                v.parentNode.removeChild(v);
                var first = document.querySelector(".fa.fa-cube");
                var style = window.getComputedStyle(first);
                const div = document.createElement("li");
                div.style.color = style.getPropertyValue('color');
                div.style.position = 'absolute';
                div.style.right = '20px';
                div.innerHTML = "Bine ai venit, " + localStorage.getItem("email") + " !";
                var meniu = document.querySelector(".meniu").appendChild(div);


            }
        }
    }
}