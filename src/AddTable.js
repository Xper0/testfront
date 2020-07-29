import React, {useState} from "react";


export default props => {
    const [value] = useState(true)

    return (
        <div><button onClick={() => props.addInput(value)}>Добавить
            </button>
            <p> {console.log(props.input)}</p>
            {props.value === true ? <div><input placeholder={"id"} />
                <input placeholder={"firstName"} />
                <input placeholder={"lastName"} />
                <input placeholder={"email"} />
                <input placeholder={"phone"} />
            </div>: null

        }</div>
        )

}