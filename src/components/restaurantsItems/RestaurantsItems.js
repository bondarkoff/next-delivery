const RestaurantsItems = ({ items }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}</p>
                </li>
            ))}
        </ul>
    );
};

export default RestaurantsItems;
