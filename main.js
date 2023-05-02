/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/Api.js":
/*!***************************************!*\
  !*** ./src/scripts/components/Api.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var url = _ref.url,
      cohort = _ref.cohort,
      token = _ref.token;
    _classCallCheck(this, Api);
    this._url = url;
    this._cohort = cohort;
    this._token = token;
  }
  _createClass(Api, [{
    key: "_getResponseData",
    value: function _getResponseData(res) {
      return res.ok ? res.json() : Promise.reject();
    }
  }, {
    key: "getCards",
    value: function getCards() {
      var _this = this;
      return fetch("".concat(this._url).concat(this._cohort, "/cards"), {
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        return _this._getResponseData(res);
      });
    }
  }, {
    key: "sendCard",
    value: function sendCard(_ref2) {
      var _this2 = this;
      var name = _ref2.name,
        link = _ref2.link;
      return fetch("".concat(this._url).concat(this._cohort, "/cards"), {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(function (res) {
        return _this2._getResponseData(res);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      var _this3 = this;
      return fetch("".concat(this._url).concat(this._cohort, "/cards/").concat(cardId), {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        return _this3._getResponseData(res);
      });
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var _this4 = this;
      return fetch("".concat(this._url).concat(this._cohort, "/users/me"), {
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        return _this4._getResponseData(res);
      });
    }
  }, {
    key: "updateUserInfo",
    value: function updateUserInfo(_ref3) {
      var _this5 = this;
      var name = _ref3.name,
        about = _ref3.about;
      return fetch("".concat(this._url).concat(this._cohort, "/users/me"), {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(function (res) {
        return _this5._getResponseData(res);
      });
    }
  }, {
    key: "updateUserAvatar",
    value: function updateUserAvatar(_ref4) {
      var _this6 = this;
      var avatar = _ref4.avatar;
      return fetch("".concat(this._url).concat(this._cohort, "/users/me/avatar"), {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(function (res) {
        return _this6._getResponseData(res);
      });
    }
  }, {
    key: "sendLike",
    value: function sendLike(cardId) {
      var _this7 = this;
      return fetch("".concat(this._url).concat(this._cohort, "/cards/").concat(cardId, "/likes"), {
        method: 'PUT',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return _this7._getResponseData(res);
      });
    }
  }, {
    key: "deleteLike",
    value: function deleteLike(cardId) {
      var _this8 = this;
      return fetch("".concat(this._url).concat(this._cohort, "/cards/").concat(cardId, "/likes"), {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        return _this8._getResponseData(res);
      });
    }
  }]);
  return Api;
}();


/***/ }),

/***/ "./src/scripts/components/Card.js":
/*!****************************************!*\
  !*** ./src/scripts/components/Card.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  function Card(data, templateId, handleCardClick, handleCardDelete, handleUpdateLike, myUserInfo) {
    _classCallCheck(this, Card);
    this._templateId = templateId;
    this._title = data.name;
    this._linkImage = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._idOwner = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._myUserInfo = myUserInfo;
    this._handleUpdateLike = handleUpdateLike;
    this._isLiked = this._checkUserLike();
  }
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      return document.querySelector(this._templateId).content.querySelector('.card').cloneNode(true);
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._cardImage.addEventListener('click', function () {
        return _this._handleCardClick({
          linkImage: _this._linkImage,
          title: _this._title
        });
      });
      this._likeButton.addEventListener('click', this._updateLike.bind(this));
      this._buttonDelete.addEventListener('click', this._delete.bind(this));
    }
  }, {
    key: "_updateLike",
    value: function _updateLike() {
      this._handleUpdateLike(this._cardId, this._isLiked, this);
    }
  }, {
    key: "_toggleLikeButton",
    value: function _toggleLikeButton() {
      this._likeButton.classList.toggle('card__like-button_active');
    }
  }, {
    key: "_checkUserLike",
    value: function _checkUserLike() {
      var _this2 = this;
      return this._likes.some(function (userInfo) {
        return userInfo._id === _this2._myUserInfo.id;
      });
    }
  }, {
    key: "handleLike",
    value: function handleLike(likes) {
      this._likes = likes;
      this._isLiked = this._checkUserLike();
      this._likeCounter.textContent = likes.length;
      this._toggleLikeButton();
    }
  }, {
    key: "_delete",
    value: function _delete() {
      this._handleCardDelete(this, this._cardId);
    }
  }, {
    key: "removeCard",
    value: function removeCard() {
      this._element.remove();
      this._element = null;
    }
  }, {
    key: "createCard",
    value: function createCard() {
      this._element = this._getTemplate();
      this._likeButton = this._element.querySelector('.card__like-button');
      this._cardImage = this._element.querySelector('.card__img');
      this._likeCounter = this._element.querySelector('.card__like-counter');
      this._buttonDelete = this._element.querySelector('.card__trash-button');
      if (this._idOwner !== this._myUserInfo.id) this._buttonDelete.remove();
      if (this._isLiked) {
        this._likeButton.classList.add('card__like-button_active');
      }
      this._likeCounter.textContent = this._likes.length;
      this._element.querySelector('.card__name').textContent = this._title;
      this._cardImage.src = this._linkImage;
      this._cardImage.alt = this._title;
      this._setEventListeners();
      return this._element;
    }
  }]);
  return Card;
}();


/***/ }),

