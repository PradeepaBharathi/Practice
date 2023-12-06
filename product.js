const url = "https://632e83b7b56bd6ac45a0d0cb.mockapi.io/products";

let data = {}
const table=document.getElementsByTagName("table")[0]
const tbody = document.getElementsByTagName("tbody")[0]
const sName = document.getElementById("searchbyName");
const searchbyDep = document.getElementById("searchbyDep");
const searchbyRating = document.getElementById("searchbyRating");
searchbyRating.innerHTML = "ratings"
const tbody1 = document.getElementsByTagName("tbody")[1];
const priceList = document.getElementById("priceList");
priceList.innerHTML = "priceList";
function populate(datu) {
    tbody.innerHTML = ""
    
    datu.forEach(element => {
        const tr = document.createElement("tr")
        Object.keys(element).forEach((e) => {
            const td = document.createElement("td")
            td.innerHTML = element[e]
            tr.appendChild(td)
        })
        tbody.appendChild(tr)
    });
  
}

function populateNameandPrice(d) {
    table.innerHTML = ""
    const thead = document.createElement("thead")
    const tr4 = document.createElement("tr")
    const th = document.createElement("th")
    const th1 = document.createElement("th")
    th.innerHTML = "Name"
    th1.innerHTML = "Price"
    tr4.append(th, th1)
    thead.appendChild(tr4)
    table.append(thead)
    d.forEach((product) => {
        const tr3 = document.createElement("tr")
        Object.keys(product).forEach((val) => {
            const td3 = document.createElement("td")
            td3.innerHTML = product[val]
            tr3.appendChild(td3)
        })
        tbody1.appendChild(tr3)
        table.appendChild(tbody1)
    })
}
async function displayData() {
    const res = await fetch(url)
    data = await res.json()
    console.log(data)
    populate(data)
}

displayData()

sName.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    const ans = data.filter((val) => {
       return val.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    })
    populate(ans)
})

searchbyDep.addEventListener("keyup", (e1) => {
  console.log(e1.target.value);
  const value1 = data.filter((val) => {
    return val.category.toLowerCase().startsWith(e1.target.value.toLowerCase());
  });
  populate(value1);
});
searchbyRating.addEventListener("click", () => {
  
  const value1 = data.filter((val) => {
    return val.ratings>4;
  });
  populate(value1);
});

priceList.addEventListener("click", () => {
    const filteredData = data.map((item) => {
      return {
        name: item.name,
        price: item.price,
      };
    });
    populateNameandPrice(filteredData);
})