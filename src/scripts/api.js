import { checkRes } from "../utils/utils";
import { createCard } from "./card";
import { closePopUp } from "./modal"
import { popUpEdit, editProfileForm, editProfileName, editProfileDescription, nameInput, jobInput } from "../utils/utils";

const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-10',
    headers: {
        authorization: '40cf3434-37df-464c-883a-5c707a2b3b3e',
        'Content-Type': 'application/json'
    }
}


export function getF() {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then (checkRes)
}

export function toGetCards() {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
    .then (checkRes)
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
        .then((profile) => {
            if (profile.ok) {
                savingPrifileDatafromServerToLocal(nameInput, jobInput, profile.name, profile.about, popUpEdit)
                // console.log(profile.json())
            }
        })
        .catch((error) => {
            console.log('Ошибка. Запрос не выполнен: ', error)
        })
}

function savingPrifileDatafromServerToLocal(title, description, nameInput, aboutInput, popup) {
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

    .then (checkRes)
}

export function deleteCardFromServer(id) {
    return fetch(`${config.baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: config.headers,
    })

        .then (checkRes)
}

export function sendLikeToServer(id) {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'PUT',
        headers: config.headers,
    })

    .then (checkRes)
}

export function deleteLikeFromServer(id) {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'DELETE',
        headers: config.headers,
    })

        .then((res) => {
            if (res.ok) {
                return res.json()
            }
        })

        .catch((error) => {
            console.log('Ошибка. Запрос не выполнен: ', error)
        })

}

export function renewAvatar(avatar) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify ({
            avatar: `${avatar}`
        })
    })

    .then (checkRes)
}