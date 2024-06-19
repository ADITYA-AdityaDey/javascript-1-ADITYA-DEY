class Person {
    #user1FirstName; // Private Access Modifier
    _user1LastName; // Protected Access Modifier
    user1Code; // Public Access Modifier
    user1Email; // Public Access Modifier
    User1Country; // Public Access Modifier 

    constructor(u1fn, u1ln, u1c, u1e, u1coun) {
        this.#user1FirstName = u1fn;
        this._user1LastName = u1ln;
        this.user1Code = u1c;
        this.user1Email = u1e;
        this.User1Country = u1coun;
    }

    user1FullName() {
        return this.#user1FirstName + ` ` + this._user1LastName;
    }

}

let obj = new Person(`First`, `User`, 1, `abcxyz@email.com`, `India`);

// console.log(obj.#user1FirstName); Private Property not Acceptsble outside the the class Person

console.log(obj._user1LastName);

console.log(obj.user1Email, obj.User1Country);