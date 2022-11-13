/* Создать новый проект. В нем создать компонент Товар
Товару необходимо передавать:
название
описание
цену
Отобразите верстку, которая покажет название, описание и цену товара.
Bonus Tasks:
* Пусть Товар теперь принимает также проп количества товара. В зависимости от количества товара отображать либо:
что он в наличии 
либо что его нет в наличии
* Реализовать заглушки в компоненте для пропсов и отображать их, если некоторые данные не передали

* Реализовать Комопонент Товар как через классовый так и через функциональный компонент */

import React from 'react';

function Goods (props) {
    const {product: {name, description, price, amount}} = props;
    return (
      <>
        <h1>Name: {name}</h1>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <p>Amount: {(amount && amount !== '' && amount > 0) ? `${amount} in stock` : 'product is out of stock'}</p>
      </>
    )
  }

export default Goods;

