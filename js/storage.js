if (localStorage.getItem("employees") == null) {
    localStorage.setItem("employees", JSON.stringify([]));
}

function addEmployee(employee) {
    var employees = getEmployeesFromLocalStorage();
    employees.push(employee);
    updateLocalStorageData(employees);
    return getEmployeesFromLocalStorage();
}

function getEmployee(empno) {
    var employees = getAllEmployees();
    var index = getIndexOfEmployee(employees, empno);
    return employees[index];
}

function updateEmployeeDetails(employee) {
    var employees = getAllEmployees();
    var index = getIndexOfEmployee(employees, employee.empno);
    employees.splice(index, 1, employee);
    updateLocalStorageData(employees);
    return getAllEmployees();

}

function getAllEmployees() {
    return getEmployeesFromLocalStorage();
}

function deleteEmployee(empno) {
    var employees = getEmployeesFromLocalStorage();
    var index = getIndexOfEmployee(employees, empno);
    employees.splice(index, 1);
    updateLocalStorageData(employees);
    return getAllEmployees();
}

function getIndexOfEmployee(employees, empno) {

    for (var i = 0; i < employees.length; i++) {
        var emp = employees[i];
        if (emp.empno == empno)
            return i;
    }
    return -1;
}

function searchEmployees(searchData, dname) {

    if (dname == "" && searchData == "") {
        return getAllEmployees();
    } else if (dname != "" && searchData == "") {
        return searchEmployeesByDname(dname);
    } else if (dname == "" && searchData != "") {
        return searchEmployees(searchData);
    } else if (dname != "" && searchData != "") {
        return searchEmployeeByDnameAndData(dname, searchData);
    }
}

function searchEmployeesByDname(dname) {
    var employees = getAllEmployees();
    var searchArr = [];
    employees.forEach(employee => {
        if (employee.dname === dname) {
            searchArr.push(dname);
        }
    });
    return searchArr;
}

function searchEmployees(searchData) {
    var employees = getAllEmployees();
    var searchArr = [];
    employees.forEach(employee => {
        if (employee.dname.indexOf(searchData) == -1) {
            searchArr.push(dname);
        }
    });
    return searchArr;
}

function searchEmployeeByDnameAndData(dname, searchData) {
    var employees = getAllEmployees();
    var searchArr = [];
    employees.forEach(employee => {
        if (employee.dname === dname && employee.dname.indexOf(searchData) == -1) {
            searchArr.push(dname);
        }
    });
    return searchArr;
}

function getEmployeeCountData() {

}

function getEmployeeCountChartData() {

}


function getEmployeesFromLocalStorage() {
    return JSON.parse(localStorage.getItem("employees"));
}

function updateLocalStorageData(employees) {
    localStorage.setItem("employees", JSON.stringify(employees));
}


function dept_tsalary() {
    var employees = getEmployeesFromLocalStorage();
    var dept_t_sal = {};

    employees.forEach(emp =>{
        var t_s_c = dept_t_sal[emp.dept];
        if (t_s_c) {
            dept_t_sal[emp.dept] = {
                "dname": emp.dept,
                "count": t_s_c.count + 1,
                "tsal": parseInt(t_s_c.tsal) + parseInt(emp.salary),
            };
        } else {
            dept_t_sal[emp.dept] = {
                "dname": emp.dept,
                "count": 1,
                "tsal": emp.salary
            };
        }
    })
    var d_c_s = [];
    for (key in dept_t_sal) {
        var val = dept_t_sal[key];
        d_c_s.push(val);
    }
    return d_c_s;
}
function dept_qual_count_info(){
    var employees = getEmployeesFromLocalStorage();
    var dept_emp ={};
    employees.forEach(emp =>{
        dept= dept_emp[emp.dept];
        dept_emp[emp.dept] = dept? dept.add(emp):new Set().add(emp);
    })
    
    emp_qual_count = [];
    
    for(key in dept_emp){
        dept_set= dept_emp[key];
        
        dept_qual_count={};
        
        for(var dept of dept_set){
            count = dept_qual_count[dept.qualification];
            dept_qual_count[dept.qualification] = count? count+1:1;
        }
        
        for(k in dept_qual_count){
            var count = dept_qual_count[k];
            emp_qual_count.push({"dname":key,"qual":k,"count":count});
        }
    }
    console.log(emp_qual_count);
   return emp_qual_count;
}

<<<<<<< HEAD
=======

function qual_count_function(){
    var employees = getEmployeesFromLocalStorage();
    var qual_count ={};
    
     employees.forEach(emp =>{
         var count = qual_count[emp.qualification];
         qual_count[emp.qualification] = count? count+1:1;
     })
    var qual_count_info=[];
    for(key in qual_count){
        var val= qual_count[key];
        qual_count_info.push({"qual":key,"count":val});
    }
    return qual_count_info;
}

>>>>>>> bec2107879c681a742192e2e502bbfb9a2631f17
//Search operation

function searchAndGetEmployee(searchStr, dName) {
      if (searchStr == "" && dName == "") {
          return getDataFromLocalStorage();
      } else if (dName == "") {
          return getEmployeeName(searchStr);
      } else if (searchStr == "") {
          return getEmployeeDept(dName);
      } else {
          return getEmployeeNameDept(searchStr, dName);
      }
  }
//      Search by name
  function getEmployeeName(searchStr) {
      var employees = getEmployeesFromLocalStorage();
      var a = [];
      for (var i = 0; i < employees.length; i++) {
          if (employees[i].name.indexOf(searchStr) != -1)
              a.push(employees[i]);
      }
      return a;
  }
//        Search by department
  function getEmployeeDept(dName) {
      var employees = getEmployeesFromLocalStorage();
      var a = [];
      for (var i = 0; i < employees.length; i++) {
          if (employees[i].dept === dName)
              a.push(employees[i]);
      }
      return a;
  }
//          Search by name and department
  function getEmployeeNameDept(searchStr, dName) {
      var employees = getEmployeesFromLocalStorage();
      var a = [];
      for (var i = 0; i < employees.length; i++) {
          if ((employees[i].name.indexOf(searchStr) != -1) && employees[i].dept === dName)
              a.push(employees[i]);
      }
      return a;
  }
<<<<<<< HEAD
//End of Search operation

function emp_qual_count(){
    var employees = getEmployeesFromLocalStorage();
    var qual_count = [];
    
    employees.forEach(emp =>{
        var count = qual_count[emp.qualification];
        qual_count[emp.qualification] = count? count+1:1;
        
    })
    var qual_count_info = [];
    for(key in qual_count){
        var val = qual_count[key];
        qual_count_info.push({"qual":key,"count":val});
    }
  
    return qual_count_info;
    
}
=======
//End of Search operation
>>>>>>> bec2107879c681a742192e2e502bbfb9a2631f17
