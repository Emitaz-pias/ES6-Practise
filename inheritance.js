class parent{
    constructor(){
        this.fathersName="Mukles"
    }
}

class childs extends parent {
 constructor(name){
     super ();
    this.name =name
}
}
const child =new childs("Kasem");
const child2 =new childs("Morjina");
console.log(child,child2)