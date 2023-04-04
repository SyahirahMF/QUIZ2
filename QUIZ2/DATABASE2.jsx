let dbUsers = [

    {
        username: "NSF",
        password : "123456",
        name: "N S",
        email: "b022110002@student.utem.edu.my"
    }
    ,
    {
        username: "NAF",
        password : "789321",
        name: "NF",
        email: "b022110003@student.utem.edu.my"
    }
    ,
    {
        username: "MAF",
        password : "453627",
        name: "AF",
        email: "b022110004@student.utem.edu.my"
    }
]

function login(reqUsername, reqpassword)
{
let matchUser = dbUsers.find(user => user.username == reqUsername)
console.log(matchUser)
}

//try to login

login("NSF","password")

function login2(reqUsername, reqPassword)
{
 let matchUser = dbUsers.find ( x => x.username == reqUsername)

if(!matchUser) return "User not found!"
if(matchUser.password == reqPassword)
{
    return matchUser
}
else{
    return "Invalid password"
}
}

//for(let i = 0; i <dbUsers.length; i++)

console.log(login("NSF","password"))
console.log(login("NAF","password"))

function register(reqUsername, reqPassword, reqName, reqEmail)
{
    dbUsers.push({
        username : reqUsername,
        password : reqPassword,
        name : reqName, 
        email : reqEmail
    })
}

console.log(login("NSF","password"))
console.log(login("NAF","password"))
console.log(login("MAF","password"))


register("utem", "password", "fkekk", "fkekk@m.com")

console.log(login2("utem","password"))

