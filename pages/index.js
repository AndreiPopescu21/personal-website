import Layout from '../components/Layout';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import EducationPage from '../components/EducationPage';
import SkillsPage from '../components/SkillsPage';
import ContactPage from '../components/ContactPage';

export default function Home() {
  return (
    <div>
     <Layout>
        <HomePage/>
        <AboutPage/>
        <EducationPage/>
        <SkillsPage/>
        <ContactPage/>
     </Layout>
    </div>
  );
}
