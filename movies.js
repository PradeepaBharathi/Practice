const url =
  "https://cors-anywhere.herokuapp.com/gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json";
let jsonData={}

const searchByName = document.getElementById("searchByName");
const searchByYear = document.getElementById("searchByYear");
const searchByYearF = document.getElementById("searchByYearF");
const searchByYearT = document.getElementById("searchByYearT");
const movie_List = document.getElementById("movie-List")

function populate(data) {
    movie_List.innerHTML=""
    console.log(data)
    const table = document.createElement("table")
    const tr = document.createElement("tr")

    let keys = Object.keys(data[0])
    console.log(keys)

    keys.forEach((e) => {
        const th = document.createElement("th")
        th.innerHTML = e
        tr.appendChild(th)
    })
    table.appendChild(tr)

    data.forEach((val) => {
        const tr2 = document.createElement("tr")
        keys.forEach((element) => {
            const td = document.createElement("td")
            td.innerHTML = val[element]
            tr2.appendChild(td)
        })
         table.appendChild(tr2);
    })
   
    movie_List.appendChild(table)
}
async function getMovies() {
    const res = await fetch(url)
    if (res.status != 200) {
        alert("request access")
        window.location="https://cors-anywhere.herokuapp.com/corsdemo"
    }
    const data = await res.json()
    jsonData = data
    console.log(jsonData)
    populate(jsonData)
}
getMovies()

searchByName.addEventListener("keyup", (e) => {
    let mName = jsonData.filter((val) =>
      val.title.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
  populate(mName)
})
searchByYear.addEventListener("keyup", (e) => {
    let year = +(e.target.value)
    if (e.target.value.length == 4) {
        let mYear = jsonData.filter((val) => val.year === year);
        populate(mYear);
    }
  
});

searchByYearF.addEventListener("keyup",yearRange)
searchByYearT.addEventListener("keyup", yearRange)

function yearRange() {
    const startYear = parseInt(searchByYearF.value)
    const tillYear = parseInt(searchByYearT.value)

    if (!isNaN(startYear) && !isNaN(tillYear)) {
        let movieRange = jsonData.filter((movie) => {
            let movieYear = parseInt(movie.year);
            return movieYear >= startYear && movieYear<= tillYear
        })
        populate(movieRange)
    }
}