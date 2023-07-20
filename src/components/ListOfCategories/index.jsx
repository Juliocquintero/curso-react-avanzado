import React, { useState } from 'react';
import { Category } from '../Category';
import { Item, List } from './styles';
import { categories } from '../../../api/db.json'
export const ListOfCategories = () => {
const [categories, setCategories] = useState([])
  return (
    <>
      <List>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category emoji={category.emoji} category={category.name} cover={category.cover} />
          </Item>
        ))}
      </List>
    </>
  );
};
