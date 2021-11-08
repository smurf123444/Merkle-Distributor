import {merkle} from './dataToJavaScript.js'
var json = require('./data.json'); 
var parsed = merkle;
let i = 0;
let j = 0;
//create function that takes in list of addresses , then itterates through each of them for the array.

var arr = Array();
let map1 = new Map();
function createArrayWithAddresses(jsonObject: JSON){
   for (let [key, value] of Object.entries(jsonObject)) {
    console.log(`${key}: ${value}`);
    arr[i++] = value;
  }  
}
var count = Object.keys(arr).length;

i = 0

createArrayWithAddresses(json);
/* for (let [key] of Object.entries(merkle)) {
    //console.log(`${key}: ${value}`);
    //arr[i++] = key;
  }  */ 
console.log(arr[j].toString())
/* while (j < arr.length){
while(i < json.claims[arr[j].toString()].proof.length)
{
    
    if (i % 17 == 0)
    {
        json.claims[arr[j].toString()].proof = json.claims[arr[j].toString()].proof + ',';
    }
    i++;
}
j++;
} */
//console.log("%j",json.claims['0xc9c47745D1C7dAC5bc8Abb44c17470e98d3E58AC'].proof)
/* if(parsed.proof[i] < parsed.proof.length){
   // console.log(parsed.proof[i++]);
} */