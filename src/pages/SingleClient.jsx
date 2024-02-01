import React from 'react';
import { useGlobalContext } from '../context';

export default function SingleClient() {
  const { selectedRow } = useGlobalContext();

  return (
    <div>
      {selectedRow && (
        <div>
          
          <p>{`Details for ${selectedRow.title}: Status - ${selectedRow.status}`}</p>
        </div>
      )}
    </div>
  );
}
