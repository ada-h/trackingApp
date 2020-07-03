import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {changeActive} from '../redux/actions'


const MainNav = (props) => {
    const {activePage} = props
  
    return (
        <nav className="menu-bar font2-title1" id='navbar'>
            <div className="theme-container container">
                <div className="row">
                    <div className="col-md-2 col-sm-2">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-logo" href="#"> 
                        <img src="assets/img/logo/logo-black.png" height='50px' alt="logo" />
                       
                         </a>
                         
                    </div>
                    <div className="col-md-10 col-sm-10 fs-12">
                        <div id="navbar" className="collapse navbar-collapse no-pad">
                            <ul className="navbar-nav theme-menu">

                                <li onClick={()=>props.changeActive(1)} className={activePage == 1 ? "active" : ''}>
                                    <Link to="/">Home </Link>    
                                </li>
                                <li onClick={()=>props.changeActive(2)} className={activePage == 2 ? "active" : ''}> <Link to='/about'>about</Link> </li>
                                <li onClick={()=>props.changeActive(3)} className={activePage == 3 ? "active" : ''}> <Link to='/tracking'> tracking </Link> </li>
                                <li onClick={()=>props.changeActive(4)} className={activePage == 4 ? "active" : ''}> <Link to='/quote'> Get a quote</Link> </li>
                                <li onClick={()=>props.changeActive(5)} className={activePage == 5 ? "active" : ''}> <Link to='/create shipping'> Book Shipment</Link> </li>
                                {/* <li onClick={()=>props.changeActive(5)} className={activePage == 5 ? "active" : ''}> <Link to='/quote'> contact </Link> </li> */}
                                
                                <li><span className="search fa fa-search theme-clr transition"> </span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state)=>{
    const {activePage}=state.General
    return{
        activePage
    }

}

export default connect(mapStateToProps, {changeActive})(MainNav)