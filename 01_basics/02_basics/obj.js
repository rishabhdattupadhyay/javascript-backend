//singleton
//Object.create
const currancy = Symbol("Key2")
const Jsuser = {
    name:"Rishi",
    email:"rdupadhyay2002@gmail.com",
    [mysym]: "mykey1",
    "Full name" : "Rishabh Datt Upadhyay",
    roll:52,
    intrest:"movies",
    isloggedin: false,
   lastlogedinday:["Monday","Friday"]
}
console.log(Jsuser["Full name"]);
console.log( typeof Jsuser[currancy]);
console.log(typeof currancy);
Jsuser.email = "2106052@kiit.ac.in";
console.log(Jsuser.email);


