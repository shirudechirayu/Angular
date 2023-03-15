function Maximum(Arr : number[]) : number
{
    var Max : number;
    var Max2 : number;
    var temp : number;

    if(Arr[0] > Arr[1])
    {
        Max = Arr[0];
        Max2 = Arr[1];
    }
    else
    {
        Max = Arr[1];
        Max2 = Arr[0];
    }

    for(var i : number = 2; i < Arr.length; i++)
    {
        if(Arr[i] > Max)
        {
            
            Max2 = Max;
            Max = Arr[i];
        }
        else
        {
            if(Arr[i] > Max2)
            {
                Max2 = Arr[i];
            }
        }
    }

    return Max2;

}

console.log("Second Maximum number is: " + Maximum([23, 89, 6, 29, 56, 45, 77, 32]));