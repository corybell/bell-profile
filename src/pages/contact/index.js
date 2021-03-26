import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import Layout from 'components/PageLayout'
import SEO from 'components/Helmet'
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

const FormControl = styled.div`
  margin-bottom: ${spacing[8]};
`

const ErrorMessage = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  color: red;
`

const regex = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/

const messages = {
  requiredField: 'This field is required',
  invalidEmail: 'Invalid email address',
  emailFailed: `Hmm...That didn't work. Please verify your email address and try again.`,
}

const getEmailError = (type) => type === 'pattern' ? messages.invalidEmail : messages.requiredField

const ContactPage = () => {
  const { register, handleSubmit, errors } = useForm()
  const [sendError, setSendError] = useState(false)

  const onSubmit = (data) => {
    console.log(data)

    if (data.name !== 'Cory') {
      setSendError(true)
      return
    }

    navigate('/contact/success/')
  }

  return (
    <Layout showFooter={false}>
      <SEO title="Contact" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Label>Name</Label>
            <TextBox type="text" name="name" ref={register({ required: true })} />
            {errors.name && <ErrorMessage>{messages.requiredField}</ErrorMessage>}
          </FormControl>
          <FormControl>
            <Label>Email</Label>
            <TextBox type="text" name="email" ref={register({ required: true, pattern: regex })} />
            {errors.email && <ErrorMessage>{getEmailError(errors.email.type)}</ErrorMessage>}
          </FormControl>
          <FormControl>
            <Label>Message</Label>
            <TextArea type="text" name="message" ref={register({ required: true })} />
            {errors.message && <ErrorMessage>{messages.requiredField}</ErrorMessage>}
          </FormControl>
          <SubmitButton type="submit" value="Send" />
        </form>
        { sendError && <ErrorMessage>{messages.emailFailed}</ErrorMessage> }
    </Layout>
  )
}

export default ContactPage
