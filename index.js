
function getTime() {
  let dateTime = new Date()
  let hours = dateTime.getHours()
  let minutes = dateTime.getMinutes()
  let seconds = dateTime.getSeconds()

  return {hours,minutes,seconds}
}

function setDateTime(func) {
  
  let selectHours = document.querySelector('#hours')
  let selectMinutes = document.querySelector('#minutes')
  let selectSeconds  = document.querySelector('#seconds')
  let ampm = document.querySelector('#ampm')

  if(func.hours >= 12){
    ampm.innerHTML = 'PM'
    if(func.hours > 12){
      func.hours = func.hours-12
    }
  } else{
    ampm.innerHTML = 'AM'
    if(func.hours === 0){
      func.hours = 12
    }
  }


  selectHours.innerHTML = padZero(func.hours)
  selectMinutes.innerHTML = padZero(func.minutes)
  selectSeconds.innerHTML = padZero(func.seconds)

}

function padZero(num){
  if(num < 10){
    return '0' + num
  }

  return num
}


function displayTime() {
  const time = getTime();
  setDateTime(time);

}

setInterval(displayTime, 500);