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
var dateData = [];
var cityData = [];
var stateData = [];
var countryData = [];
var filteredData = [];

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

    // No nulls
    if (document.getElementById("datetime") !== "" && document.getElementById("city") !== "" && document.getElementById("state") !== "" && document.getElementById("country") !== "") {
        filteredData = filteredData.concat(dateData, cityData, stateData, countryData);
        var finalData = filteredData.filter(function(item) {
            return (item.datetime === document.getElementById("datetime").value && item.city === document.getElementById("city").value && item.state === document.getElementById("state").value && item.country === document.getElementById("country").value);
        });
    }else{
        // Null datetime
        if (document.getElementById("datetime") === "" && document.getElementById("city") !== "" && document.getElementById("state") !== "" && document.getElementById("country") !== "") {
            filteredData = filteredData.concat(cityData, stateData, countryData);
            var finalData = filteredData.filter(function(item) {
                return (item.city === document.getElementById("city").value && item.state === document.getElementById("state").value && item.country === document.getElementById("country").value);
            });
        }else{
            // Null city
            if (document.getElementById("datetime") !== "" && document.getElementById("city") === "" && document.getElementById("state") !== "" && document.getElementById("country") !== "") {
                filteredData = filteredData.concat(dateData, stateData, countryData);
                var finalData = filteredData.filter(function(item) {
                    return (item.datetime === document.getElementById("datetime").value && item.state === document.getElementById("state").value && item.country === document.getElementById("country").value);
                });
            }else{
                // Null state
                if (document.getElementById("datetime") !== "" && document.getElementById("city") !== "" && document.getElementById("state") === "" && document.getElementById("country") !== "") {
                    filteredData = filteredData.concat(dateData, cityData, countryData);
                    var finalData = filteredData.filter(function(item) {
                        return (item.datetime === document.getElementById("datetime").value && item.city === document.getElementById("city").value && item.country === document.getElementById("country").value);
                    });
                }else{
                    // Null country
                    if (document.getElementById("datetime") !== "" && document.getElementById("city") !== "" && document.getElementById("state") !== "" && document.getElementById("country") === "") {
                        filteredData = filteredData.concat(dateData, cityData, stateData, countryData);
                        var finalData = filteredData.filter(function(item) {
                            return (item.datetime === document.getElementById("datetime").value && item.city === document.getElementById("city").value && item.state === document.getElementById("state").value);
                        });
                    }else{
                        // Null datetime and city
                        if (document.getElementById("datetime") === "" && document.getElementById("city") === "" && document.getElementById("state") !== "" && document.getElementById("country") !== "") {
                            filteredData = filteredData.concat(stateData, countryData);
                            var finalData = filteredData.filter(function(item) {
                                return (item.state === document.getElementById("state").value && item.country === document.getElementById("country").value);
                            });
                        }else{
                            // Null datetime, city, and state
                            if (document.getElementById("datetime") === "" && document.getElementById("city") === "" && document.getElementById("state") === "" && document.getElementById("country") !== "") {
                                filteredData = filteredData.concat(countryData);
                                var finalData = filteredData.filter(function(item) {
                                    return (item.country === document.getElementById("country").value);
                                });
                            }else{
                                // Null city, state, and country
                                if (document.getElementById("datetime") !== "" && document.getElementById("city") === "" && document.getElementById("state") === "" && document.getElementById("country") === "") {
                                    filteredData = filteredData.concat(dateData);
                                    var finalData = filteredData.filter(function(item) {
                                        return (item.datetime === document.getElementById("datetime").value);
                                    });
                                }else{
                                    // Null state and country
                                    if (document.getElementById("datetime") !== "" && document.getElementById("city") !== "" && document.getElementById("state") === "" && document.getElementById("country") === "") {
                                        filteredData = filteredData.concat(dateData, cityData);
                                        var finalData = filteredData.filter(function(item) {
                                            return (item.datetime === document.getElementById("datetime").value && item.city === document.getElementById("city").value);
                                        });
                                    }else{
                                        // Null city and country
                                        if (document.getElementById("datetime") !== "" && document.getElementById("city") === "" && document.getElementById("state") !== "" && document.getElementById("country") === "") {
                                            filteredData = filteredData.concat(dateData, stateData);
                                            var finalData = filteredData.filter(function(item) {
                                                return (item.datetime === document.getElementById("datetime").value && item.state === document.getElementById("state").value);
                                            });
                                        }else{
                                            // Null datetime and state
                                            if (document.getElementById("datetime") === "" && document.getElementById("city") !== "" && document.getElementById("state") === "" && document.getElementById("country") !== "") {
                                                filteredData = filteredData.concat(cityData, countryData);
                                                var finalData = filteredData.filter(function(item) {
                                                    return (item.city === document.getElementById("city").value && item.country === document.getElementById("country").value);
                                                });
                                            }else{
                                                // Null datetime and country
                                                if (document.getElementById("datetime") === "" && document.getElementById("city") !== "" && document.getElementById("state") !== "" && document.getElementById("country") === "") {
                                                    filteredData = filteredData.concat(cityData, stateData);
                                                    var finalData = filteredData.filter(function(item) {
                                                        return (item.city === document.getElementById("city").value && item.state === document.getElementById("state").value);
                                                    });
                                                }else{
                                                    // Null city and state
                                                    if (document.getElementById("datetime") !== "" && document.getElementById("city") === "" && document.getElementById("state") === "" && document.getElementById("country") !== "") {
                                                        filteredData = filteredData.concat(dateData, countryData);
                                                        var finalData = filteredData.filter(function(item) {
                                                            return (item.datetime === document.getElementById("datetime").value && item.country === document.getElementById("country").value);
                                                        });
                                                    }else{
                                                        // Null datetime, state, and country
                                                        if (document.getElementById("datetime") === "" && document.getElementById("city") !== "" && document.getElementById("state") === "" && document.getElementById("country") === "") {
                                                            filteredData = filteredData.concat(cityData);
                                                            var finalData = filteredData.filter(function(item) {
                                                                return (item.city === document.getElementById("city").value);
                                                            });
                                                        }else{
                                                            // Null datetime, city, and country
                                                            if (document.getElementById("datetime") === "" && document.getElementById("city") === "" && document.getElementById("state") !== "" && document.getElementById("country") === "") {
                                                                filteredData = filteredData.concat(stateData);
                                                                var finalData = filteredData.filter(function(item) {
                                                                    return (item.state === document.getElementById("state").value);
                                                                });
                                                            };

    // Build table
    finalData.forEach(function buildTable(data) {
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
    // filteredData = [];
    // finalData = [];
};

// Create event listeners
dateForm.on("change", filterDates);
cityForm.on("change", filterCities);
stateForm.on("change", filterStates);
countryForm.on("change", filterCountries);
filterButton.on("click", buttonClick);