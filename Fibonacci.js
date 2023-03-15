function Fibonacci(No1) {
    if (No1 <= 0) {
        console.log("Enter number greater than zero");
        return;
    }
    var FirstNumber = 1;
    var SecondNumber = 1;
    var temp;
    var Res = "";
    while (SecondNumber <= No1) {
        Res += FirstNumber + " ";
        temp = FirstNumber;
        FirstNumber = SecondNumber;
        SecondNumber = temp + SecondNumber;
    }
    Res += FirstNumber;
    console.log(Res);
}
Fibonacci(1);
Fibonacci(2);
Fibonacci(21);
