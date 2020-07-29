import React, {useState} from "react";


export default props => {
    const [value, Value] = useState("")
    const showValue = e =>
        Value(e.target.value)

    return(
        <div className="input-group mb-3">
            <div >
                <button  type="button" onClick={() => props.searchValue(value)}>Найти</button>
            </div>
            <input type="text" value={value} onChange={showValue}  placeholder="" />
        </div>
    )
}

