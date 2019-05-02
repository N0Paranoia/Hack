var state_starup = 3
var state_user = 0;
var state_password = 1;
var state_command = 2;
var current_state = state_user;
var userInput = "";
var current_prompt = '#';
var debug = true;

function checkForMobile() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}

function onLoad() {
	// alert(checkForMobile());
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
	// window.scrollTo(1, document.body.scrollHeight);
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

function scrollToBottom(id){
	var div = document.getElementById(id);
	// alert("div hight = "+div.scrollHeight+ " page hight = "+document.body.scrollHeight);
	window.scrollTo(1, div.scrollHeight);
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
				scrollToBottom("boot");
				setTimeout(myFunction, Math.floor((Math.random() * 1500) + 100));
			} else {
				$('#boot').append(`${start_proces[number]}`);
				scrollToBottom("boot");
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

function animateShutdown() {
	showHide('prompt', 'none');
	var number = 0;
	var commandInput = document.getElementById("command").value;
	if (commandInput == "shutdown") {
		shutdown_proses.unshift("The system is going to shutdown NOW!");
	}
	else if (commandInput == "reboot") {
		shutdown_proses.unshift("The system is going down for a reboot NOW!");
	}
	var myFunction = function () {
		if (number < shutdown_proses.length) {
			if (number == 0) {
				$('#console').append(`<br>${shutdown_proses[number]}`);
				scrollToBottom("terminal");
				setTimeout(myFunction, Math.floor((Math.random() * 2000) + 500));
			}
			else if (number % 2 != 0) {
				$('#console').append(`<br>${shutdown_proses[number]}`);
				scrollToBottom("terminal");
				setTimeout(myFunction, Math.floor((Math.random() * 2000) + 500));
			} else {
				$('#console').append(`${shutdown_proses[number]}`);
				scrollToBottom("terminal");
				setTimeout(myFunction, 100);
			}
			number++;
		}
		else {
			if (commandInput == "shutdown") {
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
			else if (commandInput == "reboot") {
				location.reload();
			}
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
				scrollToBottom("terminal");
				number++;
			}
			else {
				$('#console').append(`<br>Request timeout for icmp_seq ${number}`);
				scrollToBottom("terminal");
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
				scrollToBottom("terminal");
			}
			else if (ipnummer.indexOf(commandInput.replace("traceroute ", "")) != -1) {
				number++;
				$('#console').append(`<br>${number} ${dnsnames[number]} ( ${ipnummer[number]} )  ${(Math.floor(Math.random() * 6) + 1)}.${(Math.floor(Math.random() * 900) + 100)} ms  ${(Math.floor(Math.random() * 6) + 1)}.${(Math.floor(Math.random() * 900) + 100)} ms  ${(Math.floor(Math.random() * 6) + 1)}.${(Math.floor(Math.random() * 900) + 100)} ms`);
				scrollToBottom("terminal");
			}
			else {
				if (number2 == 0) {
					$('#console').append(`<br>${number + 1}&nbsp;&nbsp;`);
					scrollToBottom("terminal");
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
				scrollToBottom("terminal");
				setTimeout(myFunction, Math.floor((Math.random() * 2500) + 1000));
			}
			else {
				$('#console').append(`${bug_tracker[number]}`);
				scrollToBottom("terminal");
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
					scrollToBottom("terminal");
					setTimeout(myFunction, Math.floor((Math.random() * 2500) + 1000));

				}
				else if (number2 % 5 == 0) {
					ssh_command = `ssh -p 1012022 root@${commandInput.split(" ")[2 + number]} 'sudo /usr/local/sbin/kill_current_node.sh'`;
					$('#console').append(`<br>${ssh_command}`);
					scrollToBottom("terminal");
					setTimeout(myFunction, 500);
				}
				else {
					$('#console').append(`${nodes_to_kill[number2]}`)
					scrollToBottom("terminal");
					setTimeout(myFunction, 500);

				}
				number2++;
			}
			else {
				number2 = 0;
				number++;
				scrollToBottom("terminal");
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
	showHide('prompt', 'none');
	var number = 0;
	var myFunction = function () {
		if (number < 3)
			if (number == 0) {
				$('#console').append(`<br>Number of nodes: <input type='text'/>`);
				getFocus();
				scrollToBottom("terminal");
				setTimeout(myFunction, Math.floor((Math.random() * 1500) + 100));
				number++;
			}
			else if (number ==1) {
				$('#console').append(`<br>Ipnummer: <input type='text'/>`);
				getFocus();
				scrollToBottom("terminal");
				setTimeout(myFunction, Math.floor((Math.random() * 1500) + 100));
				number++;
			}
		else {
			showHide('prompt', 'block');
		}
	}
	setTimeout(myFunction, number);
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
			scrollToBottom("terminal");
			setTimeout(myFunction, (100 - (number * 10)));
			number++;
		}
		else if (number2 < randon_ascii2.length) {
			$('#console').append(`<br>${randon_ascii2[number2]}`);
			scrollToBottom("terminal");
			setTimeout(myFunction, 5000);
			number2++;
		}
		else if (number3 < randon_ascii3.length) {
			$('#console').append(`<br>${randon_ascii3[number3]}`);
			scrollToBottom("terminal");
			setTimeout(myFunction, 1000);
			number3++;
		}
		else if (number4 < randon_ascii4.length) {
			$('#console').append(`<br>${randon_ascii4[number4]}`);
			scrollToBottom("terminal");
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

function changeTheme() {
	var themeInput = document.getElementById("command").value.split(" ")[1];
	if (themeInput == 'retro') {
		$('*').css({
			'background-color': '#101100',
			'color': '#EEAA00',
			'text-shadow':'none',
		});
	}
	else if (themeInput == 'hacker') {
		$('*').css({
			'background-color': '#001100',
			'color': '#00EE00',
			'text-shadow':'none'
		});
	}
	else if (themeInput == 'pro') {
		$('*').css({
			'background-color': '#000000',
			'color': '#F0F0F0',
			'text-shadow':'none'
		});
	}
	else if (themeInput == 'light') {
		$('*').css({
			'background-color': '#FFFFFF',
			'color': '#000000',
			'text-shadow':'none'
		});
	}
	else if (themeInput == 'blurry') {
		$('*').css({
			'background-color': '#FFFFFF',
			'color': 'transparent',
			'text-shadow':'0 0 5px rgba(0,0,0,0.5)'
		});
	}
}

function validateCommand() {
	var previousInnerHTML = new String();
	var commandInput = document.getElementById("command").value;
	previousInnerHTML = document.getElementById('console').innerHTML;
	previousInnerHTML = previousInnerHTML.concat(`<br>[${current_user}@GC846C0 ${current_folder}]# ${commandInput}`);

	if (commandInput.toLowerCase().match(/^ping/)) {
		if (commandInput.toLowerCase().match(/^ping (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/)) {
			previousInnerHTML = previousInnerHTML.concat(`<br>${commandInput} - 56 bytes if data.`);
			animatePing();
		}
		else if (commandInput.toLowerCase().match("\^ping localhost\$")) {
			previousInnerHTML = previousInnerHTML.concat("<br>ping 127.0.0.1 - 56 bytes if data.");
			animatePing();
		}
		else {
			previousInnerHTML = previousInnerHTML.concat(output("ping", currentFolder()));
		}
	}
	else if (commandInput.toLowerCase().match(/^traceroute/)) {
		if (commandInput.toLowerCase().match(/^traceroute (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/)) {
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
		if (commandInput.toLowerCase().match(/^killnodes.sh 1 (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/)) {
			previousInnerHTML = previousInnerHTML.concat("<br>starting killnodes.sh script");
			animateKillNodes();
		}
		else if (commandInput.toLowerCase().match(/^killnodes.sh 2 (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])) (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/)) {
			previousInnerHTML = previousInnerHTML.concat("<br>starting killnodes.sh script");
			animateKillNodes();
		}
		else if (commandInput.toLowerCase().match(/^killnodes.sh 3 (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])) (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])) (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/)) {
			previousInnerHTML = previousInnerHTML.concat("<br>starting killnodes.sh script");
			animateKillNodes();
		}
		else if (commandInput.toLowerCase().match(/^killnodes.sh 4 (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])) (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])) (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])) (\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/)) {
			previousInnerHTML = previousInnerHTML.concat("<br>starting killnodes.sh script");
			animateKillNodes();
		}
		else if (commandInput.toLowerCase().match(/^killnodes.sh test$/)) {
			previousInnerHTML = previousInnerHTML.concat("<br>starting killnodes.sh script");
			nodeKills();

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
	else if (commandInput.toLowerCase().match(/^shutdown/)) {
		animateShutdown();
	}
	else if (commandInput.toLowerCase().match(/^reboot/)) {
		animateShutdown();
	}
	else if (commandInput.toLowerCase().match("\^test\$")) {
		animateSelfDestruct();
	}
	else if (commandInput.toLowerCase().match(/^theme/)) {
		if (commandInput.toLowerCase().match("\^theme hacker\$") || commandInput.toLowerCase().match("\^theme retro\$") || commandInput.toLowerCase().match("\^theme pro\$") || commandInput.toLowerCase().match("\^theme light\$") || commandInput.toLowerCase().match("\^theme blurry\$")) {
			changeTheme();
		}
		else if (commandInput.split(" ").length > 1) {
			previousInnerHTML = previousInnerHTML.concat(output("theme_wrong", currentFolder()));
		}
		else {
			previousInnerHTML = previousInnerHTML.concat(output("theme", currentFolder()));
		}
	}
	else {
		previousInnerHTML = previousInnerHTML.concat(output(commandInput.toLowerCase(), currentFolder()));
	}
	document.getElementById('console').innerHTML = previousInnerHTML;
	// scrollToBottom("prompt");
	scrollToBottom("terminal");
}