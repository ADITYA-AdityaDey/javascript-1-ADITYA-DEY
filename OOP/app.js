class Person{
    #firstName;
    lastName;
    _age;
    constructor(fn, ln, ag){
        this.#firstName = fn;
        this.lastName = ln;
        this._age = ag;
    }

    fullName(){
        console.log(this.#firstName, this.lastName);
    }

    ageFun(){
        console.log(this._age);
    }
}

class Teacher extends Person{
    subject;
    constructor(fn, ln, ag, sub) {
        super(fn, ln, ag);
        this.subject = sub;
    }
    display(){
        return this.lastName + ` ` + this.subject + ` ` + this._age;
    }
}





let objPersonClass = new Person(`User`, `One`, 20);
objPersonClass.fullName();
objPersonClass.ageFun();


let objTeacherClass = new Teacher(`Teacher`, `One`, 30, `JavaScript`);
objTeacherClass.fullName();
console.log(objTeacherClass.display());



