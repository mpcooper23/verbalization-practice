var movies = [
    {
        title: 'Rear Window',
        director: 'Alfred Hitchcock',
        year: 1954
    },
    {
        title: 'Cape Fear',
        director: 'Martin Scorsese',
        year: 1991
    },
    {
        title: 'Fright Night',
        director: 'Tom Holland',
        year: '1985'
    },
    {
        title: 'Blue Velvet',
        director: 'David Lynch',
        year: '1986'
    }
]

/*
Week 1
Create a function called createWeirdTitle that takes in one parameter - array - 
which represents an array of movie objects. This function should iterate through 
the array of movie objects... if the movie was released in an odd year, the 
function should access the first word in the title and add it to an output 
string; if the movie was released in an even year, the function should access 
the second word in thet title and add it to the output string (assume all titles 
will only have 2 words). The function should return the output string at the end.

var output = createWeirdTitle(movies);
console.log(output); // => "WindowCapeFrightVelvet"

*/

function createWeirdTitle(array){
//output string
var output = ''
//for loop to iterate through the array
for (let i = 0; i < array.length - 1; i++)
  {
    console.log(array[i])
    //if statement 1
    if (array[i] = array.year % 2 === 1){
      //push results to output string (i.e. first word of movie title)
      output.push(array.title[0])
    }
    //if statement 2
    if (array[i] = array.year % 2 === 0){
      output.push(array.title[1])
    }
  }
return output
}
