// ------------------Volumen de ventas----------------------
function volVentas() {
    let a = Number(document.getElementById("colEquipo").value);
    var b = Number(document.getElementById("numPartners").value);;
    var c = a * b;

    document.getElementById("screen").innerHTML = ('$ ' + c)
};


// -------------PARTNER-----------------------------
function recompensasPartnerInp() {
    let inp = Number(document.getElementById("numInp").value);
    // ----------------Se define porcentajes de los cargos---------------
    var part = 5 / 100;
    // -------------------- se recibe el valor y se calcula el parcentaje---------------
    // partner---------------
    var partnerInp = (inp * part).toFixed(0);
    document.getElementById("partner").innerHTML = ('$ ' + partnerInp);
    console.log(partnerInp)
};
// -------------PARTNER-----------------------------


