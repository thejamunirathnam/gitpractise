class Encap{
    constructor(){
        var name = "hello";
        var age = 34;
    }
    setName(marks){
        if(marks<100){
            this.name=marks;
        }else{
            this.name=marks;
        }
  
    }
    display(){
        return this.name
    }
    getName(){
        return this.name 
    }
}
let encp= new Encap();
encp.setName(100)
console.log(encp.display())