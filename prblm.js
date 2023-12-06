const num1 = 4

function factorial(a) {
    let ans = 1
    for (let i = a; i >= 1; i--){
        ans = ans*i
    }
    console.log(ans)
}

factorial(num1)


function prime(b) {
    for (i = 2; i <= b; i++){
        if (b % i == 0) {
           return "not prime"
        }
        else {
          return "prime"
        }
    }
   
}

let answer=prime(num1)
 console.log(answer);
const c = ["a", "b"]
c.length = 0
console.log(c)