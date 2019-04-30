var state_starup = 3
var state_user = 0;
var state_password = 1;
var state_command = 2;
var current_state = state_user;
var userInput = "";
var current_prompt = '#';
var debug = false;

function onLoad() {
	if (!debug) {
		animateStartup();
		showHide("usr", "none");
		showHide("pw", "none");
		showHide("terminal", "none");
		getFocus();
	}
	else {
		changeState(state_command);
	}
}

function getFocus() {
	window.scrollTo(1, document.body.scrollHeight);
	if (current_state == state_user) {
		document.getElementById("username").focus();
	}
	else if (current_state == state_password) {
		document.getElementById("password").focus();
	}
	else if (current_state == state_command) {
		document.getElementById("command").focus();
	}
}

function showHide(boxid, state) {
	document.getElementById(boxid).style.display = state;
}

function changeState(new_state) {
	current_state = new_state;
}

function animateStartup() {
	var number = 0;
	var myFunction = function () {
		if (number < start_proces.length) {
			if (number % 2 == 0) {
				$('#boot').append(`<br>${start_proces[number]}`);
				window.scrollTo(1, document.body.scrollHeight);
				setTimeout(myFunction, Math.floor((Math.random() * 1500) + 100));
			} else {
				$('#boot').append(`${start_proces[number]}`);
				window.scrollTo(1, document.body.scrollHeight);
				setTimeout(myFunction, 100);
			}
			number++;
		}
		else {
			showHide('boot', 'none');
			showHide('usr', 'block');
			getFocus();
		}
	}
	setTimeout(myFunction, number);
}

function animatePing() {
	showHide('prompt', 'none');
	var commandInput = document.getElementById("command").value;
	var number = 0;
	var interval = setInterval(function () {
		if (number < 4) {
			if (ipnummer.indexOf(commandInput.replace("ping ", "")) != -1) {
				$('#console').append(`<br> 64 bytes from ${commandInput.replace("ping", "")} : ttl=53 time=${(Math.floor(Math.random() * 6) + 1)}.${(Math.floor(Math.random() * 900) + 100)} ms`);
				window.scrollTo(1, document.body.scrollHeight);
				number++;
			}
			else {
				$('#console').append(`<br>Request timeout for icmp_seq ${number}`);
				window.scrollTo(1, document.body.scrollHeight);
				number++;
			}
		}
		else {
			clearInterval(interval);
			showHide('prompt', 'block');
			getFocus();
		}
	}, 1000);
}

function animateTraceroute() {
	showHide('prompt', 'none');
	var commandInput = document.getElementById("command").value;
	var number = 0;
	var number2 = 0;
	var numberOfNodes = ipnummer.indexOf(commandInput.replace("traceroute ", "")) > 0 ? ipnummer.indexOf(commandInput.replace("traceroute ", "")) : 4;
	var interval = setInterval(function () {
		if (number < numberOfNodes) {
			if (commandInput == "traceroute 127.0.0.1" || commandInput == "traceroute localhost") {
				number = numberOfNodes;
				$('#console').append(`<br>1 ${dnsnames[0]} ( ${ipnummer[0]} )  ${(Math.floor(Math.random() * 6) + 1)}.${(Math.floor(Math.random() * 900) + 100)} ms  ${(Math.floor(Math.random() * 6) + 1)}.${(Math.floor(Math.random() * 900) + 100)} ms  ${(Math.floor(Math.random() * 6) + 1)}.${(Math.floor(Math.random() * 900) + 100)} ms`);
				windxow.scrollTo(1, document.body.scrollHeight);
			}
			else if (ipnummer.indexOf(commandInput.replace("traceroute ", "")) != -1) {
				number++;
				$('#console').append(`<br>${number} ${dnsnames[number]} ( ${ipnummer[number]} )  ${(Math.floor(Math.random() * 6) + 1)}.${(Math.floor(Math.random() * 900) + 100)} ms  ${(Math.floor(Math.random() * 6) + 1)}.${(Math.floor(Math.random() * 900) + 100)} ms  ${(Math.floor(Math.random() * 6) + 1)}.${(Math.floor(Math.random() * 900) + 100)} ms`);
				windxow.scrollTo(1, document.body.scrollHeight);
			}
			else {
				if (number2 == 0) {
					$('#console').append(`<br>${number + 1}&nbsp;&nbsp;`);
					number2++;
				}
				else if (number2 < 4) {
					number2++;
					$('#console').append(` *`);
				}
				else {
					number++;
					number2 = 0;
				}
			}
		}
		else {
			clearInterval(interval);
			showHide('prompt', 'block');
			getFocus();
		}
	}, 1000);
}

