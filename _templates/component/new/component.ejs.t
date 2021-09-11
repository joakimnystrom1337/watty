---
to: src/Components/Atoms/<%= name %>/<%= name %>.jsx
---
import React from 'react';


export const <%= name %> = ({
  ...props
}) => {
  return (
    <div {...props} >
      <%= name %>
    </div>
  );
};
