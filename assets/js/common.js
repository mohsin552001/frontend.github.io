







window.addEventListener('load', () => {
    onwindowload()
})

function onwindowload() {
    loadheader()
    sidebarload()
}


function loadheader() {
    fetch('common/header.html')
        .then(r => r.text())
        .then((htmlText) => {
            let headerPlaceholder = document.querySelector('#headerplaceholder')
            headerPlaceholder.innerHTML = htmlText
        })
}



function sidebarload() {
    fetch('common/sidebar.html')
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
}