//No 1
const str = "Nigeria is awesome";
const country = str.substring(0, 7);
console.log(country);
const mood = str.slice(11, 18);
console.log(mood);

//challange 2
const names = "John, Jane, Doe";
const comma = names.split(","); //split into an array using comma
console.log(comma);

const joinBy = comma.join(" "); // joined array with a space instead
console.log(joinBy);

const path = "user/home/docs";
const spc = path.split("/"); //splits the path into single strings
console.log(spc);

const getHom = spc[1]; //to get the index using the []
console.log(getHom);

//challenge 3
const email = "user@example.com";
const username = email.split("@"); //splits the email address into single strings
console.log(username[0]); //to help get the index using the []

const domain = email.endsWith(".com"); //checks if the email address ends with .com
console.log(domain);

const change = email.replace("@", "AT"); //replaces the @ in the email address with AT
console.log(change);
