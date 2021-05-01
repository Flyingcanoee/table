function createArray() {
    let arr = [];
    for (i = 0; i < 1000; i++) {
        arr.push({
            Index: Math.floor(Math.random() * 1000),
            Name: "Product-" + i,
            Price: Math.floor(Math.random() * 3000),
            Age: Math.floor(Math.random() * 5),
            Model: "./img/img.png",
            Doc: Math.floor(Math.random() * 100),
            Sale: Math.floor(Math.random() * 30),
            isHeavy: true,
            Guarantee: false,
            Fragile: false,

            Width: Math.floor(Math.random() * 1000),
            Height: Math.floor(Math.random() * 1000),
            Diameter: Math.floor(Math.random() * 1000),
            Weight: Math.floor(Math.random() * 1000),
            Quantity: Math.floor(Math.random() * 1000),
            Volume: Math.floor(Math.random() * 1000),
            Radius: Math.floor(Math.random() * 1000),
            Capacity: Math.floor(Math.random() * 1000),
            Size: Math.floor(Math.random() * 1000),
            Bulk: Math.floor(Math.random() * 1000),

            Space: Math.floor(Math.random() * 1000),
            Dimension: Math.floor(Math.random() * 1000),
            Amplitude: Math.floor(Math.random() * 1000),
            Power: Math.floor(Math.random() * 1000),
            Output: Math.floor(Math.random() * 1000),
            Energy: Math.floor(Math.random() * 1000),
            Intensity: Math.floor(Math.random() * 1000),
            Vim: Math.floor(Math.random() * 1000),
            Vitality: Math.floor(Math.random() * 1000),
            Rest: Math.floor(Math.random() * 1000),

            Service: Math.floor(Math.random() * 1000),
            Mode: Math.floor(Math.random() * 1000),
            Durability: Math.floor(Math.random() * 1000),
            Attend: Math.floor(Math.random() * 1000),
            Fuel: Math.floor(Math.random() * 1000),
            Accomodation: Math.floor(Math.random() * 1000),
            Operation: Math.floor(Math.random() * 1000),
            Connection: Math.floor(Math.random() * 1000),
            Condition: Math.floor(Math.random() * 1000),
            Position: Math.floor(Math.random() * 1000),

        });
    }
    return arr;
}

let array = createArray();


