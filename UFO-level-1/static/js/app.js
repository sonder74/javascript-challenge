// Create link to seed data
var tableData = data;

// Locate date input form
var inputForm = d3.select("#datetime");

// Locate table body
var tbody = d3.select("tbody");

// Create function to process form entries and filter data
function handleChange(event) {
    tbody.html("");
    var inputText = d3.event.target.value;
    function dateMatch(item) {
        return item.datetime === inputText;
    };
    var sameDates = tableData.filter(dateMatch);
    sameDates.forEach(function buildTable(dates) {
        console.log(dates);
        var row = tbody.append("tr");
        Object.entries(dates).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
   });
};

// Create event listener
inputForm.on("change", handleChange);

