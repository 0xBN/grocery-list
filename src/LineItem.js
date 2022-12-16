import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className='item' onDoubleClick={() => handleCheck(item.id)}>
      <input
        type='checkbox'
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label style={item.checked ? { textDecoration: 'line-through' } : null}>
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role='button'
        tabIndex='0'
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};
