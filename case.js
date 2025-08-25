const school = 'SULtanpur si Fazil Madrasah'
console.log(school);
console.log(school.toUpperCase());
console.log(school.toLocaleLowerCase());

let subject = 'bangladesh';
let book = 'Bangladesh'

if(subject.toLocaleLowerCase() === book.toLocaleLowerCase()){
    console.log('i am rrading a book');
}
else{
    console.log('hudai hudai pista ultai');
}


let drink = 'water ';
let liquid = ' water';

if(drink.trim() === liquid.trim()){
    console.log('pani er opor nam life');
}
else{
    console.log('pani khaite pari na');
}