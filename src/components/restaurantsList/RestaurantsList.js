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
            <div className='flex flex-row bg-slate-100 rounded-md mt-5 p-5 shadow-md h-full w-full'>
                <ul className='border-r-4 w-48'>
                    {restaurants.map(restaurant => (
                        <li
                            className={
                                selectedRestaurant && selectedRestaurant.name == restaurant.name
                                    ? 'text-3xl mt-5 first:mt-0 font-medium transition duration-150 transform cursor-pointer text-black'
                                    : 'text-2xl mt-5 first:mt-0 transition duration-150 cursor-pointer text-black/50'
                            }
                            key={restaurant.id}
                            onClick={() => selectedRestaurantClick(restaurant)}>
                            <h2>{restaurant.name}</h2>
                        </li>
                    ))}
                </ul>
                {selectedRestaurant ? (
                    <>
                        {selectedRestaurant && (
                            <div className='text-xl ml-5'>
                                <div className='flex flex-col align-middle'>
                                    <h3 className='text-2xl font-bold'>
                                        {selectedRestaurant.name} menu
                                    </h3>
                                    <p>{selectedRestaurant.items.length} total items.</p>
                                </div>
                                <RestaurantsItems items={selectedRestaurant.items} />
                            </div>
                        )}
                    </>
                ) : (
                    <div className='flex justify-center items-center text-3xl w-full text-gray-400/75 h-96'>
                        Please, select a restaurant to see its menu
                    </div>
                )}
            </div>
        </div>
    );
};
export default RestaurantsList;
