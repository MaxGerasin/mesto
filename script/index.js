import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards, objectConfiguration } from './const.js';

// Кнопки
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const buttonsClose = document.querySelectorAll('.popup__close');

// Profile
const profileName = document.querySelector('.profile__title');
const profileStatus = document.querySelector('.profile__subtitle');

// PopupEdit
const popupEdit = document.querySelector('#popup-edit');
const formPopupEdit = document.querySelector('#form-popup-edit');
const inputName = popupEdit.querySelector('.popup__input_value_title');
const inputStatus = popupEdit.querySelector('.popup__input_value_subtitle');

// PopupAdd
const popupAdd = document.querySelector('#popup-add');
const formPopupAdd = document.querySelector('#form-popup-add');
const inputTitlePlace = popupAdd.querySelector('.popup__input_title-place');
const inputSourceImage = popupAdd.querySelector('.popup__input_source-image');

// PopupPicture
const popupPicture = document.querySelector('#popup-picture');
const imgPopup = popupPicture.querySelector('.popup__img');
const captionPopup = popupPicture.querySelector('.popup__caption');

// Popups, FormValidators, CardsContainer
const popups = document.querySelectorAll('.popup');
const formValidators = new Map();
const cardsContainer = document.querySelector('.element__grid');

// Function

const isEscape = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', isEscape);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', isEscape);
};

const isOverlay = (evt) => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
};

const openEditProfile = () => {
  inputName.value = profileName.textContent;
  inputStatus.value = profileStatus.textContent;
  formValidators.get(`form-${popupEdit.id}`).resetValidateForm();
  openPopup(popupEdit);
};

const  openPopupPicture = (linkImage, title) => {
  imgPopup.src = linkImage;
  imgPopup.alt = title;
  captionPopup.textContent = title;
  openPopup(popupPicture);
};

const renderCard = (card) => cardsContainer.prepend(card);

const createCard = (data) => new Card(data, '#card-template', openPopupPicture).createCard();

const initCards = () => initialCards.forEach((data) => renderCard(createCard(data)));

const openAddPicture = () => {
  popupAdd.querySelector(`#form-${popupAdd.id}`).reset();
  openPopup(popupAdd);
  formValidators.get(`form-${popupAdd.id}`).resetValidateForm();
};

const sendFormEditProfile = (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileStatus.textContent = inputStatus.value;
  closePopup(popupEdit);
};

const sendFormCreatePicture = (evt) => {
  evt.preventDefault();
  renderCard(createCard({ name: inputTitlePlace.value, link: inputSourceImage.value }));
  closePopup(popupAdd);
};

initCards();

// addEventListener

buttonEdit.addEventListener('click', openEditProfile);
buttonAdd.addEventListener('click', openAddPicture);
buttonsClose.forEach(function (element) {
  const popup = element.closest('.popup');
  element.addEventListener('click', () => closePopup(popup));
});
popups.forEach(popup => popup.addEventListener('click', isOverlay));
formPopupEdit.addEventListener('submit', sendFormEditProfile);
formPopupAdd.addEventListener('submit', sendFormCreatePicture);

Array.from(document.forms).forEach(form => {
  const formValidator = new FormValidator(objectConfiguration, form);
  formValidators.set(form.id, formValidator);
  formValidator.enableValidation();
});


