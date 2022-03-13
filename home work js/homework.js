// remove element from array
function removeElt(elt, array) {
    var j = 0;
    arr = [];
    for (var i = 0; i < array.length; i++)
        if (elt != array[i]) 
            arr[j++] = array[i];
    if (array.length == arr.length)
        console.log('elemnt does not exist!');
    return arr;
}

array = [1, 2, 3, 4, 5];
console.log(array);
array = removeElt(345, array);
console.log('remove element ==> ' + array);

console.log('------------');

// remove deplicated from sorted array 
function removeDpl(array) {
    var j = 0;
    if(array.length > 0)
        arr[j++] = array[0];
    for (var i = 1; i < array.length; i++)
        if (array[i-1] != array[i]) 
            arr[j++] = array[i];
    return arr;
}

array = [1, 2, 2, 2, 3, 4, 5, 5, 5, 8, 8];
console.log(array);
array = removeDpl(array);
console.log('remove deplicated ==> ' + array);