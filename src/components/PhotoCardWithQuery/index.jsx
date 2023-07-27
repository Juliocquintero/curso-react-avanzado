import React from 'react'

import { PhotoCard } from "../PhotoCard";
import useGetSinglePhoto from "../../hooks/useGetSinglePhoto";
import Loader from "../Loader";

export const PhotoCardWithQuery = ({ id }) => {
  const { photo, loading } = useGetSinglePhoto(id)
  if (loading) return <Loader />
  return (
    <>
      {photo &&
        <PhotoCard id={photo?.id} likes={photo?.likes} src={photo?.src} />
      }
    </>
  )
}
