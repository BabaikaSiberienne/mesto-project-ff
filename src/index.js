import './pages/index.css';
import { initialCards } from './scripts/cards';
import { createCard, toLike, toPutAwayLike, toPutLike, likeToggle, hasLike, handleDelete } from './scripts/card';
import { openPopUp, closePopUp } from './scripts/modal';
import { enableValidation, clearValidation } from './scripts/validation';
import { getF, toGetCards, editProfile, addCard, renewAvatar } from './scripts/api';
import {
    popUpEdit,
    popUpAdd,
    popUpAddForm,
    placesContainer,
    buttonAdd,
    buttonEdit,
    profileForm,
    nameInput,
    jobInput,
    profileTitle,
    profileDescription,
    popUpTypeImage,
    popUpImage,
    popUpImageCaption,
    profileImage,
    inputNameCard,
    inputLinkCard,
    closeButtons,
    popups,
    popUpAvatar,
    avatarForm,
    linkAvatar,
    editProfileForm,
    buttonAvatarForm,
    formElement,
    profileEditSubmitButton,
    editProfileNameInput,
    editProfileDescriptionInput,
    buttonTextInDaProcessOfLoading,
    buttonText,
    validationConfig
} from './utils/utils.js'


    

enableValidation(validationConfig)

Promise.all([getF(), toGetCards()])
    .then(([profile, cards]) => {
        profileTitle.textContent = profile.name;
        profileDescription.textContent = profile.about;
        profileImage.style.backgroundImage = `url(${profile.avatar})`;
        cards.forEach(function (card) {
            const amount = Object.keys(card.likes).length
            placesContainer.append(createCard(card, profile, handleDelete, handleImagePopup, toLike))
        })
    })
    .catch((error) => {
        console.log(error)
    })



buttonAdd.addEventListener("click", () => {
    openPopUp(popUpAdd)
    clearValidation(popUpAdd, validationConfig)
});
buttonEdit.addEventListener("click", () => {
    openPopUp(popUpEdit)
    clearValidation(popUpEdit, validationConfig)
    nameInput.value = profileTitle.textContent
    jobInput.value = profileDescription.textContent
});


closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopUp(popup)
    })
})

popups.forEach((modal) => {
    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup')) {
            closePopUp(modal)
        }
    })
})



function handleImagePopup(card) {
    popUpImage.src = card.link
    popUpImageCaption.textContent = card.name
    popUpImage.alt = card.name
    openPopUp(popUpTypeImage)
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    toLoad(true, buttonEdit)
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    editProfile(editProfileNameInput.value, editProfileDescriptionInput.value)
        .then((profile) => {
            profileTitle.textContent = profile.name
            profileDescription.textContent = profile.about
            closePopUp(popUpEdit)
        })

        .catch((err) => {
            console.log(err)
        })

        .finally(() => { toLoad(false, buttonEdit) })

}

function openPopUpAvatar() {
    openPopUp(popUpAvatar)
    clearValidation(popUpAvatar, validationConfig)
}

function handleavatarFormSubmit(evt) {
    evt.preventDefault();
    toLoad(true, buttonAvatarForm)
    renewAvatar(linkAvatar.value)
        .then((profile) => {
            profileImage.style.backgroundImage = `url(${profile.avatar})`
            closePopUp(popUpAvatar)
            avatarForm.reset()
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => { toLoad(false, buttonAvatarForm) })
}
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    toLoad(true, buttonAdd)
    const newCard = {
        link: inputLinkCard.value,
        name: inputNameCard.value,
    }
    addCard(newCard)
        .then((card) => {
            placesContainer.prepend(createCard(card, card.owner, handleDelete, handleImagePopup, toLike))
            popUpAddForm.reset()
            closePopUp(popUpAdd);
        })

        .catch((err) => {
            console.log(err)
        })

        .finally(() => { toLoad(false, buttonAdd) })
}



function toLoad(isFetching, button) {
    if (isFetching) {
        button.textContent = buttonTextInDaProcessOfLoading
        button.setAttribute('disabled', 'granny')
    }

    else {
        button.textContent = buttonText
        button.removeAttribute('disabled')
    }
}
popUpAddForm.addEventListener('submit', handleCardFormSubmit)
profileForm.addEventListener('submit', handleProfileFormSubmit);
profileImage.addEventListener('click', openPopUpAvatar)
avatarForm.addEventListener('submit', handleavatarFormSubmit)