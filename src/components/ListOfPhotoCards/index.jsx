import React from 'react'
import { PhotoCard } from "../PhotoCard"

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3].map((card =>
          <li key={card}>
            <PhotoCard />
          </li>

        ))
      }


    </ul>
  )
}
