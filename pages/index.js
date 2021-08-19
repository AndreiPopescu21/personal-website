import Layout from '../components/Layout';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';

export default function Home() {
  return (
    <div>
     <Layout>
       <HomePage/>
       <AboutPage/>

     </Layout>
    </div>
  );
}
