function tallestMountain(heights) {

    // sort the array, need to pass in a function so numbers will sort correctly
    heights.sort(function(a, b){return a-b});

    // log the last number in the array, now the highest number
    return heights.pop();

}

function shortestMountain(heights) {

    // sort the array, need to pass in a function so numbers will sort correctly
    heights.sort(function(a, b){return a-b});
    // the first number in the array is the lowest number
    return heights[0];

}

module.exports = {tallestMountain, 
shortestMountain}