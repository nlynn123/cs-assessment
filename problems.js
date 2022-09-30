
const sumZero = (arr) => {
    for (let i=0; i<arr.length; i++){
        for(let j=0; i<arr.length; j++){
            if(arr[i] + arr[j] === 0) {
                return true
            }
        }
    }
    return false
}

console.log(sumZero([]));
console.log(sumZero([1]));
console.log(sumZero([1,2,3,0,0]))

//Time complexity: O(n)squared
//Space = O(n)


const hasUniqueChars = (arr) => {
    const mySet=new Set()
    for (let i=0; i<arr.length; i++){
        mySet.add(arr[i])
    }
    if(mySet.size===arr.length){
        return true
    } else {
        return false
    }
}


//Time complexity: O(n)


const isPangram = (str) => {
    str = str.toLowerCase().split('')
    const alphabet = {
        a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
    }
    for (let i=0; i<str.length; i++){
        if(alphabet[str[i]]=0){
            alphabet[str[i]]+=1
        }
    }
    for(let key in alphabet){
        if(alphabet[key]===0){
            return false
        }
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))


//Time complexity: O(n)

//Space complexity: O(n)



const findLongestWord = (arr) => {
    let longestLength = 0
    arr.forEach((word) => {
        if(word.length > longestLength){
            longestLength= word.length
        }
    })
    return longestLength
}


console.log(findLongestWord(["hi", "hello", "supercalifragilisticexpealidocious"]))

//Time: O(n)
//Space = O(n)





