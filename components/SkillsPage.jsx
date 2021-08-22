
const Chip = ({content}) => {
    return (
        <div className="chip">
                {content}
        </div>
    );
}

const SkillsPage = () => {
    const skills = ["Algorithms", "Data Structures", "Machine Learning", "Digital Design",
                    "Computer Architecture", "Mathematics", "Linux", "C/C++", "Python",
                    "Java", "Javascript", "C#", "Verilog", "ARM Assembly", "SQL", "MongoDB", "React.js",
                    "Next.js", "Node.js"];
    return (
        <div className="paragraph">
            <h1 className="paragraph-title"> My Skills </h1>
            <div className="container" style={{textAlign: "center"}}>
                {
                skills.map((skill, index) => (
                    <Chip key={index} content={skill}/>
                ))
                }
            </div>
        </div>
    );
}

export default SkillsPage;