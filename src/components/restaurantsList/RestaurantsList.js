import { useState, useEffect } from 'react';
import RestaurantsItems from '../restaurantsItems/RestaurantsItems';

const RestaurantsList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/restaurants')
            .then(res => res.json())
            .then(data => setRestaurants(data));
    }, []);

    const selectedRestaurantClick = restaurants => {
        setSelectedRestaurant(restaurants);
    };

    return (
        <div className='pt-7'>
            <div className='text-2xl'>Restaurants List</div>
            <div className='bg-gray-100 rounded-md p-5 shadow-md'>
                <div className='flex flex-row'>
                    <ul className='border-r-4 w-48'>
                        {restaurants.map(restaurant => (
                            <li
                                className='text-2xl mt-7 first:mt-0'
                                key={restaurant.id}
                                onClick={() => selectedRestaurantClick(restaurant)}>
                                <h2>{restaurant.name}</h2>
                            </li>
                        ))}
                    </ul>
                    {selectedRestaurant && (
                        <div className='text-xl'>
                            <h3>{selectedRestaurant.name} items</h3>
                            <RestaurantsItems items={selectedRestaurant.items} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default RestaurantsList;
