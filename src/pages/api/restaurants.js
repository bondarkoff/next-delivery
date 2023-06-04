export const restaurants = [
    {
        id: 1,
        name: 'McDonalds',
        items: [
            {
                id: 1,
                name: 'Big Mac Menu',
                price: 169,
            },
            {
                id: 2,
                name: 'Royal Cheeseburger Menu',
                price: 119,
            },
            {
                id: 3,
                name: 'McChicken Menu',
                price: 99,
            },
        ],
    },
    {
        id: 2,
        name: 'Burger King',
        items: [
            {
                id: 1,
                name: 'Triple Wopper',
                price: 149,
            },
            {
                id: 2,
                name: 'Big Burger',
                price: 89,
            },
            {
                id: 3,
                name: 'Fat Daddy Burger',
                price: 229,
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
            },
            {
                id: 5,
                name: 'Zinger Burger',
                price: 149,
            },
            {
                id: 6,
                name: 'Twister Wrap',
                price: 109,
            },
        ],
    },
];

export default function handler(req, res) {
    res.status(200).json(restaurants);
}
