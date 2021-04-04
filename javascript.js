document.addEventListener('DOMContentLoaded', submitInfo);

function submitInfo() {
	document.getElementById('submitButton').addEventListener('click', function (event) {
		var req = new XMLHttpRequest();
		var postWebsite = "http://httpbin.org/post";            //post website
		var user = {
			names: null,
			email: null,                                    //the user data
			password: null,
			improve: null,
		};

		user.names = document.getElementById("names").value;
		user.email = document.getElementById("email").value;
		user.password = document.getElementById("password").value;
		user.improve = document.getElementById("improve").value;

		req.open("POST", postWebsite, true);                //post to the httpbin webiste
		req.setRequestHeader("Content-Type", "application/json");

		req.addEventListener("load", function () {
			if (req.status > 199 && req.status < 400) {			//that means it works and will proceed
				var input = JSON.parse(JSON.parse(req.responseText).data);
				console.log(input);
				document.getElementById("namePost").textContent = input.names;
				document.getElementById("emailPost").textContent = input.email;         //uers's email for the output           
				//document.getElementById("passwordPost").textContent = input.password;	//this will come back from the post
				document.getElementById("improvePost").textContent = input.improve;
			} else {
				error();
			}
		});
		req.send(JSON.stringify(user));
		event.preventDefault();
	});
}

function error() {										//alert pop up if something is wrong
	alert("Something went wrong");
}

// carousel
var num = 1;

function next(n) {                        //onclick function
  nextPic(num += n);
}

function nextPic(n) {                     //this function is for the left and right buttons
  var i;
  var pics = document.getElementsByClassName("pics");
  if (n > pics.length) {
    num = 1
  }
  if (n < 1) {num = pics.length}
  for (i = 0; i < pics.length; i++) {
      pics[i].style.display = "none";
  }
  pics[num-1].style.display = "block";
}

autoMove();

function autoMove() {                       //this function moves the carousel automatically
  var i;
  var pics = document.getElementsByClassName("pics");
  for (i = 0; i < pics.length; i++) {
    pics[i].style.display = "none";
  }
  num++;
  if (num > pics.length) {                   //reset back to first picture
    num = 1
  }
  pics[num-1].style.display = "block";
  setTimeout(autoMove, 3000);             //this will time the auto mover
}
    


