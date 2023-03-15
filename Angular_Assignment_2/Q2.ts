function Summation(Arr : number[]): number
{
    var Sum : number = 0;

    for(var i : number = 0; i < Arr.length; i++)
    {
        Sum += Arr[i];
    }

    return Sum;
}

console.log("Addition is: " + Summation([23, 6, 7, 4, 5, 7]));