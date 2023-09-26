const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function logReadable(library) {
  // filter elements with readingStatus===true in library and log them
  let raedable = library.filter((book) => book.readingStatus === true);
  raedable.forEach((book) => {
    console.log(book);
  });
}
logReadable(library);
