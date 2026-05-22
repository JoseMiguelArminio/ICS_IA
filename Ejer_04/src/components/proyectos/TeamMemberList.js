import React from 'react';

function TeamMemberList({ responsables }) {
  return (
    <div className="mb-2">
      {responsables.map(res => (
        <span key={res.id} className="badge bg-info text-dark me-1">
          {res.nombre}
        </span>
      ))}
    </div>
  );
}

export default TeamMemberList;
