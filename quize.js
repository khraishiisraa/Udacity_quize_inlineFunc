/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as described above
 */


// creates a line of * for a given length

 const buildTriangle = function(length){

    const makeLine = function (length, noNewLine = false) {

    let star = "";
    if (length === 1){
        star += "*";
    }else if (length === 2){
        star += "* *";
    }else if (length === 3){
        star += " ***";

    }else{
        star = makeLine(length - 3, true) + " " + makeLine(3, true);
    }
    // return star + "\n";
    return noNewLine ? star : star + "\n";
};
    let triangle = "";
    
    for(let lineNumber = 1; lineNumber <= length; lineNumber++){
        triangle = triangle + makeLine(lineNumber);
        
    }return triangle;
};
// test your code 
console.log(buildTriangle(10));