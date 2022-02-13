import React from 'react';
import {Menu, Container,Input} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return <div>
      <Menu >
          <Container>
              <Link to='/'>
                <Menu.Item name="Star Wars"></Menu.Item>
              </Link>
            <Link to='/films'>
                <Menu.Item name="films"/>
            </Link>
            <Link to='/people'>
                <Menu.Item name="people"/>
            </Link>
          </Container>
          <form 
            noValidate 
            autoComplete="off"
          >
          <Input placeholder='Search...'onChange={(e)=>{
            props.setSearchText(e.target.value)}}
            id="filled-search" 
            label="Search" 
            type="search" 
            variant="filled" 
            value={props.searchText}
            fullWidth 
            />
          </form>     
    </Menu>
  </div>;
}
