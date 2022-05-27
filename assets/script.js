var today = moment();
let timeBlock = document.querySelectorAll(".time-block")
const nine = document.getElementById("#9am")
const ten = document.getElementById("#10am")
const eleven = document.getElementById("#11am")
const twelve = document.getElementById("#12pm")
const one = document.getElementById("#1pm")
const two = document.getElementById("#2pm")
const three = document.getElementById("#3pm")
const four = document.getElementById("#4pm")
const five = document.getElementById("#5pm")


$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    updateTime();
    $(".saveBtn").on("click", function () {
        let plannerText = $(this).siblings(".description").val();
        let time = $(this).prev().attr("id")
        localStorage.setItem(time, plannerText)

    });

    $("#9am").val(localStorage.getItem("9am"))
    $("#10am").val(localStorage.getItem("10am"))
    $("#11am").val(localStorage.getItem("11am"))
    $("#12pm").val(localStorage.getItem("12pm"))
    $("#1pm").val(localStorage.getItem("1pm"))
    $("#2pm").val(localStorage.getItem("2pm"))
    $("#3pm").val(localStorage.getItem("3pm"))
    $("#4pm").val(localStorage.getItem("4pm"))
    $("#5pm").val(localStorage.getItem("5pm"))



    function updateTime() {
        // const currentTime = moment().hour();
        // const blockTime = parseInt($(this).attr("id"));
        

        $(".time-block").each(function () {
            const currentTime = moment().hour();
            const blockTime = parseInt($(this).attr("id"));
            console.log(blockTime)
            console.log(currentTime)
            if (blockTime < currentTime) {
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