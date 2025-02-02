import React from 'react'

type Props = {}

export default function HeroText({ }: Props) {
  return (
    <>
      <div className="hero-text -translate-y-[25%]">
        <div>STROY</div>
      </div>
      <div className=' hero-sub-text textcenter text-xl uppercase'>
        Hi! I'm Rachel, creative developer working with awesome people like you to create memorable web experiences that are user-friendly and designed to go places.
      </div>
    </>
  )
}