class Husband {

    constructor(){
        this._salary = 5000;
        this._friends  = ['Вася','Петя','Иван','Гриша'];
        this._sober = false;
    }

    getSalary() {
        return this._salary;
    }


    getfriends() {
        return this._friends;
    }

    getSober() {
        return this._sober;
    }
}





module.exports.husband = new Husband();