const HomePage = () => {
    return (
        <div className="paragraph-container row-distanced">
                <div className="paragraph-right">
                    <div className="home-title-text">
                        <h1> Andrei Cristian Popescu </h1>
                        <h2> Computer Science Student </h2>
                        <h2> Software Engineer </h2>

                        <div className="home-icons">
                            <div className="home-icon">
                                <a target="_blank" href="https://github.com/AndreiPopescu21">
                                    <img src="/images/github.svg" className="responsive-image"/>
                                </a>
                            </div>
                            <div className="home-icon">
                                <a target="_blank" href="https://www.linkedin.com/in/andrei-cristian-popescu-33b700215/">
                                    <img src="/images/linkedin.svg" className="responsive-image"/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="small-container" style={{padding: "1em"}}>
                    <img src="/images/home-page-image.svg" className="responsive-image"/>
                </div>
        </div>
    );
}

export default HomePage;