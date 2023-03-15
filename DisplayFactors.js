function DisplayFactors(No1) {
    if (No1 <= 0) {
        console.log("Enter number greater than 0");
    }
    var Res = "1";
    for (var i = 2; i <= No1 / 2; i++) {
        if (No1 % i === 0) {
            Res += "\t" + i;
        }
    }
    console.log(Res);
}
DisplayFactors(24);
