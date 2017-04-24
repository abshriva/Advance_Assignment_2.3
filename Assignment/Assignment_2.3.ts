class User
{
    private name:string;

    constructor(name:string)
    {
        this.name=name;
    }

    
    public get Name() : string {
        return this.CheckUser();
    }
    public set Name(v : string) {
        this.name=v;
    }

    public CheckUser()
    {
        if(this.name == "Abhishek")
        {
            return "The user "+this.name+" is valid user";
        }
        else
        {
            return "The user "+this.name+" is not valid user";
        }
    }
    
}

var u1 = new User('Abhishek Shrivastava');
var res= u1.Name;
console.log(''+res);
u1.Name='123456'
var res = u1.Name;
console.log(''+res);



