$(document).ready(() => {
    $(".switch").find("input[type='checkbox'][id$='scoreboard']").on("change", function () {
        var status = $(this).prop('checked');
        io.emit("toggleScoreboard", status);
    });
    $(".switch").find("input[type='checkbox'][id$='radar']").on("change", function () {
        var status = $(this).prop('checked');
        io.emit("toggleRadar", status);
    });
});