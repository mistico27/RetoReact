import React from 'react'
import './login.css'
export default function Login(){
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
            <div className="container-fluid flex-nowrap">
              <a className="navbar-brand" href="sesionnoiniciada.html"><img class="navbar1__logo"  src="assets/resized_logo_UQww2soKuUsjaOGNB38o.png"/></a>
                <div className="d-flex justify-content-between w-100">
                    <form className="d-flex" role="search">
                        <div className="searchbar__bar input-group d-none d-md-block">
                        <input className="searchbar__barrita" placeholder="Search..." size="30px" aria-label="Search"/> 
                        <button className="searchbar__lupa btn btn" type="button" id="button-addon2"><img className="Search1__icons" src="src/assets/search.svg"/></button>
                        </div>
                    </form>
                    <div className="navbar2__icons d-flex">
                        <button className="navbar2__notificacion btn btn d-md-none d-xl-none d-lg-none" type="button" id="button-addon2"><img className="Search1__icons" src="assets/search.svg"/></button>
                        <a className="navbar2__login btn d-none d-md-block" href="login.html" role="button">Log in</a>
                        <button className="navbar2__button"> Create account </button>
                    </div>
                </div> 
              </div>
            </nav>

            <div className="container pt-5">
            <div className="row">  
                        
        <div class="container">
            <div class="col-lg-12 col-md-9 col-lg-6">
                <div className="contaier-info">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="header titleHeader">
                                <h1 className="strong">Welcome to DEV Community</h1>
                                <p className="lineGray">DEV Community is a community of 1,066,959 amazing developers</p>
                            </div>
                        
                            <div>
                                <div class="d-grid gap-2">
                                    <button className="btn btn-dark" type="button"><i class="fa-brands fa-apple"></i>  Continue with Apple</button>
                                    <button classname="btn btn-greenAqua" type="button"><i class="fa-sharp fa-solid fa-recycle"></i>  Continue with Forem</button>
                                    <button classname="btn btn-gray2" type="button"><i class="fa-brands fa-github"></i>  Continue with GitHub</button>
                                    <button classname="btn btn-blue2" type="button"><i class="fa-brands fa-twitter"></i>  Continue with Twitter</button>
                                </div>
                            </div>
                            
                            <div classname="lineGray">
                                <p classname="lineGray"> Have a password? Continue with your email addres </p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-2 "></div>
                </div>
                
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8"> 
                    <form action="" method="" id="formulario-form" class="row g-3 needs-validation" novalidate>
                    <div class="row mb-3">
                                <div class="form-group">
                                    <label for="InputEmail" class="col-sm-2 "><strong>Email </strong></label>
                                    <input type="email" id="InputEmail" class="form-control form-control-sm col-sm-10" required />
                                </div>
                                <div class="form-group">
                                    <label for="InputPassword" class="col-sm-2 "><strong> Password</strong></label>
                                    <input type="password" id="InputPassword" class="form-control form-control-sm col-sm-10" required/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-10">
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck1" required/>
                                    <label class="form-check-label" for="gridCheck1">
                                        Remember me
                                    </label>
                                    </div>
                                </div>
                            </div>  
                            <div class="d-grid gap-2">
                                <button type="button" id="continueButton" class="btn btn-purple2" > Continue </button>
                            </div>
                            <div class="textCenter"> <a href="#" target="_blank"> I forgot my password </a> </div>
                            <div id="alertSesion"> </div>
                    </form>
                    </div>
                    <div class="col-2"></div>
                </div>  
                </div>    
            </div>        
        </div>
        </div>

        </div>
    )
}