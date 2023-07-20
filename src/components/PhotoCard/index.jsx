import React from 'react'

import { Article, Button, Img, ImgWrapper } from "./styles"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import useNearScreen from "../../hooks/useNearScreen";
import useLikeStorage from "../../hooks/useLocalStorage";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const PhotoCard = ({
  id, likes = 0, src = DEFAULT_IMAGE
}) => {
  const { ref, show } = useNearScreen()

  const key = `like-${id}`
  const [liked, setLiked] = useLikeStorage(key, false)

  const handleClick = () => {
    setLiked(!liked)
  }

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ref}>
      {show &&
        <>
          <a href={`/detail/${id}`} >

            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
          </a>
          <Button onClick={handleClick}>
            <Icon size='32px' />
            {likes} likes!
          </Button>

        </>
      }
    </Article>
  )
}
