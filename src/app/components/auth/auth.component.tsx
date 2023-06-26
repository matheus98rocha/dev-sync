'use client'
import React from 'react'
import PrimaryInput from '../input/primary-input.component'
import SocialMediaIcons from '../social-media-icons/social-media-icons.components'

function Auth() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [step, setStep] = React.useState('login')
  return (
    <div
      className="
  flex
  items-center
  justify-around
  flex-col
  gap-8
  bg-backgroud
  w-screen
  h-screen
  md:w-1/4
  md:h-5/6
  py-9
  px-10
  rounded-md
  shadow-lg
  animate-fade-up
  "
    >
      <h1 className="text-primary text-4xl font-bold">Titulo do site</h1>
      <div
        className="
    flex
    items-center
    justify-between
    flex-col
    gap-6
    w-full
    pb-4
    border-b border-solid border-[#d0d0d0]
    "
      >
        <PrimaryInput
          label="E-mail"
          type="e-mail"
          placeholder="Digite seu e-mail"
          valueInput={email}
          handleChangeInput={(event) => setEmail(event.target.value)}
        />
        <PrimaryInput
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          valueInput={password}
          handleChangeInput={(event) => setPassword(event.target.value)}
        />
        {step === 'login' ? (
          <button>Logar</button>
        ) : (
          <button>Criar Conta</button>
        )}
      </div>
      <SocialMediaIcons />
      <div
        className="
        w-full
        border-t
        border-solid
        border-[#d0d0d0]
        py-9
        flex
        items-center
        justify-center
        gap-2
    "
      >
        {step === 'login' ? (
          <>
            <p>Não possui uma conta?</p>
            <p
              className="text-primary hover:cursor-pointer"
              onClick={() => setStep('create-account')}
            >
              Criar Conta
            </p>
          </>
        ) : (
          <>
            <p>Já possui uma conta?</p>
            <p
              className="text-primary hover:cursor-pointer"
              onClick={() => setStep('login')}
            >
              Entrar
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default Auth
