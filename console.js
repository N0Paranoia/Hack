var Usrname = "root";
var Passwd = "welkom";

var state_user = 0;
var state_password = 1;
var state_command = 2;
var current_state = state_user;

var commandos = [];
commandos["date"] = new Date();
commandos["help"] = commando01;
commandos["info geobash"] = commando02;

function onLoad()
{
	showHide("pw", "none");
	showHide("terminal", "none");
	getFocus("username");
}

function getFocus()
{
	window.scrollTo(1, document.body.scrollHeight);
	if(current_state == state_user)
	{
		document.getElementById("username").focus();
	}
	else if(current_state == state_password)
	{
		document.getElementById("password").focus();
	}
	else if(current_state == state_command)
	{
		document.getElementById("command").focus();
	}
}

function showHide(boxid, state)
{
	document.getElementById(boxid).style.display=state;
}

function changeState(new_state)
{
	current_state = new_state;
}

function animatePing()
{
	
	showHide('prompt', 'none');
	var commandInput = document.getElementById("command").value;
	var number = 29.8;
	var addNumber = 0.3;
	var interval = setInterval(function()
	{
		if(number < 31.0)
		{
			number=number+addNumber
			$('#console').append("<br> 64 bytes from ", commandInput.replace("ping", ""), ": ttl=53 time=", number.toFixed(1)," ms");
			window.scrollTo(1, document.body.scrollHeight);
		}
		else
		{
			clearInterval(interval);
			showHide('prompt', 'block');
			getFocus();
		}
	}, 1000);
}

function submit(id, event)
{
	key = event.keyCode | event.charCode;
	if(key == 13)
	{	
		switch(id)
		{
			case username:
				validateAccount(state_user);		
				id.value="";
				return false;
				break;
			case password:
				validateAccount(state_password);		
				id.value="";
				return false;
				break;
			case command:
				validateCommand();
				id.value="";
				return false;
				break;
		}
	}
}

function validateAccount(state)
{
	switch(state)
	{
		case state_user:
			var previousInnerHTML = new String();
			var userInput = document.getElementById("username").value;
	
			previousInnerHTML = document.getElementById('user').innerHTML;

			if(userInput.toLowerCase() == Usrname)
			{
				showHide('userinput', 'none');
				showHide('pw', 'block');
				changeState(state_password);
				getFocus();
			}
			else
			{
				previousInnerHTML = previousInnerHTML.concat("login as: ", userInput, "<br>", userInput, ": invalid username<br>");
			}
			document.getElementById('user').innerHTML = previousInnerHTML;
			break;
		case state_password:
			var previousInnerHTML = new String();
			var pwInput = document.getElementById("password").value;

			previousInnerHTML = document.getElementById('pass').innerHTML;
    
			if(pwInput.toLowerCase() == Passwd)
			{
				showHide('passinput', 'none');
				showHide('terminal', 'block');
				changeState(state_command);
				getFocus();
			}
			else
			{
				previousInnerHTML = previousInnerHTML.concat("root@hack's password:<br>Acces denied: invalid password<br>");
			}
			document.getElementById('pass').innerHTML = previousInnerHTML;
			break;
	}
}

function validateCommand()
{
	var previousInnerHTML = new String();
	var commandInput = document.getElementById("command").value;
	previousInnerHTML = document.getElementById('console').innerHTML;
	previousInnerHTML = previousInnerHTML.concat("<br>[root@hack-Server ", "CURRENT_FOLDER", "]# ", commandInput);

	if(commandos[commandInput.toLowerCase()])
	{
		previousInnerHTML = previousInnerHTML.concat("<br>",commandos[commandInput.toLowerCase()]);
	}
	else if(commandInput.match(/^ping (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/))
	{ ;
		previousInnerHTML = previousInnerHTML.concat("<br>",commandInput,"  - 56 bytes if data.");
		animatePing();
	}
	else if(commandInput.toLowerCase() == "exit")
	{
		location.reload();
	}
	else if(commandInput == "")
	{
		preciousInnerHTML = previousInnerHTML.concat("");
	}
	else
	{
		previousInnerHTML = previousInnerHTML.concat("<br>-bash: ",commandInput, ": command not found");
	}   
	document.getElementById('console').innerHTML = previousInnerHTML;
}
