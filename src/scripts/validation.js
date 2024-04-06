import { validationConfig } from "../index.js";

const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationConfig.inputErrorSelector);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorSelector);
};

const hideInputError = (formElement, inputElement, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.inputErrorSelector);
    errorElement.classList.remove(validationConfig.errorSelector);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, validationConfig) => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage)
    }

    else {
        inputElement.setCustomValidity('')
    }

    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
    }

    else {
        hideInputError(formElement, inputElement, validationConfig);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');
    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement,validationConfig);
            toggleButtonState(inputList, buttonElement);
            console.log(inputList)
        });
    });
};

export const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        setEventListeners(formElement);
    });
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add("popup__button_disabled");
    }

    else {
        buttonElement.classList.remove("popup__button_disabled");
    }
}

export function clearValidation(formElement, validationConfig) {
    buttonElement.classList.add("popup__button_disabled");
    formElement.reset();

}

