import { useState } from "react";
import ListA from "./ListA";
import ListB from "./ListB";

const Lists = () => {
  const [itemsA, setItemsA] = useState(["AA", "BB", "CC", "DD"]);
  const [itemsB, setItemsB] = useState(["EE", "FF", "GG", "HH"]);
  const [selectedItem, setSelectedItem] = useState({
    item: "",
    list: "",
  });

  return (
    <div className="lists">
      <ListA
        items={itemsA}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <div className="buttons">
        <button
          onClick={() => {
            if (selectedItem.list === "B") {
              setItemsA([...itemsA, selectedItem.item]);
              setItemsB(itemsB.filter((item) => item !== selectedItem.item));
              setSelectedItem({...selectedItem,item:'',list:''})
            }
          }}
        >
          {"<"}
        </button>
        <button
          onClick={() => {
            if (selectedItem.list === "A") {
              setItemsB([...itemsB, selectedItem.item]);
              setItemsA(itemsA.filter((item) => item !== selectedItem.item));
              setSelectedItem({...selectedItem,item:'',list:''})
            }
          }}
        >
               {">"}
        </button>
      </div>
      <ListB
        items={itemsB}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </div>
  );
};

export default Lists;
