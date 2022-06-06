document.querySelector("#form");
// .addEventListener("submit", jobSubmit);
var user = []

function Submit() {
    event.preventDefault();

    // formId.inputId.value

    var Obj = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        address: document.querySelector("#address").value,
        wallet: document.querySelector("#amount").value,
    };
    user.push(Obj);
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    // redirect to applied jobs
    window.location.href = "index.html";

}