class Abstract{
    constructor(){
        if(this.constructor === Abstract){
        throw new Error("You cannot create an instance of     Abstract Class");
        this.name;
        this.lastname
    }
      
    }
  };
  Abstract.prototype.createObject=function(){
    return obj= {
      name: this.name,
      lastname: this.lastname
    };
  }
  
  function Fnc(name,lastname){
    this.name= name
    this.lastname= lastname
  }
  
  Fnc.prototype=Object.create(Abstract.prototype);
  var test = new Fnc("Alejandro","Zuriguel");
  console.log(test.createObject());
  
  var test2 = new Fnc("Antonio","Recio");
  console.log(test2.createObject());
  