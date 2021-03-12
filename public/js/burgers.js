// $(".eat-burger").on("click", function (event) {
$(function () {
    // $("#ul-burger").delegate("button", "click", function () {
        $(".eat-burger").on("click", function (event) {
        // console.log("YOU CLICK ME --->");
        var id = $(this).data("id");
        // console.log('id ----', id);
        var newDevState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/burgers/" + id, {
            type: "PUT",
            data: newDevState
        }).then(
            function () {
                console.log("burger devoured", newDevState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };
        $("#burger").val("");
        // Send the POST request.
        $.ajax("/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Your burger has been added");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});