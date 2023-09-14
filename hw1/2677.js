/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const newArr = []

    for (let i = 0; i < arr.length; i+=size) {
        const extendingArr = []
        for (let j = 0; j < size; j++) {
            if (arr[i + j] !== undefined) extendingArr.push(arr[i + j])
        }
        newArr.push(extendingArr)
    }

    return newArr

};
