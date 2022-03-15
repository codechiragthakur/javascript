let obj = {
    name: "chirag",
    eduction: "3rdyear",
    age: 21,
    address: {
        city: "delhi",
        pincode: 110042,
    },
    friends: ['natasha', 'ajay']


}
console.log(obj);

obj.movies = ['cakhonapyaarhai', 'krish'];
console.log(obj);
delete obj.movies;
console.log(obj);
obj.address.city = 'newyork';
console.log(obj);
// console.log(obj.name);
// another method to acess
console.log('name')

// git branch -M main
// git push -u origin main