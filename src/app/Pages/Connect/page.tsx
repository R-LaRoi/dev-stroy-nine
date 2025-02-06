import Contact from '@/app/Components/Contact'
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
Header
Contact
import React from 'react'
Footer
type Props = {}

export default function Connect({ }: Props) {
  return (
    <>
      <Header />
      <div>Contact</div>
      <Contact />
      <Footer />
    </>

  )
}