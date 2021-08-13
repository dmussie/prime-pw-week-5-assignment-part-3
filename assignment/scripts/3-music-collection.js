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
  }
};
showCollection(collection);

function findByArtist( artist ) {
  let artistArray = [];
  for (let i=0; i < collection.length; i++) {
    if (collection[i] === addToCollection(artist)) {
      artistArray.push(addToCollection(artist));
    }
  }
  return artistArray;
};

// console.log(findByArtist(artist)); // every time I try to call this function my display gets messed up
