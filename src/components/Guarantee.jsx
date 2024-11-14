import React from 'react'

export default function Guarantee() {
    return (
        <div className='guarantee'>
            <h1>Гарантии качества</h1>
            <p>Наши гарантии качества включают в себя полный спектр документов, необходимых для ввоза и вывоза товаров, а также для успешного бизнеса на мировом рынке.
                Мы предоставляем вам надёжность и уверенность</p>

            <div className='guarantee__bottom__bar'>
                <div className='guarantee__box__container'>
                    <img src="img/certificateRF.png" alt="certificateRF" />
                    <h3>Свидетельство о регистрации в РФ</h3>
                </div>
                <div className='guarantee__box__container'>
                    <img src="img/certificateUS.png" alt="certificateUS" />
                    <h3>Свидетельство о регистрации в США</h3>
                </div>
                <div className='guarantee__box__container'>
                    <img src="img/certificateChina.png" alt="certificateChina" />
                    <h3>Свидетельство о регистрации в Китае</h3>
                </div>
                <div className='guarantee__box__container'>
                    <img src="img/certificateBritain.png" alt="certificateBritain" />
                    <h3>Свидетельство о регистрации в Великобритнии</h3>
                </div>
            </div>
        </div>
    )
}
