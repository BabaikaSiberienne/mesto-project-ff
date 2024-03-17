const buttonAdd = document.querySelector('.profile__add-button')
const buttonEdit = document.querySelector('.profile__edit-button')

const popups = document.querySelectorAll('.popup')

function openModal (evt) {
    const classOfCurrPopUp = evt.target.attributes[0].value //достаем значение popovertarget, в котором содержится id привязанного к кнопке попапа
    const currPopUp = document.querySelector('#'+ classOfCurrPopUp) //при помощи id достаем сам элемент
    currPopUp.classList.add('popup_is-opened') //добавляем ему класс, ответсвенный за появление попапа
}

function closeModal (evt) {
    const popUpClosest = evt.target.closest('.popup');
    popUpClosest.classList.toggle('popup_is-opened');

}

popups.forEach((popup) =>{
    const delButton = popup.querySelector('.popup__close') //выдергиваем кнопку close и сохраняем её в переменную
    delButton.addEventListener('click', closeModal)
    // delButton.addEventListener('click', closeModal)
})

buttonAdd.addEventListener('click', openModal);
buttonEdit.addEventListener('click', openModal);
// buttonDelete.addEventListener('click', closeModal)


export { buttonAdd, buttonEdit}