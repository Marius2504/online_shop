window.onload = function () {
    var buton = document.querySelector(".input1");
    var nume = document.getElementsByTagName('input')[0];
    var prenume = document.getElementsByTagName('input')[1];
    var model = document.getElementsByTagName('input')[2];
    var adresa = document.getElementsByTagName('input')[3];
    var nr = document.getElementsByTagName('input')[4];
    var email = document.getElementsByTagName('input')[5];
    var prbl = document.getElementsByTagName('input')[6];
    var email1 = "gdf@yahoo.com";
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexName = /^[ a-zA-Z\-\']+$/;
    const regexNr = /^[0-9]+$/;

    buton.onclick = function (event) {
        var ok = 1;
        if (nume.value && prenume.value && model.value && adresa.value && nr.value && email.value) {
            if (!regexNr.test(nr.value)) ok = 0;
            if (!regexName.test(nume.value) && !regexName.test(prenume.value)) ok = 0;
            if (!regexEmail.test(email.value)) ok = 0;

            if (ok) {
                setTimeout(function () { alert("Mesajul a fost trimis cu success!"); }, 3000);
                event.stopPropagation();
                var rand = Math.random();
                var culori = ["red", "yellow", "green", "blue", "purple"];
                rand = Math.floor(rand * 4);
                document.getElementById("av").style.backgroundColor = culori[rand];

            }
            else alert("Format incorect");
        }
        else
            setTimeout(function () { alert("Campuri incomplete"); }, 3000);
    }
    document.addEventListener("keydown", keyDownTextField, false);

    function keyDownTextField(e) {
        var keyCode = e.keyCode;
        if (keyCode == 13) {
            buton.onclick();
        } 
    }
}