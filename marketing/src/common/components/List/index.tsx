/* eslint-disable */
import React from 'react';
import { Link } from 'gatsby';
import { ListWrapper } from './list.style';

const List = ({ className, icon, text, link, ...props }) => (
  <ListWrapper className={className}>
    {link ? (
      <Link to={link}>
        {icon}
        {text}
      </Link>
    ) : (
      <>
        {icon}
        {text}
      </>
    )}
  </ListWrapper>
);

export default List;
