function Summation(Arr) {
    var Sum = 0;
    for (var i = 0; i < Arr.length; i++) {
        Sum += Arr[i];
    }
    return Sum;
}
console.log("Addition is: " + Summation([23, 6, 7, 4, 5, 7]));
