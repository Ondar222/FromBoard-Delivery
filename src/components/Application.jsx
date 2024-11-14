import React, { useState } from 'react';

export default function Application() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');
  const [value9, setValue9] = useState('');
  const [result, setResult] = useState(null);
  const [successMessage, setSuccessMessage] = useState(''); // Состояние для сообщения об успехе

  const handleSubmit = (e) => {
    e.preventDefault(); // предотвращаем перезагрузку страницы

    // Проверка, что все поля заполнены
    if (!value1 || !value2 || !value3 || !value4 || !value5 || !value6 || !value7 || !value8 || !value9) {
      alert("Пожалуйста, заполните все поля."); // сообщение пользователю
      return;
    }

    // Логика расчета стоимости доставки
    const deliveryCost = calculateDeliveryCost(value4, value5); // здесь, например, ваша функция расчета

    setResult(deliveryCost); // установка результата
    setSuccessMessage('Заявка успешно создана!'); // Установка сообщения об успехе
  };

  const calculateDeliveryCost = (area, weight) => {
    // Примерная логика расчета (зависит от вашего алгоритма)
    const baseCost = 50; // базовая стоимость
    const areaCost = area * 10; // стоимость за площадь
    const weightCost = weight * 5; // стоимость за вес

    return baseCost + areaCost + weightCost; // общая стоимость
  };

  return (
    <div className='application'>
      <div className='application__container'>
        <div className='application__header'>
          <h1>Заявка на доставку</h1>
          <p>Оставьте заявку на доставку</p>
        </div>
        <div className='application__form'>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div>
              <input
                style={{ width: "91%", height: "50%", padding: "20px 20px" }}
                type="text"
                id="name"
                name="name"
                value={value1}
                placeholder='Имя'
                onChange={(e) => setValue1(e.target.value)}
              />
            </div>
            <div className='form-field'>
              <input
                type="text"
                id="email"
                name="email"
                placeholder='Почта'
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
              />
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder='Телефон'
                value={value3}
                onChange={(e) => setValue3(e.target.value)}
              />
            </div>
            <div className='form-field'>
              <input
                type="text"
                id="area"
                name="area"
                placeholder='Общая площадь, м'
                value={value4}
                onChange={(e) => setValue4(e.target.value)}
              />
              <input
                type="text"
                id="weight"
                name="weight"
                placeholder='Вес, кг'
                value={value5}
                onChange={(e) => setValue5(e.target.value)}
              />
            </div>

            <div className='form-field'>
              <input
                type="text"
                id="country"
                name="country"
                placeholder='Страна покупки'
                value={value6}
                onChange={(e) => setValue6(e.target.value)}
              />
              <input
                type="text"
                id="city"
                name="city"
                placeholder='Город покупки'
                value={value7}
                onChange={(e) => setValue7(e.target.value)}
              />
            </div>
            <div className='form-field'>
              <input
                type="text"
                id="region"
                name="region"
                placeholder='Область доставки'
                value={value8}
                onChange={(e) => setValue8(e.target.value)}
              />
              <input
                type="text"
                id="cityDelivery"
                name="cityDelivery"
                placeholder='Город доставки'
                value={value9}
                onChange={(e) => setValue9(e.target.value)}
              />
            </div>
            <button type="submit" className='btn_calculate'>Отправить заявку</button>
          </form>
          {result !== null && (
            <p>Стоимость доставки: {result}</p>
          )}
          {successMessage && (
            <p style={{ color: 'green' }}>{successMessage}</p> // Отображение сообщения об успехе
          )}
        </div>
      </div>
    </div>
  );
}
