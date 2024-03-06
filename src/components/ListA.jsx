const ListA = ({ items,selectedItem,setSelectedItem }) => {
  return (
    <div className="listA">
      {items.map((item,index) => {
        return <div key={index} className={selectedItem.item===item?"item selected":"item"} onClick={()=>{setSelectedItem({...selectedItem,
            item:item,
            list:"A"
        })}}>{item}</div>;
      })}
    </div>
  );
};

export default ListA;
