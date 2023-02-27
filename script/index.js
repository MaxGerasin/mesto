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
const popupEdit = document.querySelector('.popup');
const inputName = document.querySelector('.popup__input_value_title');
const inputMission = document.querySelector('.popup__input_value_subtitle');
const formSubmit = document.querySelector('.popup__form-edit');
const buttonClose = document.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const buttonAdd = document.querySelector('.profile__button-add');
const buttonsClose = document.querySelectorAll('.popup__close');

const popupAdd = document.querySelector('.popup-add');
const inputTitlePlace = popupAdd.querySelector('.popup__input_title-place');
const inputSourceImage = popupAdd.querySelector('.popup__input_source-image');
const formPopupAdd = document.querySelector('.popup__form-add');

const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.element__grid');

const popupPicture = document.querySelector('.popup-picture');
const imgPopup = popupPicture.querySelector('.popup__img');
const captionPopup = popupPicture.querySelector('.popup__caption');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.add('popup_opened');
}

function openPopupPicture (namePicture, link) {
  imgPopup.src = link;
  imgPopup.alt = namePicture;
  captionPopup.textContent = namePicture;
  openPopup(popupPicture);
};

function likeButton(evt) {
  evt.target.classList.toggle('card__like-button_active');
};

function deleteImage(evt) {
  evt.target.closest('.card').remove();
};


function createCard(namePicture, link) {
  const cardClone = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardClone.querySelector('.card__img');

  cardClone.querySelector('.card__name').textContent = namePicture;
  cardImage.src = link;
  cardImage.alt = namePicture;

  cardImage.addEventListener('click', () => openPopupPicture(namePicture, link));
  cardClone.querySelector('.card__like-button').addEventListener('click', likeButton);
  cardClone.querySelector('.card__basket-button').addEventListener('click', deleteImage);
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
}

function openAddPicture() {
  openPopup(popupAdd);
  inputTitlePlace.value = '';
  inputSourceImage.value = '';
};
