import React, { useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import EmptyState from './components/EmptyState';

const initialArticles = [
  { id: 'a1', title: 'React 19 ya está aquí', category: 'React', pinned: true },
  { id: 'a2', title: 'Novedades en CSS: View Transitions', category: 'CSS', pinned: false },
  { id: 'a3', title: 'State Management con Zustand', category: 'React', pinned: false },
  { id: 'a4', title: 'El futuro de JavaScript: Records y Tuples', category: 'JavaScript', pinned: false },
];

export default function App() {
  const [articles, setArticles] = useState(initialArticles);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todas');

  // 🔹 Función para fijar o desfijar un artículo
  const togglePin = (id) => {
    setArticles(prev => {
      const currentlyPinned = prev.find(a => a.pinned);
      return prev.map(a => {
        if (a.id === id) return { ...a, pinned: !a.pinned };
        if (currentlyPinned && a.id === currentlyPinned.id && id !== currentlyPinned.id)
          return { ...a, pinned: false };
        return a;
      });
    });
  };

  const categories = useMemo(() => {
    const set = new Set(articles.map(a => a.category));
    return ['Todas', ...Array.from(set)];
  }, [articles]);

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return articles
      .filter(a => {
        const matchesSearch = a.title.toLowerCase().includes(term);
        const matchesCategory = categoryFilter === 'Todas' ? true : a.category === categoryFilter;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1)); // fijado arriba
  }, [articles, searchTerm, categoryFilter]);

  return (
    <div className="container py-4">
      <h1 className="mb-3">Feed de Noticias</h1>

      <div className="row mb-3">
        <div className="col-md-6 mb-2">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="btn-group ms-auto" role="group">
            {categories.map(c => (
              <button
                key={c}
                className={`btn ${categoryFilter === c ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setCategoryFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <ArticleList articles={filtered} onTogglePin={togglePin} />
      )}
    </div>
  );
}
