$(() => {

    /* Global Variables
    =================================== */

    const $burgerTobeDevour = $("#burgerTobeDevour");
    const $burgerDevoured = $("#burgerDevoured");
    const $burgerName = $("#burgerName");
    const $addB = $(".addB");
    const $message = $("#message");
    const $input = $("input");

    $message.hide();

    /* FUNCTIONS
    =================================== */

    function devourBurger(burgerId) {

        $.ajax({
            method: "PUT",
            url: "/api/devour",
            data: { id: burgerId }
        }).then(() => {
            location.reload();
        });
    }

    function addBurger(burgerDatas) {

        $.post("/api/add", burgerDatas, () => {
            location.reload();
        });
        $burgerName.val("");
    }

    function deleteBurger(burgerId) {

        $.ajax({
            method: "DELETE",
            url: `/api/burger/${burgerId}`
        }).then(() => {
            location.reload();
        });
    }


    /* EVENTS
    =================================== */

    $(".btnDevourMe").on("click", (event) => {

        const burgerId = $(event.currentTarget).attr("data-id");

        devourBurger(burgerId);

    });

    $(".btnDelete").on("click", (event) => {

        event.preventDefault();

        const burgerId = $(event.currentTarget).attr("data-id");

        deleteBurger(burgerId);


    });


    $(".addBurger").on("click", (event) => {

        event.preventDefault();

        if ($input.val() === "") {

            $message.text("Burger Name can not be empty!")
                .removeClass()
                .addClass("alert alert-danger")
                .attr("role", "alert")
                .show()
                .fadeOut(3000)
                .appendTo($addB);
        } else {

            const burgerDatas = {
                burger_name: $burgerName.val().trim(),
                devoured: false
            };

            addBurger(burgerDatas);
        }

    });

});