$(document).ready(function () {
    const click = (tag, pixel, zindex, transition) => {
        $(tag).on("click", () => {
            $("#menuDiv").css({ "margin-right": pixel });
            $(".elem4").css({ "z-index": zindex, "transition": `${transition}s` });

        });
    }
    click("#menu", "0px", "-1","0");
    click("#cancel", "-300px", "1","1");
    $(window).scroll(() => {
        $("header").css({ "background-color": "brown" })
    });
    $(".elem2 span").typed({
        strings: [
            "New York",
            "Los Santos",
            "San Francisko"
        ],
        typeSpeed: 200,
        backDelay: 200,
        loop: true
    })
    $('.elem4').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});