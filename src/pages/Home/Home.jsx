import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
    return (
        <div className="home-wrapper">

            <div className="splash"></div>
            <div className="container">

                <div className="start-game game-full-flex" id="start-game">

                    <div className="start-game-top"><Link className="play-full-page" to={"/parties"} >VOIR LES PARTIES</Link></div>

                    <div className="logo-holder">
                        <p className="logo">
                            <span>GAME C</span>

                        </p>
                        <a className="play-button" >Play</a>
                        <h4 className="hint">Cliquez pour <span>télécharger</span> le jeu</h4>
                    </div>
                    {/*         
                        <div style={{width:'100%', background:'red'}}>
                                <Screenshots />
                                </div> */}
                    <div className="how-to-play">

                        <div className="section section-1">
                            <div className="content">
                                <div className="ball-demo-2 " id="ball-demo"></div>
                                <div className="bar bar-2"></div>

                            </div>
                        </div>
                        <div className="section section-2">
                            <div className="content">
                                <div className="bar bar-1" data-index="0"></div>
                                <div className="bar bar-2"></div>
                                <div className="bar bar-3"></div>
                            </div>
                        </div>
                        <div className="section section-3">
                            <div className="content">
                                <div className="ball-demo" id="ball-demo"></div>
                                <div className="bar bar-1"></div>
                            </div>
                        </div>
                    </div>

                </div>



                <div className="small-glows"></div>

                <div className="glow"><div className="sun"></div></div>

                <div className="waves">
                    <div className="top_wave"></div>
                    <div className="wave1"></div>
                    <div className="wave2"></div>
                    <div className="wave3"></div>
                    <div className="wave4"></div>
                </div>

                <div className="mounts">
                    <div className="mount1"></div>
                    <div className="mount2"></div>
                </div>

                <div className="clouds"></div>


                <div className="noise"></div>

            </div>
        </div>
    )

}

export default Home