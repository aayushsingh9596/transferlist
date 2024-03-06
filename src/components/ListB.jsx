const ListB = ({ items,selectedItem,setSelectedItem }) => {
    return (
      <div className="listB">
        {items.map((item,index) => {
          return <div key={index} className={selectedItem.item===item?"item selected":"item"} onClick={()=>{
            setSelectedItem({...selectedItem,
              item:item,
              list:"B"
          })}}>{item}</div>;
        })}
      </div>
    );
  };
  
  export default ListB;
  