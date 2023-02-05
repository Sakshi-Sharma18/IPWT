function validate()
{
	var p1 = document.getElementById("pass").value;
	var p2 = document.getElementById("Cpass").value;
    
    var pattern = "/^[a-z\s]+$/i";
    if(document.getElementById("fname").value == "")
    {
        alert("Name is required!");
        return false;
    }
	if(!pattern.match(document.getElementById("fname").value))
	{
	    alert("Name should not contain numbers!");
	    return false;
	}
    if((document.getElementById("fname").value).length >25)
	{
	    alert("Name length should be 25 of less!");
	    return false;
	}

    var pattern = "/^[a-z0-9._-]+@[a-z]+.[a-z.]{2,5}$/i";
    if(!pattern.match(document.getElementById("email").value)){
        alert("Invalid Email Address!!");
        return false;
    }

    var pattern="/^[A-Z](?=.*[a-z])(?=.*\d)(?=.*[@$*&])[A-Za-z\d@$*&]{8,15}$/"
    if(!pattern.match(p1)){
        alert("Password must contain \nNumbers, \nAlphabets, and \nSpecial Characters [@,$,&,* only]. \nThe first letter must be capital.");
        return false;
    }
    if(p1!=p2)
	{
		alert("PASSWORD DOSEN't MATCH");
		return false;
	}

    var patter="/^(\+[0-9]{2,3}[ ])?[0-9]{5}[ ][0-9]{5}$/"
    if(!pattern.match(document.getElementById("phn").value)){
        alert("Give valid phone number with Country code!!");
        return false;
    }		
}