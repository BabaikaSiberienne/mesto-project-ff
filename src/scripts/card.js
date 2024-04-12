import { openPopUp } from "./modal";
// @todo: Функция удаления карточки

import { deleteCardFromServer, sendLikeToServer, deleteLikeFromServer } from "./api";
export function delCard(button) {
    const cardElementClosest = button.closest('.card');
    cardElementClosest.remove();
}

export function toPutLike(like) {
    like.classList.add('card__like-button_is-active');
}

export function toPutAwayLike(like) {
    like.classList.remove('card__like-button_is-active');
}

export function likeToggle(button, card, counter) {
    if (!button.classList.contains('card__like-button_is-active')) {
        sendLikeToServer(card._id)
            .then((res) => {
                toPutLike(button)
                counter.textContent = res.likes.length
            })

            .catch((err) => {
                console.log(err)
            })
    }

    else {
        deleteLikeFromServer(card._id)
            .then((res) => {
                toPutAwayLike(button)
                counter.textContent = res.likes.length
            })

            .catch((err) => {
                console.log(err)
            })
    }
}

export function hasLike(likes, profile) {
    return likes.some(function (like) {
        return like['_id'] === profile['_id']
    })
}

export function toLike(card, profile, likeButton) {
    if (hasLike(card.likes, profile)) {
        toPutLike(likeButton)
    }

}

export function handleDelete (card, profile, cardid, delButton) {
    if (card.owner['_id'] !== profile['_id']) {
        delButton.classList.add('card__delete-button_disabled')
        delButton.setAttribute('disabled', 'granny')
    }
    else {
        delButton.classList.remove('card__delete-button_disabled')
        delButton.removeAttribute('disabled')
        delButton.addEventListener('click', () => {
            deleteCardFromServer(cardid)
                .then(() => {
                    delCard(delButton)
                })
                .catch((err) => {
                    console.log(err)
                })
        })
    }

}


export function createCard(card, profile,  handDel, handImage, handLike) {
    const cardTemplate = document.querySelector('#card-template').content; //получаем содержимое шаблона
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //клонируем элемент   
    const cardImage = cardElement.querySelector('.card__image')
    const cardTitle = cardElement.querySelector('.card__title')
    const counter = cardElement.querySelector('.counter')
    const delButton = cardElement.querySelector('.card__delete-button'); //берем кнопку удаления
    const likeButton = cardElement.querySelector('.card__like-button')
    const cardId = card._id
    cardTitle.textContent = card.name
    cardImage.src = card.link
    cardImage.alt = card.name;
    counter.textContent = card.likes.length

    handDel(card, profile, cardId, delButton)
    cardImage.addEventListener('click', () => handImage(card));
    handLike(card, profile, likeButton)
    likeButton.addEventListener('click', () => {likeToggle(likeButton, card, counter)})
    return cardElement
}



