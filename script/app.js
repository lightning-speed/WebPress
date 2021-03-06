var selectedComponent;
var selectedComponentList;
var php_output;
var ci = 0;
function startApp() {
		if (document.body.offsetHeight > document.body.offsetWidth) {
			window.open("no.html","_self");
	}
	document.body.scrollTop = 0;
	setInterval(save, 1000);

}
function select_component(id) {
	switch (id) {
		case 1: {
			selectedComponent = document.createElement("BUTTON");
			selectedComponent.innerHTML = "Button";
			selectedComponent.id = "button";
			break;
		}
		case 2: {
			selectedComponent = document.createElement("SPAN");
			selectedComponent.innerHTML = "Span";
			selectedComponent.id = "span";
			break;
		}
		case 3: {
			selectedComponent = document.createElement("IMG");
			selectedComponent.id = "image";
			selectedComponent.src = "../assets/images/image.png";

			break;
		}
		case 4: {
			selectedComponent = document.createElement("DIV");
			selectedComponent.innerHTML = "Div";
			selectedComponent.id = "div";
			break;
		}
		case 5: {
			selectedComponent = document.createElement("HR");
			selectedComponent.id = "hr";
			break;
		}
		case 6: {
			selectedComponent = document.createElement("INPUT");
			selectedComponent.id = "input";
			break;
		}
		default: { break; };
	}
	selectedComponent.id += ci;
	ci++;
	component_box.appendChild(selectedComponent);

	addComponentInList(selectedComponent);
}

function addComponentInList(component) {
	component_list_box.innerHTML += "<button class='component_button' onclick=open_property(this)>" + component.id + "</button>";
	open_property(document.getElementById("component_list_box").children[document.getElementById("component_list_box").children.length - 1]);
}
function open_property(list_component) {
	var buttons = document.getElementById("component_list_box").children;
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.backgroundColor = "rgb(255,255,255)";
	}

	var component = document.getElementById(list_component.innerHTML);
	selectedComponent = component;
	list_component.style.backgroundColor = "rgb(240,240,240)";
	selectedComponentList = list_component;
	id_box.value = selectedComponent.id;
	class_box.value = selectedComponent.className;
	width_box.value = selectedComponent.style.width;
	height_box.value = selectedComponent.style.height;
	position_box.value = selectedComponent.style.position;
	left_box.value = selectedComponent.style.left;
	top_box.value = selectedComponent.style.top;
	top_box.value = selectedComponent.style.top;
	top_box.z_index = selectedComponent.style.zIndex;
	text_color_box.value = selectedComponent.style.color;
	background_color_box.value = selectedComponent.style.backgroundColor;
	padding_box.value = selectedComponent.style.padding;
	margin_box.value = selectedComponent.style.margin;
	outline_box.value = selectedComponent.style.outline;
	border_box.value = selectedComponent.style.border;
	border_radius_box.value = selectedComponent.style.borderRadius;
	inner_html_box.value = selectedComponent.innerHTML;
	src_box.value = selectedComponent.src;
	value_box.value = selectedComponent.value;
	font_size_box.value = selectedComponent.style.fontSize;
	font_box.value = selectedComponent.style.fontFamily;
	type_box.value = selectedComponent.type;

	var fields = document.getElementById("editBox").children;
	for (var i = 0; i < fields.length; i++) {
		if (fields[i].value == "undefined") {
			fields[i].value = "";
		}
	}
}
function save() {
	if (selectedComponent.id != id_box.value) {
		selectedComponentList.innerHTML = id_box.value;
		selectedComponent.id = id_box.value;
	}
	selectedComponent.className = class_box.value;
	selectedComponent.style.width = width_box.value;
	selectedComponent.style.height = height_box.value;
	selectedComponent.style.position = position_box.value;
	selectedComponent.style.left = left_box.value;
	selectedComponent.style.top = top_box.value;
	selectedComponent.style.top = top_box.value;
	selectedComponent.style.zIndex = top_box.z_index;
	selectedComponent.style.color = text_color_box.value;
	selectedComponent.style.backgroundColor = background_color_box.value;
	selectedComponent.style.padding = padding_box.value;
	selectedComponent.style.margin = margin_box.value;
	selectedComponent.style.outline = outline_box.value;
	selectedComponent.style.border = border_box.value;
	selectedComponent.style.borderRadius = border_radius_box.value;
	selectedComponent.innerHTML = inner_html_box.value;
	selectedComponent.src = src_box.value;
	selectedComponent.value = value_box.value;
	selectedComponent.style.fontSize = font_size_box.value;
	if (font_box.value != "")
		selectedComponent.style.fontFamily = font_box.value;
	selectedComponent.type = type_box.value;


}
function removeCom() {
	var list = selectedComponentList;
	try {
		document.getElementById(list.innerHTML).remove();
	} catch (e) { }
	list.remove();
	var lists = document.getElementById("component_list_box").children;
	open_property(lists[lists.length - 1]);
}
function copyCom() {
	var newc = selectedComponent.cloneNode(true);
	newc.id += "c";
	component_box.appendChild(newc);
	addComponentInList(newc);
}
function phpCall(url) {
	var request = new XMLHttpRequest();
	request.onload = function () {
		php_output = this.responseText;
	}
	request.open("GET", url, true);
	request.send();

}

function m() {
	if (document.body.offsetHeight > document.body.offsetWidth) {
		navBar.style.display = "none";
		mobBar.offsetHeight += 60;
	}
	else {
		mobBar.style.display = "none";
		menuButton.style.display = "none";
	}
}
function menu() {
	if (mobBar.style.top != "-100%") {
		mobBar.style.top = "-100%";
	}
	else {
		mobBar.style.top = "0%";
	}
}
function copyCode() {
	navigator.clipboard.writeText(component_box.innerHTML);
	alert("Code Copied");
}