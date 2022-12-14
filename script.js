var ul = document.getElementById("list");
var li;

var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

function addItem() {
	var input = document.getElementById("input");
	var item = input.value;
	ul = document.getElementById("list");
	var textnode = document.createTextNode(item);

	if (item === "") {
		return false;
		// Add a p tag and assign a value of "Enter Your TODO"
	} else {
		// Creating li
		li = document.createElement("li");

		// Creating checkbox
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.setAttribute("id", "check");

		//Creating label
		var label = document.createElement("label");
		label.setAttribute("for", "item"); // optional

		// Add these element ito web
		// ul.appendChild(label);
		li.appendChild(checkbox);
		label.appendChild(textnode);
		li.appendChild(label);

		ul.insertBefore(li, ul.childNodes[0]);
		setTimeout(() => {
			li.className = "visual";
		}, 2);

		input.value = "";
	}
}

function removeItem() {
	li = ul.children;
	for (let index = 0; index < li.length; index++) {
		while (li[index] && li[index].children[0].checked) {
			//li[index] chechikg present index and && li[index].children[0] as well as inside that index
			ul.removeChild(li[index]);
		}
	}
}
