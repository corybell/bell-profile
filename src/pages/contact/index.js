import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { post } from '@bellistic/fetch-helper'
import Layout from 'components/PageLayout'
import SEO from 'components/Helmet'
import { spacing } from 'services/theme'
import { primaryButton, buttonWidth } from 'services/mixin'

const { GATSBY_FUNCTIONS_URL } = process.env

const regex = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/

const messages = {
  requiredField: 'This field is required',
  invalidEmail: 'Invalid email address',
  emailFailed: `Hmm...that didn't work. Please verify your email address and try again.`,
}

const getEmailError = (type) => type === 'pattern' ? messages.invalidEmail : messages.requiredField

const FormControl = styled.div`
  margin-bottom: ${spacing[8]};
`

const Label = styled.label`
  width: 100%;
  display: inline-block;
  margin-bottom: ${spacing[2]};
`

const TextBox = styled.input`
  width: 100%;
`

const ErrorMessage = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  color: red;
`

const TextArea = styled.textarea`
  width: 100%;
  height: 9rem;
  resize: none;
`

const ButtonContainer = styled.div`
  ${buttonWidth}
`

const SubmitButton = styled.input`
  ${primaryButton}
`

const ContactPage = () => {
  const { register, handleSubmit, errors } = useForm()
  const [sendError, setSendError] = useState(false)

  const onSubmit = async (data) => {
    const response = await post(`${GATSBY_FUNCTIONS_URL}/send-email`, data)

    if (!response.success) {
      console.error(response.data)
      setSendError(true)
      return
    }

    navigate('/contact/success/')
  }

  return (
    <Layout showFooter={false}>
      <SEO title="Contact" />
        <h1>Contact Me</h1>
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
          <ButtonContainer>
            <SubmitButton type="submit" value="Send" />
          </ButtonContainer>
        </form>
        { sendError && <ErrorMessage>{messages.emailFailed}</ErrorMessage> }
    </Layout>
  )
}

export default ContactPage
