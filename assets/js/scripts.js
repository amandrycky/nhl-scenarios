var teams = 
{
	"ANA": 
	{
		"NAME": "Anaheim"
	},
	"ARI": 
	{
		"NAME": "Arizona",
		"SELECT": 1,
		"CURRENT": 50,
		"GAMES_LEFT": 10,
		"ROW": 16
	},
	"BOS":
	{
		"NAME": "Boston"
	},
	"BUF": 
	{
		"NAME": "Buffalo",
		"SELECT": 1,
		"CURRENT": 47,
		"GAMES_LEFT": 10,
		"ROW": 12
	},
	"CAR": 
	{
		"NAME": "Carolina"
	},
	"CGY": 
	{
		"NAME": "Calgary"
	},
	"CHI": 
	{
		"NAME": "Chicago"
	},
	"CBJ": 
	{
		"NAME": "Columbus"
	},
	"COL": 
	{
		"NAME": "Colorado"
	},
	"DAL": 
	{
		"NAME": "Dallas"
	},
	"DET": 
	{
		"NAME": "Detroit"
	},
	"EDM": 
	{
		"NAME": "Edmonton",
		"SELECT": 1,
		"CURRENT": 53,
		"GAMES_LEFT": 10,
		"ROW": 15
	},
	"FLA": 
	{
		"NAME": "Florida"
	},
	"L.A": 
	{
		"NAME": "Los Angeles"
	},
	"MIN": 
	{
		"NAME": "Minnesota"
	},
	"MTL": 
	{
		"NAME": "Montreal"
	},
	"N.J": 
	{
		"NAME": "New Jersey"
	},
	"NSH": 
	{
		"NAME": "Nashville"
	},
	"NYI": 
	{
		"NAME": "NY Islanders"
	},
	"NYR": 
	{
		"NAME": "NY Rangers"
	},
	"OTT": 
	{
		"NAME": "Ottawa"
	},
	"PHI": 
	{
		"NAME": "Philadelphia"
	},
	"PIT": 
	{
		"NAME": "Pittsburgh"
	},
	"S.J": 
	{
		"NAME": "San Jose"
	},
	"STL": 
	{
		"NAME": "St. Louis"
	},
	"T.B": 
	{
		"NAME": "Tampa"
	},
	"TOR": 
	{
		"NAME": "Toronto",
		"SELECT": 1,
		"CURRENT": 60,
		"GAMES_LEFT": 9,
		"ROW": 23
	},
	"VAN": 
	{
		"NAME": "Vancouver"
	},
	"WPG": 
	{
		"NAME": "Winnipeg"
	},
	"WSH": 
	{
		"NAME": "Washington"
	}
};