function animateBugTracker() {
	showHide('prompt', 'none');
	var number = 0;
	var myFunction = function () {
		if (number < bug_tracker.length) {
			if (number < 3 || number > 65) {
				$('#console').append(`<br>${bug_tracker[number]}`);
				window.scrollTo(1, document.body.scrollHeight);
				setTimeout(myFunction, Math.floor((Math.random() * 2500) + 1000));
			}
			else {
				$('#console').append(`${bug_tracker[number]}`);
				window.scrollTo(1, document.body.scrollHeight);
				setTimeout(myFunction, Math.floor((Math.random() * 1000) + 100));
			}
			number++;
		}
		else {
			$('#console').append(output("bug", currentFolder()));
			showHide('prompt', 'block');
			getFocus();
		}
	}
	setTimeout(myFunction, number);
}

function animateKillNodes() {
	showHide('prompt', 'none');
	var commandInput = document.getElementById("command").value;
	var number = 0;
	var number2 = 0;
	var numberOfNodes = commandInput.split(" ")[1];
	var myFunction = function () {
		if (number < numberOfNodes) {
			if (number2 < nodes_to_kill.length) {
				if (number2 % 2 == 0) {
					$('#console').append(`<br> Node ${number + 1} ( ${commandInput.split(" ")[2 + number]} ) ${nodes_to_kill[number2]}`)
					window.scrollTo(1, document.body.scrollHeight);
					setTimeout(myFunction, Math.floor((Math.random() * 2500) + 1000));

				}
				else if (number2 % 5 == 0) {
					ssh_command = `ssh -p 1012022 root@${commandInput.split(" ")[2 + number]} 'sudo /usr/local/sbin/kill_current_node.sh'`;
					$('#console').append(`<br>${ssh_command}`);
					window.scrollTo(1, document.body.scrollHeight);
					setTimeout(myFunction, 500);
				}
				else {
					$('#console').append(`${nodes_to_kill[number2]}`)
					window.scrollTo(1, document.body.scrollHeight);
					setTimeout(myFunction, 500);

				}
				number2++;
			}
			else {
				number2 = 0;
				number++;
				window.scrollTo(1, document.body.scrollHeight);
				setTimeout(myFunction, Math.floor((Math.random() * 1500) + 100));
			}
		}
		else {
			showHide('prompt', 'block');
			getFocus();
		}
	}
	setTimeout(myFunction, number);
}

function nodeKills() {
	var nodesInput = document.getElementById("test").value;
	window.alert(nodeInput);
}

function animateSelfDestruct() {
	showHide('prompt', 'none');
	var number = 0;
	var number2 = 0;
	var number3 = 0;
	var number4 = 0;
	var myFunction = function () {
		if (number < randon_ascii1.length) {
			$('#console').append(`<br>${randon_ascii1[number]}`);
			window.scrollTo(1, document.body.scrollHeight);
			setTimeout(myFunction, (100 - (number * 10)));
			number++;
		}
		else if (number2 < randon_ascii2.length) {
			$('#console').append(`<br>${randon_ascii2[number2]}`);
			window.scrollTo(0, document.body.scrollHeight);
			setTimeout(myFunction, 5000);
			number2++;
		}
		else if (number3 < randon_ascii3.length) {
			$('#console').append(`<br>${randon_ascii3[number3]}`);
			window.scrollTo(0, document.body.scrollHeight);
			setTimeout(myFunction, 1000);
			number3++;
		}
		else if (number4 < randon_ascii4.length) {
			$('#console').append(`<br>${randon_ascii4[number4]}`);
			window.scrollTo(0, document.body.scrollHeight);
			setTimeout(myFunction, 500);
			number4++;
		}
		else {
			showHide('boot', 'none');
			showHide('passinput', 'none');
			showHide("username", "none");
			showHide("lastpass", "none");
			showHide("usr", "none");
			showHide("pw", "none");
			showHide("terminal", "none");
			showHide('prompt', 'none');
			getFocus();
		}
	}
	setTimeout(myFunction, number);
}

