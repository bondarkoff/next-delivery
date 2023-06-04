import Image from 'next/image';
import Price from './Price';

const RestaurantsItems = ({ items }) => {
    return (
        <div className='grid grid-cols-4 gap-5'>
            {items.map(item => (
                <div
                    key={item.id}
                    className='mt-5 p-3 bg-orange-100 rounded-md flex flex-col justify-between cursor-pointer hover:bg-orange-200 transition duration-150'>
                    <div className=''>
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={250}
                            height={200}
                            className='rounded-md bg-transparent overflow-hidden'
                        />
                    </div>
                    <div className='mt-6'>
                        <h3 className='font-medium text-2xl'>{item.name}</h3>
                        <Price price={item.price} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantsItems;
