const { error } = require('console');
const fs = require('fs')

//reading files
fs.readFile('./docs/blog1.txt', (error, data) => {
    if (error) {
        console.log(error)
    }
    console.log(data.toString());
})

//writing files
fs.writeFile('./docs/blog1.txt', 'Python is a high-level, general-purpose programming language.', () => {
    console.log('I am writing');
})

fs.writeFile('./docs/blog3.txt', 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming. Wikipedia', () => {
    console.log('I will read');
})

//directories
//if (!fs.existsSync('./assets')) { //checking if a file exist
    //fs.mkdir('./assets', (error) => {
       // if (error) {
           // console.log(error);
        //}
        //console.log('folder create');
    //});
//} else {
    //fs.rmdir('./assets', (error) => {
       // if (error) {
           // console.log(error)
        //}
        //console.log('folder deleted');
    //})
//}


//deleting a file
if (fs.existsSync('./docs/delete.txt')) {
    fs.unlink('./docs/delete.txt', (error) => {
        if (error) {
            console.log(error)
        }
        console.log('file deleted')
    })
}