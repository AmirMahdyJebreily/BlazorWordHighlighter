function returnInnerHtml(id) {
    var element = document.getElementById(id);

    return element.innerHTML;

}

function rplaceInnerHtml(id, text) {
    document.getElementById(id).innerHTML = text;

}