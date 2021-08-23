import Chip from "./Chip"

const ProjectCard = ({name, content, imageLink, frameworks, liveLink, sourceLink,}) => {
    return (
        <div className="card">
            <div>
                <img src={imageLink} 
                     className="responsive-fixed-image"/>
            </div>
            <h2 style={{color: "#7028E5", fontSize: "large", fontWeight: "bold"}}> {name} </h2>
            <div className="card-text">
                {content}
            </div>
            <div>
                {
                    frameworks.map((framework, index) => (
                        <Chip content={framework} key={index} className="small-chip"/>
                    ))
                }
            </div>
            <div style={{paddingTop: "1em"}}>
                {liveLink && <a href={liveLink} target="_blank" style={{marginRight: "1em", color: "#7028E5"}}> See Live </a>}
                {sourceLink && <a href={sourceLink} target="_blank" style={{color: "#7028E5"}}> Source Code </a>}
            </div>
        </div>
    );
}

export default ProjectCard;