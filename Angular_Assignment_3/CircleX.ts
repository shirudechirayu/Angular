class Circle
{
    Radius : number;
    PI : number;

    constructor(Radius : number)
    {
        this.Radius = Radius;
        this.PI = 3.14;
    }

    Area()
    {
        return this.PI*this.Radius*this.Radius;
    }
}

class CircleX extends Circle
{
    constructor(Radius : number)
    {
        super(Radius);
    }

    Circumference()
    {
        return 2*this.PI*this.Radius;
    }
}

var obj1 : CircleX = new CircleX(5);
console.log("Area is " + obj1.Area())
console.log("Circumference is " + obj1.Circumference());

var obj2 : CircleX = new CircleX(10);
console.log("Area is " + obj2.Area())
console.log("Circumference is " + obj2.Circumference());