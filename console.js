// TOOD
// - [x] Trace route en ping nog help bij niet meegeven ip
// - [ ] Kill nodes script op basis van 3 ip
// - [ ] nice to have = Logboek functionaliteit

var Usrname = "root";
var Passwd = "welkom";

var state_user = 0;
var state_password = 1;
var state_command = 2;
var current_state = state_user;

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

function animateTraceroute()
{
	showHide('prompt', 'none');
	var commandInput = document.getElementById("command").value;
	var number = 0;
	var miliseconds = 15.533;
	var changemiliseconds = 4.014
	var numberOfNodes = 4
	var dnsnames = ["www.google.com","dw-vpnproxy.nl-ox.net","public-ix-net.bl-ix.net","tor.secure-net.co.uk","\u5895\u7468-\u4E2D\u4320.\u6381\u1153\u56FD.\u4E2D"]
	var ipnummer = ["8.8.8.8","108.170.242.123","216.239.42.115","214.170.236.19","82.150.158.221"]

	var interval = setInterval(function()
	{
		if(number < numberOfNodes)
		{
			number ++;
			$('#console').append("<br> ", number," ",dnsnames[number], " (",ipnummer[number], ") ", miliseconds.toFixed(3)," ms ",(miliseconds=miliseconds-changemiliseconds).toFixed(3)," ms ",(miliseconds=miliseconds-changemiliseconds).toFixed(3)," ms");
			window.scrollTo(1, document.body.scrollHeight);
			miliseconds = miliseconds*2
		}
		else
		{
			clearInterval(interval);
			showHide('prompt', 'block');
			getFocus();
		}
	}, 1000);
}

function animateKillNodes()
{
	showHide('prompt', 'none');
	var number = 0;
	var numberOfNodes = 4;
	var interval = setInterval(function()
	{
		if(number < numberOfNodes)
		{
			$('#console').append("<br> ", number);
			window.scrollTo(1, document.body.scrollHeight);
			number ++;
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

			if(userInput == Usrname)
			{
				var newUserInput = "su "+userInput;
				changeUser(Users[newUserInput],'PassCurrentUser');
				changeUser(Users[newUserInput],'PassInputCurrentUser');
				changeUser(Users[newUserInput],'TerminalCurrentUser');
				changeUser(Users[newUserInput],'PromptCurrentUser');
				changePrompt(Users[newUserInput],'currentUserPrompt');

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
				previousInnerHTML = previousInnerHTML.concat(currentUser()+"@hGC846C0's password:<br>Acces denied: invalid password<br>");
			}
			document.getElementById('pass').innerHTML = previousInnerHTML;
			break;
	}
}

function currentFolder()
{
    return current_folder;
}

function changeFolder(newFolder)
{
    current_folder = newFolder;
    document.getElementById('CurrentFolder').innerHTML=current_folder;
}

function currentPrompt()
{
	return current_prompt;
}

function changePrompt(newPrompt, div)
{
	if(newPrompt == 'root')
	{
		current_prompt = '#';
	}
	else
	{
		current_prompt = '$'
	}
	document.getElementById(div).innerHTML=current_prompt;
}

function currentUser()
{
	return current_user;
}

function changeUser(newUser, div)
{
	current_user = newUser;
	document.getElementById(div).innerHTML=current_user;
}

function validateCommand()
{
	var previousInnerHTML = new String();
	var commandInput = document.getElementById("command").value;
	previousInnerHTML = document.getElementById('console').innerHTML;
	previousInnerHTML = previousInnerHTML.concat("<br>[",current_user,"@GC846C0 ", current_folder, "]# ", commandInput);

	if(commandInput.match(/^ping/))
	{
		if(commandInput.match(/^ping (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/))
		{
			previousInnerHTML = previousInnerHTML.concat("<br>",commandInput,"  - 56 bytes if data.");
			animatePing();
		}
		else
		{
			previousInnerHTML = previousInnerHTML.concat(output("ping", currentFolder()));
		}
	}
	else if(commandInput.match(/^traceroute/))
	{
		if(commandInput.match(/^traceroute (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/))
		{
			previousInnerHTML = previousInnerHTML.concat("<br>",commandInput," (",commandInput.replace("traceroute","")," ), 64 hops max, 52 byte packets");
			animateTraceroute();
		}
		else
		{
			previousInnerHTML = previousInnerHTML.concat(output("traceroute", currentFolder()));
		}
	}
	else if(commandInput.match(/^killnodes.sh/)) 
	{	
		if(commandInput.match(/^killnodes.sh (\d|[1-9]) (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/))
		{
			previousInnerHTML = previousInnerHTML.concat("<br>starting killnodes.sh script");
			animateKillNodes();
		}
		else
		{
			previousInnerHTML = previousInnerHTML.concat(output("killnodes.sh", currentFolder()));
		}
	}
	else if(Folders[commandInput])
	{
        changeFolder(Folders[commandInput]);
	}
	else if(Users[commandInput])
	{
		changeUser(Users[commandInput]);
	}
	else
	{
		previousInnerHTML = previousInnerHTML.concat(output(commandInput.toLowerCase(), currentFolder()));
	}
	document.getElementById('console').innerHTML = previousInnerHTML;
}
