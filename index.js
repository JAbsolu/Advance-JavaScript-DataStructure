
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const freqmap = {};
    const freqmap2 = {};
    
    for (let i = 0; i < s.legnth; i+=1){
        !freqmap[s[i]] ? freqmap[s[i]] = 1 : freqmap[s[i]] += 1;
        !freqmap2[t[i]] ? freqmap2[t[i]] = 1 : freqmap2[t[i]] += 1;
    }
    
    for (let item  in freqmap) {
        if (freqmap[item] !== freqmap2[item]) {
            return false
        }
    }
    
    return true;
    
};

// var isAnagram = function(s, t) {
//     if (s.length !== t.length) return false;

//     const freqMap = {};
//     const freqMap2 = {};

//     for (i = 0; i < s.length; i+=1) {
//        !freqMap[s[i]] ? freqMap[s[i]] = 1 : freqMap[s[i]] += 1;
//        !freqMap2[t[i]] ? freqMap2[t[i]] = 1 : freqMap2[t[i]] += 1;
//     }

//     for (let key in freqMap) {
//         if (freqMap[key] !== freqMap2[key]) return false;
//     }

//     return true;
// };

console.log(isAnagram("aa","bb"));
