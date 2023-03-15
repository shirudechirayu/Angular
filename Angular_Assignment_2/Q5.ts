function ChkString(Str : string) : void
{
    var match : string = "Marvellous";
    var cnt : number = 0;

    for(var i : number = 0; i <= Str.length - match.length; i++)
    {
        
        if(Str[i] === match[0])
        {
            
            var j : number = 1;
            while(j < match.length)
            {
                if(Str[i+j] === match[j])
                {
                    j++;
                }
                else 
                {
                    break;
                }
            }

            if(j === match.length)
            {
                console.log("String contains Marvellous in it.");
                return;
            }
        }
    }

    console.log("String does not contain Marvellous in it.");
}

ChkString("Pune Kothrud Marvellous Infosystems");