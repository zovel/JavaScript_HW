var tableData = data;

// Input table into HTML

var tbody = d3.select("tbody");
//console.log(tbody);

tableData.forEach(function (ufoSighting) {
    //console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function ([key, value]) {
        //console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    })
});

//Filter by Date

var button = d3.select("#filter-btn");

button.on("click", function () {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    tbody.html("")

    var filteredData = tableData.filter(elem => elem.datetime === inputValue);
    console.log(filteredData);
    d3.event.preventDefault();
    filteredData.forEach(function (elem) {
        var row = tbody.append("tr");

        Object.entries(elem).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value)
        })
    });
});



