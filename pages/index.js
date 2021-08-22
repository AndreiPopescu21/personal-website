import Layout from '../components/Layout';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import SkillsPage from '../components/SkillsPage';

export default function Home() {
  return (
    <div>
     <Layout>
        <HomePage/>
        <AboutPage/>
        <SkillsPage/>
     </Layout>
    </div>
  );
}
