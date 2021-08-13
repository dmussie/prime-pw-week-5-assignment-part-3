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
}; // end addToCollection
console.log(addToCollection('The Off-Season', 'J. Cole', '2021'));
console.log(addToCollection('2014 Forest Hills Drive', 'J. Cole', '2014'));
console.log(addToCollection('good kid, m.A.A.d city', 'Kendrick Lamar', '2012'));
console.log(addToCollection('The College Dropout', 'Kanye West', '2004'));
console.log(addToCollection('Run the Jewels 2', 'Run the Jewels', '2014'));
console.log(addToCollection('Victory Lap', 'Nipsey Hussle', '2018'));
console.log('My collection of six albums:', collection);

function showCollection ( collection ) {
  console.log(collection.length);
  for (let i=0; i < collection.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);;
  } // end collection loop, console logged object categories
}; // end showCollection
showCollection(collection); //test showCollection

function findByArtist( artist ) {
  let artistArray = [];
  for (let i=0; i < collection.length; i++) {
    if (artist === collection[i].artist) {
      artistArray.push(collection[i].artist);
    }
  }
  return artistArray;
};
console.log(findByArtist('J. Cole')); // test for J. Cole expect: ["J. Cole", "J. Cole"]
console.log(findByArtist('Jay-Z')); // test for Jay-Z expect: []
console.log(findByArtist('Nipsey Hussle')); // test for Nipsey Hussle expect: ["Nipsey Hussle"]
