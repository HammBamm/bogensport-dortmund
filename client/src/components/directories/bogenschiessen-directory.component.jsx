import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';    

import bögenImg from '../../assets/directory/Bogenreihe.jpeg';
import medaillenImg from '../../assets/verein/medaillen.jpeg';
import figurImg from '../../assets/bogenschiessen/Figur.JPEG';

class BogenschiessenDirectory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Ausrüstung',
                    imageUrl: bögenImg,
                    id: 1,
                    size: 'large',
                    linkUrl: 'bogenschießen/ausrüstung'
                },
                {
                    title: 'Der Einstieg',
                    imageUrl: figurImg,
                    id: 2,
                    size: 'large',
                    linkUrl: 'bogenschießen/einstieg'
                },
                {
                    title: 'Turniere und Wettkämpfe',
                    imageUrl: medaillenImg,
                    id: 3,
                    size: 'large',
                    linkUrl: 'bogenschießen/turniere'
                }
            ]
        };
    }

    render() {
        return (
            <DirectoryMenuContainer>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps}></MenuItem>
                    ))
                }
            </DirectoryMenuContainer>
        )
    }
}

export default BogenschiessenDirectory;
