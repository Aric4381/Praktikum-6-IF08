$(document).ready(function () {
    $("#tombol-hide").click(function () {
        $("div").hide('slow');
    });
});

$(document).ready(function () {
    $("#tombol-show").click(function () {
        $("div").show('slow');
    });
});

$(document).ready(function () {
    $("#tombol-flashbang").click(function () { 

    });
});

$(document).ready(function () {
    $("#tombol-night").click(function () { 
        $("#badan").toggleClass("dark-mode");
    });
});