import React from 'react'
import { PhotoCardWithQuery } from "../components/PhotoCardWithQuery"
import { useParams } from "react-router-dom"

const Details = () => {
  const { detailId } = useParams()
  return (
    <>
      <h1>Detalles {detailId}</h1>
      <PhotoCardWithQuery id={detailId} />
    </>
  )
}

export default Details