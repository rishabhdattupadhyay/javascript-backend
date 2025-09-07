//singleton
//Object.create
const mysymbol = Symbol("Key2")
const Jsuser = {
    name:"Rishi",
    email:"rdupadhyay2002@gmail.com",
    [mysymbol]: "mykey1",
    Fullname : "Rishabh Datt Upadhyay",
    roll:52,
    intrest:"movies",
    isloggedin: false,
   lastlogedinday:["Monday","Friday"]
}
/*console.log(Jsuser["Full name"]);
console.log( typeof Jsuser[mysymbol]);
console.log(typeof mysymbol);
Jsuser.email = "2106052@kiit.ac.in";
console.log(Jsuser.email);
Object.freeze(Jsuser)
Jsuser.email = "Rishabh@123gmail.com"
console.log(Jsuser);*/
Jsuser.greeting = Function();{
   // console.log("Hello Js User ");
}
Jsuser.greetingTwo = Function();{
   // console.log(`Hello JS user, ${Jsuser.name}`);
}
//console.log(Jsuser.greeting);
//console.log(Jsuser.greetingTwo());
//+++++++++++ Video 2 Object+++++++++++++++++++
//const tinderuser = new Object() //singleton useing object constructor to create
//console.log(tinderuser);
//const tinderuser1 = {}
//tinderuser1.name = "Rishi"
//tinderuser1.id = "2213"
//tinderuser1.loggedin = false
//console.log(tinderuser1);
const regularuser = {
    email:"rdupadhyay2002@gmail.com",
    gender:"Male",
    fullname :{
        userfullname :{
        firstname:"Rishabh",
        lastname:"Upadhyay"    }
    }

    }
console.log(regularuser.fullname.userfullname.lastname);










