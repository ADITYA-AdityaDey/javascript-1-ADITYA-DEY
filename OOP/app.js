class Person{
    #firstName;
    lastName;
    age;
    constructor(fn, ln, ag){
        this.#firstName = fn;
        this.lastName = ln;
        this.age = ag;
    }

    fullName(){
        console.log(this.#firstName, this.lastName);
    }

    ageFun(){
        console.log(this.age);
    }
}

let obj = new Person(`User`, `One`, 20);
obj.fullName();
obj.ageFun();