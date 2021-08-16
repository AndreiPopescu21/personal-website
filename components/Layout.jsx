import Head from 'next/head';

const Layout = ({children}) => {
    return (
        <div>
             <Head>
                <title> Andrei Cristian Popescu </title>
                <meta name="description" content="Portofolio Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {children}
            </main>

            <footer>
            </footer>
        </div>
    );
}

export default Layout;