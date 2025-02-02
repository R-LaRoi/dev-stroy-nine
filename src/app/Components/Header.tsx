
import React from 'react'

type Props = {}

export default function Header({ }: Props) {
  return (
    <><div className="flex flex-col items-center justify-between w-full space-y md:flex-row md:space-y-0 md:space-x-4 p-4 ">
      <div className='uppercase text-xs '>Creative Developer</div>
      <div className='header-main uppercase'>STROY</div>
      <div className='uppercase text-xs'>New York </div>
    </div></>
  )
}
