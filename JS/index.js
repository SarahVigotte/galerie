$(document).ready(function(){
    let mini = $("#thumbnails img");
    let full = $(".full-img img");
    let layer = $(".layer");

    full.hide();
    layer.hide();

    mini.click(function (e) {
        e.preventDefault();
        // .index permet de renvoyer l'index de la source précisée
        full.eq($(this).index("#thumbnails img")).toggle();
        layer.toggle();
    });

    layer.click(function (e) {
        e.preventDefault();
        full.hide();
        layer.hide();
    });












});
