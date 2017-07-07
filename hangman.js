function countLetters(word, letter) {

    // this will split the word based on letter selected
    // the array will contain one more entry than the number of occurences found
    return (word.split(letter).length - 1);

}

module.exports = countLetters;