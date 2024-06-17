class Person {
    user1FirstName;
    user1LastName;
    user1Code;
    user1Email;
    User1Country;

    constructor(u1fn, u1ln, u1c, u1e, u1coun) {
        this.user1FirstName = u1fn;
        this.user1LastName = u1ln;
        this.user1Code = u1c;
        this.user1Email = u1e;
        this.User1Country = u1coun;
    }

    user1FullName(){
        return this.user1FirstName + ` ` + this.user1LastName;
    }
}
let obj = new Person(`First`, `User`, 1, `abcxyz@email.com`, `India`);
console.log(obj.user1FullName());