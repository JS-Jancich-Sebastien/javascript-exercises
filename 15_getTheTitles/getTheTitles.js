const getTheTitles = function(books) {
    let array = [];

    for(const book of books)
    {
        array.push(book.title)
    }

    return array;
};

console.log(getTheTitles([
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]))

// Do not edit below this line
module.exports = getTheTitles;
