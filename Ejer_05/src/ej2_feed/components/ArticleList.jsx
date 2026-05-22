import React from 'react';
import Article from './Article';

export default function ArticleList({ articles, onTogglePin }) {
  return (
    <div>
      {articles.map((a) => (
        <Article key={a.id} article={a} onTogglePin={onTogglePin} />
      ))}
    </div>
  );
}
