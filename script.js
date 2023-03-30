// TIME
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const secconds = document.getElementById("seconds")





const screen = document.getElementById("screen")
const equal = document.getElementById("btn-equal")
const reset = document.getElementById("btn-reset")
const del = document.getElementById("btn-del")


// FUNCTIONS
const result = (delNum) => {
   
    let result = document.getElementById("screen").innerHTML;


    if(delNum === "del"){
        result = result.slice(0, result.length - 1);
        document.getElementById("screen").innerHTML = result
        return;
    }
    
    if(result) {
        document.getElementById("screen").innerHTML = eval(result)
    }
    
}

const clock = setInterval(function time (){
    let currentTime = new Date()

    let hr = currentTime.getHours()
    let mn = currentTime.getMinutes()
    let sc = currentTime.getSeconds()

    console.log(hr)

    hours.innerHTML = hr
    minutes.innerHTML = mn
    secconds.innerHTML = sc


    if(hours.innerHTML < 10) hours.innerHTML = "0" + hr
    if(minutes.innerHTML < 10) minutes.innerHTML = "0" + mn
    if(secconds.innerHTML < 10) secconds.innerHTML = "0" + sc
})

// EVENTS 
equal.addEventListener("click", result)
reset.addEventListener("click",  () => {
    screen.innerHTML = ""

})





