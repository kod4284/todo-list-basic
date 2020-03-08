import React from 'react';

function TodoTemplate({ children }: any) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Manage Schedule</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default TodoTemplate;
