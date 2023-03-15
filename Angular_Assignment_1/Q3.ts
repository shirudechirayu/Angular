function DisplayFactors(No1 : number) : void
{
    if(No1<=0)
    {
        console.log("Enter number greater than 0");
        return;
    }

    var Res : string = "1";

    for(var i : number = 2; i<=No1/2; i++)
    {
        
        if(No1 % i === 0)
        {
            Res+="\t"+i;
        }
    }

    console.log(Res);
}

DisplayFactors(20);