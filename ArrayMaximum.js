function Maximum(Arr) {
    var Res = Arr[0];
    for (var i = 1; i < Arr.length; i++) {
        if (Arr[i] > Res) {
            Res = Arr[i];
        }
    }
    return Res;
}
console.log("Maximum number is: " + Maximum([23, 89, 6, 29, 56, 45, 77, 32]));
