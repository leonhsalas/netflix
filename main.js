const primero = document.getElementById("primero");
const segundo = document.getElementById("segundo");

const e = 1

primero.addEventListener("click", () => {
    primero.toggle("close")
    segundo.toggle("open")
})

segundo.addEventListener("click", () => {
    primero.remove("close")
    segundo.remove("open")
})
