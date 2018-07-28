$(function () {

    var qual_count = emp_qual_count();
    var deptCAndS = dept_tsalary();
    console.log(deptCAndS);
    var deptC_Qual = dept_qual_count_info();
   var qual_count = qual_count_function();
    initiallise();
    showDeptCAndS();
    showDeptQuali();

    function showDeptCAndS() {
        var headings = ["Department", "Count", "Salary"];
        var data = "";
        data += "<table class='table table-hover table-striped table-light'>";
<<<<<<< HEAD
        data += "<thead><tr>";
=======
        data += "<thead class=table-warning><tr>";
>>>>>>> bec2107879c681a742192e2e502bbfb9a2631f17
        for (var i = 0; i < headings.length; i++) {
            data += "<th class='table-primary'>" + headings[i] + "</th>"
        }
        data += "</tr></thead>";
        for (var i = 0; i < deptCAndS.length; i++) {
            data += "<tr>";
            data += "<td>" + deptCAndS[i].dname + "</td>";
            data += "<td>" + deptCAndS[i].count + "</td>";
            data += "<td>" + deptCAndS[i].tsal + "</td>";
            data += "</tr>";
        }
        data += "</table>";
        $("#deptsctable").html(data);
    }

    function showDeptQuali() {
        var headings = ["Department", "Qualification", "Count"];
        var data = "";
        data += "<table class='table table-hover table-striped table-light'>";
<<<<<<< HEAD
        data += "<thead class='table-primary'><tr>";
=======
        data += "<thead class=table-warning><tr>";
>>>>>>> bec2107879c681a742192e2e502bbfb9a2631f17
        for (var i = 0; i < headings.length; i++) {
            data += "<th>" + headings[i] + "</th>"
        }
        data += "</tr></thead>";
        for (var i = 0; i < deptC_Qual.length; i++) {
            data += "<tr>";
            data += "<td>" + deptC_Qual[i].dname + "</td>";
            data += "<td>" + deptC_Qual[i].qual + "</td>";
            data += "<td>" + deptC_Qual[i].count + "</td>";
            data += "</tr>";
        }
        data += "</table>";
        $("#deptqtable").html(data);
    }
<<<<<<< HEAD

    initialize();

    function initialize() {
        // Load the Visualization API and the corechart package.
        google.charts.load('current', {
            'packages': ['corechart']
        });

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawColumnChart);
        google.charts.setOnLoadCallback(drawPieChart);
    }

    function drawPieChart() {


        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Qualification');
        data.addColumn('number', 'Total');
        rows = [];
        for (var i = 0; i < qual_count.length; i++) {

            var ele = qual_count[i];
            rows.push([ele.qual, ele.count])

        }
        data.addRows(rows);
        // Set chart options
        var options = {
            'title': 'Qualification and Count Details',
            'width': 400,
            'height': 300,
            'is3D': true
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('deptempcountchart'));
        chart.draw(data, options);

    }

    function drawColumnChart() {
       
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Department');
        data.addColumn('number', 'Salary');
        rows = [];
        for (var i = 0; i < deptCAndS.length; i++) {

            var ele = deptCAndS[i];
            rows.push([ele.dname, parseInt(ele.tsal)])

        }
        data.addRows(rows);
        // Set chart options
        var options = {
            'title': 'Salary',
            'width': 400,
            'height': 300,
            'is3D': true
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('deptsalarychart'));
        chart.draw(data, options);
    }

      
=======
    
    function initiallise(){
        // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawColumnChart);
        google.charts.setOnLoadCallback(drawPieChart);
    }
    
    function drawPieChart(){
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Qulification');
        data.addColumn('number', 'Total');
        rows =[];
        for(var i=0 ; i<qual_count.length ; i++){
            var ele = qual_count[i];
            rows.push([ele.qual,ele.count]);
        }
        data.addRows(rows);

        // Set chart options
        var options = {'title':'Qualification and Count Details',
                       'width':400,
                       'height':300,
                      'is3D': true,};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('deptqchart'));
        chart.draw(data, options);
        
        
    }
    
    function drawColumnChart(){
         // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Department');
        data.addColumn('number', 'Salary');
        rows =[];
        for(var i=0 ; i<deptCAndS.length ; i++){
            var ele = deptCAndS[i];
            rows.push([ele.dname,parseInt(ele.tsal)]);
        }
        data.addRows(rows);

        // Set chart options
        var options = {'title':'Department-Salary & Count',
                       'width':400,
                       'height':300,
                      'is3D': true,};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('deptscchart'));
        chart.draw(data, options);
    }
>>>>>>> bec2107879c681a742192e2e502bbfb9a2631f17
});
