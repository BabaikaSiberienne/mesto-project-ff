import { createCard } from "./card";
import { closePopUp } from "./modal"

const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-10',
    headers: {
        authorization: '40cf3434-37df-464c-883a-5c707a2b3b3e',
        'Content-Type': 'application/json'
    }
}

const popUpEdit = document.querySelector(".popup_type_edit");
const editProfileForm = document.forms.edit_profile
const editProfileName = editProfileForm.elements.name
const editProfileDescription = editProfileForm.elements.description
const nameInput = document.querySelector(".popup__input_type_name")
const jobInput = document.querySelector(".popup__input_type_description")
const placesContainer = document.querySelector('.places__list'); //берем коробку с местами

// const newCardName = document.forms.

export function getF() {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .catch((error) => {
            console.log('Ошибка. Запрос не выполнен: ', error);
        });
}

export function toGetCards() {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
        .then((res) => {
            if (res.ok) {
                // console.log(res.json())
                return res.json();

            }
        })
        .catch((error) => {
            console.log('Ошибка. Запрос не выполнен: ', error)
        })
}

export function editProfile() {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: `${editProfileName.value}`,
            about: `${editProfileDescription.value}`,
        }),
    })
    .then ((profile) => {
        if (profile.ok) {
            savingPrifileDatafromServerToLocal(nameInput, jobInput, profile.name, profile.about, popUpEdit)
            // console.log(profile.json())
        }
    })
    .catch((error) => {
        console.log('Ошибка. Запрос не выполнен: ', error)
    })
}

function savingPrifileDatafromServerToLocal (title, description, nameInput, aboutInput, popup) {
    title.textContent = nameInput
    description.textContent = aboutInput
    closePopUp(popup)
}

export function addCard(card) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: card.name,
            link: card.link,
        }),
    })
    .then ((res) => {
        if (res.ok) {
          return res.json()
        }
    })

    .catch((error) => {
        console.log('Ошибка. Запрос не выполнен: ', error)
    })
}

function savingAddData (title, link,) {

}