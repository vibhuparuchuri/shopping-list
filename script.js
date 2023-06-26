var button = document.getElementById("enter");
var input = document.getElementById("userinput");

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

var liList = document.querySelectorAll("li");
var countLi = liList.length;


for (var i= 0; i < countLi;i++)
{
	liList[i].addEventListener("click",toggleDoneAfterClick)
}

var btnList = document.querySelectorAll("button");

for (var i = 1; i < btnList.length; i ++)
{
	btnList[i].addEventListener("click",deleteListAfterClick);
}


function createButton(div)
{

	var button = document.createElement("button");
	button.appendChild(document.createTextNode("X"));
	button.setAttribute('class','btn-red');
	button.addEventListener("click", deleteListAfterClick);
	div.append(button);
	

}

function changeBackground(){
	var liList = document.querySelectorAll("li");
	for (var i= 0; i < countLi;i++)
	{
		if (i%2 == 0)
		{
			liList[i].parentNode.setAttribute('class','wrapper-odd');
		}
		else{
			liList[i].parentNode.setAttribute('class','wrapper-even');
		}
	}
}
function createListElement() {

	
	var ul = document.querySelector("ul");
	var div = document.createElement("div");
	ul.append(div);

	if (countLi % 2 == 0)
	{
		div.setAttribute('class','wrapper-odd');
	}
	else
	{
		div.setAttribute('class','wrapper-even');
	}
	var li = document.createElement("li");
	li.addEventListener("click",toggleDoneAfterClick)
	li.appendChild(document.createTextNode(input.value));
	div.append(li);
	createButton(div);
	input.value = "";
	changeBackground();
}

function inputLength() {
	return input.value.length;
}

function addListAfterClick(event) {
	if (inputLength() > 0) {
		createListElement();
		countLi += 1;
	}
}

function deleteListAfterClick(event){
	event.target.parentNode.remove();
	countLi -= 1;
	changeBackground();
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		countLi += 1;
	}
}

function toggleDoneAfterClick(event)
{
	event.target.classList.toggle("done");
}


