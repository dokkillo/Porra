	var jsonResult = '{   "status": "success",   "employees" : [      { "id": 12, "name": "Tom", "department": "finance" },      { "id": 34, "name": "Dick", "department": "admin" },      { "id": 56, "name": "Harry", "department": "marketing" }   ]}';
	var result = JSON.parse(jsonResult);
	var employees = {};

	for (var i = 0, emp; i < result.employees.length; i++)
	{
		emp = result.employees[i];
		employees[ emp.id ] = emp;
	}
  
	$("#PortugalGoals").change(function() {
	
	var studentTypes = new Array();
	studentTypes["NAME"] = "TEXT";
	studentTypes["MARKS"] = "NUMBER";
	studentTypes["DOB"] = "DATE";
	alert("Type of MARKS is :" + studentTypes["MARKS"] );
	
	});
	$("#GalesGoals").change(function() {
	
	});
	$("#AlemaniaGoals").change(function() {
	
	});
	$("#FranciaGoals").change(function() {
	
	});