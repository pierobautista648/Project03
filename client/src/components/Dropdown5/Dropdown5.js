import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
 constructor(props) {
   super(props);

   this.toggleNavbar = this.toggleNavbar.bind(this);
   this.state = {
     collapsed: true
   };
 }

 toggleNavbar() {
   this.setState({
     collapsed: !this.state.collapsed
   });
 }
 render() {
   return (
     <div>
       <Navbar color="faded" light>
         <NavbarBrand href="/" className="mr-auto">Core</NavbarBrand>
         <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
         <Collapse isOpen={!this.state.collapsed} navbar>
           <Nav navbar>
           <NavItem>
               <NavLink href="">Specific Workout</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href="">Specific Workout</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href="">Specific Workout</NavLink>
             </NavItem>
           </Nav>
         </Collapse>
       </Navbar>
     </div>
   );
 }
}