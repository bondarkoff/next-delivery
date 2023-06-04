import Image from 'next/image';
import Price from './Price';

const RestaurantsItems = ({ items }) => {
    return (
        <div className='flex flex-row flex-wrap justify-center'>
            {items.map(item => (
                <div
                    key={item.id}
                    className='mt-5 p-3 bg-orange-100 rounded-md mr-10 flex flex-col justify-between cursor-pointer hover:bg-orange-200 transition duration-150'>
                    <div className=''>
                        <Image src={item.image} alt={item.name} width={200} height={200} />
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>{item.name}</h3>
                        <Price price={item.price} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantsItems;
