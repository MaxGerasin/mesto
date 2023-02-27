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


// Кнопки

const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const buttonsClose = document.querySelectorAll('.popup__close');

// Profile

const profileName = document.querySelector('.profile__title');
const profileStatus = document.querySelector('.profile__subtitle');

// PopupEdit

const popupEdit = document.querySelector('.popup-edit');
const formPopupEdit = document.querySelector('.popup__form-edit');
const inputName = popupEdit.querySelector('.popup__input_value_title');
const inputStatus = popupEdit.querySelector('.popup__input_value_subtitle');

// PopupAdd

const popupAdd = document.querySelector('.popup-add');
const formPopupAdd = document.querySelector('.popup__form-add');
const inputTitlePlace = popupAdd.querySelector('.popup__input_title-place');
const inputSourceImage = popupAdd.querySelector('.popup__input_source-image');

// PopupPicture

const popupPicture = document.querySelector('.popup-picture');
const imgPopup = popupPicture.querySelector('.popup__img');
const captionPopup = popupPicture.querySelector('.popup__caption');

