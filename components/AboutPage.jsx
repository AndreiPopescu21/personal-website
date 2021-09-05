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
                            at <span style={{color: "#7028E5"}}> The University of Manchester </span>, mainly interested
                            in Machine Learning and Artificial Intelligence.
                        </p>
                        
                        <p>
                            I am the technical team lead at 
                            <a style={{color: "#7028E5"}} href="https://gdsc.community.dev/university-of-manchester/" target="_blank"> Google Developer Student Club Manchester </a> 
                            , a software engineer at 
                            <a style={{color: "#7028E5"}} href="https://hyperloopmanchester.com/" target="_blank"> Hyperloop Manchester </a>
                            and a game developer at
                            <a style={{color: "#7028E5"}} href="https://unicsmcr.com/" target="_blank"> UniCS Manchester </a>, 
                            which is the biggest tech society at The University of Manchester.
                        </p>

                    </div>
            </div>
        </div>
    );
}

export default HomePage;