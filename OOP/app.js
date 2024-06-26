class Person {
    #firstName;
    lastName;
    _age;
    constructor(fn, ln, ag) {
        this.#firstName = fn;
        this.lastName = ln;
        this._age = ag;
    }

    fullName() {
        return this.#firstName + ' ' + this.lastName;
    }

    ageFun() {
        console.log(this._age);
    }
}

class Teacher extends Person {
    subject;
    constructor(fn, ln, ag, sub) {
        super(fn, ln, ag);
        this.subject = sub;
    }
    display() {
        return this.lastName + ' ' + this.subject + ' ' + this._age;
    }

    fullName() {
        return `override`;
    }
}

let objPersonClass = new Person(`User`, `One`, 20);
console.log(objPersonClass.fullName());
objPersonClass.ageFun();

let objTeacherClass = new Teacher(`Teacher`, `One`, 30, `JavaScript`);
console.log(objTeacherClass.fullName());
console.log(objTeacherClass.display());
console.log(objTeacherClass.fullName());





class First {
    constructor() { }

    mathematics() {
        console.log(10 + 10);
    }
}

class Second extends First {
    constructor() {
        super();
    }

    mathematics() {
        console.log(50 - 20);
    }
}

let obj = [new First(), new Second()];

obj.forEach((f) => {
    f.mathematics();
});






class User {
    constructor() {
        if (this.constructor == User) {
            throw new Error(`Object of Abstract class can't be created`);
        }
    }
    fun() {
        throw new Error(`Abstract Method has no Implementation`);
    }
}

class AppUser extends User {
    constructor() {
        super();
    }
    fun() {
        console.log(80 + 20);
    }
}


class Student extends User {
    constructor() {
        super();
    }

    fun() {
        console.log(70 + 20);
    }
}

let appuserObj = new AppUser();
appuserObj.fun();

let studentObj = new Student();
studentObj.fun();