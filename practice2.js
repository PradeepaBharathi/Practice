function inventoryList() {
    let inventory = []
    
    return {
        add: addItem,
        remove: removeItem,
        getList:getItem
    }

    function addItem(name) {
        if (!inventory.includes(name) && inventory.length < 10) {
            inventory.push(name)
        }
    }
    function removeItem(name) {
        const index = inventory.indexOf(name)
        if (index !== -1) {
            inventory.splice(index,1)
        }
    }

    function getItem() {
        return inventory.length>0? inventory : ["no item"]
    }

}

const item = inventoryList()

item.add("item 1")
item.remove("item 1")
const list = item.getList()
console.log(list)
/////////////////////

let str = "hello world"
let reversedStr = str.split("").reverse().join("")
console.log(reversedStr)

let a1 = [1, 2, 3, 4, 1, 2, 3, 4]
let a2 = [5, 6, 7, 8]

let ans = new Set([...a1, ...a2])
let ansArr=[...ans]
console.log(ansArr)

////////////

function commonElements(ar1, ar2) {
    let result = []
    let i = 0
    let j = 0
    while (ar1.length > i && ar2.length > j) {
        if (ar1[i] == ar2[j])
        {
            result.push(ar1[i])
            i++
            j++
        }
        else if (ar1[i] < ar2[j]) {
            i++
        }
        else {
            j++
        }
    }
    return result
}

let answer = commonElements([1, 2, 3], [3, 4])
console.log(answer)

let arr = [2, 8, 1, -3, 6, 7, 5, 4, -12, 82, 31, -34, 56, -76, 57, 82];

let sortedArr = arr.sort((a, b) => a-b)
console.log(sortedArr)


function upperCase(inpObj) {
    return Object.keys(inpObj).reduce((result, key) => {
        let upper = key.toUpperCase()
        result[upper] = inpObj[key]
        return result
    },{})
}

let Input = { jack: "Three", jill: "Two", And: "one" };
let output = upperCase(Input)
console.log(output)
//////////////////////////
let input1 = [3, 4, 3, 5, 3, 6];
let count = {}

input1.forEach((e) => count[e] ? count[e]++ : count[e] = 1)
console.log(count)
//////////////////////////////

function count1(arr) {
    let obj = {}
    
    for (num of arr) {
        obj[num]= (obj[num] || 0) +1
    }
    let filterObj = {}
    for (let key in obj) {
        if (obj[key] > 1) {
            filterObj[key]= obj[key]
        }
    }
    return filterObj
}
let data = [4, 6, 2, 8, 9, 2, 6, 7, 6];
let out = count1(data)
console.log(out)

///////////////

function findWays(n) {
    if (n <= 1) {
        return 1
    }

    let ways = [1, 1]
    for (let i = 2; i <= n; i++){
        ways[i] = ways[i-1]+ways[i-2]
    }
    return ways[n]
}
let x = 3
const value = findWays(x)
console.log(value)

///////////
function generateFind(n,current=[]) {
    if (n === 0) {
        console.log(current.join(" "))
        return
    }

    for (let step = 1; step <= 2 && step <= n; step++){
        generateFind(n-step,[...current,step])
    }
}
let x1 = 3;
 generateFind(x1);


/////////////////////
function findProduct(nums) {
    let len = nums.length

    let resp = []
    let left =1
    for (let i = 0; i < len; i++){
        resp[i] = left
        left *= nums[i]
    }

    let right = 1
    for (let j = len - 1; j >= 0; j--){
        resp[j] *= right
        right *= nums[j]
    }
    return resp
}
let num2 = [1, 2, 3, 4]
let outVAL = findProduct(num2)
console.log(outVAL)
///////////

function repeat(word) {
    let response = []
    
    for (let i = 0; i < word.length; i++){
        let isRepeat = false
        for (let j = 0; j <= response.length; j++) {
          if (word[i] == response[j]){ isRepeat = true;
          break;}
        }
        if (!isRepeat) {
            response.push(word[i]);
        }
    }
    return response;
}

let string = "hello"
let outputVal = repeat(string)
console.log(outputVal.join(""))

///////////
function repeatChar(word) {
    let res = []
    for (let x in word) {
        if (res.indexOf(word[x] == -1)) {
            res.push(word[x])
        }
    }
    return res
}
let string1 = "hello";
let outputVal1 = repeat(string1);
console.log(outputVal1.join(""));