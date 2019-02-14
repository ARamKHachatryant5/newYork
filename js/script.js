const click = (tag, pixel) => {
    $(tag).on("click", () => {
        $("#menuDiv").css({ "margin-right": pixel });
    });
}
click("#menu", "0px");
click("#cancel", "-300px");
