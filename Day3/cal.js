function display(val) {
    document.getElementById("ans").value += val
}
function solve() {
    let x = document.getElementById("ans").value
    let y = eval(x)
    document.getElementById("ans").value = y
}
function cl() {
    document.getElementById("ans").value = ""
}

