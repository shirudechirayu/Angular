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

var obj1 : Circle = new Circle(5);
console.log("Area is " + obj1.Area());

var obj2 : Circle = new Circle(10);
console.log("Area is " + obj2.Area());