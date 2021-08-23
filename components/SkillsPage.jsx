import Chip from "./Chip";

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
                    <Chip key={index} content={skill} className="chip"/>
                ))
                }
            </div>
        </div>
    );
}

export default SkillsPage;