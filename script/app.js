var selectedComponent;
function startApp() {

}
function select_component(id) {
	switch (id) {
		case 1:{
			selectedComponent = document.createElement("BUTTON");
			selectedComponent.innerHTML = "Button";
			selectedComponent.id = "button";
			break;
		}
		case 2:{
			selectedComponent = document.createElement("SPAN");
			selectedComponent.innerHTML = "Span";
			selectedComponent.id = "span";
			break;
		}
		default: { break;};
	}
	selectedComponent.id += parseInt(Math.random() * 10000 % 10000);

	component_box.appendChild(selectedComponent);

	addComponentInList(selectedComponent);
}

function addComponentInList(component) {
	component_list_box.innerHTML += "<button class='component_button' onclick=open_property(this)>" + component.id + "</button>";
}
function open_property(list_component) {
	var component = document.getElementById(list_component.innerHTML);
	component.innerHTML = "fr";
}