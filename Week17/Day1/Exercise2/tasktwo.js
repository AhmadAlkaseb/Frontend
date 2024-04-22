// Task 1.1.1
const names = ["Lars", "Peter", "Jan", "Bo"];

// Task 1.1.2
function myFilter(array, callback) {
    const filteredArray = [];
    for (const element of array) {
        if (callback(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}
const filteredArr = myFilter(names, (string) => string.length <= 3);
console.log(filteredArr);

// Task 1.1.3
function myMap(array, callback) {
    const mappedArray = [];
    for (const element of array) {
        mappedArray.push(callback(element));
    }
    return mappedArray;
}
const mappedArr = myMap(names, (name) => name.toUpperCase());
console.log(mappedArr);

// Task 1.2
Array.prototype.myFilter = function(callback) {
    const filteredArray = [];
    for (const element of this) {
        if (callback(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
};

Array.prototype.myMap = function(callback) {
    const mappedArray = [];
    for (const element of this) {
        mappedArray.push(callback(element));
    }
    return mappedArray;
};
const filteredNames = names.myFilter(name => name.length <= 3);
console.log(filteredNames);
const mappedNames = names.myMap(name => name.toUpperCase());
console.log(mappedNames);

// Task 1.3.1
const divs = document.getElementsByTagName('div');
const colors = ['blue', 'green', 'red'];
for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = colors[i];
}

// Task 1.3.2
function getRandomColor() {
return colors[Math.floor(Math.random() * colors.length)];
}

function changeColors() {
    // Get individual divs
    const divs = document.getElementsByTagName('div');

    // Convert HTMLCollection to array and apply random colors to each div
    Array.from(divs).forEach(div => {
        div.style.backgroundColor = getRandomColor();
    });
}
document.getElementById('changeColorButton').addEventListener('click', changeColors);