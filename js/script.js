$(document).ready(function () {
    const click = (tag, pixel) => {
        $(tag).on("click", () => {
            $("#menuDiv").css({ "margin-right": pixel });
        });
    }
    click("#menu", "0px");
    click("#cancel", "-300px");
    $(window).scroll(() => {
        $("header").css({ "background-color": "brown" })
    });
    $(".owl-carousel").owlCarousel({
        items: 3,
        nav: true,
        margin: 10,
        navText: ["<i class='fa fa-chevron-left fa-6x'></i>", "<i class='fa fa-chevron-right fa-6x'></i>"]
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
});