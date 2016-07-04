	var jsonResult = '{"status": "success", "employees" : [{ "id": 1, "name": "Gabi", "department": "finance" , "PortugalGoals": "2" , "GalesGoals": "1", "AlemaniaGoals": "1", "FranciaGoals": "1"   }, { "id": 2, "name": "Luis", "department": "admin" , "PortugalGoals": "0" , "GalesGoals": "1", "AlemaniaGoals": "5", "FranciaGoals": "1"  }, 	 { "id": 3, "name": "Carlos", "department": "marketing", "PortugalGoals": "2" , "GalesGoals": "4", "AlemaniaGoals": "1", "FranciaGoals": "3" } ]}';
	
	var result = JSON.parse(jsonResult);
	var employees = {};

	for (var i = 0, emp; i < result.employees.length; i++)
	{
		emp = result.employees[i];
		employees[emp.id] = emp;
	}
  
	$("#PortugalGoals").change(function() 
	{	
		CalculateValues();	
	});
	$("#GalesGoals").change(function() 
	{
		CalculateValues();
	});
	$("#AlemaniaGoals").change(function() {
		CalculateValues();
	});
	$("#FranciaGoals").change(function() {
		CalculateValues();
	});
	
	function CalculateValues()
	{
		CleanValues();
		$( "#puntuaciones").html('');
		for (var i = 0, emp; i < result.employees.length; i++)
		{			
			var portugalGoal = $("#PortugalGoals").val();
			var galesGoal = $("#GalesGoals").val();
			var alemaniaGoal = $("#AlemaniaGoals").val();
			var franciaGoal = $("#FranciaGoals").val();
			emp = result.employees[i];
			if(emp.PortugalGoals == portugalGoal && emp.GalesGoals == galesGoal )
			{
				emp.points = emp.points + 2;
			}
			if(emp.AlemaniaGoals == alemaniaGoal && emp.FranciaGoals == franciaGoal )
			{
				emp.points = emp.points + 2;
			}
		}	
		PrintValues();
	}
	
	function CleanValues()
	{
		result.employees.sort(SortByPoints);
		$( "#puntuaciones").html('');
		for (var i = 0, emp; i < result.employees.length; i++)
		{			
			emp = result.employees[i];
			emp.points = 0;			
		}		
	}
	
	function PrintValues()
	{
		result.employees.sort(SortByPoints);
		for (var i = 0, emp; i < result.employees.length; i++)
		{			
			emp = result.employees[i];			
			alert(emp.name);
			$( "#puntuaciones" ).prepend( $( "<div> "+ emp.name + " - " + emp.points  +" </div>" ) );		
		}
	}
	
	 function SortByPoints(x,y) {
	  return parseFloat(x.points) + parseFloat(y.points);
    }