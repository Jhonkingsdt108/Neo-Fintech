function recompensasEmbajadorInp() {
    var inp = Number(document.getElementById("numInpEmbajador").value);
    var cDirecto = inp * (10 / 100);
    console.log(inp, "valor desde formulario");

    //calcula el 10% de comiciones por referedidos directos
    document.getElementById("directosEmbajador").innerHTML = ('$ ' + cDirecto);


    let a = Number(document.getElementById("colEquipoEmbajador").value);
    let b = Number(document.getElementById("numEmbajador").value);
    let c = a * b;


    if (c >= 600000000) {
        let middleInp = c;
        let recompEmbajador = 15000000;
        let total;
        let porcent = c * 0.008;
        let renMes = porcent;
        total = cDirecto + renMes + recompEmbajador;
        console.log(renMes, 'resultado de volumen por 0.005')
        document.getElementById("volEmbajador").innerHTML = ('$ ' + middleInp); //Volumen de ventas
        document.getElementById("middleLEmbajador").innerHTML = ('$ ' + total); // airdrop mas recompenzas pot deirectos
        document.getElementById("airDropEmbajador").innerHTML = ('$ ' + recompEmbajador); // 2 millones por cumplimiento de metas
        document.getElementById("rendMesEmbajador").innerHTML = ('$ ' + renMes);// restabilidad mensual de 0.005 del volumen

        console.log(total, 'total')
    } else {
        let middleInp7 = c;
        let total7;
        let porcent7 = c * 0.008;
        let renMes7 = porcent7;
        total7 = cDirecto + renMes7;
        document.getElementById("volEmbajador").innerHTML = ('$ ' + middleInp7);
        document.getElementById("rendMesEmbajador").innerHTML = ('$ ' + porcent7);// airdrop no alcanza para ganar
        document.getElementById("middleLEmbajador").innerHTML = ('$ ' + total7);

        console.log(cDirecto, 'comision de directo')


    };


}


