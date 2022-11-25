 // - object literals - let obj = {}
    // - object constructor - let obj = new Object()
    // { key : value }
    // key -> name -> identifier -> property

        // let obj = {
        //     name: 'Bob,
        //     age: 23
        // }

    // accessing keys with dots, variables, []

        // obj.name
        // obj['name']

    // multiword property and numeric -> obj[0] === pbj['0']

        // obj['user name']

    // [],.

        // [] dynamic. take value even variables

    // delete

        // delete obj.name

    // make dynamic user with return function
    // abbrivation with keys and variables

        // if in obj key and value the same name we can write one

            // let obj = {
            //     name,
            //     age
            // }

    // in -> "age" in user// true

        // age in user -> returns boolean

    // for loop with in // prints key

        // for (let i in obj) {
        //     console.log(i);
        // }


let obj = {name: "Vosit", isMarried: false , age: 23, extraNum: null,
"full name" : "Ali"

}
  
     
Object.freeze(obj);

let extra = obj.age =20;
let extraNum = obj.extraNum =5;


console.log(obj.age)



