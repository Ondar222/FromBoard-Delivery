import React, { useState } from 'react';
import Application from './Application';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__top__bar'>
          <div className='logoDelivery__bar'>
            <img src="img/logoDelivery.png" alt="logoDelivery" width={50} height={74} />
            <h1>FromBoard Delivery</h1>
          </div>

          <div className='description__header__right'>
            <span className='text'>Доставляем товары из&nbsp;заграницы в&nbsp;Россию<br />
              Стоимость от&nbsp;550&nbsp;рублей за&nbsp;заказ<br />
              1&nbsp;$ = 93&nbsp;₽ | 1&nbsp;€ = 99&nbsp;₽ | 1&nbsp;¥ = 13&nbsp;₽<br />
            </span>
            <span>
              <div className='header_phone_bar'>
                <h1>
                  <a href="tel:+7 (800) 123 45-67">+7 (800) 123 45-67</a> <br />
                </h1>
                <span>Звонки по России бесплатны</span>
              </div>

            </span>
          </div>

        </div>


        <div className='header__bottom__bar'>
          <ul className='menu__header'>
            <li><a href="">Калькулятор</a></li>
            <li><a href="">О нас</a></li>
            <li><a href="">Гарантии</a></li>
            <li><a href="">Отзывы</a></li>
          </ul>
          <button className='btn__header' onClick={handleOpenModal}>
            Оставить заявку
          </button>

          {/* Модальное окно */}
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>&times;</span>     
                <Application />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
};
