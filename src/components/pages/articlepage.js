import React from 'react';

const ArticlePage = ({ match }) => {
const name = match.params.name
  return <>
  <h1 className='text-center'>Article {name}</h1>
  </>
}
export default ArticlePage;
