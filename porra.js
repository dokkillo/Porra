	var jsonResult = '{"status": "success", "employees" : [{"id":1,"name":"Miguel","department":"RET","PortugalGoals":1,"GalesGoals":1,"team1":"portugal","AlemaniaGoals":1,"FranciaGoals":2,"team2":"francia","team1Goals":0,"Team2Goals":2,"teamWin":"francia"}, \
	{"id":2,"name":"Beltran","department":"HCG","PortugalGoals":1,"GalesGoals":2,"team1":"gales","AlemaniaGoals":1,"FranciaGoals":1,"team2":"alemania","team1Goals":0,"Team2Goals":2,"teamWin":"alemania"} \
	,{"id":3,"name":"Vicente","department":"IT","PortugalGoals":1,"GalesGoals":3,"team1":"gales","AlemaniaGoals":1,"FranciaGoals":2,"team2":"francia","team1Goals":1,"Team2Goals":2,"teamWin":"francia"}, \
	{"id":4,"name":"Carlos","department":"IT","PortugalGoals":2,"GalesGoals":2,"team1":"portugal","AlemaniaGoals":2,"FranciaGoals":0,"team2":"alemania","team1Goals":0,"Team2Goals":2,"teamWin":"alemania"} \
	,{"id":5,"name":"Santiago","department":"HCG","PortugalGoals":1,"GalesGoals":0,"team1":"portugal","AlemaniaGoals":1,"FranciaGoals":2,"team2":"francia","team1Goals":0,"Team2Goals":3,"teamWin":"francia"} \
	,{"id":6,"name":"Antonio F","department":"IT","PortugalGoals":1,"GalesGoals":1,"team1":"gales","AlemaniaGoals":1,"FranciaGoals":2,"team2":"francia","team1Goals":1,"Team2Goals":0,"teamWin":"gales"}, \
{"id":7,"name":"Oriol","department":"INV","PortugalGoals":1,"GalesGoals":0,"team1":"portugal","AlemaniaGoals":2,"FranciaGoals":1,"team2":"alemania","team1Goals":0,"Team2Goals":1,"teamWin":"alemania"}, \
{"id":8,"name":"Teri","department":"IT","PortugalGoals":0,"GalesGoals":0,"team1":"gales","AlemaniaGoals":1,"FranciaGoals":0,"team2":"alemania","team1Goals":1,"Team2Goals":3,"teamWin":"alemania"}, \
{"id":9,"name":"Pilar","department":"OPA","PortugalGoals":1,"GalesGoals":0,"team1":"portugal","AlemaniaGoals":1,"FranciaGoals":0,"team2":"alemania","team1Goals":1,"Team2Goals":1,"teamWin":"portugal"}, \
{"id":10,"name":"Michel","department":"RET","PortugalGoals":0,"GalesGoals":0,"team1":"gales","AlemaniaGoals":0,"FranciaGoals":1,"team2":"francia","team1Goals":0,"Team2Goals":3,"teamWin":"francia"}, \
{"id":11,"name":"Juan","department":"RET","PortugalGoals":1,"GalesGoals":0,"team1":"portugal","AlemaniaGoals":2,"FranciaGoals":1,"team2":"alemania","team1Goals":0,"Team2Goals":2,"teamWin":"alemania"}, \
{"id":12,"name":"Sara","department":"IT","PortugalGoals":2,"GalesGoals":1,"team1":"portugal","AlemaniaGoals":1,"FranciaGoals":1,"team2":"francia","team1Goals":1,"Team2Goals":3,"teamWin":"francia"}, \
{"id":13,"name":"Julia","department":"RET","PortugalGoals":0,"GalesGoals":1,"team1":"gales","AlemaniaGoals":1,"FranciaGoals":1,"team2":"alemania","team1Goals":0,"Team2Goals":1,"teamWin":"alemania"}, \
{"id":14,"name":"Antonio M.","department":"RET","PortugalGoals":1,"GalesGoals":0,"team1":"portugal","AlemaniaGoals":1,"FranciaGoals":0,"team2":"alemania","team1Goals":0,"Team2Goals":0,"teamWin":"alemania"}, \
{"id":15,"name":"Alejandro","department":"INV","PortugalGoals":0,"GalesGoals":0,"team1":"portugal","AlemaniaGoals":1,"FranciaGoals":0,"team2":"alemania","team1Goals":0,"Team2Goals":0,"teamWin":"alemania"}, \
{"id":16,"name":"Jose Luis M.","department":"RET","PortugalGoals":0,"GalesGoals":2,"team1":"gales","AlemaniaGoals":1,"FranciaGoals":2,"team2":"francia","team1Goals":1,"Team2Goals":3,"teamWin":"francia"}, \
{"id":17,"name":"Gabi","department":"IT","PortugalGoals":0,"GalesGoals":3,"team1":"gales","AlemaniaGoals":0,"FranciaGoals":0,"team2":"alemania","team1Goals":1,"Team2Goals":1,"teamWin":"alemania"}, \
{"id":18,"name":"Marcos B.","department":"RET","PortugalGoals":1,"GalesGoals":0,"team1":"portugal","AlemaniaGoals":1,"FranciaGoals":0,"team2":"alemania","team1Goals":1,"Team2Goals":0,"teamWin":"portugal"}, \
{"id":19,"name":"Issac","department":"RET","PortugalGoals":2,"GalesGoals":2,"team1":"gales","AlemaniaGoals":2,"FranciaGoals":1,"team2":"alemania","team1Goals":0,"Team2Goals":2,"teamWin":"alemania"}, \
{"id":20,"name":"Natalia","department":"TAL","PortugalGoals":1,"GalesGoals":1,"team1":"portugal","AlemaniaGoals":1,"FranciaGoals":2,"team2":"francia","team1Goals":1,"Team2Goals":1,"teamWin":"francia"}, \
{"id":21,"name":"Juan Luis","department":"RET","PortugalGoals":1,"GalesGoals":0,"team1":"portugal","AlemaniaGoals":1,"FranciaGoals":2,"team2":"francia","team1Goals":1,"Team2Goals":0,"teamWin":"portugal"}, \
{"id":22,"name":"Alba","department":"RET","PortugalGoals":2,"GalesGoals":2,"team1":"portugal","AlemaniaGoals":1,"FranciaGoals":1,"team2":"alemania","team1Goals":1,"Team2Goals":3,"teamWin":"alemania"}, \
{"id":23,"name":"Gonzalo","department":"TAL","PortugalGoals":1,"GalesGoals":0,"team1":"gales","AlemaniaGoals":3,"FranciaGoals":1,"team2":"alemania","team1Goals":2,"Team2Goals":1,"teamWin":"gales"}, \
{"id":24,"name":"Gloria","department":"RET","PortugalGoals":2,"GalesGoals":1,"team1":"portugal","AlemaniaGoals":1,"FranciaGoals":0,"team2":"alemania","team1Goals":0,"Team2Goals":2,"teamWin":"alemania"}, \
{"id":25,"name":"Novoa","department":"RTM","PortugalGoals":2,"GalesGoals":0,"team1":"portugal","AlemaniaGoals":1,"FranciaGoals":1,"team2":"francia","team1Goals":0,"Team2Goals":2,"teamWin":"francia"}, \
{"id":26,"name":"Andres F. V.","department":"INV","PortugalGoals":0,"GalesGoals":0,"team1":"gales","AlemaniaGoals":1,"FranciaGoals":1,"team2":"alemania","team1Goals":1,"Team2Goals":2,"teamWin":"alemania"}, \
{"id":27,"name":"Carmen","department":"RET","PortugalGoals":1,"GalesGoals":2,"team1":"gales","AlemaniaGoals":2,"FranciaGoals":2,"team2":"francia","team1Goals":2,"Team2Goals":2,"teamWin":"francia"}, \
{"id":28,"name":"Maite","department":"RET","PortugalGoals":1,"GalesGoals":1,"team1":"portugal","AlemaniaGoals":1,"FranciaGoals":0,"team2":"alemania","team1Goals":0,"Team2Goals":2,"teamWin":"alemania"}, \
{"id":29,"name":"Laura","department":"RET","PortugalGoals":1,"GalesGoals":2,"team1":"gales","AlemaniaGoals":2,"FranciaGoals":2,"team2":"alemania","team1Goals":1,"Team2Goals":3,"teamWin":"alemania"}]}';
	
	var result = JSON.parse(jsonResult);
	var employees = {};
	
	$( document ).ready(function() {
		
		CalculateValues();
	});

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
	
	$(".usuarios").hover(function() {
		alert(this.id);
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
		Winner();
		
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
			$( "#puntuaciones" ).last().prepend( $( "<div> "+ emp.name + " - " + emp.points  +" </div>" ).addClass("usuarios").addClass(emp.department).attr('id', emp.id));		
		}
	}
	
	function Winner()
	{
		$( ".usuarios" ).first().addClass("Winner");
	}
	
	 function SortByPoints(x,y) {
	  return parseFloat(x.points) - parseFloat(y.points);
    }