/***/ "./src/scripts/components/FormValidator.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/FormValidator.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(config, form) {
    _classCallCheck(this, FormValidator);
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
    this._inputs = this._form.querySelectorAll(this._inputSelector);
    this._button = this._form.querySelector(this._submitButtonSelector);
  }
  _createClass(FormValidator, [{
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return Array.from(this._inputs).some(function (input) {
        return !input.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidInput(this._inputs)) {
        this._button.classList.add(this._inactiveButtonClass);
        this._button.disabled = true;
      } else {
        this._button.classList.remove(this._inactiveButtonClass);
        this._button.disabled = false;
      }
    }
  }, {
    key: "_showError",
    value: function _showError(input, message) {
      var errorElement = this._form.querySelector(".".concat(input.id, "-error"));
      input.classList.add(this._inputErrorClass);
      errorElement.classList.add(this._errorClass);
      errorElement.textContent = message;
    }
  }, {
    key: "_hideError",
    value: function _hideError(input) {
      var errorElement = this._form.querySelector(".".concat(input.id, "-error"));
      input.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
    }
  }, {
    key: "_isValid",
    value: function _isValid(input) {
      if (!input.validity.valid) {
        this._showError(input, input.validationMessage);
      } else {
        this._hideError(input);
      }
      ;
    }
  }, {
    key: "_formValidate",
    value: function _formValidate() {
      var _this = this;
      this._toggleButtonState();
      this._inputs.forEach(function (input) {
        return input.addEventListener('input', function () {
          _this._isValid(input);
          _this._toggleButtonState();
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._formValidate();
    }
  }, {
    key: "resetValidateForm",
    value: function resetValidateForm() {
      var _this2 = this;
      this._inputs.forEach(function (input) {
        return _this2._hideError(input);
      });
      this._toggleButtonState();
    }
  }]);
  return FormValidator;
}();


/***/ }),

/***/ "./src/scripts/components/Popup.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/Popup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupId) {
    _classCallCheck(this, Popup);
    this._popup = document.querySelector(popupId);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "_isOverlay",
    value: function _isOverlay(evt) {
      if (evt.target.classList.contains('popup')) {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var button = this._popup.querySelector('.popup__close-button');
      button.addEventListener('click', this.close.bind(this));
      this._popup.addEventListener('click', this._isOverlay.bind(this));
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./src/scripts/components/PopupConfirmDelete.js":
/*!******************************************************!*\
  !*** ./src/scripts/components/PopupConfirmDelete.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupConfirmDelete)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/scripts/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupConfirmDelete = /*#__PURE__*/function (_Popup) {
  _inherits(PopupConfirmDelete, _Popup);
  var _super = _createSuper(PopupConfirmDelete);
  function PopupConfirmDelete(popupId, handleDeleteCard) {
    var _this;
    _classCallCheck(this, PopupConfirmDelete);
    _this = _super.call(this, popupId);
    _this._popup = document.querySelector(popupId);
    _this._deleteButton = _this._popup.querySelector('.popup__submit-button');
    _this._handleDeleteCard = handleDeleteCard;
    return _this;
  }
  _createClass(PopupConfirmDelete, [{
    key: "setEventListeners",
    value: function setEventListeners() {
      _get(_getPrototypeOf(PopupConfirmDelete.prototype), "setEventListeners", this).call(this);
      this._deleteButton.addEventListener('click', this._deleteCard.bind(this));
    }
  }, {
    key: "setCard",
    value: function setCard(card, cardId) {
      this._card = card;
      this._cardId = cardId;
    }
  }, {
    key: "_deleteCard",
    value: function _deleteCard() {
      this._handleDeleteCard(this._cardId, this._card);
    }
  }]);
  return PopupConfirmDelete;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/scripts/components/PopupWithForm.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/PopupWithForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/scripts/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(popupId, handleSubmitForm) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupId);
    _this._handleSubmitForm = handleSubmitForm;
    _this._inputs = _this._popup.querySelectorAll('.popup__input');
    _this._form = _this._popup.querySelector('.popup__form');
    _this._buttonSubmit = _this._form.querySelector('.button');
    _this.textButtonSubmit = _this._buttonSubmit.textContent;
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputValues = {};
      this._inputs.forEach(function (input) {
        return inputValues[input.name] = input.value;
      });
      return inputValues;
    }
  }, {
    key: "getFormId",
    value: function getFormId() {
      return this._form.id;
    }
  }, {
    key: "setInputValues",
    value: function setInputValues(data) {
      this._inputs.forEach(function (input) {
        return input.value = data[input.name];
      });
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._popup.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this2._handleSubmitForm(_this2._getInputValues());
      });
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._form.reset();
    }
  }, {
    key: "renderLoading",
    value: function renderLoading(isLoading) {
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      if (isLoading) {
        this._buttonSubmit.textContent = text;
        this._buttonSubmit.disabled = true;
      } else {
        this._buttonSubmit.textContent = this.textButtonSubmit;
        this._buttonSubmit.disabled = false;
      }
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/scripts/components/PopupWithImage.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/PopupWithImage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/scripts/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popupId) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupId);
    _this._img = _this._popup.querySelector('.popup__img');
    _this._caption = _this._popup.querySelector('.popup__caption');
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(_ref) {
      var linkImage = _ref.linkImage,
        title = _ref.title;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
      this._img.src = linkImage;
      this._img.alt = title;
      this._caption.textContent = title;
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/scripts/components/Section.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/Section.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(renderer, selectorContainer) {
    _classCallCheck(this, Section);
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  }
  _createClass(Section, [{
    key: "render",
    value: function render(items) {
      var _this = this;
      items.forEach(function (item) {
        return _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }]);
  return Section;
}();


/***/ }),

/***/ "./src/scripts/components/UserInfo.js":
/*!********************************************!*\
  !*** ./src/scripts/components/UserInfo.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(selectorName, selectorStatus, selectorAvatar) {
    _classCallCheck(this, UserInfo);
    this._nameElement = document.querySelector(selectorName);
    this._statusElement = document.querySelector(selectorStatus);
    this._avatarElement = document.querySelector(selectorAvatar);
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        avatar: this._avatarElement.src,
        name: this._nameElement.textContent,
        about: this._statusElement.textContent,
        id: this._id
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref) {
      var name = _ref.name,
        about = _ref.about,
        avatar = _ref.avatar,
        _id = _ref._id;
      this._id = _id;
      this._nameElement.textContent = name;
      this._statusElement.textContent = about;
      if (avatar) this._avatarElement.src = avatar;
    }
  }, {
    key: "getUserId",
    value: function getUserId() {
      return this._id;
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/scripts/utils/const.js":
/*!************************************!*\
  !*** ./src/scripts/utils/const.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectConfiguration": () => (/* binding */ objectConfiguration),
