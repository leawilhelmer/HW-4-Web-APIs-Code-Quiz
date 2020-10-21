var h1Message = document.querySelector("#message");


var thing = function () {
  console.log("thing")
}



var count = 10
function setTime() {
  var timer = setInterval(function () {
    count--
    console.log(count)
    if (count === 0) {
      console.log("STOOOOOPPED")
      h1Message.textContent = "WOW THIS IS ROUUUUGH"
      clearInterval(timer)
    }
  }, 1000)
}

setTime()