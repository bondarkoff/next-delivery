export const restaurants = [
    {
        id: 1,
        name: 'McDonalds',
        items: [
            {
                id: 1,
                name: 'Big Mac Menu',
                price: 169,
                image: '/images/bigmac.png',
            },
            {
                id: 2,
                name: 'McChicken Menu',
                price: 99,
                image: '/images/mcchicken.png',
            },
            {
                id: 3,
                name: 'Royal Cheeseburger',
                price: 119,
                image: '/images/royal.png',
            },
        ],
    },
    {
        id: 2,
        name: 'Burger King',
        items: [
            {
                id: 1,
                name: 'Triple Whopper',
                price: 149,
                image: '/images/tripplewhopper.png',
            },
            {
                id: 2,
                name: 'Classic Cheese Melt',
                price: 89,
                image: '/images/classiccheese.png',
            },
            {
                id: 3,
                name: 'Chicken Royale',
                price: 229,
                image: '/images/chickeroyale.png',
            },
        ],
    },
    {
        id: 3,
        name: 'KFC',
        items: [
            {
                id: 4,
                name: 'Bucket of Chicken',
                price: 199,
                image: '/images/zinger.png',
            },
            {
                id: 5,
                name: 'Zinger Burger',
                price: 149,
                image: '/images/zinger.png',
            },
            {
                id: 6,
                name: 'Twister Wrap',
                price: 109,
                image: '/images/zinger.png',
            },
        ],
    },
];

export default function handler(req, res) {
    res.status(200).json(restaurants);
}
