const inscriptions = document.querySelectorAll('.inscription');
const body = document.body;


function open_close_btn(id) { 
    const element = document.getElementById(id);
    closeInscriptions(element);
    element.classList.toggle('inscriptionActive');
}

function removeInscriptionActive(id) { // при нажатии на надпись она закроется
    const element = document.getElementById(id);
    element.classList.remove('inscriptionActive');
}

// при нажатии на любое место кроме кнопок или вылезающей надписи
// открытая кнопка закроется
body.addEventListener("click", function (event) {
    
    if (event.target.nodeName === "MAIN") {
        closeInscriptions();
    }

    return;
})

// данная функция закрывает либо все кнопки,
// либо все кнопки кроме той на которую нажали
function closeInscriptions(element) {

    inscriptions.forEach(function (item) {
        if (element === item) {
            return;
        }

        if (item.classList.contains('inscriptionActive')) {
            item.classList.remove('inscriptionActive');
        }
    })
}