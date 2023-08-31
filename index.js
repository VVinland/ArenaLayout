const buttons = document.querySelectorAll('button');
const containers = document.querySelectorAll('.containers');
const signatures = document.querySelectorAll('.signature');
const body = document.body;


function open_close_btn(id) {
    const element = document.getElementById(id);
    closeSignatures(element);
    element.classList.toggle('signatureActive');
}

function removeSignatureActive(id) {
    const element = document.getElementById(id);
    element.classList.remove('signatureActive');
}

body.addEventListener("click", function (event) {

    if (event.target.nodeName === "MAIN") {
        closeSignatures();
    }

    return;
})

function closeSignatures(element) {

    signatures.forEach(function (item) {
        if (element === item) {
            return;
        }

        if (item.classList.contains('signatureActive')) {
            item.classList.remove('signatureActive');
        }
    })
}