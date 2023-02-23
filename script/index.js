const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const buttonEdit = document.querySelector('.profile__button-edit');
const popUp = document.querySelector('.popup');
const inputName = document.querySelector('.popup__input_value_title');
const inputMission = document.querySelector('.popup__input_value_subtitle');
const formSubmit = document.querySelector('.popup__form');
const buttonClose = document.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

function toggleOpenPopup () {
  popUp.classList.toggle('popup_opened');
}

function clickEdit() {
  inputName.value = `${profileTitle.textContent}`;
  inputMission.value = `${profileSubtitle.textContent}`;
  toggleOpenPopup();
}

function clickClose() {
  toggleOpenPopup();
}

function clickSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = `${inputName.value}`;
  profileSubtitle.textContent = `${inputMission.value}`;
  toggleOpenPopup();
};

formSubmit.addEventListener('submit', clickSubmit);
buttonEdit.addEventListener('click', clickEdit);
buttonClose.addEventListener('click', clickClose);
