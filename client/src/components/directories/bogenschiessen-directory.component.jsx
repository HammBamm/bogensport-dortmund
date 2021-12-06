import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';    

import vereinsheimImg from '../../assets/directory/IMG_0060.png';
import platzImg from '../../assets/directory/IMG_0061.png';
import phoneImg from '../../assets/directory/phone.jpg';
import arrowImg from '../../assets/directory/arrows.jpg';

class BogenschiessenDirectory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Ausrüstung',
                    imageUrl: vereinsheimImg,
                    id: 1,
                    size: '',
                    linkUrl: '/ausruestung'
                },
                {
                    title: 'Der Einstieg',
                    imageUrl: phoneImg,
                    id: 2,
                    size: '',
                    linkUrl: '/einstieg'
                },
                {
                    title: 'Kosten',
                    imageUrl: arrowImg,
                    size: '',
                    id: 3,
                    linkUrl: '/kosten'
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
                        <MenuItem key={id} {...otherSectionProps}></MenuItem>
                    ))
                }
            </DirectoryMenuContainer>
        )
    }
}

export default BogenschiessenDirectory;
