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

// Template, cardsContainer

const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.element__grid');

// Popups

const popups = document.querySelectorAll('.popup');

// Function

function isEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', isEscape);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', isEscape);
};

function isOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
};

function likeButton(evt) {
  evt.target.classList.toggle('card__like-button_active');
};

function deletePicture(evt) {
  evt.target.closest('.card').remove();
};

function openEditProfile() {
  inputName.value = profileName.textContent;
  inputStatus.value = profileStatus.textContent;
  resetValidateForm(popupEdit, objectConfiguration);
  openPopup(popupEdit);
};


function openPopupPicture(namePicture, link) {
  imgPopup.src = link;
  imgPopup.alt = namePicture;
  captionPopup.textContent = namePicture;
  openPopup(popupPicture);
};

function openAddPicture() {
  resetValidateForm(popupAdd, objectConfiguration);
  openPopup(popupAdd);
  inputTitlePlace.value = '';
  inputSourceImage.value = '';
};

function createCard(namePicture, link) {
  const cardClone = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardClone.querySelector('.card__img');

  cardClone.querySelector('.card__name').textContent = namePicture;
  cardImage.src = link;
  cardImage.alt = namePicture;

  cardImage.addEventListener('click', () => openPopupPicture(namePicture, link));
  cardClone.querySelector('.card__like-button').addEventListener('click', likeButton);
  cardClone.querySelector('.card__basket-button').addEventListener('click', deletePicture);
  return cardClone;
};

function renderCard(card) {
  cardsContainer.prepend(card);
}

function initCards() {
  initialCards.forEach(({name, link}) => {
    const card = createCard(name, link);
    renderCard(card);
  });
};

function sendFormEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileStatus.textContent = inputStatus.value;
  closePopup(popupEdit);
};

function sendFormCreatePicture(evt) {
  evt.preventDefault();
  const card = createCard(inputTitlePlace.value, inputSourceImage.value);
  renderCard(card);
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

