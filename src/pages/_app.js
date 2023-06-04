import { Kanit } from 'next/font/google';
import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';

const kanit = Kanit({ subsets: ['latin'], weight: ['200', '400', '500', '600', '700'] });

export default function App({ Component, pageProps }) {
    return (
        <div className={kanit.className}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}
