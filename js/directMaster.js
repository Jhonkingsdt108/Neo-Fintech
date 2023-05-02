function recompensasMasterInp() {
    var inp = Number(document.getElementById("numInpMaster").value);
    var cDirecto = inp * (10 / 100);
    console.log(inp, "valor desde formulario");

    //calcula el 10% de comiciones por referedidos directos
    document.getElementById("directosMaster").innerHTML = ('$ ' + cDirecto);


    let a = Number(document.getElementById("colEquipoMaster").value);
    let b = Number(document.getElementById("numMaster").value);
    let c = a * b;


    if (c >= 450000000) {
        let middleInp = c;
        let recompMaster = 12000000;
        let total;
        let porcent = c * 0.007;
        let renMes = porcent;
        total = cDirecto + renMes + recompMaster;
        console.log(renMes, 'resultado de volumen por 0.005')
        document.getElementById("volMiddleMaster").innerHTML = ('$ ' + middleInp); //Volumen de ventas
        document.getElementById("middleLMaster").innerHTML = ('$ ' + total); // airdrop mas recompenzas pot deirectos
        document.getElementById("airDropMaster").innerHTML = ('$ ' + recompMaster); // 2 millones por cumplimiento de metas
        document.getElementById("rendMesMaster").innerHTML = ('$ ' + renMes);// restabilidad mensual de 0.005 del volumen

        console.log(total, 'total')
    } else {
        let middleInp6 = c;
        let total6;
        let porcent6 = c * 0.007;
        let renMes6 = porcent6;
        total6 = cDirecto + renMes6;
        document.getElementById("volMiddleMaster").innerHTML = ('$ ' + middleInp6);
        document.getElementById("rendMesMaster").innerHTML = ('$ ' + porcent6);// airdrop no alcanza para ganar
        document.getElementById("middleLMaster").innerHTML = ('$ ' + total6);

        console.log(cDirecto, 'comision de directo')


    };


}


