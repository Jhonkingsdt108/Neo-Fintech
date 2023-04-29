function recompensasMiddleInp() {
    var inp = Number(document.getElementById("numInp2").value);
    if (inp >= 120000000) {


        var midd = 10 / 100;
        var middleInp = inp * midd;
        var recomp = 2000000;
        var total = middleInp + recomp;
        document.getElementById("volMiddle").innerHTML = ('$ ' + middleInp);
        document.getElementById("middle").innerHTML = ('$ ' + total);
        document.getElementById("airDrop").innerHTML = ('$ ' + recomp);
    } else {
        var midd1 = 10 / 100;
        var middleInp1 = inp * midd1;
        var recomp1 = 0;
        document.getElementById("middle").innerHTML = ('$ ' + middleInp1);
        document.getElementById("volMiddle").innerHTML = ('$ ' + middleInp1);
        document.getElementById("airDrop").innerHTML = ('$ ' + recomp1);

    }
}


