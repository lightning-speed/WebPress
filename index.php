<!DOCTYPE html>
<html>
	<title>WebPress</title>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="ui/default.css" />
	<link rel="stylesheet" href="ui/components.css" />
	<script src="script/app.js"></script>
  <script>
	
	</script>
</div>
	<body onload="startApp()" >
		<div class="main_box" id="component_box"></div>
		<div class="list_box" id="component_list_box"></div>
		<p
			style="
				margin: 10px;
				padding: 7px;
				text-align: center;
				width: 200px;
				float: right;
			"
		>
			Component List
		</p>
		<p
			style="
				margin: 10px;
				padding: 7px;
				text-align: center;
				width: 200px;
				float: left;
			"
		>
			Add Component
		</p>
		<p
			style="
				margin: 10px;
				margin-right: -30px;
				padding: 7px;
				text-align: center;
				width: 200px;
				float: right;
			"
		>
			Edit Component
		</p>

		<div class="selection_box">
			<button class="component_button" onclick="select_component(1);">
				Button
			</button>
			<button class="component_button" onclick="select_component(2);">Span</button>
			<button class="component_button" onclick="select_component(3);">
				Image
			</button>
			<button class="component_button" onclick="select_component(4);">Div</button>
		</div>
		<div class="edit_box" id="editBox">
			<button class="component_button" onclick="removeCom();">Remove</button>
			<input class="text_field" placeholder="ID" id="id_box" />
			<input class="text_field" placeholder="Class" id="class_box" />
			<input class="text_field" placeholder="Width" id="width_box" />
			<input class="text_field" placeholder="Height" id="height_box" />
			<input class="text_field" placeholder="Position" id="position_box" />
			<input class="text_field" placeholder="X" id="left_box" />
			<input class="text_field" placeholder="Y" id="top_box" />
			<input class="text_field" placeholder="Z-index" id="z_index_box" />
			<input class="text_field" placeholder="Text Color" id="text_color_box" />
			<input
				class="text_field"
				placeholder="Background Color"
				id="background_color_box"
			/>
			<input class="text_field" placeholder="Inner html" id="inner_html_box" />
			<input class="text_field" placeholder="Margin" id="margin_box" />
			<input class="text_field" placeholder="Padding" id="padding_box" />
			<input class="text_field" placeholder="Border" id="border_box" />
			<input
				class="text_field"
				placeholder="Border-Radius"
				id="border_radius_box"
			/>
			<input class="text_field" placeholder="Outline" id="outline_box" />
			<input class="text_field" placeholder="Src" id="src_box" />
			<input class="text_field" placeholder="Value" id="value_box" />
			<input
				class="text_field"
				placeholder="Background Image"
				id="background_box"
			/>
			<input class="text_field" placeholder="Font Size" id="font_size_box" />
			<input class="text_field" placeholder="Font" id="font_box" />
		</div>
	</body>
</html>


