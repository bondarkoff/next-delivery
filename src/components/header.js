export default function Header() {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between flex-wrap content-center pt-5'>
                <div className='flex flex-col content-center flex-wrap'>
                    <h1 className='text-3xl font-bold text-gray-700'>Bondarkoff delivery</h1>
                    <p className='text-gray-500'>Fastest delivery service in the world</p>
                </div>
                <div className='flex flex-row content-center flex-wrap'>
                    <div className='text-gray-500 mr-5 text-xl'>Shop</div>
                    <div className='text-gray-500 text-xl'>Shopping cart</div>
                </div>
            </div>
        </div>
    );
}
