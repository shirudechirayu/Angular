function Fibonacci(No1: number): void
{
    if(No1 <= 0)
    {
        console.log("Enter number greater than zero");
        return;
    }

    var FirstNumber : number = 1;
    var SecondNumber : number = 1;
    var temp : number;
    var Res : string = "";

    while(SecondNumber <= No1)
    {
        Res += FirstNumber + " ";
        temp = FirstNumber
        FirstNumber = SecondNumber;
        SecondNumber = temp + SecondNumber;
    }

    Res += FirstNumber;

    console.log(Res);
}

Fibonacci(21);