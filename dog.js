const url = "https://dog.ceo/api/breeds/list/all";
let data = {};
async function getData() {
  const res = await fetch(url);
  data = await res.json();
  data = data.message;
    console.log(data);
    populate()
}
getData();

const tbody = document.getElementsByTagName("tbody")[0]
const search = document.getElementById("search")
function populate(searchText) {
    tbody.innerHTML=""
    let value = Object.keys(data)
    if (searchText) {
        value = value.filter(val=>val.startsWith(searchText.toLowerCase()))
    }
    for (let i of value) {
        const tr = document.createElement("tr")
        const td = document.createElement("td")
        const td1 = document.createElement("td")

        td.innerHTML = i.toUpperCase()
        td1.innerHTML = data[i].join("").toUpperCase()

        tr.append(td, td1)
        tbody.append(tr)
    }
    
}
    
search.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    populate(e.target.value)
})
