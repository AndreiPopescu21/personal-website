import Layout from '../components/Layout';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import EducationPage from '../components/EducationPage';
import SkillsPage from '../components/SkillsPage';
import ProjectsPage from '../components/ProjectsPage';
import ContactPage from '../components/ContactPage';

export default function Home() {
  return (
    <div>
     <Layout>
       <section id="Home">
          <HomePage/>
        </section>

        <section id="About">
          <AboutPage/>
        </section>

        <section id="Education">
          <EducationPage/>
        </section>

        <section id="Skills">
          <SkillsPage/>
        </section>

        <section id="Projects">
          <ProjectsPage/>
        </section>

        <section id="Contact">
          <ContactPage/>
        </section>
     </Layout>
    </div>
  );
}
