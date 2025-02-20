/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getLongestDinosaur(dinosaurs) {

let name;
let longestDino = 0;
let newObject = {};

// checks if the array of dinosaurs exists. If empty, return {}.
if (!dinosaurs.length){
  return {}
};
  
// otherwise, loop through the dinosaurs array and find the name of the dinosaur with the lengest length.
  for(let i = 0; i < dinosaurs.length; i++){
  if (dinosaurs[i].lengthInMeters > longestDino){
  longestDino = dinosaurs[i].lengthInMeters
  name = dinosaurs[i].name
  }  
};

// convert the length of the dinosaour from meters to feet by multiplying 3.281.
longestDino *= 3.281;
newObject[name] = longestDino;
return newObject;
}

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  let dinoId;
  let dinoName;
  let dinoPronunciation;
  let dinoInfo;
  let dinoPeriod;
  let years;
  let dinoIdExist = false
  
  // reassigning values to make it simpler and cleaner to look at.
  for (let i = 0; i < dinosaurs.length; i++){
    if (dinosaurs[i].dinosaurId === id){
      dinoId = dinosaurs[i].id
      dinoName = dinosaurs[i].name
      dinoPronunciation = dinosaurs[i].pronunciation
      dinoInfo = dinosaurs[i].info
      dinoPeriod = dinosaurs[i].period
      years = [...dinosaurs[i].mya]
      years = years[years.length - 1]
      dinoIdExist = true
    }
  }
  // if the dinosaur id doesn't exist, return error message.
  if (dinoIdExist === false){
    return `A dinosaur with an ID of 'incorrect-id' cannot be found.`
  }
  // else return the name, pronounciation, information, time period, and mya values of the dinosaur as a string.
  return `${dinoName} (${dinoPronunciation})\n${dinoInfo} It lived in the ${dinoPeriod} period, over ${years} million years ago.`
}


/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key = `dinosaurId`) {
  // set a default value for key as 'dinosaurId' in the parameters
  // returning an array; set a new array value as empty brackets since values will be pushed into this.
  let array = [];

  // looping through the dinosaurs array.
  for (let i = 0; i < dinosaurs.length; i++) {
  // if the value of dinosaurs at mya is a single value, account for the value and one less (-1)
    if (dinosaurs[i].mya[0] >= mya && dinosaurs[i].mya[0] - 1 <= mya){
  // pushes ID of dinosaur to array if condition is true    
      array.push(dinosaurs[i][key])
  // else checks for the value of mya in the dinosaur array is between the first index and last index
    } else if (dinosaurs[i].mya[0] >= mya && dinosaurs[i].mya[dinosaurs[i].mya.length - 1] <= mya){
  // pushes the ID into the array   
      array.push(dinosaurs[i][key])
    }    
  }
  // returns new array with given value
  return array
}

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
