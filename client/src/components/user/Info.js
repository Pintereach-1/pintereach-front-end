import React, {useState} from 'react'
import styled from 'styled-components'

const CenterDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:white;
color:black;
border:1px solid black;
width:35%;
margin:5% auto;
padding:2.5%;
flex-direction:column;
`

const InfoDiv = styled.div`
margin:10% auto;
display:flex;
justify-content:flex-start;
flex-direction:column;
align-items:center;
text-align:justify;
border:1px solid black;
border-radius:10px;
padding:10px;
font-size:.85rem;
width:240px;
`

const SmallButton = styled.button`
background-color:#C8D96F;
color:#5C573E;
width:100px;
height:33px;
margin:10px;
border-radius:10px;
border:1px solid #5C573E;
font-size:.85rem;
`

const StyledButton = styled.button`
background-color:#C8D96F;
color:#5C573E;
width:240px;
height:33px;
margin:10px;
border-radius:10px;
border:1px solid #5C573E;
`

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
            
                <InfoDiv>We at Pintereach respect your right to privacy. As such, we do not ask for nor store any of your Personal Information such as your name, e-mail address, or phone number.
                <SmallButton onClick={toggleOff}>Close</SmallButton></InfoDiv>
           
        )
    }

    return (
       
            <InfoDiv>Your Privacy Matters to Us.
            <SmallButton onClick={toggleShow}>Learn More</SmallButton></InfoDiv>
        

    )
}

export default Info;