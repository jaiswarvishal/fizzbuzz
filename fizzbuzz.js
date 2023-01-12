 var anime = [];
var add = 1;
// add = add+1;

function pole(){
    if(add % 3 === 0 && add % 5 === 0)
    {
        anime.push("FizzBuzz")
    }
    
    else if (add % 3 === 0)
    {
        anime.push("Fizz")
    } 
    else if(add % 5 === 0)
    {
        anime.push("Buzz")
    } 
    else 
    {
         anime.push(add)
    }
   
    console.log(anime)
    add++;

}