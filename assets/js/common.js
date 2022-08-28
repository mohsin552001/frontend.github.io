
window.addEventListener('load', () => {
    onwindowload()
})

function onwindowload() {
    loadheader()
    sidebarload()
}


function loadheader() {
    fetch('/common/header.html')
        .then(r => r.text())
        .then((htmlText) => {
            let headerPlaceholder = document.querySelector('#headerplaceholder')
            headerPlaceholder.innerHTML = htmlText
        })
}



function sidebarload() {
    fetch('/common/sidebar.html')
        .then(r => r.text())
        .then((htmlText) => {
            let sidebarPlaceholder = document.querySelector('#sidebarplaceholder')
            sidebarPlaceholder.innerHTML = htmlText
        })
}

function sidebarDropDownToggleClicked(targetElement) {
    targetElement.closest('.dropdownSection').classList.toggle('active')

}

function showCreatLableDialog() {
    let dialog = document.querySelector('#labledialogeEditor')
    dialog.classList.add('active')
    showDialoge(dialog)
}

function hideCreatLableDialog() {
    let dialog = document.querySelector('#labledialogeEditor')
    dialog.classList.remove('active')
    closeDialoge(dialog)
}



function closeDialoge(dialogeElement) {
    dialogeElement.classList.remove('active')
}


function showDialoge(dialogeElement) {
    dialogeElement.classList.add('active')
}


function getBase64fromFile(file) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            resolve(reader.result)
        }
        reader.onerror = function (error) {
            reject(error)
        }
    }
    )
}