const ctx = document.getElementById('myChart')

let country="Mexico"
let dates=[]
let cases=[]
let val = ''

fetch(`https://api.covid19api.com/dayone/country/${country}/status/confirmed/live`)
.then(res => {
    return res.json()
})
.then(jsonData => {
    jsonData.forEach(data => {
        dates.push(getFirstTen(data.Date))
        cases.push(data.Cases)
    })
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: `COVID-19 Cases in ${country}`,
                data: cases,
                fill: false,
                backgroundColor: '#fff',
                borderColor: 'blue',
                borderWidth: 3
            }]
        }
    })
})

function getFirstTen(data) {    
    val = ''    
    for (i=0; i<10;i++) {
    val = val + data.charAt(i)
    }
    return val
}