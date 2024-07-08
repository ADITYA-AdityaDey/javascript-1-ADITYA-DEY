////////////// Class and Object creation /////////////////////


// creating Class
class ProgrammingLang {
    constructor(language1, language2) {
        this.language1 = language1;
        this.language2 = language2;
    }

    displayInfo() {
        return `${this.language1} ${this.language2}`;
    }
}



// creating objects
let myProgLang = new ProgrammingLang(`JavaScript`, `JAVA`);
console.log(myProgLang.displayInfo());



///////////////////////

// creating Class
class Papers {
    constructor(paper1, paper2) {
        this.paper1 = paper1;
        this.paper2 = paper2;
    }

    displayInfo() {
        return `${this.paper1} ${this.paper2}`;
    }
}

// creating objects
let objPapers = new Papers(`DSA`, `DAA`);
console.log(objPapers.displayInfo());