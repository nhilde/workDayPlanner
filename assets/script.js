var today = moment();
let timeBlock = document.querySelectorAll(".time-block")
const nine = document.getElementById("9")
const ten = document.getElementById("10")
const eleven = document.getElementById("11")
const twelve = document.getElementById("12")
const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
const five = document.getElementById("5")


$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    updateTime();
    $(".saveBtn").on("click", function () {
        let plannerText = document.querySelectorAll(".description").value;
        let time = timeBlock.getAttribute("id");
        localStorage.setItem(time, plannerText)

    });

    nine.innerHTML =+ localStorage.getItem("9")
    ten.innerHTML =+ localStorage.getItem("10")
    eleven.innerHTML =+ localStorage.getItem("11")
    twelve.innerHTML =+ localStorage.getItem("12")
    one.innerHTML =+ localStorage.getItem("1")
    two.innerHTML =+ localStorage.getItem("2")
    three.innerHTML =+ localStorage.getItem("3")
    four.innerHTML =+ localStorage.getItem("4")
    five.innerHTML =+ localStorage.getItem("5")

    

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