





class Employeee {          // parent class
    // constructor(name,age){
    //     this.name=name;
    //     this.age=age;
    // }
    display() {
        console.log(this.name + " " + this.age)
    }
}

class Subeemployee extends Employeee {       // child class
    constructor(fname, fage) {
        super(fname, fage);
        this.a=10;
        this.fname = fname;
        this.fage = fage;
        console.log( Subeemployee.sum())
        // cal static methods too
    }
    static print() {
        return this.a=20;
        // console.log("1 static")
    }
    static print() {
       return this.a=30;
        
    }
    static print() {
        return this.a=40;
    }
    static sum() {
        return "hello evryone";
    }
    display() {
        
        console.log(this.fname + " " + this.fage,this.a,Subeemployee.print(), Subeemployee.sum())
    }
}
let emp1 = new Subeemployee("thejasree", 48);
emp1.display();

// class Employeee {
//     // mthods,conctriucotr
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     display(){
//         console.log(this.name+ " " + this.age)
//     }
// }


// let emp1 = new Employeee("thejasree" , 48)
// let emp2 = new Employeee("sree" , 48)
// emp1.display();
// emp2.display();




// class expresiion 
//  unnamed class
// var employee = class School{
//     constructor(name){
//         console.log("1111")

//         this.name=name;
//     }
//     display(){
//         console.log(this.name)
//     }
// }
// var employee = class Hello{
//     constructor(name,age){
//         console.log("22222222")
//         this.name=name;
//         this.age=age;
//     }
//     display(){
//         console.log(this.name+ " " + this.age)
//     }
// }
// let emp3 = new employee("expresion class" , 48)
// // emp3.display();
// let emp4 = new employee("redeclaring class")
// // emp4.display();
// console.log(employee.name)