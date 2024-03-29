import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

export const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text'
        placeholder='Add Item'
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
        required
      />
      <button
        type='submit'
        aria-label='Add Item'
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};
