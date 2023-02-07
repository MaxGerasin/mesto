const buttonEdit = document.querySelector('.profile__button-edit');
const popUp = document.querySelector('.popup');
const inputName = document.querySelector('#name');
const inputMission = document.querySelector('#mission');
const formSubmit = document.querySelector('.popup__form');
const buttonClose = document.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

function toggleOpenPopup () {
  popUp.classList.toggle('popup_open');
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
