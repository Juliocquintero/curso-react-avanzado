import React from 'react';
import { Image, Link } from './styles';
const DEFAULT_IMAGE = 'https://placehold.co/800x800/000000/FFF?text=Imagen+por+defecto';

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {
  return (
    <Link to={path}>
      <Image src={cover} alt='' />
      {emoji}
    </Link>
  );
};
