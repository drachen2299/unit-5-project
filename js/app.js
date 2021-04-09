/*------------------------------------------------------------------------
                    Here is my search bar function
-------------------------------------------------------------------------*/
/*  1. Get the input element and place it in the searchField variable
    3. get all of the link tags and store them in a variable to use later
    4. create a function that allows for a for loop that loops through all of the link items and 
    store them for the function to search through
    5. use an if statement that takes the linking array, grabs the data-caption input, converts it to lowercase and then includes
    user input and then displays the a tag as an image on the screeen and filters out any images that do not include the users input.
*/

//Declare the variables to be used
const searchField = document.getElementById("search");
const linking = document.getElementsByTagName("a");

//Create the searchfield function that listens for key presses
searchField.addEventListener('keyup', function(event) {
    const b = event.target.value.toLowerCase();
    //use a for loop to create the array
    for (let i = 0; i < linking.length; i++) {
        //use an if statement that filters the images not included in user searches
        if (linking[i].getAttribute("data-caption").toLowerCase().includes(b)){
            linking[i].style.display = '';
        }else {
            linking[i].style.display = 'none';
        }

    }
});

