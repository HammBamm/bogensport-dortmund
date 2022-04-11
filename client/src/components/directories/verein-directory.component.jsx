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
                    linkUrl: 'verein/mentalität'
                },
                {
                    title: 'Beiträge',
                    imageUrl: feeImg,
                    id: 2,
                    size: 'large',
                    linkUrl: 'verein/beiträge'
                },
                {
                    title: 'Hauptverein',
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
                {/* <MenuItem>
                    <Headline text="Hauptverein" />
                    <ImageContainer to={{ pathname: "http://www.tusscharnhorst.de/" }} target="_blank">
                        <svg><TUSLogo /></svg>
                        <svg><BSLogo /></svg>
                    </ImageContainer>
                </MenuItem> */}
            </DirectoryMenuContainer>
        )
    }
}

export default VereinDirectory;
