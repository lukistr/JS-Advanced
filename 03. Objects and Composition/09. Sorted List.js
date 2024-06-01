function createSortedList() {
    let collection = [];

    return {
        add(element) {
            if (typeof element !== 'number') {
                throw new TypeError('Element must be a number');
            }
            collection.push(element);
            collection.sort((a, b) => a - b);
        },
        remove(index) {
            if (index < 0 || index >= collection.length) {
                throw new RangeError('Index out of range');
            }
            collection.splice(index, 1);
        },
        get(index) {
            if (index < 0 || index >= collection.length) {
                throw new RangeError('Index out of range');
            }
            return collection[index];
        },
        get size() {
            return collection.length;
        }
    };
}
/*
function createSortedList() {
    let collection = [];

    let result = {
      add: function (item) { collection.push(item); },
      remove: function (item) { collection.splice(item, 1); },
      get: function (item) { return collection[item]; },
      size: function() { return collection.length; },
    };

    return result
}
*/

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));