import styled from "styled-components";
import Section from "./Section";
import Center from "./Center";
import CentreAlignText from "./CentreAlignText";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import BoxLine from "./BoxLine";
import axios from "axios"
import { useState } from "react";
import Footer from "./Footer";
import { FormattedMessage, useIntl } from "react-intl";

const ContactForm = styled.form`
display: grid;
gap: 15px;
div{
    margin: auto;
    column-gap: 15px;
}
input{
    width: 50%;
    height: 40px;
    font-size: 20px;
    margin: auto;
    padding: 0 10px;
    border: none;
    border-radius: 5px;
    &:focus{
        outline:none
    }
}
`;

const BoxFullName = styled.div`
 display: flex;
 column-gap: 5px;
 width: 52%;
 input{
    border: none;
    width: 50%;
    height: 40px;
    border-radius: 5px;
    padding: 4px 7px;
    font-size: 18px;
 }
`;

const Email = styled.input`
    border: none;
    width: 50%;
    border-radius: 5px;
    padding: 4px 7px;
    font-size: 18px;
`;


const Textarea = styled.textarea`
  border: none;
    width: 50%;
    border-radius: 5px;
    margin: auto;
    padding: 4px 7px;
    font-size: 20px;
    &:focus{
        outline:none
    }
`;


const ButtonSend = styled.button`
  color: #EFB7FF;
  width: 52%;
  margin: auto;
  cursor: pointer;
  text-align: center;
  letter-spacing: .5px;
  border-radius: 4px;
  margin-top: 22px;
  margin-bottom: 8px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 23px;
  text-decoration: none;
  transition: all .3s;
  display: inline-block;
  box-shadow: 0 1px 1px transparent;
  border: 2px solid #EFB7FF;
  &&:hover{
    background-color: #EFB7FF;
    color: white;
    -webkit-box-shadow: 0px 0px 26px 1px rgba(244, 177, 131, 0.2);
    -moz-box-shadow: 0px 0px 26px 1px rgba(244, 177, 131, 0.2);
    box-shadow: 0px 0px 26px 1px rgba(244, 177, 131, 0.2);
  }
`;

const InputPhone = styled.input`
 border: none;
 width: 50%;
 border-radius: 5px;
 padding: 4px 7px;
 font-size: 18px;
`;


export default function ContactUs({ _id }) {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [messenger, setMessenger] = useState("")
    const [valid, setValid] = useState(true);
    const intl = useIntl()
    const tFirstname = intl.formatMessage({ id: "firstname" })
    const tLastname = intl.formatMessage({ id: "lastname" })
    const tEmail = intl.formatMessage({ id: "email" })
    const tMessenger = intl.formatMessage({ id: "messenger" })
    const TPhoneNumber = intl.formatMessage({ id: "phoneNumber" })

    async function saveProduct(ev) {
        ev.preventDefault();

        // Validate input fields
        if (firstname === "" || lastname === "" ||email === "" ||phoneNumber  === ""||messenger === "") {
            alert("Please fill in all required fields");
            return;
        }

        const data = {
            firstname, lastname, email, phoneNumber, messenger
        };
  
        if (_id) {
            // Update
            await axios.put('/api/contact', { ...data, _id });
        } else {
            // Create
            await axios.post('/api/contact', data);
        }

        // Clear input fields after submission
        setFirstname("");
        setLastname("");
        setPhoneNumber("");
        setEmail("");
        setMessenger("");
    }

    return (
        <>
            <Section>
                <Center>
                    <CentreAlignText>
                        <h2><FormattedMessage id="contactus" values={{ b: (info) => <b>{info}</b> }} /></h2>
                        <BoxLine />
                        <p style={{ paddingBottom: "35px" }}><FormattedMessage id="description" values={{ b: (info) => <b>{info}</b> }} /></p>
                    </CentreAlignText>
                    <ContactForm onSubmit={saveProduct}>
                        <BoxFullName>
                            <input name="firstname" value={firstname} onChange={(evt) => setFirstname(evt.target.value)} placeholder={tFirstname} type="text" />
                            <input name="lastname" value={lastname} onChange={(evt) => setLastname(evt.target.value)} placeholder={tLastname} type="text" />
                        </BoxFullName>
                        {/* <InputPhone value={"fdsjkl"} type="text" onClick={(evt) => setPhoneNumber(evt.target.value)} placeholder={TPhoneNumber} /> */}
                        <InputPhone value={phoneNumber} type="text" onChange={(evt) => setPhoneNumber(evt.target.value)} placeholder={TPhoneNumber} />

                        <Email value={email} onChange={(evt) => setEmail(evt.target.value)} type="email" name="email" placeholder={tEmail} />
                        <Textarea value={messenger} onChange={(evt) => setMessenger(evt.target.value)} name="messenger" placeholder={tMessenger}></Textarea>
                        <ButtonSend><FormattedMessage id="buttonSend" values={{ b: (info) => <b>{info}</b> }} /></ButtonSend>
                    </ContactForm>
                </Center>
            </Section>  
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.6671756741953!2d44.35639086147792!3d40.48262754365565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40402acd3ae25915%3A0xdd49220975dd45da!2z1LHWgNWh1aPVodWuINWA1bXVuNaC1oDVodW21bjWgQ!5e0!3m2!1shy!2sam!4v1703902468119!5m2!1shy!2sam"
                    height={500}
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <Footer />
        </>
    )
}