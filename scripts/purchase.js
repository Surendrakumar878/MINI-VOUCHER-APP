// On clicking remove button the item should be removed from DOM as well as localstorage.
let cartLSData = JSON.parse(localStorage.getItem("purchase"))
let user = JSON.parse(localStorage.getItem("wallet_balance"))
let div = document.getElementById("purchased_vouchers")
appen(cartLSData)


function appen(cartLSData) {
    cartLSData.forEach((el, index) => {
        let div1 = document.createElement("div")
        let img = document.createElement("img")
        let p1 = document.createElement("p")
        p1.innerHTML = el.name
        let p2 = document.createElement("p")
        p2.innerHTML = el.price
        let p3 = document.createElement("button")
        p3.innerHTML = "remove"
        p3.addEventListener('click', function() {

            removeItem(el, index);
        })
        img.src = el.image
        console.log(el.name)
        document.getElementById("wallet_balance").innerHTML = user;
        div1.append(img, p1, p2)
        div.append(div1)
    })
}

function removeItem(elem, index) {
    cartLSData.splice(index, 1);
    localStorage.setItem('coffee_count', JSON.stringify(cartLSData))
    window.location.reload();
    var updatedData = JSON.parse(localStorage.getItem("cartLSData"));
    displayData(updatedData);
}