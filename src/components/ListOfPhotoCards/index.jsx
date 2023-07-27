import React from 'react'
import { PhotoCard } from "../PhotoCard"
import useGetPhotos from "../../hooks/useGetPhotos"
import Loader from "../Loader"


export const ListOfPhotoCards = ({ categoryId }) => {
  const { photos, loading } = useGetPhotos(categoryId)
  if (loading) return <Loader />
  return (
    <ul>
      {
        photos?.map((card =>
          <li key={card.id}>
            <PhotoCard id={card.id} src={card.src} likes={card.likes} />
          </li>

        ))
      }


    </ul>
  )
}

