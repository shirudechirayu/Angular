function Maximum(No1, No2, No3) {
    if (No1 > No2) {
        if (No1 > No3) {
            return No1;
        }
        else {
            return No3;
        }
    }
    else {
        if (No2 > No3) {
            return No2;
        }
        else {
            return No3;
        }
    }
}
console.log("Maximum number is: " + Maximum(23, 89, 6));
