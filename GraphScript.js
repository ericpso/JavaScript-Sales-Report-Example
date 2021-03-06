// Initializing Product List:
// This list should be loaded from a file or database
const roupas = ["Camisas", "Calças"]
const joias = ["Brincos","Cordões"]
const cosméticos = ["Perfume"]

const camisas = ["Camisa1","Camisa2"]
const calças = ["Calça1", "Calça2", "Calça3"]
const brincos = ["Brinco1","Brinco2"]
const cordões = ["Cordão1","Cordão2"]
const perfumes = ["Perfume1", "Perfume2"]

// Sales data by month
const data = {
"Camisa1": [450, 500, 400, 450],
"Camisa2": [400, 200, 100, 500],
"Calça1": [100, 250, 300, 450],
"Calça2": [100, 400, 100, 234],
"Calça3": [621, 250, 567, 400],
"Brinco1": [100, 100, 300, 100],
"Brinco2": [210, 200, 200, 500],
"Cordão1": [100, 400, 150, 450],
"Cordão2": [200, 200, 650, 400],
"Perfume1": [100, 400, 500, 100],
"Perfume2": [550, 200, 150, 300]
}

const calendar = [
    'January',
    'February',
    'March',
    'April'
]

var chart =Highcharts.chart('Graph', {
    xAxis: {
      type: 'category'
    },
    title: {
        text: 'Sales by Month for:'
    },
    xAxis: {
        categories: [
            'January',
            'February',
            'March',
            'April'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Ventas'
        }
    },
    series: [{
      type: 'column',
      name: 'Ventas',
      data: [
        ['January', 35],
        ['February', 45],
        ['March', 29],
        ['April', 29]
      ],
      keys: ['name', 'y']
    }],
  });

function updateProduct(){
    var categoria = document.getElementById("Categoria").value;
    var updater = "";
    if (categoria == "Roupas"){
        for (var item of roupas) {
            updater += "<option>" + item + "</option>"
          }
    }
    else if (categoria == "Joias"){
        for (var item of joias) {
            updater += "<option>" + item + "</option>"
          }
    }
    else if (categoria == "Cosméticos"){
        for (var item of cosméticos) {
            updater += "<option>" + item + "</option>"
          }
    }
    document.getElementById("Produto").innerHTML = updater;
}

function updateBrand(data){
    var produto = document.getElementById("Produto").value;
    var updater = "";
    if (produto == "Camisas"){
        for (var item of camisas) {
            updater += "<option>" + item + "</option>"
          }
    }
    else if (produto == "Calças"){
        for (var item of calças) {
            updater += "<option>" + item + "</option>"
          }
    }
    else if (produto == "Brincos"){
        for (var item of brincos) {
            updater += "<option>" + item + "</option>"
          }
    }
    else if (produto == "Cordões"){
        for (var item of cordões) {
            updater += "<option>" + item + "</option>"
          }
    }
    else if (produto == "Perfume"){
        for (var item of perfumes) {
            updater += "<option>" + item + "</option>"
          }
    }

    document.getElementById("Marca").innerHTML = updater;
}

function updateGraph(calendar, data){
    // The data comes from the number of sales for a specific brand
    var brand = document.getElementById("Marca").value;

    var updater = [] 
    for (var i = 0 ; i<calendar.length ;i++){
        updater[i]=[calendar[i],data[brand][i]]
    }
    console.log(updater)
    //update values in chart
    for (var sales in data[brand]){
        chart.series[0].setData(updater);
    }

    // Redraw chart
    chart.redraw();
}


// Event listeners for selection change
document.getElementById("Categoria").addEventListener("input",function(){updateProduct();updateBrand();updateGraph(calendar,data)});
document.getElementById("Produto").addEventListener("input",function(){updateBrand();updateGraph(calendar,data)});
document.getElementById("Marca").addEventListener("input",function(){updateGraph(calendar,data)});