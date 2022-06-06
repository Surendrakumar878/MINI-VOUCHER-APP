// Add the coffee to local storage with key "coffee"
let div = document.getElementById("voucher_list")


let user = JSON.parse(localStorage.getItem("user"))

let cartLSData = JSON.parse(localStorage.getItem("purchase")) || []
async function main() {
    let res = await fetch("https://masai-vouchers-api.herokuapp.com/api/vouchers")
    let data = await res.json()
    console.log(data[0].vouchers[0].name)
    append(data[0].vouchers)
        // localStorage.setItem('coffee', JSON.Stringfy(data.menu.data))
        // localStorage.setItem("user", JSON.stringify(data[0].vouchers))
}
main()

function append(coffee) {
    coffee.forEach((el) => {
        let div1 = document.createElement("div")
        let img = document.createElement("img")
        let p1 = document.createElement("p")
        p1.innerHTML = el.name
        let p2 = document.createElement("p")
        p2.innerHTML = el.price
        let p3 = document.createElement("button")
        p3.innerHTML = "Buy"
        p3.addEventListener('click', function() {
            AddToCart(el);
        })
        img.src = el.image
        console.log(el.title)
        div1.append(img, p1, p2, p3)
        div.append(div1)
    })
}
document.getElementById("wallet_balance").innerHTML = user[0].wallet;
let amo = 0

function AddToCart(element) {
    cartLSData.push(element);
    amo += element.price

    if (user[0].wallet >= amo && 0 <= amo) {
        document.getElementById("wallet_balance").innerHTML = user[0].wallet - amo;
        localStorage.setItem("wallet_balance", JSON.stringify(user[0].wallet - amo))
        localStorage.setItem("purchase", JSON.stringify(cartLSData))
        alert("Hurray! purchase successful")
    } else {
        alert("Sorry! insufficient balance")
    }

    // alert(" addded to successfully")
}