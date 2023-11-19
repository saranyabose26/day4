//resume in JSON format and is iterated by using for in loop
var obj={"name":"Saranya",
         "age":"24",
        "emailid":"saran26@gmail.com",
        "address":"Bharathi nagar",
        "phoneno":"9899637891",
        "about":"Im trying to workhard"}
for(var a in obj)
{
    console.log(a,obj[a]);
}