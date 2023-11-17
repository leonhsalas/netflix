const primero = document.getElementById("primero");
const segundo = document.getElementById("segundo");


primero.addEventListener("click", () => {
    primero.toggle("close")
    segundo.toggle("open")
})

segundo.addEventListener("click", () => {
    primero.remove("close")
    segundo.remove("open")
})