/* harmony export */   "optionsApi": () => (/* binding */ optionsApi)
/* harmony export */ });
var optionsApi = {
  url: 'https://mesto.nomoreparties.co/v1/',
  cohort: 'cohort-64',
  token: '6d0fce75-04ff-4106-9217-9a5e50e036ae'
};
var objectConfiguration = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _scripts_utils_const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/utils/const.js */ "./src/scripts/utils/const.js");
/* harmony import */ var _scripts_components_Section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/components/Section.js */ "./src/scripts/components/Section.js");
/* harmony import */ var _scripts_components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/components/Card.js */ "./src/scripts/components/Card.js");
/* harmony import */ var _scripts_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/components/FormValidator.js */ "./src/scripts/components/FormValidator.js");
/* harmony import */ var _scripts_components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components/PopupWithImage.js */ "./src/scripts/components/PopupWithImage.js");
/* harmony import */ var _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/components/PopupWithForm.js */ "./src/scripts/components/PopupWithForm.js");
/* harmony import */ var _scripts_components_PopupConfirmDelete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/components/PopupConfirmDelete.js */ "./src/scripts/components/PopupConfirmDelete.js");
/* harmony import */ var _scripts_components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/components/UserInfo.js */ "./src/scripts/components/UserInfo.js");
/* harmony import */ var _scripts_components_Api_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/components/Api.js */ "./src/scripts/components/Api.js");










