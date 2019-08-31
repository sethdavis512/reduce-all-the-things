// Data
const { hugeArray, shapesArray } = require('../utils/data');
const { spacer } = require('../utils/utilFunctions');

// .map() vs. .filter() vs. .reduce()

// Map - Often times, mapping over an array works just fine
// Here we're taking the `shapesArray` and adding an `id` that
// didn't previously exist. Straight forward, simple. No need
// for something like `.reduce()`, unless you really want.
const mapFunction = (shape, index) => ({
    ...shape,
    id: `shapeNumber${index}`
});
const mappedShapesArray = shapesArray.map(mapFunction);
console.log(mappedShapesArray);
console.log(spacer);

// Filter - Similar story here. Filter on its own can
// perform simple filters just fine. Straight forward, simple.
// No need to add unecessary complexity.
const filterFunction = shape => shape.type !== 'SQUARE';
const filteredShapesArray = shapesArray.filter(filterFunction);
console.log(filteredShapesArray);
console.log(spacer);

// Let's chain the two together
// Here we're going to see how long it takes to `map` and `filter`
// First `map` will iterate over the items, then `filter` will start at
// the beginning and run filter on each item.
console.log('SPEED TEST 1');
console.time('Map & Filter');
// Chained methods
const mappedAndFilteredShapesArray = shapesArray
    .map(mapFunction)
    .filter(filterFunction);
console.timeEnd('Map & Filter');

// How bout reduce? It will run through the items once.
// Will it be faster with this small amount of data?
console.time('Reduce');
const reducedShapesArr = shapesArray.reduce(
    (accumulator, currentItem, index) => {
        if (currentItem.type !== 'SQUARE') {
            currentItem.id = index;
            accumulator.push(currentItem);
        }

        return accumulator;
    },
    []
);
console.timeEnd('Reduce');
// No not really...That's ok. Chaining methods can make your code
// very explicit, which will help other devs.
console.log(spacer);

// SPEED TEST 2
// What happens when we throw 50,000 records at these functions?
// Which will perform better?
console.log('SPEED TEST 2');
console.time('Map & Filter 2');
const mappedAndFilteredShapesArray2 = hugeArray
    .map((shape, index) => ({
        ...shape,
        id: index
    }))
    .filter(shape => shape.type !== 'SQUARE');
console.timeEnd('Map & Filter 2');

console.time('Reduce 2');
const reducedShapesArr2 = hugeArray.reduce(
    (accumulator, currentItem, index) => {
        if (currentItem.type !== 'SQUARE') {
            currentItem.id = index;
            accumulator.push(currentItem);
        }
        return accumulator;
    },
    []
);
console.timeEnd('Reduce 2');
// You should see a noticeable difference in completion time.
// Reduce only has to run through once, making it much more efficient.
