import React from 'react'

export default function Advantages() {
    return (
        <div className='advantages'>
            <h1>Наши преимущества</h1>
            <div className='advantages__top__bar'>
                <div className='box'>
                    <img src="/img/cargo.png" alt="cargo" width={136} height={136} />
                    <div>
                        <h3>Растоможка груза</h3>
                        <p>Мы берём на себя все формальности и бумажную волокиту, связанную с растаможкой груза</p>
                    </div>
                </div>
                <div className='box'>
                    <img src="/img/packaging.png" alt="packaging" width={136} height={136} />
                    <div>
                        <h3>Надёжная упаковка</h3>
                        <p>Все товары упаковываются нашими специалистами с особым вниманием к деталям, гарантируя, что они дойдут в безопасности и в отличном состоянии</p>
                    </div>
                </div>
                <div className='box'>
                    <img src="/img/profitably.png" alt="profitably" width={136} height={136} />
                    <div>
                        <h3>Быстро и выгодно</h3>
                        <p>Мы предлагаем быструю и выгодную доставку, чтобы вы могли насладиться покупками как можно скорее.</p>
                    </div>
                </div>
            </div>

            <div className='advantages__bottom__bar'>
                <div className='box'>
                    <img src="/img/service.png" alt="service" width={136} height={136} />
                    <div>
                        <h3>Растоможка груза</h3>
                        <p>Мы берём на себя все формальности и бумажную волокиту, связанную с растаможкой груза</p>
                    </div>
                </div>
                <div className='box'>
                    <img src="/img/transparency.png" alt="transparency" width={136} height={136} />
                    <div>
                        <h3>Надёжная упаковка</h3>
                        <p>Все товары упаковываются нашими специалистами с особым вниманием к деталям, гарантируя, что они дойдут в безопасности и в отличном состоянии</p>
                    </div>
                </div>
                <div className='box'>
                    <img src="/img/insurance.png" alt="insurance" width={136} height={136} />
                    <div>
                        <h3>Быстро и выгодно</h3>
                        <p>Мы предлагаем быструю и выгодную доставку, чтобы вы могли насладиться покупками как можно скорее.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
