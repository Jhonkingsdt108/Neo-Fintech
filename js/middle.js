function recompensasMiddleInp() {
    var inp = Number(document.getElementById("numInp2").value);
    var cDirecto = inp * (10 / 100);
    //calcula el 10% de comiciones por referedidos directos
    document.getElementById("directos").innerHTML = ('$ ' + cDirecto)
    console.log(cDirecto)

    let a = Number(document.getElementById("colEquipo").value);
    var b = Number(document.getElementById("numPartners").value);;
    var c = a * b;
    // document.getElementById("screen").innerHTML = ('$ ' + c)



    if (c >= 120000000) {
        var middleInp = a * b;
        var recomp = 2000000;
        var total = cDirecto + recomp;
        document.getElementById("volMiddle").innerHTML = ('$ ' + middleInp); //Volumen de ventas
        document.getElementById("middleL").innerHTML = ('$ ' + total); // airdrop mas recompenzas po deirectos
        document.getElementById("airDrop").innerHTML = ('$ ' + recomp); // 2 millones por cumplimiento de metas
    } else {
        var middleInp1 = a * b;
        var recomp1 = 0;
        document.getElementById("middleL").innerHTML = ('$ ' + cDirecto);
        document.getElementById("volMiddle").innerHTML = ('$ ' + middleInp1);
        document.getElementById("airDrop").innerHTML = ('$ ' + recomp1);

    };


}


