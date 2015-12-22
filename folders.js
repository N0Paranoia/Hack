function validateFolder(input)
{
	switch(input)
	{
		case "cd /":
			alert("slash");
			break;
		case "cd home":
			currentfodernow = "home";
			break;
		default:
			alert("no such file or directory");
			break;
	}
	alert(input);
}

