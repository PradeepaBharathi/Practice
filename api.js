const url = "https://yesno.wtf/api";
let score =0
const imgEle = document.getElementById("img");

const scoreDiv = document.getElementById("score")

let ans=""


const setScore = (num) => {
    score += num
    scoreDiv.innerHTML = `your score is ${score}`
    display()
}

 const yesBtn = document.getElementById("button-yes");
 const noBtn = document.getElementById("button-no");
 yesBtn.addEventListener("click", (e) => {
   if (ans === "yes") {
     setScore(1);
   } else {
     setScore(-1);
   }
 });
 noBtn.addEventListener("click", (e) => {
   if (ans === "no") {
     setScore(1);
   } else {
     setScore(-1);
   }
 });
const populate = ({ answer, image }) => {
    console.log(answer, image)
    imgEle.src = image;
    ans=answer``
   
}

async function display() {
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        populate(data)
    } catch (error) {
        console.log(error)
    } 
}


setScore(0)