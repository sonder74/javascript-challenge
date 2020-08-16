// Create link to seed data
var tableData = data;

// Locate input forms
var dateForm = d3.select("#datetime");
var cityForm = d3.select("#city");
var stateForm = d3.select("#state");
var countryForm = d3.select("#country");
var filterButton = d3.select("#filter-btn")

// Locate table body
var tbody = d3.select("tbody");

// Initialize arrays
dateData = [];
cityData = [];
stateData = [];
countryData = [];

// Create functions for handling form events
function filterDates() {
    for (i = 0; i < tableData.length; i++) {
        if (tableData[i].datetime === document.getElementById("datetime").value) {
            dateData.push(tableData[i]);
        };
    };
    console.log("Date data filtered:");
    console.log(dateData);
};
function filterCities(value) {
    for (i = 0; i < tableData.length; i++) {
        if (tableData[i].city === document.getElementById("city").value) {
            cityData.push(tableData[i]);
        };
    };
    console.log("City data filtered:");
    console.log(cityData);
};
function filterStates(value) {
    for (i = 0; i < tableData.length; i++) {
        if (tableData[i].state === document.getElementById("state").value) {
            stateData.push(tableData[i]);
        };
    };
    console.log("State data filtered:");
    console.log(stateData);
};
function filterCountries(value) {
    for (i = 0; i < tableData.length; i++) {
        if (tableData[i].country === document.getElementById("country").value) {
            countryData.push(tableData[i]);
        };
    };
    console.log("Country data filtered:");
    console.log(countryData);
};

// Create function for handling button event and building table
function buttonClick(event) {
    tbody.html("");
    filteredData = dateData.concat(cityData, stateData, countryData);
    filteredData.forEach(function buildTable(data) {
        console.log(data);
        var row = tbody.append("tr");
        Object.entries(data).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    dateData = [];
    cityData = [];
    stateData = [];
    countryData = [];
    filteredData = [];
};

// Create event listeners
dateForm.on("change", filterDates);
cityForm.on("change", filterCities);
stateForm.on("change", filterStates);
countryForm.on("change", filterCountries);
filterButton.on("click", buttonClick);