function submit(id, event) {
	key = event.keyCode | event.charCode;
	if (key == 13) {
		switch (id) {
			case username:
				validateAccount(state_user);
				id.value = "";
				return false;
				break;
			case password:
				validateAccount(state_password);
				id.value = "";
				return false;
				break;
			case command:
				validateCommand();
				id.value = "";
				return false;
				break;
			case test:
				nodeKills();
				id.value = "";
				return false;
				break;
		}
	}
}

function validateAccount(state) {
	switch (state) {
		case state_user:
			var previousInnerHTML = new String();
			userInput = document.getElementById("username").value;
			previousInnerHTML = document.getElementById('user').innerHTML;
			if (userList.indexOf(userInput) >= 0) {
				var newUserInput = "su " + userInput;
				changeUser(Users[newUserInput], 'PassCurrentUser');
				changeUser(Users[newUserInput], 'PassInputCurrentUser');
				changeUser(Users[newUserInput], 'TerminalCurrentUser');
				changeUser(Users[newUserInput], 'PromptCurrentUser');
				changePrompt(Users[newUserInput], 'currentUserPrompt');

				showHide('userinput', 'none');
				showHide('pw', 'block');
				changeState(state_password);
				getFocus();
			}
			else {
				previousInnerHTML = previousInnerHTML.concat(`login as: ${userInput}<br>${userInput} : invalid username<br>`);
			}
			document.getElementById('user').innerHTML = previousInnerHTML;
			break;
		case state_password:
			var previousInnerHTML = new String();
			var pwInput = document.getElementById("password").value;
			previousInnerHTML = document.getElementById('pass').innerHTML;
			if (pwInput == passList[userList.indexOf(userInput)]) {
				showHide('passinput', 'none');
				showHide('terminal', 'block');
				changeState(state_command);
				getFocus();
			}
			else {
				previousInnerHTML = previousInnerHTML.concat(`${currentUser()}@hGC846C0's password:<br>Acces denied: invalid password<br>`);
			}
			document.getElementById('pass').innerHTML = previousInnerHTML;
			break;
	}
}

function currentFolder() {
	return current_folder;
}

function changeFolder(newFolder) {
	current_folder = newFolder;
	document.getElementById('CurrentFolder').innerHTML = current_folder;
}

function currentPrompt() {
	return current_prompt;
}

function changePrompt(newPrompt, div) {
	if (newPrompt == 'root') {
		current_prompt = '#';
	}
	else {
		current_prompt = '$'
	}
	document.getElementById(div).innerHTML = current_prompt;
}

function currentUser() {
	return current_user;
}

function changeUser(newUser, div) {
	current_user = newUser;
	document.getElementById(div).innerHTML = current_user;
}

