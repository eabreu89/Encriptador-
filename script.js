function encriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    //i es para que afecte a tanto mayus como minus
    //g afecta a toda la linea
    //m afecta a multiples lineas
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }



function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace (/e/img,"enter");
    var txtCifrado = txtCifrado.replace (/o/igm,"ober");
    var txtCifrado = txtCifrado.replace (/i/igm,"imes");
    var txtCifrado = txtCifrado.replace (/a/igm,"ai");
    var txtCifrado = txtCifrado.replace (/u/img,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "inherit";
    
}


function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace (/enter/igm,"e");
    var txtCifrado = txtCifrado.replace (/ober/igm,"o");
    var txtCifrado = txtCifrado.replace (/imes/igm,"i");
    var txtCifrado = txtCifrado.replace (/ai/igm,"a");
    var txtCifrado = txtCifrado.replace (/ufat/img,"u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector ("#texto2")
    contenido.select();
    document.execCommand('copy');
    alert("¡secopio!");
}



