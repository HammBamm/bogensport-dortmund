import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';    

import feeImg from '../../assets/verein/fee.jpg';
import wieseImg from '../../assets/verein/Wiese.jpg';
import tusImg from '../../assets/header/tus-scharnhorst3.jpg';

class VereinDirectory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Mentalität',
                    imageUrl: wieseImg,
                    size: 'large',
                    id: 1,
                    linkUrl: 'verein/mentalitaet'
                },
                {
                    title: 'Beiträge',
                    imageUrl: feeImg,
                    id: 2,
                    size: 'large',
                    linkUrl: 'verein/beitraege'
                },
                {
                    title: 'Zum Hauptverein',
                    unicode: <span>&#128279; </span>,
                    imageUrl: tusImg,
                    id: 3,
                    size: 'large',
                    outUrl: "http://www.tusscharnhorst.de/",
                    linkUrl: ""
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

export default VereinDirectory;
