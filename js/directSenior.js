function recompensasSeniorInp() {
    var inp = Number(document.getElementById("numInpSenior").value);
    var cDirecto = inp * (10 / 100);
    console.log(inp, "valor desde formulario");

    //calcula el 10% de comiciones por referedidos directos
    document.getElementById("directos3").innerHTML = ('$ ' + cDirecto);


    let a = Number(document.getElementById("colEquipoSenior").value);
    let b = Number(document.getElementById("numPartnersSenior").value);
    let c = a * b;


    if (c >= 320000000) {
        let middleInp = c;
        let recomp5 = 8000000;
        let total;
        let porcent = c * 0.006;
        let renMes = porcent;
        total = cDirecto + renMes + recomp5;
        console.log(renMes, 'resultado de volumen por 0.005')
        document.getElementById("volMiddle3").innerHTML = ('$ ' + middleInp); //Volumen de ventas
        document.getElementById("middleL3").innerHTML = ('$ ' + total); // airdrop mas recompenzas pot deirectos
        document.getElementById("airDrop3").innerHTML = ('$ ' + recomp5); // 2 millones por cumplimiento de metas
        document.getElementById("rendMes3").innerHTML = ('$ ' + renMes);// restabilidad mensual de 0.005 del volumen

        console.log(total, 'total')
    } else {
        let middleInp1 = c;
        let total1;
        let porcent1 = c * 0.006;
        let renMes1 = porcent1;
        total1 = cDirecto + renMes1;
        document.getElementById("volMiddle3").innerHTML = ('$ ' + middleInp1);
        document.getElementById("rendMes3").innerHTML = ('$ ' + porcent1);// airdrop no alcanza para ganar
        document.getElementById("middleL3").innerHTML = ('$ ' + total1);

        console.log(cDirecto, 'comision de directo')


    };


}


