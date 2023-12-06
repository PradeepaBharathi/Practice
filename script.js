const url = "https://dog.ceo/api/breeds/list/all";


let data ={}

// const res = fetch(url).then(res => res.json())
//     .then(res =>
//     {
//         data = res.message
//         console.log(data)
//         populate("")
//     })

async function fetchData() {
    try {
        const res = await fetch(url)
         data = await res.json()
        data = data.message
        populate()

    } catch (error) {
        console.log(error)
    }
}
fetchData()
const inpEle = document.createElement("input")
inpEle.type="text"
const body = document.getElementsByTagName("body")[0]
body.append(inpEle)

const table = document.createElement("table")
body.appendChild(table)

function populate(searchText) {
    table.innerHTML = ""
    let value = Object.keys(data)
    if (searchText) {
        value = value.filter(val=> val.startsWith(searchText.toLowerCase()))
       
   }

    for (let i of value) {
         const tr = document.createElement("tr");
         const td = document.createElement("td");
         const td1 = document.createElement("td");
        td.innerHTML = i.toUpperCase()
        td1.innerHTML = data[i].join().toUpperCase()
        tr.append(td, td1)
        table.appendChild(tr)
    }
    console.log(data)
}

inpEle.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    populate(e.target.value)
})