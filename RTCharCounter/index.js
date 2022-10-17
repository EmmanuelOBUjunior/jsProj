const textAreaEl = document.getElementById('textarea');
const totalCharEl = document.getElementById('total-counter')


textAreaEl.addEventListener("keyup", ()=>{
	updateCounter();
})

function updateCounter() {
	totalCharEl.innerText = textAreaEl.value.length
}