let data=[]

const getStocksBtn = document.getElementById("stock-btn")

async function getStocks(data) {
  const actualDate = formatedDate(data)
  const res = await fetch(
    `https://jsonmock.hackerrank.com/api/stocks?date=${actualDate}`
  );
  data = await res.json()
  populate(data.data[0])
}


function populate(data1) {
  const stockDetails = document.getElementById("stock-details")
  
  if (!data1) {
    alert("Please enter a date")
  }
  
  if (data1) {
    stockDetails.innerHTML = `
    <p>Open:${data1.open}</p>
    <p>High:${data1.high}</p>
    <p>Low:${data1.low}</p>
    <p>Close:${data1.close}</p>`
  }
  else {
   stockDetails.innerHTML = `<p>No Results Found</p>`;
  }
}






function formatedDate(date) {
  const value = date.split("-")
  const day = parseInt(value[0], 10);
  const month = value[1]
  const year = value[2]
  return `${day}-${month}-${year}`
}

getStocksBtn.addEventListener("click", () => {
  const dateInput = document.getElementById("dateInput").value
  getStocks(dateInput)
})