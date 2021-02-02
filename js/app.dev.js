function $(id) {
    return document.querySelector(id)
}

let o = $('#overlay');

onload = () => {
    o.style.opacity = '0'
    setTimeout(function(){
        o.style.display = 'none';
    },400)
}