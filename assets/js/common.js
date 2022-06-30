
function searchkeyup(event) {
    let keywords = event.currentTarget.value

    if (keywords.length > 0) {
        showSuggestionbox()
    } else {
        hideSuggestionbox()
    }

}

function clearSearchInput() {
    let input = document.querySelector('#searchContainer input')
    input.value = ""
    hideSuggestionbox()
}

function showSuggestionbox() {
    let searchContainer = document.querySelector('#searchContainer');

    searchContainer.classList.add('suggestionVisible')
}
function hideSuggestionbox() {
    let searchContainer = document.querySelector('#searchContainer');

    searchContainer.classList.remove('suggestionVisible')
}


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