var buttonEdit = document.querySelector('.profile__edit-button');
var buttonAdd = document.querySelector('.profile__add-button');
var buttonAvatar = document.querySelector('.profile__avatar-button');
var formValidators = new Map();
var api = new _scripts_components_Api_js__WEBPACK_IMPORTED_MODULE_9__["default"](_scripts_utils_const_js__WEBPACK_IMPORTED_MODULE_1__.optionsApi);
var createCard = function createCard(data) {
  return new _scripts_components_Card_js__WEBPACK_IMPORTED_MODULE_3__["default"](data, '#card-template', function (data) {
    return popupWithImageComponent.open(data);
  }, function (card, cardId) {
    popupConfirmDeleteComponent.setCard(card, cardId), popupConfirmDeleteComponent.open();
  }, function (cardId, isliked, card) {
    if (isliked) {
      api.deleteLike(cardId).then(function (res) {
        card.handleLike(res.likes);
      }).catch(function (err) {
        return console.log(err);
      });
    } else {
      api.sendLike(cardId).then(function (res) {
        card.handleLike(res.likes);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, userInfoComponent.getUserInfo()).createCard();
};
var renderCard = function renderCard(data) {
  sectionPhotoComponent.addItem(createCard(data));
};
var openEditProfile = function openEditProfile() {
  popupEditComponent.setInputValues(userInfoComponent.getUserInfo());
  formValidators.get(popupEditComponent.getFormId()).resetValidateForm();
  popupEditComponent.open();
};
var openAddPicture = function openAddPicture() {
  formValidators.get(popupAddComponent.getFormId()).resetValidateForm();
  popupAddComponent.open();
};
var openEditAvatar = function openEditAvatar() {
  formValidators.get(popupEditAvatarComponent.getFormId()).resetValidateForm();
  popupEditAvatarComponent.open();
};
var sectionPhotoComponent = new _scripts_components_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"](function (data) {
  return renderCard(data);
}, '.photos__cards-container');
var userInfoComponent = new _scripts_components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"]('.profile__name', '.profile__status', '.profile__avatar');
var popupWithImageComponent = new _scripts_components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"]('#popup-picture');
var popupAddComponent = new _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('#popup-add', function (data) {
  popupAddComponent.renderLoading(true, 'Создание...');
  api.sendCard(data).then(function (data) {
    renderCard(data);
    popupAddComponent.close();
  }).catch(function (err) {
    return console.log(err);
  }).finally(function () {
    return popupAddComponent.renderLoading(false);
  });
});
var popupEditComponent = new _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('#popup-edit', function (data) {
  popupEditComponent.renderLoading(true, 'Сохранение...');
  api.updateUserInfo(data).then(function (data) {
    userInfoComponent.setUserInfo(data);
    popupEditComponent.close();
  }).catch(function (err) {
    return console.log(err);
  }).finally(function () {
    return popupEditComponent.renderLoading(false);
  });
});
var popupConfirmDeleteComponent = new _scripts_components_PopupConfirmDelete_js__WEBPACK_IMPORTED_MODULE_7__["default"]('#popup-confirm-delete', function (cardId, card) {
  return api.deleteCard(cardId).then(function () {
    card.removeCard();
    popupConfirmDeleteComponent.close();
  }).catch(function (err) {
    return console.log(err);
  });
});
var popupEditAvatarComponent = new _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('#popup-avatar', function (data) {
  popupEditAvatarComponent.renderLoading(true, 'Сохранение...');
  api.updateUserAvatar(data).then(function (data) {
    userInfoComponent.setUserInfo(data);
    popupEditAvatarComponent.close();
  }).catch(function (err) {
    return console.log(err);
  }).finally(function () {
    return popupEditAvatarComponent.renderLoading(false);
  });
});
popupWithImageComponent.setEventListeners();
popupAddComponent.setEventListeners();
popupEditComponent.setEventListeners();
popupConfirmDeleteComponent.setEventListeners();
popupEditAvatarComponent.setEventListeners();
Promise.all([api.getUserInfo(), api.getCards()]).then(function (value) {
  userInfoComponent.setUserInfo(value[0]);
  sectionPhotoComponent.render(value[1].reverse());
}).catch(function (err) {
  return console.log(err);
});
buttonEdit.addEventListener('click', openEditProfile);
buttonAdd.addEventListener('click', openAddPicture);
buttonAvatar.addEventListener('click', openEditAvatar);
Array.from(document.forms).forEach(function (form) {
  var formValidatorComponent = new _scripts_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__["default"](_scripts_utils_const_js__WEBPACK_IMPORTED_MODULE_1__.objectConfiguration, form);
  formValidators.set(form.id, formValidatorComponent);
  formValidatorComponent.enableValidation();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map