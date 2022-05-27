var today = moment();
let timeBlock = document.querySelectorAll(".time-block")


$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    updateTime();
    $(".saveBtn").on("click", function () {
        let plannerText = document.querySelectorAll(".description").value;
        let time = timeBlock.getAttribute("id");
        localStorage.setItem(time, plannerText)

    });

    function updateTime() {
    const currentTime = moment().hour();
    const blockTime = parseInt(timeBlock.getAttribute("id"))

        timeBlock.forEach(function() {
            if(blockTime < currentTime) {
                $(this).addClass("past")
            } else if (blockTime === currentTime) {
                $(this).addClass("present")
                $(this).removeClass("past")
            } else {
                $(this).removeClass("present")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })
    }


});