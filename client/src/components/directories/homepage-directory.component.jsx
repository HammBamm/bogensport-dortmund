import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';    

import vereinsheimImg from '../../assets/directory/IMG_0060.png';
import platzImg from '../../assets/directory/IMG_0061.png';
import phoneImg from '../../assets/directory/phone.jpg';
import arrowImg from '../../assets/directory/arrows.jpg';
import archeryImg from '../../assets/directory/archery.jpg';

class HomepageDirectory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Unser Verein',
                    imageUrl: vereinsheimImg,
                    id: 1,
                    linkUrl: 'verein'
                },
                {
                    title: 'Kontakt',
                    imageUrl: phoneImg,
                    id: 2,
                    linkUrl: 'kontakt'
                },
                {
                    title: 'Kalender',
                    imageUrl: arrowImg,
                    id: 3,
                    linkUrl: 'kalender'
                },
                {
                    title: 'Sportanlage',
                    imageUrl: platzImg,
                    size: 'large',
                    id: 4,
                    linkUrl: 'verein/sportanlage'
                },
                {
                    title: 'Bogenschießen',
                    imageUrl: archeryImg,
                    size: 'large',
                    id: 5,
                    linkUrl: 'bogenschiessen'
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

export default HomepageDirectory;
