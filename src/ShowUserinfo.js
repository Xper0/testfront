import React from "react";

export default props => (
    <div>
            <p>Выбран пользователь {props.row.firstName}}</p>
            <p>Описание: {props.row.description}</p>
            <p>Адрес проживания: {props.row.address.streetAddress}</p>
            <p>  Город: <b>{props.row.address.city}</b></p>
            <p>Провинция/штат: <b>{props.row.address.state}</b></p>
            <p>Индекс: <b>{props.row.address.zip}</b></p>
    </div>

)
