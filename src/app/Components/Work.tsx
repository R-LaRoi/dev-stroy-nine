import React from 'react'
import { projectItems } from '../Data/projectData'
import Link from 'next/link'

export default function Work() {
  return (
    <div>

      <div className="next-section">
        <h4 className="uppercase text-center relative top-1/4 title p-[20%]">
          <div>curated</div> work</h4>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {projectItems.map((item, index) => (
              <li
                key={item.id}
                value={index}

              >
                <Link href={item.link} className="block">
                  <div className="aspect-w-16 h-96">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-2 flex justify-between items-center">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>


        </div>
      </div>
    </div>
  )
}