var gamesLeft = 
{
	"0":{
		"HOME": "ARI",
		"AWAY": "VAN",
		"NHL_ID" : "2014021082",
		"DATE": 1426982400000
	},
	"9":{
		"HOME": "BUF",
		"AWAY": "DAL",
		"DATE": 1427068800000
	},
	"17":{
		"HOME": "EDM",
		"AWAY": "WPG",
		"DATE": 1427068800000
	},
	"33":{
		"HOME": "TOR",
		"AWAY": "MIN",
		"DATE": 1427068800000
	},	
	"1":{
		"HOME": "DET",
		"AWAY": "ARI",
		"DATE": 1427155200000
	},
	"18":{
		"HOME": "EDM",
		"AWAY": "COL",
		"DATE": 1427241600000
	},
	"2":{
		"HOME": "BUF",
		"AWAY": "ARI",
		"DATE": 1427328000000
	},
	"32":{
		"HOME": "TOR",
		"AWAY": "FLA",
		"DATE": 1427328000000
	},	
	"19":{
		"HOME": "EDM",
		"AWAY": "DAL",
		"DATE": 1427414400000
	},		
	"3":{
		"HOME": "PIT",
		"AWAY": "ARI",
		"DATE": 1427500800000
	},
	"10":{
		"HOME": "COL",
		"AWAY": "BUF",
		"DATE": 1427500800000
	},
	"31":{
		"HOME": "TOR",
		"AWAY": "OTT",
		"DATE": 1427500800000
	},			
	"4":{
		"HOME": "ARI",
		"AWAY": "BUF",
		"DATE": 1427673600000
	},
	"20":{
		"HOME": "COL",
		"AWAY": "EDM",
		"DATE": 1427673600000
	},		
	"30":{
		"HOME": "TOR",
		"AWAY": "T.B",
		"DATE": 1427760000000
	},		
	"11":{
		"HOME": "BUF",
		"AWAY": "TOR",
		"DATE": 1427846400000
	},
	"21":{
		"HOME": "ANA",
		"AWAY": "EDM",
		"DATE": 1427846400000
	},					
	"22":{
		"HOME": "L.A",
		"AWAY": "EDM",
		"DATE": 1427932800000
	},		
	"5":{
		"HOME": "S.J",
		"AWAY": "ARI",
		"DATE": 1428019200000
	},
	"12":{
		"HOME": "BUF",
		"AWAY": "CHI",
		"DATE": 1428019200000
	},
	"13":{
		"HOME": "NYI",
		"AWAY": "BUF",
		"DATE": 1428105600000
	},
	"23":{
		"HOME": "EDM",
		"AWAY": "CGY",
		"DATE": 1428105600000
	},
	"29":{
		"HOME": "BOS",
		"AWAY": "TOR",
		"DATE": 1428105600000// 4/4
	},						
	"29":{
		"HOME": "TOR",
		"AWAY": "OTT",
		"DATE": 1428192000000 // 4/5
	},	
	"14":{
		"HOME": "BUF",
		"AWAY": "CAR",
		"DATE": 1428278400000
	},
	"6":{
		"HOME": "ARI",
		"AWAY": "CGY",
		"DATE": 1428364800000
	},
	"24":{
		"HOME": "EDM",
		"AWAY": "L.A",
		"DATE": 1428364800000
	},	
	"28":{
		"HOME": "CBJ",
		"AWAY": "TOR",
		"DATE": 1428451200000
	},	
	"7":{
		"HOME": "VAN",
		"AWAY": "ARI",
		"DATE": 1428537600000
	},
	"25":{
		"HOME": "EDM",
		"AWAY": "S.J",
		"DATE": 1428537600000
	},			
	"15":{
		"HOME": "CBJ",
		"AWAY": "BUF",
		"DATE": 1428624000000
	},
	"8":{
		"HOME": "ANA",
		"AWAY": "ARI",
		"DATE": 1428710400000
	},
	"16":{
		"HOME": "BUF",
		"AWAY": "PIT",
		"DATE": 1428710400000
	},
	"26":{
		"HOME": "VAN",
		"AWAY": "EDM",
		"DATE": 1428710400000
	},
	"27":{
		"HOME": "TOR",
		"AWAY": "MTL",
		"DATE": 1428710400000
	}	
	
};

