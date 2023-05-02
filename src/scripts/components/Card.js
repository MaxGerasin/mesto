export default class Card {
  constructor(data, templateId, handleCardClick, handleCardDelete, handleUpdateLike, myUserInfo) {
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

  _getTemplate() {
    return document
      .querySelector(this._templateId)
      .content
      .querySelector('.card')
      .cloneNode(true);
  };

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleCardClick({ linkImage: this._linkImage, title: this._title }));
    this._likeButton.addEventListener('click', this._updateLike.bind(this));
    this._buttonDelete.addEventListener('click', this._delete.bind(this));
  };

  _updateLike() {
    this._handleUpdateLike(this._cardId, this._isLiked, this);
  }

  _toggleLikeButton() {
    this._likeButton.classList.toggle('card__like-button_active');
  };

  _checkUserLike() {
    return this._likes.some((userInfo) => userInfo._id === this._myUserInfo.id);
  }

  handleLike(likes) {
    this._likes = likes;
    this._isLiked = this._checkUserLike();
    this._likeCounter.textContent = likes.length;
    this._toggleLikeButton();
  }
  
  _delete() {
    this._handleCardDelete(this, this._cardId);
  };

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  createCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.card__like-button');
    this._cardImage = this._element.querySelector('.card__img');
    this._likeCounter = this._element.querySelector('.card__like-counter');
    this._buttonDelete = this._element.querySelector('.card__trash-button');

    if(this._idOwner !== this._myUserInfo.id) this._buttonDelete.remove();
    if (this._isLiked) {
      this._likeButton.classList.add('card__like-button_active');
    }
  
    this._likeCounter.textContent = this._likes.length;
    this._element.querySelector('.card__name').textContent = this._title;
    this._cardImage.src = this._linkImage;
    this._cardImage.alt = this._title;
    this._setEventListeners();
  
    return this._element;
  };
}
