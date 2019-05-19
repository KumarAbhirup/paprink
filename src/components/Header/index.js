import React, { Component } from 'react'
import Router, { withRouter } from 'next/router'

import { meta } from '../../api/meta'
import { mainMenu } from '../../api/menu'
import User from '../User'
import ProfileButton from './profileButton'
import SearchBar from '../SearchBar'

class Header extends Component {

  signInText = "SIGN IN" // this.props.router.pathname === "/" ? "PLEDGE NOW" : "SIGN IN"

  render() {
    return (
      <User>
        {({data: {me}}) => (  
          <>
            <header className="header">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="header_content d-flex flex-row align-items-center justify-content-start">
                      <div className="logo"><a href="/"><img src="/static/white-theme-trans.png" alt={meta.name} /></a></div>
                      <nav className="main_nav">
                        <ul>
                          { mainMenu.map((item, index) => {
                            if(item.sku === 'signin'){
                              return <li key={index}><a href={`${item.link}?intent=${this.props.router.asPath}`}>{item.text}</a></li>
                            } else {
                              return <li key={index}><a href={`${item.link}`}>{item.text}</a></li>
                            }
                          }) }
                          { me ? <ProfileButton me={me} /> : <li style={{backgroundColor: '#ffffff', color: '#000000', borderRadius: '5px', padding: '5px 10px', zoom: '80%'}}><a href={`${meta.domain}/signin?intent=${this.props.router.asPath}`} style={{color: '#000000'}}>⚡️🚦 {this.signInText}</a></li> } {/* Sign In */}
                        </ul>
                      </nav>
                      <div className="search_container ml-auto">
                        <div className="weather">
                          <div className="temperature">Writing is 🤟</div>
                        </div>

                        <SearchBar />
                        
                      </div>
                      <div className="hamburger ml-auto menu_mm">
                        { me ? <ProfileButton me={me} /> : <li style={{backgroundColor: '#ffffff', color: '#000000', borderRadius: '5px', padding: '5px 10px', listStyle: 'none', display: 'inline-block'}}><a href={`${meta.domain}/signin?intent=${this.props.router.asPath}`} style={{color: '#000000'}}>⚡️🚦 {this.signInText}</a></li> }
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="fa fa-bars trans_200 menu_mm" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
              <div className="menu_close_container"><div className="menu_close"><div></div><div></div></div></div>
              <div className="logo menu_mm"><a href="/"><img src="/static/black-theme-trans.png" alt={meta.name} /></a></div>
              
              <div className="search">
                <SearchBar mobile />
              </div>

              <nav className="menu_nav">
                <ul className="menu_mm">
                  { mainMenu.map((item, index) => {
                    if(item.sku === 'signin'){
                      return <li className="menu_mm" key={index}><a href={`${item.link}?intent=${this.props.router.asPath}`}>{item.text}</a></li>
                    } else {
                      return <li className="menu_mm" key={index}><a href={item.link}>{item.text}</a></li>
                    }
                  }) }
                </ul>
              </nav>
            </div>
          </>
        )}
      </User>
    )
  }

}

export default withRouter(Header)