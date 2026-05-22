import React from 'react';

export default function Article({ article, onTogglePin }) {
  return (
    <div className={`card mb-2 ${article.pinned ? 'border-3 border-warning' : ''}`}>
      <div className="card-body d-flex justify-content-between align-items-start">
        <div>
          <h5 className="card-title mb-1">{article.title}</h5>
          <p className="card-text small text-muted">Categoría: {article.category}</p>
          {article.pinned && (
            <span className="badge bg-warning text-dark">Fijado</span>
          )}
        </div>

        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => onTogglePin(article.id)}
        >
          {article.pinned ? 'Desfijar' : 'Fijar'}
        </button>
      </div>
    </div>
  );
}
