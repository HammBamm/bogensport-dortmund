import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';    

import SchützenImg from '../../assets/directory/Schützen.jpg';
import platzImg from '../../assets/directory/Sportplatz.png';
import phoneImg from '../../assets/directory/phone.jpg';
import calendarImg from '../../assets/calendar/calendar.jpg';
import archeryImg from '../../assets/directory/arrowsintarget.jpg';

class HomepageDirectory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Unser Verein',
                    imageUrl: SchützenImg,
                    id: 1,
                    linkUrl: 'menü/verein'
                },
                {
                    title: 'Kontakt',
                    imageUrl: phoneImg,
                    id: 2,
                    linkUrl: 'menü/kontakt'
                },
                {
                    title: 'Kalender',
                    imageUrl: calendarImg,
                    id: 3,
                    linkUrl: 'menü/kalender'
                },
                {
                    title: 'Sportanlage',
                    imageUrl: platzImg,
                    size: 'large',
                    id: 4,
                    linkUrl: 'menü/verein/sportanlage'
                },
                {
                    title: 'Bogenschießen',
                    imageUrl: archeryImg,
                    size: 'large',
                    id: 5,
                    linkUrl: 'menü/bogenschießen'
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
