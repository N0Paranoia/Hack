var str = "Dit is een test";

function output(input, folder)
{
	switch(input)
	{
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
						clear ......................... clear the sceen\
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
            switch(folder)
            {
                case "/":
                    var str = "Test string";
                    return "\
                            <br>\
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
            }
        case "cat mumble.txt":
            switch(folder)
            {
                case "/":
                    return "\
                        <br>test\
                    ";
                    break;
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
					usage: killnodes.sh [number of nodes] [ip-address or DNS-name for all the noders]<br>\
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exmample: killnodes.sh 2 123.123.123.123 213.213.213.213";
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
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F9N2PB";
			break;
		case "":
			return "";
			break;		
		default:
			return "<br>" + input + ": command not found, type 'help' for a list of available commands";	
			break;
	}

}

function folderoutput(input, folder)
{
	return "<br>" + input + ": No such file or directory";
}