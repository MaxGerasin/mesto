const objectConfiguration = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visable'
};

const hasInvalidInput = (inputs) => {
  const inputList = Array.from(inputs);
  return inputList.some(input => !input.validity.valid);
}

const toggleButtonState = (inputs, button, inactiveButtonClass) => {
  if (hasInvalidInput(inputs)) {
    button.classList.add(inactiveButtonClass);
    button.setAttribute('disabled', 'true');
  } else {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute('disabled');
  }
}

const showError = (form, input, inputErrorClass, errorClass, message) => {
  const errorElement = form.querySelector(`.${input.id}`-error);
  input.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = message;
}

const hideError = (form, input, inputErrorClass, errorClass) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
}
