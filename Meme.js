import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Meme extends Component {
    render() {
        let meme = {
            uri: 'https://media.discordapp.net/attachments/418824339803209729/441667380192739329/DcOCxtgUQAA_nCn.png'
        };
        return (
            <Image source={meme} style={{width: 193, height: 150}}/>
        );
    }
}