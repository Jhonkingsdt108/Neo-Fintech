function recompensasDirectJuniorInp() {
    var inp = Number(document.getElementById("numInp3").value);
    var cDirecto = inp * (10 / 100);
    console.log(inp, 'desde el formulario');

    //calcula el 10% de comiciones por referedidos directos
    document.getElementById("directos1").innerHTML = ('$ ' + cDirecto)


    let a = Number(document.getElementById("colEquipo1").value);
    let b = Number(document.getElementById("numPartners1").value);
    let c = a * b;


    if (c >= 220000000) {
        let middleInp = c;
        let recomp = 5000000;
        let total;
        let porcent = c * 0.005;
        let renMes = porcent;
        total = cDirecto + renMes + recomp;
        console.log(renMes, 'resultado de volumen por 0.005')
        document.getElementById("volMiddle1").innerHTML = ('$ ' + middleInp); //Volumen de ventas
        document.getElementById("middleL1").innerHTML = ('$ ' + total); // airdrop mas recompenzas pot deirectos
        document.getElementById("airDrop1").innerHTML = ('$ ' + recomp); // 2 millones por cumplimiento de metas
        document.getElementById("rendMes").innerHTML = ('$ ' + renMes);// restabilidad mensual de 0.005 del volumen

        console.log(total, 'total')
    } else {
        let middleInp1 = c;
        let total1;
        let porcent1 = c * 0.005;
        let renMes1 = porcent1;
        total1 = cDirecto + renMes1;
        document.getElementById("volMiddle1").innerHTML = ('$ ' + middleInp1);
        document.getElementById("rendMes").innerHTML = ('$ ' + porcent1);// airdrop no alcanza para ganar
        document.getElementById("middleL1").innerHTML = ('$ ' + total1);

        console.log(cDirecto, 'comision de directo')


    };


}


