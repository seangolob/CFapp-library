
//Book constructor
function Book(name, genre) {
  this.bookName = name;
  this.bookGenre = genre;
  // add book to certain shelf
  this.enshelf = function(shelfVar) {
    if (this.shelfVar){
      console.log("That book is already on a shelf!");
      return;
    }
    shelfVar.books.push(this);
    this.shelfVar = shelfVar;
  };
  // remove book from shelf
  this.unshelf = function() {
    if (!this.shelfVar){
      console.log("That book is not on a shelf!");
      return;
    }
    this.shelfVar.books.splice(this.shelfVar.books.indexOf(this), 1);
    this.shelfVar = null;
  };
}

//Shelf
function Shelf() {
  this.books = [];
}

//Library constructor
function Library(name) {
  this.name = name;
  this.shelves = [];
  //Add shelf to library
  this.addShelf = function(shelfVar) {
    if (this.shelves.indexOf(shelfVar) != -1){
      console.log("That shelf is already in this library");
      return;
    }
    this.shelves.push(shelfVar);
  };
  this.shelvesCount = function() {
    return this.shelves.length;
  };
  this.reportAllBooks = function() {
    var allBooks = "";
    for (var i = 0; i < this.shelves.length; i++){
      for (var j = 0; j < this.shelves[i].books.length; j ++){
        allBooks += this.shelves[i].books[j].bookName + "\n";
      }
    }
    console.log(allBooks.trim());
  };
}


var book1 = new Book('Moby Dick', 'adventure');
var book2 = new Book('Harry Potter', 'fantasy');
var book3 = new Book('Huckleberry Finn', 'adventure');
var book4 = new Book('JavaScript and jQuery', 'programming');

var shelf1 = new Shelf();
var shelf2 = new Shelf();
var shelf3 = new Shelf();

var lib = new Library("Washington");
