const url = "https://restcountries.com/v3.1/all";
let data
const container = document.getElementById("container")
const search = document.getElementById("search")

const populate = (val) => {
    console.log(val)
    container.innerHTML = ""
    
    val.forEach(element => {
        const { name, flags, capital, region, population } = element
        
        const card = document.createElement("div")
        card.setAttribute("class", "card")
        
        const head = document.createElement("h4")
        head.innerHTML = name.common
        
        const flag = document.createElement("img")
        flag.src = flags.svg
        flag.setAttribute("id", "flag")
        
        const cap = document.createElement("p")
        cap.innerHTML=`Capital : ${capital}`

        const reg = document.createElement("p");
        reg.innerHTML = `Region : ${region}`;

        const pop = document.createElement("p");
        pop.innerHTML = `Population : ${population}`;
        card.appendChild(head)
        card.appendChild(flag)
        card.appendChild(cap)
        card.appendChild(reg)
        card.appendChild(pop)
        container.appendChild(card)
    });
  

}

async function fetchData() {
    try {
        const res = await fetch(url);
        data = await res.json();
      
        populate(data)
    } catch (error) {
        console.log(error)
    }
}

fetchData()

search.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    const value = data.filter(val => {
      return  val.name.common.toLowerCase().startsWith(e.target.value.toLowerCase())
    })
    populate(value)
})

