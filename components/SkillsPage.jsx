
const Chip = ({content}) => {
    return (
        <div className="chip">
                {content}
        </div>
    );
}

const SkillsPage = () => {
    return (
        <div className="paragraph">
            <h1 className="paragraph-title"> My Skills </h1>
            <div className="container" style={{textAlign: "center"}}>
                <Chip content="Algorithms"/>
                <Chip content="Data Structures"/>
                <Chip content="Machine Learning"/>
                <Chip content="Digital Design"/>
                <Chip content="Computer Architecture"/>
                <Chip content="Mathematics"/>
                <Chip content="Linux"/>
                <Chip content="C/C++"/>
                <Chip content="Python"/>
                <Chip content="Java"/>
                <Chip content="Javascript"/>
                <Chip content="C#"/>
                <Chip content="Verilog"/>
                <Chip content="SQL"/>
                <Chip content="MongoDB"/>
                <Chip content="React.js"/>
                <Chip content="Next.js"/>
                <Chip content="Node.js"/>
            </div>
        </div>
    );
}

export default SkillsPage;