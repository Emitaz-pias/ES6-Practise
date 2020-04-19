class student{
    constructor(id, sName){
        this.division="science-group"
        this.name=sName;
        this.id =id;
    }
}
const student1 =new student(3111,"pias");
const student2 =new student(3112,"shohag");
console.log(student1.id , student2.division);

