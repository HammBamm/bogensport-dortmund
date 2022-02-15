import React from 'react';

import SmallMenuItem from '../menu-item/small-menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';    

import bögenImg from '../../assets/directory/Bogenreihe.jpeg';
import platzImg from '../../assets/directory/IMG_0061.png';
import birdGif from '../../assets/directory/bird2.gif';

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
                    linkUrl: '/ausruestung'
                },
                {
                    title: 'Der Einstieg',
                    imageUrl: birdGif,
                    id: 2,
                    size: 'large',
                    linkUrl: '/einstieg'
                },
                {
                    title: 'Voraussetzungen',
                    imageUrl: platzImg,
                    size: 'large',
                    id: 4,
                    linkUrl: '/turniere'
                }
            ]
        };
    }

    render() {
        return (
            <DirectoryMenuContainer>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <SmallMenuItem key={id} {...otherSectionProps}></SmallMenuItem>
                    ))
                }
            </DirectoryMenuContainer>
        )
    }
}

export default BogenschiessenDirectory;
