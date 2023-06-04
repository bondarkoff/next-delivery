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
            <main className='flex min-h-screen flex-col items-center justify-between p-24'>
                <div className=''>Hello World!</div>
            </main>
        </>
    );
}
