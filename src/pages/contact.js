import React, { useState } from "react"
import styled from 'styled-components'
import Layout from "components/PageLayout"
import SEO from "components/Helmet"
import { spacing, color, fontSize, fontWeight } from 'services/theme'

const Label = styled.label`
  width: 100%;
  display: inline-block;
  margin-bottom: ${spacing[2]};
`

const TextBox = styled.input`
  width: 100%;
`

const TextArea = styled.textarea`
  width: 100%;
  height: 9rem;
  resize: none;
`

const SubmitButton = styled.input`
  width: 224px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  color: #000;
  font-size: ${fontSize[1]};
  font-weight: ${fontWeight.medium};
  border: 5px solid ${color.primary};
  text-transform: uppercase;
  transition: background-color 300ms ease-in-out, border-color 400ms ease-in-out;
  &:hover {
    color: white;
    background-color: ${color.primary};
    cursor: pointer;
  }
`

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const submit = (e) => {
    const payload = {
      name,
      email,
      message,
    }
    console.log(payload)
    e.preventDefault()
  }
  
  return (
    <Layout showFooter={false}>
      <SEO title="Contact" />
      <form onSubmit={submit}>
        <Label>Name</Label>
        <TextBox type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <Label>Email</Label>
        <TextBox type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Label>Message</Label>
        <TextArea type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <SubmitButton type="submit" value="Send" />
      </form>
    </Layout>
  )
}

export default ContactPage
