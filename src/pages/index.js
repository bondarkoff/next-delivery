import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Delivery App</title>
                <meta name='description' content='Food Delivery App' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className=''>
                <div className='container mx-auto'>
                    <div className='pt-8'>
                        <div className=''>Hello world!</div>
                    </div>
                </div>
            </main>
        </>
    );
}
