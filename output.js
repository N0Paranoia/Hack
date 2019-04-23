var str = "Dit is een test";

var start_proces = ["Setting&nbsp;preliminary&nbsp;keymap.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Setting&nbsp;default&nbsp;keymap&nbsp;(US).&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Setting&nbsp;system&nbsp;clock.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Activating&nbsp;swap.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Loading&nbsp;kernel&nbsp;modules.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Loading&nbsp;udev.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Starting&nbsp;CPU&nbsp;interrupts&nbsp;balancing&nbsp;daemon.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Checking&nbsp;filessystem.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Mounting&nbsp;local&nbsp;filesystems.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Activating&nbsp;swapfile.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Cleaning&nbsp;up&nbsp;temporary&nbsp;files.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Setting&nbsp;kernel&nbsp;variables.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Starting&nbsp;systemctl.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Cleaning&nbsp;up&nbsp;ifupdown.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Setting&nbsp;up&nbsp;networking.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Setting&nbsp;hostname&nbsp;to&nbsp;'GC846C0'.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Starting&nbsp;rcpbind&nbsp;deamon.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Starting&nbsp;NFS&nbsp;common&nbsp;utillities.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Starting&nbsp;service&nbsp;mountnfs&nbsp;in&nbsp;background.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Setting&nbsp;up&nbsp;console&nbsp;font&nbsp;and&nbsp;keymap.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]", "Starting&nbsp;system&nbsp;logger.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	"[OK]"];

var nodes_to_kill = ["is given the kill command!"," ","accessibility check...","OK","execute kill command..."," ","checking status"," ","status is...","TERMINATED"];

var bug_tracker = ["Safescan is starting a systemm wide scan","updating library","scanning system",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","Number of viruses found: 0","Number of mallware threats found: 0","Number of bugs found: 1","Bugname: €@$t3r_€99","Threat level: 1 (Verry Low)","Placing bug in quarantine","Opening quarantine vault"];


var dnsnames = ["localhost", "dw-vpnproxy.nl-ox.net","tor.secure-net.co.uk","\u5895\u7468-\u4E2D\u4320.\u6381\u1153\u56FD.\u4E2D","public-ix-net.bl-ix.net"];
var ipnummer = ["127.0.0.1", "108.170.242.123", "216.239.42.115", "214.170.236.19", "63.251.163.200"];

var current_folder = "/";

var Folders_cd = {
	"cd": "/",
	"cd ": "/",
	"cd /": "/",
	"cd ..": "/",
	"cd..": "/",
	"cd documents": "/documents",
	"cd files": "/files",
	"cd pictures": "/pictures",
	"cd temp": "/temp",
	"cd video": "/video",
};

var Folders = {
	"cd": "/",
	"cd ": "/",
	"cd /": "/",
	"cd ..": "/",
	"cd..": "/",
	"cd ../documents": "/documents",
	"cd ../files": "/files",
	"cd ../pictures": "/pictures",
	"cd ../temp": "/temp",
	"cd ../video": "/video",
};

var Users = [];
var userList = ["guest", "root", "N0S!gn@l"]
var passList = ["welkom", "welkom", "password"]
var user00 = "guest";
var user01 = "root";
var user02 = "N0S!gn@l";

Users["su guest"] = user00;
Users["su root"] = user01;
Users["su N0S!gn@l"] = user02;

var current_user = "guest";

function output(input, folder) {
	switch (input) {
		case "date":
			return "<br>" + new Date();
			break;
		case "exit":
			location.reload();
			break;
		case "reboot":
			location.reload();
			break;
		case "help":
			return "\
    					<br>\
						GNU bash, version 4.2-release (build: GC846C0) (i586-NoParanoia-linux version 42<br>\
 						shell). These shell commands are defined internally.  Type \`help\'<br>\
                        to see this list. Use \`info bash\' to find out more about the<br>\
                        shell in general.<br>\
 						<br>\
						cd [directory] ................ cd change the working directory<br>\
						cat [OPTION] [FILE] ........... concatenate files and print on the standard output<br>\
						ls [OPTION] [FILE] ............ list directory contents<br>\
 						date .......................... print the system date and time<br>\
						ping [remote host] ............ send ICMP ECHO_REQUEST to network hosts<br>\
						traceroute [remote host]....... print the route packets take to package host<br>\
						safescan........................Search for viruses, mallware or bugs in host system<br>\
						clear ......................... clear the sceen<br>\
						reboot......................... reboot the system<br>\
 					";
			break;
		case "info bash":
			return "\
						<br>\
    					Bash Features<br>\
    					****************<br>\
    					<br>\
						This text is a brief description of the features that are <br>\
						present in the Bash shell (version 6.4, 30 February 2014).<br>\
						The Bash home page is `http://www.bash-stuff.org/'.<br>\
						<br>\
						   This is Edition 4.2 (build: GC846C0), last updated 30 February 2014, of <br>\
						`The GNU Bash Reference Manual', for `Bash', Version 6.4.<br>\
						<br>\
						   Bash contains features that appear in other popular<br>\
						shells, and some features that only appear in Bash.  Some<br>\
						of the shells that Bash has borrowed concepts from are the<br>\
						Bourne Shell (`sh'), the Korn Shell(`ksh'), and the C-shell <br>\
                        (`csh' and its successor, `tcsh').\
					";
			break;
		case "ls":
			switch (folder) {
				case "/":
					var str = "Test string";
					return "\
							<br>\
							drwxr-xr-x&nbsp;&nbsp1&nbsp;&nbsp;noparanoia&nbsp;&nbsp;&nbsp;&nbsp;users&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 01.07.1981 20:30 ./<br>\
                            drwxr-xr-x&nbsp;&nbsp1&nbsp;&nbsp;noparanoia&nbsp;&nbsp;&nbsp;&nbsp;users&nbsp;&nbsp;&nbsp;&nbsp;4096 01.07.1981 20:30 documents/<br>\
                            drwxr-xr-x&nbsp;&nbsp1&nbsp;&nbsp;noparanoia&nbsp;&nbsp;&nbsp;&nbsp;users&nbsp;&nbsp;&nbsp;&nbsp;4096 01.07.1981 20:30 files/<br>\
                            drwxr-xr-x&nbsp;&nbsp1&nbsp;&nbsp;noparanoia&nbsp;&nbsp;&nbsp;&nbsp;users&nbsp;&nbsp;&nbsp;&nbsp;4096 01.07.1981 20:30 pictures<br>\
                            drwxr-xr-x&nbsp;&nbsp1&nbsp;&nbsp;noparanoia&nbsp;&nbsp;&nbsp;&nbsp;users&nbsp;&nbsp;&nbsp;&nbsp;4096 01.07.1981 20:30 temp/<br>\
                            drwxr-xr-x&nbsp;&nbsp1&nbsp;&nbsp;noparanoia&nbsp;&nbsp;&nbsp;&nbsp;users&nbsp;&nbsp;&nbsp;&nbsp;4096 01.07.1981 20:30 video/<br>\
                            drwxr-xr-x&nbsp;&nbsp1&nbsp;&nbsp;noparanoia&nbsp;&nbsp;&nbsp;&nbsp;users&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 01.07.1981 20:30 mumble.txt<br>\
                            drwxr-xr-x&nbsp;&nbsp1&nbsp;&nbsp;noparanoia&nbsp;&nbsp;&nbsp;&nbsp;users&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 01.07.1981 20:30 file2.txt\
                        ";
					break;
				case "/files":
					return "\
                            <br>\
                            drwxr-xr-x&nbsp;&nbsp1&nbsp;&nbsp;noparanoia&nbsp;&nbsp;&nbsp;&nbsp;users&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 01.07.1981 20:30 " + "<a href='http://noparanoia.4ourty2.org/files/gvim74.exe'>gvim74.exe</a>";
					break;
				default:
					return "\
						<br>\
						drwxr-xr-x&nbsp;&nbsp1&nbsp;&nbsp;noparanoia&nbsp;&nbsp;&nbsp;&nbsp;users&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 01.07.1981 20:30 ./"
					break;

			}
		case "cat mumble.txt":
			switch (folder) {
				case "/":
					return "\
                        <br>test\
                    ";
					break;
				default:
					return " ";
			}
		case "ping":
			return "\
					<br>\
					usage: ping [ip-address or DNS-name]<br>\
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exmample: ping 127.0.0.1";
			break;
		case "traceroute":
			return "\
					<br>\
					usage: traceroute [ip-address or DNS-name]<br>\
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exmample: traceroute 127.0.0.1";
			break;
		case "killnodes.sh":
			return "\
					<br>\
					usage: killnodes.sh [number of nodes (MAX IS 4 NODES)] [ip-address or DNS-name for all the noders]<br>\
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exmample: killnodes.sh 2 123.123.123.123 213.213.213.213";
			break;
		case "killnodes.sh_wrong":
			return "\
					<br>\
					Number of nodes not matching number of given ip adresses";
			break;
		case "clear":
			return "screen cleared";
			break;
		case "bug":
			return "<br><br>\
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%%<br>\
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%%<br>\
			&nbsp;&nbsp;&nbsp;&nbsp;%%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%%<br>\
			<br>\
			<br>\
			&nbsp;&nbsp;&nbsp;&nbsp;%%&nbsp;%%%%%%%%%%&nbsp;%%<br>\
			&nbsp;&nbsp;&nbsp;&nbsp;%%%&nbsp;%%%%%%%%&nbsp;%%%<br>\
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%%%%%%%%%%%%%%<br>\
			&nbsp;&nbsp;&nbsp;&nbsp;%%%%%%%%%%%%%%%%<br>\
			&nbsp;&nbsp;&nbsp;&nbsp;%%%%%%%%%%%%%%%<br>\
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%%%%%%%%%%%%%<br>\
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%%%%%%%%%%%%%<br>\
			<br>\
			<br>\
			&nbsp;&nbsp;%%%%%%%%%%%%%%%%%%%<br>\
			<br>\
			&nbsp;&nbsp;%%&nbsp;&nbsp;%%%%%%%%%%%%&nbsp;&nbsp;%%<br>\
			&nbsp;&nbsp;%%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%%%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%%<br>\
			&nbsp;&nbsp;&nbsp;%%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%%<br>\
			&nbsp;&nbsp;&nbsp;&nbsp;%%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%%<br>\
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F9N2PB<br>\
			&nbsp;";
			break;
		case "":
			return "";
			break;
		default:
			return "<br>" + input + ": command not found, type 'help' for a list of available commands";
			break;
	}

}

function folderoutput(input, folder) {
	return "<br>" + input + ": No such file or directory";
}