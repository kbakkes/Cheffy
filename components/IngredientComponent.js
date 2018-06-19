import React, { Component } from 'react';
import {ListItem, Left, Text, Right,Radio} from 'native-base';

export default class IngredientComponent extends Component {
    constructor(){
        super();
        this.state = {
            toggle: false,
        }
    }

    render() {
        return(
            <ListItem onPress={() => {
                if (this.state.toggle === false) {
                    this.setState({
                        toggle: true,
                    })
                }
                    else if(this.state.toggle === true) {
                        this.setState({
                            toggle: false,
                        });
                    }
                }
            }
            selected={this.state.toggle}>
            <Left>
                <Text>{this.props.name}</Text>
            </Left>
            <Right>
                <Radio selected={this.state.toggle} />
            </Right>
        </ListItem>
        )
    }
}