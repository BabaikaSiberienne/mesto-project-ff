export const popUpEdit = document.querySelector(".popup_type_edit");
export const popUpAdd = document.querySelector(".popup_type_new-card")
export const popUpAddForm = document.querySelector(".popup_type_new-card .popup__form")
export const placesContainer = document.querySelector('.places__list'); //берем коробку с местами
export const buttonAdd = document.querySelector('.profile__add-button')
export const buttonEdit = document.querySelector('.profile__edit-button')
export const profileForm = document.forms.edit_profile // Воспользуйтесь методом querySelector()
export const nameInput = document.querySelector(".popup__input_type_name")
export const jobInput = document.querySelector(".popup__input_type_description")
export const profileTitle = document.querySelector(".profile__title")
export const profileDescription = document.querySelector(".profile__description")
export const popUpTypeImage = document.querySelector('.popup_type_image')
export const popUpImage = document.querySelector('.popup__image')
export const popUpImageCaption = document.querySelector('.popup__caption')
export const profileImage = document.querySelector('.profile__image')
export const inputNameCard = document.querySelector(".popup__input_type_card-name")
export const inputLinkCard = document.querySelector(".popup__input_type_url")
export const closeButtons = Array.from(document.querySelectorAll('.popup__close')) //выдергиваем кнопку close и сохраняем её в переменную
export const popups = Array.from(document.querySelectorAll('.popup'))
export const popUpAvatar = document.querySelector('.popup_new-avatar')
export const avatarForm = document.forms.edit_avatar 
export const linkAvatar = avatarForm.elements.avatar
export const editProfileForm = document.forms.edit_profile
export const buttonAvatarForm = popUpAvatar.querySelector('.popup__button')
export const formElement = document.querySelector('.popup__form');
export const profileEditSubmitButton = popUpEdit.querySelector('.popup__button');
export const editProfileNameInput = editProfileForm.elements.name
export const editProfileDescriptionInput = editProfileForm.elements.description
export const buttonTextInDaProcessOfLoading = "Сохранение..."
export const buttonText = "Сохранить"
export const disableSubmitButton = (buttonElement, validationConfig) => {
    buttonElement.classList.add(validationConfig.disabledButtonSelector); 
    buttonElement.setAttribute('disabled', 'true')
}

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    disabledButtonSelector: 'popup__button_disabled',
    inputErrorSelector: 'popup__input_type_error',
    errorSelector: 'popup__input-error_active'
}

export function checkRes (res) {
    if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)

}