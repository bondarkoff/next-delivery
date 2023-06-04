export const restaurants = [
    {
        id: 1,
        name: 'McDonalds',
        items: [
            {
                id: 1,
                name: 'Big Mac',
                price: 169,
                image: '/images/mcdonalds/item-1.jpg',
            },
            {
                id: 2,
                name: 'McChicken',
                price: 99,
                image: '/images/mcdonalds/item-2.jpg',
            },
            {
                id: 3,
                name: 'Royal Cheeseburger',
                price: 119,
                image: '/images/mcdonalds/item-3.jpg',
            },
            {
                id: 4,
                name: 'Hamburger',
                price: 49,
                image: '/images/mcdonalds/item-4.jpg',
            },
            {
                id: 5,
                name: 'Cheeseburger',
                price: 59,
                image: '/images/mcdonalds/item-5.jpg',
            },
            {
                id: 6,
                name: 'Double Cheeseburger',
                price: 89,
                image: '/images/mcdonalds/item-6.jpg',
            },
            {
                id: 7,
                name: 'Cheese Toast',
                price: 39,
                image: '/images/mcdonalds/item-7.jpg',
            },
        ],
    },
    {
        id: 2,
        name: 'Burger King',
        items: [
            {
                id: 1,
                name: 'Californian BBQ Double',
                price: 149,
                image: '/images/burgerking/item-1.webp',
            },
            {
                id: 2,
                name: 'Californian BBQ Single',
                price: 89,
                image: '/images/burgerking/item-2.webp',
            },
            {
                id: 3,
                name: 'Californian BBQ Royale',
                price: 229,
                image: '/images/burgerking/item-3.webp',
            },
            {
                id: 4,
                name: 'Peppercorn Angus',
                price: 79,
                image: '/images/burgerking/item-4.webp',
            },
            {
                id: 5,
                name: 'Chicken Royale',
                price: 99,
                image: '/images/burgerking/item-5.webp',
            },
            {
                id: 6,
                name: 'Double WHOPPER®',
                price: 139,
                image: '/images/burgerking/item-6.webp',
            },
        ],
    },
    {
        id: 3,
        name: 'KFC',
        items: [
            {
                id: 1,
                name: 'Chief Burger',
                price: 69,
                image: '/images/kfc/item-1.png',
            },
            {
                id: 2,
                name: 'Kentucky Burger',
                price: 99,
                image: '/images/kfc/item-2.png',
            },
            {
                id: 3,
                name: 'Sanders Classic',
                price: 59,
                image: '/images/kfc/item-3.png',
            },
            {
                id: 4,
                name: 'Sanders Spicy',
                price: 79,
                image: '/images/kfc/item-4.png',
            },
            {
                id: 5,
                name: 'Cheeseburger Jr.',
                price: 49,
                image: '/images/kfc/item-5.png',
            },
        ],
    },
];

export default function handler(req, res) {
    res.status(200).json(restaurants);
}
