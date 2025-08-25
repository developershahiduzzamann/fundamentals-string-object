const address = 'bangladesh'
const part = address.slice(2, 6);
console.log(part);


const sentence = ' I am a good boy nat a bad boy'
console.log(sentence);
console.log(sentence.split());
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('a'));



const friendStar = 'Rahim,Korim,Dalim,Mofij,marja,saha';
const friends = friendStar.split(',');
console.log(friends);

const realFriend = [ 'Rahim', 'Korim', 'Dalim', 'Mofij', 'marja', 'saha' ];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));