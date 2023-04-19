import './index.css';

import { initialCards, objectConfiguration } from '../script/utils/const.js';
import Section from '../script/components/Section.js';
import Card from '../script/components/Card.js';
import FormValidator from '../script/components/FormValidator.js';
import PopupWithImage from '../script/components/PopupWithImage.js';
import PopupWithForm from '../script/components/PopupWithForm.js';
import UserInfo from '../script/components/UserInfo.js';

const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const formValidators = new Map();

const createCard = (data) => {
  return new Card(data, '#card-template', (data) => popupWithImageComponent.open(data)).createCard();
};

const renderCard = (data) => {
  sectionPhotoComponent.addItem(createCard(data));
}

const openEditProfile = () => {
  popupEditComponent.setInputValues(userInfoComponent.getUserInfo());
  formValidators.get(popupEditComponent.getFormId()).resetValidateForm();
  popupEditComponent.open();
};

const openAddPicture = () => {
  formValidators.get(popupAddComponent.getFormId()).resetValidateForm();
  popupAddComponent.open();
};

const sectionPhotoComponent = new Section({ items: initialCards, renderer: (data) => renderCard(data)}, '.element__grid');
const userInfoComponent = new UserInfo('.profile__title', '.profile__subtitle');
const popupWithImageComponent = new PopupWithImage('#popup-picture');
const popupAddComponent = new PopupWithForm('#popup-add', (data) => {
  renderCard(data);
  popupAddComponent.close();
});
const popupEditComponent = new PopupWithForm('#popup-edit', (data) => {
  userInfoComponent.setUserInfo(data);
  popupEditComponent.close();
});

popupWithImageComponent.setEventListeners();
popupAddComponent.setEventListeners();
popupEditComponent.setEventListeners();

sectionPhotoComponent.render();

buttonEdit.addEventListener('click', openEditProfile);
buttonAdd.addEventListener('click', openAddPicture);

Array.from(document.forms).forEach((form) => {
  const formValidatorComponent = new FormValidator(objectConfiguration, form);

  formValidators.set(form.id, formValidatorComponent);
  formValidatorComponent.enableValidation();
});