//initialize table
var table = new Tabulator("#example-table", {
    height: "90%",
    columnMinWidth: 100,
    data: array, //assign data to table
    layout: "fitColumns",
    movableColumns: true,
    columns: [
        {title: 'Index', field: 'Index', frozen:true, topCalc:"avg", formatter:"rownum", align: 'center', cssClass: 'frozen-column'},
        {title: 'Name', field: 'Name', frozen:true, topCalc:"count", align: 'center', cssClass: 'frozen-column'},
        {title: 'Price, rub', field: 'Price', frozen:true,  topCalc:"sum", formatter: "money", align: 'center', cssClass: 'frozen-column'},
        {title: 'Age', field: 'Age', topCalc:"avg", align: 'center'},
        {title: 'Model', field: 'Model', formatter:"image", formatterParams: {height:"100%"}, topCalc:"avg", align: 'center'},
        {title: 'Doc', field: 'Doc',  topCalc:"avg", align: 'center'},
        {title: 'Sale', field: 'Sale', topCalc:"count", align: 'center'},
        {title: 'isHeavy', field: 'isHeavy', topCalc:"count", formatter:"tickCross", align: 'center'},
        {title: 'Guarantee', field: 'Guarantee', topCalc:"count", formatter:'tickCross', align: 'center'},
        {title: 'Fragile', field: 'Fragile', topCalc:"count", formatter:'tickCross', align: 'center'},

        {title: 'Width', field: 'Width', topCalc:"avg", align: 'center'},
        {title: 'Height', field: 'Height', topCalc:"avg", align: 'center'},
        {title: 'Diameter', field: 'Diameter', topCalc:"avg", align: 'center'},
        {title: 'Weight', field: 'Weight', topCalc:"avg", align: 'center'},
        {title: 'Quantity', field: 'Quantity', topCalc:"avg", align: 'center'},
        {title: 'Volume', field: 'Volume', topCalc:"avg", align: 'center'},
        {title: 'Radius', field: 'Radius', topCalc:"avg", align: 'center'},
        {title: 'Capacity', field: 'Capacity', topCalc:"avg", align: 'center'},
        {title: 'Size', field: 'Size', topCalc:"avg", align: 'center'},
        {title: 'Bulk', field: 'Bulk', topCalc:"avg", align: 'center'},

        {title: 'Space', field: 'Space', topCalc:"avg", align: 'center'},
        {title: 'Dimension', field: 'Dimension', topCalc:"avg", align: 'center'},
        {title: 'Amplitude', field: 'Amplitude', topCalc:"avg", align: 'center'},
        {title: 'Power', field: 'Power', topCalc:"avg", align: 'center'},
        {title: 'Output', field: 'Output', topCalc:"avg", align: 'center'},
        {title: 'Energy', field: 'Energy', topCalc:"avg", align: 'center'},
        {title: 'Intensity', field: 'Intensity', topCalc:"avg", align: 'center'},
        {title: 'Vim', field: 'Vim', topCalc:"avg", align: 'center'},
        {title: 'Vitality', field: 'Vitality', topCalc:"avg", align: 'center'},
        {title: 'Rest', field: 'Rest', topCalc:"avg", align: 'center'},
         
        {title: 'Service', field: 'Service', topCalc:"avg", align: 'center'},
        {title: 'Mode', field: 'Mode', topCalc:"avg", align: 'center'},
        {title: 'Durability', field: 'Durability', topCalc:"avg", align: 'center'},
        {title: 'Attend', field: 'Attend', topCalc:"avg", align: 'center'},
        {title: 'Fuel', field: 'Fuel', topCalc:"avg", align: 'center'},
        {title: 'Accomodation', field: 'Accomodation', topCalc:"avg", align: 'center'},
        {title: 'Operation', field: 'Operation', topCalc:"avg", align: 'center'},
        {title: 'Connection', field: 'Connection', topCalc:"avg", align: 'center'},
        {title: 'Condition', field: 'Condition', topCalc:"avg", align: 'center'},
        {title: 'Position', field: 'Position', topCalc:"avg", align: 'center'},
    ]
    // rowFormatter: function (row) {
    //     indexCount = indexCount + 1;
    //     row.update({"Index": indexCount});
    // }
});

//Define variables for input elements
var fieldEl = document.getElementById("filter-field");
var typeEl = document.getElementById("filter-type");
var valueEl = document.getElementById("filter-value");

//Custom filter example
function customFilter(array) {
    return array.car && array.rating < 3;
}

//Trigger setFilter function with correct parameters
function updateFilter() {
    var filterVal = fieldEl.options[fieldEl.selectedIndex].value;
    var typeVal = typeEl.options[typeEl.selectedIndex].value;

    var filter = filterVal == "function" ? customFilter : filterVal;

    if (filterVal == "function") {
        typeEl.disabled = true;
        valueEl.disabled = true;
    } else {
        typeEl.disabled = false;
        valueEl.disabled = false;
    }

    if (filterVal) {
        console.log(filter, typeVal, valueEl.value)
        table.setFilter(filter, typeVal, valueEl.value);
    }
}

//Update filters on value change
document.getElementById("filter-field").addEventListener("change", updateFilter);
document.getElementById("filter-type").addEventListener("change", updateFilter);
document.getElementById("filter-value").addEventListener("keyup", updateFilter);

//Clear filters on "Clear Filters" button click
document.getElementById("filter-clear").addEventListener("click", function () {
    fieldEl.value = "";
    typeEl.value = "=";
    valueEl.value = "";

    table.clearFilter("Index", ">", 100);
});



var hideAge = document.querySelector('.hide-age');
hideAge.onclick = function () {
    table.hideColumn('Age');
    hideAge.classList.add('invisible');
    showAge.classList.remove('invisible');
}
var showAge = document.querySelector('.show-age');
showAge.onclick = function () {
    table.showColumn('Age');
    showAge.classList.add('invisible');
    hideAge.classList.remove('invisible');
}

