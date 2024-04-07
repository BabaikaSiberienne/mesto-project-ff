const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-10',
    headers: {
        authorization: '40cf3434-37df-464c-883a-5c707a2b3b3e',
        'Content-Type': 'application/json'
    }
}

const editProfileForm = document.forms.edit_profile
const editProfileName = editProfileForm.elements.name
const editProfileDescription = editProfileForm.elements.description
console.log(editProfileDescription, editProfileName)

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
            name: 'Saint-Lauran',
            about: 'Alchemist and time traveller'
        }),
    })
    .then ((res) => {
        if (res.ok) {
            // console.log(res.json())
            return res.json();
        }
    })
    .catch((error) => {
        console.log('Ошибка. Запрос не выполнен: ', error)
    })
}

