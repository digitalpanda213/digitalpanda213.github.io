<<<<<<< HEAD
/*jshint esversion: 6 */
const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['https://images.unsplash.com/photo-1537000092872-06bbf7b64f60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14d2fe1244b43a1841569da918066fc4&auto=format&fit=crop&w=1050&q=80', 'https://images.unsplash.com/photo-1537005081207-04f90e3ba640?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ffb71f2a2843e802e238c5ff8e4bbb8c&auto=format&fit=crop&w=764&q=80', 'https://images.unsplash.com/photo-1536873602512-8e88cc8398b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60a351868d0839e686c8c5a286265f8d&auto=format&fit=crop&w=1050&q=80'];

img.src = pictures[0];
let position = 0;

moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
=======
/*jshint esversion: 6 */
const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['https://images.unsplash.com/photo-1537000092872-06bbf7b64f60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14d2fe1244b43a1841569da918066fc4&auto=format&fit=crop&w=1050&q=80', 'https://images.unsplash.com/photo-1537005081207-04f90e3ba640?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ffb71f2a2843e802e238c5ff8e4bbb8c&auto=format&fit=crop&w=764&q=80', 'https://images.unsplash.com/photo-1536873602512-8e88cc8398b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60a351868d0839e686c8c5a286265f8d&auto=format&fit=crop&w=1050&q=80'];

img.src = pictures[0];
let position = 0;

moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
>>>>>>> d382b69458c4307b35b2ad8e4d1a463e1de2921a
leftBtn.addEventListener("click", moveLeft);