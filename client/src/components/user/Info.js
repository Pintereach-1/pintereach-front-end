import React, {useState} from 'react'

const Info = () => {

    const [showInfo, setShow] = useState(false)
    const toggleShow = (event) => {
        setShow(true)
    }
    const toggleOff = (event) => {
        setShow(false)
    }

    if (showInfo) {
        return (
            <div>
                <div>We at Pintereach respect your right to privacy. As such, we do not ask for nor store any of your Personal Information such as your name, e-mail address, or phone number.</div>
                <button onClick={toggleOff}>Close</button>
            </div>
        )
    }

    return (
        <div>
            <div>Your Privacy Matters to Us</div>
            <button onClick={toggleShow}>Learn More</button>
        </div>

    )
}

export default Info;