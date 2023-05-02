function recompensasJuniorInp() {
    let inp = Number(document.getElementById("numInp1").value);
    var jun = 7 / 100;
    var juniorInp = (inp * jun).toFixed(0);
    document.getElementById("juniorL").innerHTML = ('$ ' + juniorInp)


};