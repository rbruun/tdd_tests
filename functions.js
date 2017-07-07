   function secondLargest(params) {
        params.sort(function(a, b){return a-b});
        return params[params.length - 2];
    };
    
    function containsVowel(a) {
        a = a.toLowerCase();
        return (a.includes("a") ||
            a.includes("e") ||
            a.includes("i") ||
            a.includes("o") ||
            a.includes("u")); 
    };
    
    function pigLatin(a){
        let vowels = "aeiouAEIOU";
        
        let words = a.split(" ");
        
        for (let i=0;i<words.length;i++) {
            let word = words[i];
            for (let j=0;j<word.length;j++) {
                if (vowels.includes(word.charAt(j))) {
                    words[i] = word.substr(j) + word.substr(0,j) + 'ay';
                    break;
                }
            }
        }
        return words.join(" ");
    };
    
    function longestWord(phrase) {
        // remove any punctuation from the phrase
        let cleanPhrase = phrase.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ");
        words = cleanPhrase.split(" ");
        let longest = "";
        for (let i=0; i<words.length;i++){
            if (words[i].length > longest.length) {
                longest = words[i];
            }
        }
        
        return(longest);
    };

    function weave(word, nbr) {
        for (let i=1; i<=word.length; i++) {
            if (i % nbr == 0){
                word = word.substr(0, i-1) + 'x' + word.substr(i);
            }
        }
        return word;
    };
    
    function totalBill(bill) {
        return Math.ceil(bill * 1.2);
    };

    module.exports = {
        secondLargest,
        containsVowel,
        pigLatin,
        longestWord,
        weave,
        totalBill
    }