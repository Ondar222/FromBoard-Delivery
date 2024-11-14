import React from 'react'

export default function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__top__bar'>
                    <div className='logoDelivery__bar'>
                        <img src="img/logoDelivery.png" alt="logoDelivery" width={50} height={74} />
                        <h1>FromBoard Delivery</h1>
                    </div>

                    <div className='description__header__right'>
                        <span className='text'>Доставляем товары из заграницы в Россию<br />
                            Стоимость от 550 рублей за заказ<br />
                            1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽<br />
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
                    <button className='btn__header'>
                        Оставить заявку
                    </button>

                </div>
            </div>
        </header>
    )
}
