import React from 'react'
import Link from 'gatsby-link'
import {Navbar,NavbarBrand, NavbarMenu, NavbarEnd, NavbarItem, NavbarLink, NavbarDivider, NavbarDropdown} from 'bloomer'

class Header extends React.Component {

  constructor(props){
    super(props)

    this.state = { isActive: false }
  }


  componentDidMount(){

  }

  render(){
    return (
      <header className={this.props.mastHead ? ("clearfix padded full"):"clearfix padded"}>

        <Navbar isTransparent style={{zIndex: 1000}}>
         <NavbarBrand>
           <NavbarItem style={{padding: 0}}>
             <img src="/img/white_logo.png" />
           </NavbarItem>
         </NavbarBrand>
         <NavbarMenu className="main-nav" isActive={this.state.isActive} onClick={this.onClickNav}>
             <NavbarEnd>

                  <NavbarItem hasDropdown isHoverable>
                      <NavbarItem href='#'>About</NavbarItem>

                      <NavbarDropdown isBoxed>
                          <NavbarItem href='#/'>What is Octanis?</NavbarItem>
                          <NavbarItem href='#/'>People</NavbarItem>
                          <NavbarItem href='#/'>For Students</NavbarItem>
                      </NavbarDropdown>
                  </NavbarItem>

                 <NavbarItem href='/makerspace'>Atelier</NavbarItem>
                 <NavbarItem href='#/'>Projects</NavbarItem>

                 <NavbarItem href='#/'>Events</NavbarItem>

             </NavbarEnd>

         </NavbarMenu>
       </Navbar>

       {this.props.mastHead}


      </header>
    )
  }

}
export default Header
