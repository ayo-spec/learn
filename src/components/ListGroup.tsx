import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston"];
  const [selectedIndex, setSelectedIndex] = useState(0);


  return (

    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className={
              selectedIndex === items.indexOf(item)
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(items.indexOf(item));
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
