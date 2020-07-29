import React, {useState} from "react";


export default props => {
    // !DRY тут зашкаливает, но для теста терпимо
    const [id, Value] = useState("")
    const [firstName, Value1] = useState("")
    const [lastName, Value2] = useState("")
    const [email, Value3] = useState("")
    const [phone, Value4] = useState("")
    const [address] = useState(
        {streetAddress: "7560 Sapien Rd",
        city: "Meridianville",
        state: "WI",
        zip: "25030"})
    const [description] = useState("")
    const showValue = e => Value(e.target.value)
    const showValue1 = e => Value1(e.target.value)
    const showValue2 = e => Value2(e.target.value)
    const showValue3 = e => Value3(e.target.value)
    const showValue4 = e => Value4(e.target.value)

    return (
        <div>
            {props.input === true ? <div>
                <form>
                    {id && firstName && lastName && email && phone  !== "" ? <div >
                        <button type="button" onClick={()=>props.addInTable({id,firstName,lastName,email,phone,address,description})} >Добавить в таблицу</button>
                    </div>: null}
                <input value={id} onChange={showValue} required placeholder={"id"} />
                <input value={firstName}  onChange={showValue1} required placeholder={"firstName"} />
                <input value={lastName} onChange={showValue2} required placeholder={"lastName"} />
                <input value={email} onChange={showValue3} required placeholder={"email"} />
                <input value={phone} onChange={showValue4} required placeholder={"phone"} />
                </form>
            </div>: null


            }
        </div>
    )

}