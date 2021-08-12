console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  } // end album
  collection.push(album);
  return album;
} // end addToCollection
console.log(addToCollection('The Off-Season', 'J. Cole', '2021'));
console.log(addToCollection('Take Care', 'Drake', '2011'));
console.log(addToCollection('good kid, m.A.A.d city', 'Kendrick Lamar', '2012'));
console.log(addToCollection('The College Dropout', 'Kanye West', '2004'));
console.log(addToCollection('Chasing Summer', 'SiR', '2019'));
console.log(addToCollection('Victory Lap', 'Nipsey Hussle', '2018'));
console.log('My collection of six albums:', collection);
