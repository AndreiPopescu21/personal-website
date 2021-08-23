import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
    return(
        <div className="paragraph">
            <h1 className="paragraph-title"> My Projects </h1>

            <h1 style={{textAlign: "center", paddingTop: "2em"}}> Experience </h1>
            <div className="large-container distanced-row" style={{textAlign: "center", paddingTop: "1em"}}>
                <ProjectCard name="Google Developer Student Clubs"
                             content="I am the technical team lead and I am responsible for managing the
                                     technical team. I am also responsible for creating workshops and hackatons related to 
                                     Google technologies and connecting with sponsors and other companies."
                             imageLink="/images/GSDC-image.png"
                             frameworks={["Leadership", "Communication", "Workshop Design", "Management"]}/>

                <ProjectCard name="Hyperloop Manchester"
                             content="I am a software engineer and I contributed to the software design of the Pod.
                                      I developed C/C++ programs for Teensy 4.1 and Rasperry Pi to control the Pod
                                      behaviour and I created and connected the web interface that controls the Pod
                                      remotely."
                             imageLink="/images/hyperloop-image.png"
                             frameworks={["C/C++", "Embedded Systems", "ROS", "RTOS", "Linux"]}/>

                <ProjectCard name="UniCS Manchester"
                             content="I am a game developer and I contribute to a hack and slash game.
                                      I created the procedural map generation algorithm."
                             imageLink="/images/UniCS-image.png"
                             frameworks={["Unity", "Map Generation", "C#", "Teamwork"]}/>
            </div>

            <h1 style={{textAlign: "center", paddingTop: "2em"}}> Projects </h1>
            <div className="large-container distanced-row" style={{textAlign: "center", paddingTop: "1em"}}>

                <ProjectCard name="Pathfinding Visualizer"
                             content="This is a web application that visualizes different pathfinding algorithms like A* or Dijkstra.
                                     You can draw obstacles on the grid or you can generate mazes using a few maze generation algorithms."
                             imageLink="/images/pathfinding-visualzer-image.png"
                             frameworks={["Next.js", "HTML", "CSS"]}
                             sourceLink="https://github.com/AndreiPopescu21/pathfinder-visualizer"
                             liveLink="#"/>

                <ProjectCard name="Starship Invaders"
                             content="This is a Python game created as my University programming coursework.
                                     The game's UI was built using TKinter.
                                     It is a slightly modified version of the retro game Space Invaders."
                             imageLink="/images/starship-invaders-image.png"
                             frameworks={["Python", "TKinter"]}
                             sourceLink="https://github.com/AndreiPopescu21/StarshipInvaders"/>

            </div>
            
            <h1 style={{textAlign: "center", paddingTop: "2em"}}> Hackatons </h1>
            <div className="large-container distanced-row" style={{textAlign: "center", paddingTop: "1em"}}>
                <ProjectCard name="Spread Bike"
                             content="This is a PWA built with one of my friends at START Hack 2021.
                                     It's role is to encourage bike riding and it includes several
                                     badges and achivements, an API to find nearby bikes rent places
                                     and some stats trackers."
                             imageLink="/images/spread-bike-image.png"
                             frameworks={["React.js", "Node.js", "MongoDB", "PWA", "Mapbox", "Google Auth"]}
                             sourceLink="https://github.com/AndreiPopescu21/SpreadBike"/>
            </div>
        </div>
    );
}

export default ProjectsPage;