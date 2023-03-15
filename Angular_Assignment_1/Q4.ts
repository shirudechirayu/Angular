function ChkPrime(No1 : number): void
{
    if(No1 ===1)
    {
        console.log("It is not a prime number");
    }
    else if(No1 === 2 || No1 === 3)
    {
        console.log("It is a prime number");
    }


    for(var i : number = 2; i<=No1/2; i++)
    {
        if(No1%i === 0)
        {
            console.log("It is not a prime number");
            break;
        }
        
        if(i === Math.floor(No1/2))
        {
            console.log("It is a prime number");
        }
    }

    
}

ChkPrime(11);