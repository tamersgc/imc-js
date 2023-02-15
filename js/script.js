import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { IMC, notNumber } from "./utils.js"


const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

// const modalWrapper = document.querySelector(".modal-wrapper")
// const modalMessage = document.querySelector(".modal .title span ")
// const modalBtnClose = document.querySelector(".modal button.close ")

// // 3 formas
// // 1
// form.onsubmit = function(){}
// // 2
// form.onsubmit = ()=>{}
// // 3
// form.onsubmit = handleSubmit
// function handleSubmit(){}


form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if (showAlertError) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = IMC(weight, height)

    displayResultMessage(result)


}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`
    // modalMessage.innerText = message
    Modal.message.innerText = message

    Modal.open()
}

inputWeight.oninput=()=> AlertError.close()
inputHeight.oninput=()=> AlertError.close()