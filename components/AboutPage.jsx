const HomePage = () => {
    return (
        <div className="paragraph">
            <h1 className="paragraph-title"> About me </h1>
            <div className="paragraph-content row-distanced">
                    <div style={{textAlign: "center"}}>
                        <img src="/images/my-photo.svg" className="responsive-image" style={{width: "70%"}}/>
                    </div>

                    <div className="small-container" style={{padding: "1em"}}>
                        <p>
                            I am  a second year Computer Science student
                            at The University of Manchester, passionate about 
                            science, technology and computer programming.
                        </p>
                        
                        <p>
                            I am mainly interested in Artificial Inteligence 
                            and Machine Learning and I hope I will pursue
                            a successful research career in this domain.
                        </p>

                        <button className="resume-button"> 
                            Check my Resume 
                        </button>
                    </div>
            </div>
        </div>
    );
}

export default HomePage;