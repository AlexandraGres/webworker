const form = document.getElementById('form')
const numberInput = document.getElementById('numberInput')
const result = document.getElementById('result')

form.addEventListener('submit', event => {
  event.preventDefault()

  const number = +numberInput.value
  
  if(typeof(Worker) !== "undefined") {
    const worker = new Worker('./worker.js')

    worker.postMessage(number)

    worker.onmessage = message => {
      result.innerHTML = message.data
    }
  } else {
    result.innerHTML = "Sorry, your browser does not support Web Workers...";
  }
})




