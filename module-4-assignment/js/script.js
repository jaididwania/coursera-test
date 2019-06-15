
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++)
     {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j')
         {
            console.log("GoodBye "+names[i])
        } 
        else
         {
           console.log("Hello "+names[i])
        }
    }


OUTPUT:


//Hello Yaakov
//GoodBye John
//GoodBye Jen
//GoodBye Jason
//Hello Paul
//Hello Frank
//Hello Larry
//Hello Paula
//Hello Laura
//GoodBye Jim
