import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <title> Andrei Cristian Popescu </title>
                <meta name="description" content="Portofolio Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <main>
                {children}
            </main>

            <hr/>
            <footer>
                Copyright © 2021 Andrei Cristian Popescu
            </footer>
        </div>
    );
}

export default Layout;