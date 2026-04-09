// Q create an array to store company  -> "Bloomberg", "Microsoft","Uder","Google","IBM" , "Netflix"

// a. Remove the first company from the array
// b. Remove Uber & Add Ola in Ites place 
// c. Add Amazon at the end


let company = ["Bloomberg", "Microsoft","Uder","Google","IBM" , "Netflix"]

company.shift(); // this removes the first element from the array 
console.log(company)

company.splice(1,2,"Ola");
console.log(company)

company.push("Amazon")
console.log(company)