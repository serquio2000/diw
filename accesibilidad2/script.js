let tm = 20;
let ej ;

function augmentar(){
    tm += 5;
    ej = document.getElementById("e");
    ej.style.fontSize = tm + "px";
    console.log("t");
}
function reducir(){
    tm -= 5;
    ej = document.getElementById("e");
    ej.style.fontSize = tm + "px";
}