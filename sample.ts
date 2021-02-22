class student{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    Show(){
        console.log(this.id);
        console.log(this.name);
    }
}
class marks extends student{
    marks1:number;
    marks2:number;
    constructor(id:number,name:string,marks1:number,marks2:number){
        super(id,name);
        this.marks1=marks1;
        this.marks2=marks2;
    }
    Show(){
        super.Show();
        console.log(this.marks1);
        console.log(this.marks2);
    }
}
let obj1:marks=new marks(1,"ashwini",60,70);
obj1.Show();