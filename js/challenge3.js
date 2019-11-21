$("#ch3form").submit(function() {
    // console.log("testttt") //testing if first line works
    var fruit = $('input[name="fruit"]')

    for (let i = 0; i < fruit.length;i++){
        if (fruit[i].checked)
            return true;
            // console.log("WORKING") //checks to see if loop works
    };
    alert("You must pick a fruit!")
    return false;
})

$("#ch3form").submit(function() {
    var standing = $('input[name="standing"]')

    for (let i = 0; i < standing.length;i++){
    if (standing[i].checked)
        return true;
        // console.log("WORKING") //checks to see if loop works
    };

    alert("You must pick a standing!")
    return false;
    })
//Original Code I am Changing-----
    // ch3form.onsubmit = function() {
    // var fruit = 
    // document.querySelectorAll('input[name="fruit"]')

    // for (let i = 0; i < fruit.length;i++){
    //     if (fruit[i].checked)
    //         return true;
    // }

    // alert("You must pick a fruit!")
    // return false;


    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;
    
    // alert("You must pick a fruit!")
    // return false;
