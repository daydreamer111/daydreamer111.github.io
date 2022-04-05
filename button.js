const books = [
    {"title": "Iron Widow", "author": "Xiran Jay Zhao", "rating": 4.0},
    {"title": "Carve the Mark", "author": "Veronica Roth", "rating": 4.5},
    {"title": "Throne of Glass", "author": "Sarah J. Maas", "rating": 4.0},
    {"title": "Loba", "author": "Veronica Murguia", "rating": 5.0},
];

function getBookRec() {
    const rand_ind = Math.floor(Math.random() * books.length);
    console.log(rand_ind);
    document.getElementById("book").innerHTML = books[rand_ind].title + " by " + books[rand_ind].author;
}