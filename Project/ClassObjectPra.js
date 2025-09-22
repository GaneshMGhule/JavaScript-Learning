let DATA = "Secreate Information";

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("Data =" ,DATA);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);


    }
    edit(){
        DATA="Some New Value";
    }
}

let student1=new User("Ganesh","gaesh@gmail.com");
//student1.viewData();
let admin=new Admin("Amar","amar@gmail.com");