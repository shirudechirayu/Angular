var ChkArmstrong = (No1 : number) : void => {
    var i : number = 1;
    var Sum : number = 0;
    var Rem : number;
    var temp : number = No1;

    while(Math.floor(temp/10) !== 0)
    {
        temp = Math.floor(temp/10);
        i++;
    }

    temp = No1;

    while(temp/10!== 0)
    {
        Rem = temp%10;
        temp = Math.floor(temp/10);
        Sum += Math.pow(Rem, i);
    }


    if(Sum === No1)
    {
        console.log("It is Armstrong number");
    }
    else
    {
        console.log("It is not Armstrong number");
    }

}

ChkArmstrong(153);
