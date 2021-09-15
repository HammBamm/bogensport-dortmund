import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';    

import img1 from '../../assets/directory/IMG_0060.png';
import img2 from '../../assets/directory/IMG_0061.png';
import img3 from '../../assets/directory/IMG_0062.png';
import img4 from '../../assets/directory/IMG_0063.png';
import img5 from '../../assets/directory/IMG_0064.png';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Unser Verein',
                    imageUrl: img1,
                    id: 1,
                    linkUrl: 'verein'
                },
                {
                    title: 'Kontakt',
                    imageUrl: img2,
                    id: 2,
                    linkUrl: 'kontakt'
                },
                {
                    title: 'FAQ',
                    imageUrl: img3,
                    id: 3,
                    linkUrl: 'faq'
                },
                {
                    title: 'Sportanlage',
                    imageUrl: img4,
                    size: 'large',
                    id: 4,
                    linkUrl: 'verein/sportanlage'
                },
                {
                    title: 'Bogenschießen',
                    imageUrl: img5,
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

export default Directory;
