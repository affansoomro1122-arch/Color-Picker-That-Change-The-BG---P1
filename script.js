const colorPicker = document.querySelector("#colorGrab");
const colorChangeContainer = document.querySelector("#colorChangeContainer");

// I do a mistake in input becasue i don't know so add input in event listner so i take guide from claude ai, now i know that
colorPicker.addEventListener("input", (e) => {
    colorChangeContainer.style.backgroundColor = colorPicker.value;
});
