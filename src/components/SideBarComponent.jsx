import React, {Component, useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import MenuItemsService from "../services/MenuItemsService";

class SideBarComponent  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codeBank: this.props.match.params.codeBank,
            items: [],
            sidebar:false
        }
   }
    componentDidMount() {
        MenuItemsService.getItems(this.state.codeBank).then((res)=> {
            this.setState({items: res.data});
        });

    }

    render() {
        return (
            <IconContext.Provider value={{color: '#fff'}}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={() => this.setState({ sidebar: !this.state.sidebar })}/>
                    </Link>
                </div>
                <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={() => this.setState({ sidebar: !this.state.sidebar })}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>

                        return (
                        {
                            this.state.items.map(
                                item => {
                                    if (item.value === 'y') {
                                        return <li key={item.id}>
                                            <Link>
                                                <span>{item.libelle}</span>
                                            </Link>
                                        </li>
                                    }
                                }
                            )
                        }
                        );

                    </ul>
                </nav>
            </IconContext.Provider>
        );
    }
}


export default SideBarComponent;
