const mobile = {
    brand: 'sumsung',
    price: 25000,
    color: 'green',
    camera: '2px'
}
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}
const  keys = Object.keys(mobile);
console.log(keys);
for(const key of keys){
    console.log(key, ':', mobile[key]);
}