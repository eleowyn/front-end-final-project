function ItemList({ items, title }) {
    return (
      <section className="my-8">
        <h3 className="text-2xl font-bold">{title}</h3>
        <ul className="space-y-4 mt-4">
          {items.map((item, index) => (
            <li key={index} className="border p-4">
              <h4 className="font-bold">{item.itemName}</h4>
              <p>{item.description}</p>
              <p><strong>Location:</strong> {item.location}</p>
              <p><strong>Contact:</strong> {item.contact}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default ItemList;