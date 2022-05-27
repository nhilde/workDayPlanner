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
        let time =  $(this).prev().attr("id")
        localStorage.setItem(time, plannerText)

    });

    $(nine).text(localStorage.getItem("9"))
    // ten.innerHTML =+ localStorage.getItem("10")
    // eleven.innerHTML =+ localStorage.getItem("11")
    // twelve.innerHTML =+ localStorage.getItem("12")
    // one.innerHTML =+ localStorage.getItem("1")
    // two.innerHTML =+ localStorage.getItem("2")
    // three.innerHTML =+ localStorage.getItem("3")
    // four.innerHTML =+ localStorage.getItem("4")
    // five.innerHTML =+ localStorage.getItem("5")

    

    function updateTime() {
    const currentTime = moment().hour();
    const blockTime = parseInt($(this).attr("id"));

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