let input = document.querySelector("input");
let ul = document.querySelector(".todos");
let finishBtn = document.querySelector(".finish");
document.querySelector(".clear").onclick = function() {
	ul.innerHTML = "";
}
input.onkeypress = function() {
	if (event.keyCode == 13 && !(input.value == "")) {
		let img = document.createElement("img");
		//console.log(event.keyCode);
		let li = document.createElement("li");
		let span = document.createElement("span");
		img.setAttribute("src", "icons/garbage.svg");
		li.appendChild(img);
		span.innerHTML = input.value;
		li.appendChild(span);
		ul.appendChild(li);
		input.value = "";
	}
};
ul.onclick = function() {
	let target = event.target;

	if (target.tagName == "LI") {
		console.log(target.tagName);
		target.classList.toggle("checked");
	}

	if (target.tagName == "IMG") {
		 target.parentElement.remove();
	}
};
finishBtn.onclick = function() {
	let items = document.querySelectorAll(".todos li");
	for (let j = 0; j < items.length; j++) {
		items[j].classList.toggle("checked");
	}
};
