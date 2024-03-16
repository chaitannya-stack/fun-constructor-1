// Author constructor
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
  
  // Book constructor
  function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }
  
  // Method to get book info
  Book.prototype.getBookInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
  };
  
  // Creating Author instances
  const author1 = new Author("J.K. Rowling", 1965, "British");
  const author2 = new Author("George Orwell", 1903, "British");
  
  // Creating Book instances
  const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 10.99);
  const book2 = new Book("1984", author2, "Dystopian Fiction", 8.99);
  
  // Displaying book details
  console.log("Book 1 Details:");
  book1.getBookInfo();
  console.log("\nBook 2 Details:");
  book2.getBookInfo();