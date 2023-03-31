class Arithmetic 
{
    Number1 : number;
    Number2 : number;

    constructor(Number1 : number, Number2 : number)
    {
        this.Number1 = Number1;
        this.Number2 = Number2;
    }

    Addition() : number
    {
        return this.Number1 + this.Number2;
    }

    Subtraction() : number
    {
        return this.Number1 - this.Number2;
    }

    Multiplication() : number
    {
        return this.Number1 * this.Number2;
    }

    Division() : number
    {
        return this.Number1 / this.Number2;
    }
}

var obj1 : Arithmetic = new Arithmetic(1,2);
console.log(obj1.Addition());
console.log(obj1.Subtraction());
console.log(obj1.Multiplication());
console.log(obj1.Division());

var obj2 : Arithmetic = new Arithmetic(2,6);
console.log(obj2.Addition());
console.log(obj2.Subtraction());
console.log(obj2.Multiplication());
console.log(obj2.Division());