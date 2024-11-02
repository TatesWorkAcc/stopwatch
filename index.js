const time = document.getElementById("time")

let secondsElapsed = 0;
let interval = null;

function padStart(value){
    // adds the 0's if not double didget
    return String(value).padStart(2, "0")
}

function setTime(){
    const minutes = Math.floor(secondsElapsed / 60)
    // math.floor rounds down so it is a full minute 
    const seconds = secondsElapsed % 60
    // will give the remainder after diving by 60. The remainder
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}` ;
}

function timer(){
   
    secondsElapsed++;
    setTime()
}

function startClock(){
    if (interval) stopClock()
    // needs to create an interval. will call a function at a set miliseconds here it will call every 1000 miliseconds. 
    //the function is not called only the funciton name so the function name timer has no ()
    interval = setInterval(timer, 1000)
    // counts the seconds
}

function stopClock(){
    clearInterval(interval)
    // when click stopClock it will clear the interval, it will stop the counting
}

function resetClock(){
    stopClock()
    
    secondsElapsed = 0
    // resets the clocks value
    setTime()
    // shows the default time
}