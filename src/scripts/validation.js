const popUpFormEditProfile = document.querySelector('.popup__content')
const popUpButton = document.querySelector(".popup__button")
const regex = /[" "\wa-zа-я\sё\-]/gi
const errorMessage = document.createElement('span')
popUpFormEditProfile.append(errorMessage)


function enableValidation () {
    const nameInput = document.querySelector(".popup__input_type_name").value
    const jobInput = document.querySelector(".popup__input_type_description").value

    if (!((nameInput.match(regex)) && (jobInput.match(regex)))) {
            errorMessage.textContent = "Кастомное сообщение об ошибке"
            popUpButton.setAttribute("disabled", "true")
            console.log(5)
        }
    
    else {
        popUpButton.removeAttribute("disabled")
    }
}

function clearValidation () {

}

function showError () {

}

export {enableValidation, clearValidation}