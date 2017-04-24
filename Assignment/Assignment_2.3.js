var User = (function () {
    function User(name) {
        this.name = name;
    }
    Object.defineProperty(User.prototype, "Name", {
        get: function () {
            return this.CheckUser();
        },
        set: function (v) {
            this.name = v;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.CheckUser = function () {
        if (this.name == "Abhishek") {
            return "The user " + this.name + " is valid user";
        }
        else {
            return "The user " + this.name + " is not valid user";
        }
    };
    return User;
}());
var u1 = new User('Abhishek Shrivastava');
var res = u1.Name;
console.log('' + res);
u1.Name = '123456';
var res = u1.Name;
console.log('' + res);
