import React, { JSX } from 'react';

export default function ServiceItem({ number, title, description }: { number: string, title: string, description: string }): JSX.Element {
  return (
    <div className="p-2">
      <div>
        <div className='py-5'>
          <small >{number}</small>
        </div>

        <hr></hr>
        <div className="p-3"></div>
        <h4 className='text-2xl py-5'>{title}</h4>
        <p>{description}</p>

      </ div>
    </div >
  );
}