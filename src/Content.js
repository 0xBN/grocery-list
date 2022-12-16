import { ItemList } from './ItemList';

export const Content = ({ items, handleCheck, handleDelete, fetchError }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '2em' }}>Your list is empty</p>
      )}
    </>
  );
};
