/*-----------------------------------------------
This is my search bar function
------------------------------------------------*/
//select the input element
const input = document.getElementById('search');

//create the function that handles the search and filtering
const getSearch = (e) => {
    let inputValue = e.target.value.toLowerCase();
    let array = document.getElementsByClassName('item');

    for (let i = 0; i < array.length; i++) {
        let image = array[i];
        let caption = image.getAttribute('data-caption').toLowerCase();
        let title = image.getAttribute('title').toLowerCase();
        //truthy falsy short hand if statement that will display the image or not. 
        caption.includes(inputValue) || title.includes(inputValue) ? image.style.display = 'inline' : image.style.display = 'none';

    }
}
input.addEventListener('keyup', getSearch);

baguetteBox.run('.gallery', {
    captions: true,
    buttons: 'auto',
    animation: 'fadeIn'
});
