console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished, tracks) {
  let album = {
    title, artist, yearPublished, tracks // was initially confused as to how to add tracks to object
  } // end album
  collection.push(album);
  return album;
}; // end addToCollection
console.log(addToCollection('The Off-Season', 'J. Cole', 2021,
[{name: '95.south', duration: '3:00'}, {name: 'amari', duration: '2:00'}, {name: 'punchin the clock', duration: '2:00'}]));
console.log(addToCollection('Forest Hills Drive', 'J. Cole', 2014,
[{name: 'January 28th', duration: '4:02'}, {name: 'A Tale of 2 Citiez', duration: '4:29'}, {name: 'Fire Squad', duration: '4:48'}]));
console.log(addToCollection('good kid, m.A.A.d city', 'Kendrick Lamar', 2012,
[{name: 'Backseat Freestyle', duration: '3:32'}, {name: 'The Art of Peer Pressure', duration: '5:24'}, {name: 'Money Trees', duration: '6:26'}]));
console.log(addToCollection('The College Dropout', 'Kanye West', 2004,
[{name: 'All Falls Down', duration: '3:43'}, {name: 'Jesus Walks', duration: '4:15'}, {name: 'Two Words', duration: '4:26'}]));
console.log(addToCollection('Run the Jewels 2', 'Run the Jewels', 2014,
[{name: 'Jeopardy', duration: '3:21'}, {name: 'Oh My Darling Dont Cry', duration: '3:24'}, {name: 'Early', duration: '3:44'}]));
console.log(addToCollection('Victory Lap', 'Nipsey Hussle', 2018,
[{name: 'Victory Lap', duration: '3:58'}, {name: 'Dedication', duration: '4:05'}, {name: 'Hussle & Motivate', duration: '4:18'}]));
console.log('My collection of six albums:', collection);
// Had help to understand the notation behind logging another array's data (tracks) into our inital collection array

function showCollection ( collection ) {
  console.log(collection.length);
  for (let i=0; i < collection.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}:`);
    for (let j=0; j < collection[i].tracks.length; j++) // initally forgot about NESTED for loops!! This took time to figure out and help from a classmate
      console.log(`${j+1}. ${collection[i].tracks[j].name}: ${collection[i].tracks[j].duration}`);
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

// Stretch Goals
function search(artist, year, trackName) {
  let newCollection = [];
  for (let i=0; i < collection.length; i++) {
    for (let j=0; j < collection[i].tracks.length; j++) {
      if (artist === collection[i].artist && year === collection[i].yearPublished && trackName === collection[i].tracks[j].name) {
        newCollection.push(collection[i]);
      } else if (artist === undefined && year === undefined) {
        newCollection.push(collection[i]);
      }
    }
  }
  return newCollection;
};
console.log(search('J. Cole', 2014, 'January 28th')); // test for J. Cole from 2014: expect ["Forest Hills Drive", "J. Cole", 2014]
console.log(search('Marvin Gaye', 1960)); // test for Marvin Gaye circa 1960: expect []
console.log(search()); // test for no search parameters: expect full collection array
