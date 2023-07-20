import React from 'react';
import { Category } from '../Category';
import { Item, List } from './styles';
import useCategoryData from "../../hooks/useCategoryData";
import useScrollFixed from "../../hooks/useScrollFixed";

export const ListOfCategories = () => {
  const { categories, loading } = useCategoryData()
  const { showFixed } = useScrollFixed()

  const renderList = (fixed) => {
    return (
      <List fixed={fixed ? 1 : 0}>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category emoji={category.emoji} category={category.name} cover={category.cover} />
          </Item>
        ))}
      </List>)
  }

  return (
    <>
      {
        loading && <marquee>Cargando...</marquee>
      }
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
