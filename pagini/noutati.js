window.onload = function()
{
    var listaB = document.querySelectorAll(".button");
    var listaP = document.querySelectorAll(".post");
    var listaH = document.querySelectorAll(".hide");
    
    listaB[0].onclick = function()
    {
        var elem = document.getElementById("hide1");
        listaH[0].style.display= 'none';
        listaP[0].style.flexDirection='column';
        elem.style.display='block';
        listaP[0].style.height='auto';
    }
    listaB[1].onclick = function()
    {   
        var elem = document.getElementById("hide2");
        listaH[1].style.display= 'none';
        listaP[1].style.flexDirection='column';
        elem.style.display='block';
        listaP[1].style.height='auto';
    }  
    listaB[2].onclick = function()
    {
        var elem = document.getElementById("hide3");
        listaH[2].style.display= 'none';
        listaP[2].style.flexDirection='column';
        elem.style.display='block';
        listaP[2].style.height='auto';
    }
    //-----------------------------------------------------------------
    listaB1 = document.querySelectorAll(".button1")
    listaB1[0].onclick = function()
    {
        var elem = document.getElementById("hide1");
        listaH[0].style.display= 'block';
        listaP[0].style.flexDirection='row';
        elem.style.display='none';
        listaP[0].style.height='auto';
    }
    listaB1[1].onclick = function()
    {   
        var elem = document.getElementById("hide2");
        elem.style.display='none';
        listaH[1].style.display= 'block';
        listaP[1].style.flexDirection='row';
        listaP[1].style.height='auto';
    }  
    listaB1[2].onclick = function()
    {
        var elem = document.getElementById("hide3");
        listaH[2].style.display= 'block';
        listaP[2].style.flexDirection='row';
        elem.style.display='none';
        listaP[2].style.height='auto';
    }
}