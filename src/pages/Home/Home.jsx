import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
    return (
        <div className="home-wrapper">
            
        <div class="splash"></div>
        <div class="container">
        
                    <div class="start-game game-full-flex" id="start-game">
                        
                        <div class="start-game-top"><Link class="play-full-page" to={"/parties"} >VOIR LES PARTIES</Link></div>    
        
                        <div class="logo-holder">
                            <p class="logo">
                                <span>GAME C</span>
               
                            </p>
                            <a class="play-button" href="#" onclick="game.start()">Play</a>
                            <h4 class="hint">Cliquez pour <span>télécharger</span> le jeu</h4>
                        </div>
{/*         
                        <div style={{width:'100%', background:'red'}}>
                                <Screenshots />
                                </div> */}
                        <div class="how-to-play">

                            <div class="section section-1">
                                <h4>Bouncing ball<br/>changes color</h4>
                                <div class="content">
                                    <div class="ball-demo" id="ball-demo"></div>
                                </div>
                            </div>
                            <div class="section section-2">
                                <h4>Tap on the bar to switch the colors<br/>(Red, Yellow, Purple)</h4>
                                <div class="content">
                                    <div class="bar bar-1" data-index="0"></div>
                                    <div class="bar bar-2"></div>
                                    <div class="bar bar-3"></div>
                                </div>
                            </div>
                            <div class="section section-3">
                                <h4>Always match the<br/>ball and bar colors</h4>
                                <div class="content">
                                    <div class="ball-demo" id="ball-demo"></div>
                                    <div class="bar bar-1"></div>
                                </div>
                            </div>
                        </div>
        
                    </div>
        
            
        
                    <div class="small-glows"></div>
        
                    <div class="glow"><div class="sun"></div></div>
        
                    <div class="waves">
                        <div class="top_wave"></div>
                        <div class="wave1"></div>
                        <div class="wave2"></div>
                        <div class="wave3"></div>
                        <div class="wave4"></div>
                    </div>
        
                    <div class="mounts">
                        <div class="mount1"></div>
                        <div class="mount2"></div>
                    </div>
        
                    <div class="clouds"></div>
        
        
                    <div class="noise"></div>
        
                </div>
                </div>
    )
    
}

export default Home