function validateCommand() {
	var previousInnerHTML = new String();
	var commandInput = document.getElementById("command").value;
	previousInnerHTML = document.getElementById('console').innerHTML;
	previousInnerHTML = previousInnerHTML.concat(`<br>[${current_user}@GC846C0 ${current_folder}]# ${commandInput}`);

	if (commandInput.toLowerCase().match(/^ping/)) {
		if (commandInput.match(/^ping (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/)) {
			previousInnerHTML = previousInnerHTML.concat(`<br>${commandInput} - 56 bytes if data.`);
			animatePing();
		}
		else if (commandInput.match("\^ping localhost\$")) {
			previousInnerHTML = previousInnerHTML.concat("<br>ping 127.0.0.1 - 56 bytes if data.");
			animatePing();
		}
		else {
			previousInnerHTML = previousInnerHTML.concat(output("ping", currentFolder()));
		}
	}
	else if (commandInput.toLowerCase().match(/^traceroute/)) {
		if (commandInput.match(/^traceroute (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/)) {
			previousInnerHTML = previousInnerHTML.concat(`<br>${commandInput} ( ${commandInput.replace("traceroute", "")} ), 64 hops max, 52 byte packets`);
			animateTraceroute();
		}
		else if (commandInput.match("\^traceroute localhost\$")) {
			previousInnerHTML = previousInnerHTML.concat(`<br>${commandInput} ( 127.0.0.1 ), 64 hops max, 52 byte packets`);
			animateTraceroute();
		}
		else {
			previousInnerHTML = previousInnerHTML.concat(output("traceroute", currentFolder()));
		}
	}
	else if (commandInput.toLowerCase().match(/^killnodes.sh/)) {
		if (commandInput.match(/^killnodes.sh 1 (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/)) {
			previousInnerHTML = previousInnerHTML.concat("<br>starting killnodes.sh script");
			animateKillNodes();
		}
		else if (commandInput.match(/^killnodes.sh 2 (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])) (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/)) {
			previousInnerHTML = previousInnerHTML.concat("<br>starting killnodes.sh script");
			animateKillNodes();
		}
		else if (commandInput.match(/^killnodes.sh 3 (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])) (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])) (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/)) {
			previousInnerHTML = previousInnerHTML.concat("<br>starting killnodes.sh script");
			animateKillNodes();
		}
		else if (commandInput.match(/^killnodes.sh 4 (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])) (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])) (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])) (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/)) {
			previousInnerHTML = previousInnerHTML.concat("<br>starting killnodes.sh script");
			animateKillNodes();
		}
		else if (commandInput.match(/^killnodes.sh test$/)) {
			showHide('prompt', 'none');
			previousInnerHTML = previousInnerHTML.concat('<br><input id="test" type="text" autocomplete="off" onBlur="getFocus()" onkeydown="submit(test, arguments[0] || window.event)" />');
		}
		else {
			if (commandInput.split(" ").length > 1 && commandInput.split(" ")[1] != (commandInput.split(" ").length - 2)) {
				previousInnerHTML = previousInnerHTML.concat(output("killnodes.sh_wrong", currentFolder()));
			}
			else {
				previousInnerHTML = previousInnerHTML.concat(output("killnodes.sh", currentFolder()));
			}
		}
	}
	else if (commandInput.toLowerCase().match("\^clear\$")) {
		showHide('passinput', 'none');
		showHide("pw", "none");
		showHide("username", "none");
		showHide("lastpass", "none");
		previousInnerHTML = "";
		previousInnerHTML = previousInnerHTML.concat(output(commandInput.toLowerCase(), currentFolder()));
	}
	else if (commandInput.toLowerCase().match(/^cd/)) {
		if (currentFolder() == "/") {
			if (commandInput in Folders_cd) {
				changeFolder(Folders_cd[commandInput])
			}
			else {
				previousInnerHTML = previousInnerHTML.concat(folderoutput(commandInput.toLowerCase(), currentFolder()));
			}
		}
		else {
			if (commandInput in Folders) {
				changeFolder(Folders[commandInput])
			}
			else {
				previousInnerHTML = previousInnerHTML.concat(folderoutput(commandInput.toLowerCase(), currentFolder()));
			}
		}
	}
	else if (commandInput.toLowerCase().match("\^safescan\$")) {
		animateBugTracker();
	}
	else if (Users[commandInput]) {
		changeUser(Users[commandInput]);
	}
	else if (commandInput.toLowerCase().match("test")) {
		animateSelfDestruct();
	}
	else {
		previousInnerHTML = previousInnerHTML.concat(output(commandInput.toLowerCase(), currentFolder()));
	}
	document.getElementById('console').innerHTML = previousInnerHTML;
	window.scrollTo(0, document.body.scrollHeight);
}