$(document).ready(function(){
	var teamTeplate = "<tr><td><img height='30' width='30' src='assets/img/{{Abbrv}}.png'></img></td><td>{{Name}}</td><td>{{Points}}</td><td id='{{Abbrv}}-Sim'>{{Points}}</td><td>{{ROW}}</td><td id='{{Abbrv}}-ROW'>{{ROW}}</td></tr>";
	for (var team in teams) {
		if (teams[team]["SELECT"] === 1){
		  var html = Mustache.to_html(teamTeplate, {"Abbrv": team, "Name": teams[team]["NAME"], "Points": teams[team]["CURRENT"], "GamesLeft": teams[team]["CALC_GAMES_LEFT"], "ROW": teams[team]["ROW"]});
		  $(html).appendTo("#tankTeams");
		}
		else{
			teams[team]["SELECT"] = 0;
		}
	}

	// Pre-select with losers.
	var selectedTeams = []
	for (var team in teams) {
		if (teams[team]["SELECT"] === 1){
		  selectedTeams.push(team);
		}
	}	

	var gameTemplate = "<tr><td>{{Date}}</td><td>{{Home}}</td><td>{{Away}}</td>"
		+ "<td>" // ot radios
		+ "<input type='radio' name='{{GameID}}-OT' id='{{GameID}}-OT-N' class='game-ot' value='{{GameID}}-OT-N' checked>None  " 
		+ "<input type='radio' name='{{GameID}}-OT' id='{{GameID}}-OT-O' class='game-ot' value='{{GameID}}-OT-O'>OT  "
		+ "<input type='radio' name='{{GameID}}-OT' id='{{GameID}}-OT-S' class='game-ot' value='{{GameID}}-OT-S'>SO  "
		+ "</td>"
		+"<td>" // winner radios
		+ "<input type='radio' name='{{GameID}}-Winner' id='{{GameID}}-{{Home}}' class='game-result' value='{{Home}}'>{{Home}}    "
		+ "<input type='radio' name='{{GameID}}-Winner' id='{{GameID}}-{{Away}}' class='game-result' value='{{Away}}'>{{Away}}    "
		+ "</td><td id='{{GameID}}-WinPic'></td>";

	// Add games and write via template
	for (var game in gamesLeft){
		var gameDate = new Date(parseInt(gamesLeft[game]["DATE"]));
		var dateStr = gameDate.getFullYear();
		var gameData = {"Date": gameDate.getMonth() + "/" + gameDate.getDate() + "/" + gameDate.getFullYear(), 
					"Away": gamesLeft[game]["AWAY"],
					"Home": gamesLeft[game]["HOME"],
					"GameID": game
					};
		var html = Mustache.to_html(gameTemplate, gameData);
		$(html).appendTo("#gameData");
		gamesLeft[game]["OT"] = "N";
		// if team is one of the selected auto-check. first, check away. do this to avoid duplicate attempts at selecting.
		if (isSelectedTeam(gamesLeft[game]["AWAY"])){
			$("#" + game + "-" + gamesLeft[game]["HOME"]).prop("checked", true);
			gamesLeft[game]["WIN"] = gamesLeft[game]["HOME"];
			$("#" + game + "-WinPic").html("<img height='20' width='20' src='assets/img/" + gamesLeft[game]["HOME"] + ".png'></img>");
		}
		// if not, selected team is the home team. check that one.
		else{
			$("#" + game + "-" + gamesLeft[game]["AWAY"]).prop("checked", true);
			gamesLeft[game]["WIN"] = gamesLeft[game]["AWAY"];
			$("#" + game + "-WinPic").html("<img height='20' width='20' src='assets/img/" + gamesLeft[game]["AWAY"] + ".png'></img>");
		}
	}
	updatePoints();

	function isSelectedTeam(team) {
	  return selectedTeams.indexOf(team) > -1;
	}


	$(".game-result").change(function(){
		var gameID = this.id.split("-")[0];
		gamesLeft[gameID]["WIN"] = this.id.split("-")[1];
		$("#" + gameID + "-WinPic").html("<img height='20' width='20' src='assets/img/" + this.id.split("-")[1] + ".png'></img>");
		updatePoints();
	});

	// When OT is placed in, update point totals
	$(".game-ot").change(function(){
		//  Update gamesLeft object
		var gameID = this.id.split("-")[0];
		var otType = this.id.split("-")[2];
		gamesLeft[gameID]["OT"] = otType;	
		updatePoints();
	});

	// There is a better way to do this, but life goes on.
	function updatePoints(){
		// reset all points to current
		for (var team in teams) {
			if (teams[team]["SELECT"] === 1){
				teams[team]["CALC"] = teams[team]["CURRENT"];
				teams[team]["CALC_ROW"] = teams[team]["ROW"];
				teams[team]["CALC_GAMES_LEFT"] = teams[team]["GAMES_LEFT"];
			}
			
		}

		// add up the points, dude
		for (var game in gamesLeft){
			var winningTeam = gamesLeft[game]["WIN"];
			var homeTeam = gamesLeft[game]["HOME"];
			var awayTeam = gamesLeft[game]["AWAY"];
			if (gamesLeft[game]["WIN"] !== undefined && gamesLeft[game]["WIN"] != ""){
				// if we are calculating points for the winner, then add
				if (teams[winningTeam]["SELECT"] === 1){
					// get the winning team, first. add 2 points.
					teams[winningTeam]["CALC"] = teams[winningTeam]["CALC"] + 2;
					// only add to ROW if not a shoot-out
					if (gamesLeft[game]["OT"] !== "S"){
						teams[winningTeam]["CALC_ROW"] = teams[winningTeam]["CALC_ROW"] + 1
					}
				}
				// if game went to OT, give out loser point.
				if (gamesLeft[game]["OT"] === "O" || gamesLeft[game]["OT"] === "S"){
					// Did the home team win?
					if (homeTeam === winningTeam){
						// if the away team lost & is being calculated, add a point.
						if (teams[awayTeam]["SELECT"] === 1){
							teams[awayTeam]["CALC"] = teams[awayTeam]["CALC"] + 1;
						}
					}
					// Else, away team won. Home team should get a point if being calculated.
					else if (teams[homeTeam]["SELECT"] === 1){
						teams[homeTeam]["CALC"] = teams[homeTeam]["CALC"] + 1;
					}
				}

			}
		}

		// Update grid
		for (var team in teams) {
			if (teams[team]["SELECT"] === 1){
				$("#" + team + "-Sim").text(teams[team]["CALC"]);
				$("#" + team + "-ROW").text(teams[team]["CALC_ROW"]);
			}
			
		}


	}
	$("#teamTable").DataTable({"order": [[3, "asc"], [5, "asc"]], searching: false, paging: false});
	$("#gamesTable").DataTable();	
})
