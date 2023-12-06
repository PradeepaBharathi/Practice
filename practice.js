function inventoryList() {
    let inventory = []

    return {
        add: addItem,
        remove: removeItem,
        getList: getItem
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
        return inventory.length>0 ? inventory : ["no item"]
    }

}

const items = inventoryList()
items.add("item1")
items.add("item2")
items.add("item3")

items.remove("item3")
const list = items.getList()
console.log(list)
///////////////


let str = "Hello world"
let reversedStr = str.split("").reverse().join("")
console.log(reversedStr)
//////////////////////////
let a1 = [1, 2, 3, 4, 1, 2, 3, 4]
let a2 = [5, 6, 7, 8]

let mergedArray = [...a1, ...a2]
let result = new Set(mergedArray)
console.log(result)
////////////////


function commonElements(arr1, arr2) {
    let res = []
    let i = 0;
    let j = 0;


    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            res.push(arr1[i])
            i++
            j++
        }
        else if(arr1[i]<arr2[j])
        {
            i++
        }
        else {
            j++
        }
    }
    return res
}
const ans = commonElements([1, 2, 3], [3, 4])
console.log(ans)

//////////////////////////////////

function upperCase(inpObj) {
    return Object.keys(inpObj).reduce((result, key) => {
        let upperKey = key.toUpperCase()
        result[upperKey] = inpObj[key]
        return result
    },{})
}
let Input = { jack: "Three", jill: "Two", And: "one" };
let output = upperCase(Input)
console.log(output)
///////////////////////////
let ar5 = [3, 4, 5, 5, 3, 6, 7]
let count = {}

ar5.forEach((e) => count[e] ? count[e]++ : count[e] = 1)
console.log(count)
///////////////////////////////
function count2(arr2) {
    let obj = {}
    
    for (let num of arr2) {
        obj[num] = (obj[num] || 0)+1
    }
    let filterObj = {}
    
    for (let key in obj) {
        if (obj[key] > 1) {
           filterObj[key]= obj[key]
       }
    }
    return filterObj
}

let final = [4, 6, 2, 8, 9, 2, 6, 7, 6]
let finalA=count2(final)
console.log(finalA)
////////////////////////////////
let val = ["jack", "ANd", "jack", "jill", "jack", "jill"]
let ansVal = {}
val.forEach((e) => ansVal[e] ? ansVal[e]++ : ansVal[e] = 1)
console.log(ansVal)

////////////////////////////
let inval = [5,2,3, 0, 1]
let sortedArr = inval.sort()
let resu=0
for (let i = 0; i < inval.length; i++){
    if (inval[i] !== i) {
        resu= resu+i
    }
}
console.log(resu)

/////////////////

function findWays(n) {
    if (n <= 1) {
        return 1
    }

    let ways = [1, 1]
    for (let i = 2; i <= n; i++){
        ways[i]=ways[i-1]+ways[i-2]
    }
    return ways
}

let inpu = 4
let outp = findWays(inpu)
console.log(outp)
////////////////
function generateWaysToReachTop(n, current = []) {
  if (n === 0) {
    console.log(current.join(" "));
    return;
  }

  for (let step = 1; step <= 2 && step <= n; step++) {
    generateWaysToReachTop(n - step, [...current, step]);
  }
}

const n = 4;
console.log("Ways to reach the top:");
generateWaysToReachTop(n);
