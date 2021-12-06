import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryItemContainer, DirectoryMenuContainer, ImageContainer } from './directory.styles';    

import feeImg from '../../assets/directory/fee.jpg';
import wieseImg from '../../assets/directory/Wiese.jpg';
import { ReactComponent as TUSLogo } from '../../assets/header/tus-scharnhorst3.svg';
import { Headline } from '../article/article.component';

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
                    linkUrl: '/Mentalität'
                },
                {
                    title: 'Beiträge',
                    imageUrl: feeImg,
                    id: 2,
                    size: 'large',
                    linkUrl: '/beitraege'
                },
                {
                    title: 'Turniere',
                    imageUrl: feeImg,
                    id: 3,
                    size: 'large',
                    linkUrl: '/beitraege'
                },
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
                <DirectoryItemContainer>
                    <Headline text="Hauptverein" />
                    <ImageContainer to={{ pathname: "http://www.tusscharnhorst.de/" }} target="_blank">
                        <TUSLogo />
                    </ImageContainer>
                </DirectoryItemContainer>
            </DirectoryMenuContainer>
        )
    }
}

export default VereinDirectory;
