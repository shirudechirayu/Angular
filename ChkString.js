function ChkString(Str) {
    var match = "Marvellous";
    var cnt = 0;
    for (var i = 0; i <= Str.length - match.length; i++) {
        if (Str[i] === match[0]) {
            var j = 1;
            while (j < match.length) {
                if (Str[i + j] === match[j]) {
                    j++;
                }
                else {
                    break;
                }
            }
            if (j === match.length) {
                console.log("String contains Marvellous in it.");
                return;
            }
        }
    }
    console.log("String does not contain Marvellous in it.");
}
ChkString("Pune Kothrud Marvellous Infosystems");
