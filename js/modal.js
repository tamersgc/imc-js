export const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal .title span "),
    buttonClose: document.querySelector(".modal button.close "),

    open: function () {
        // modalWrapper.classList.add("open")
        Modal.wrapper.classList.add("open")
    },
    close() {
        // modalWrapper.classList.remove("open")
        Modal.wrapper.classList.remove("open")
    }
}



// modalBtnClose.onclick = () => Modal.close()
Modal.buttonClose.onclick = () => Modal.close()

// pode fazer assim se so tiver um evento 
// window.onkeydown= handleKeydown 

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if (event.key === 'Escape')
        Modal.close()

}
