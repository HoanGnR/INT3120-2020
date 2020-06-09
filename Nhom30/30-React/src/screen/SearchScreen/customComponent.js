import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Icon} from 'native-base'

export default class CustomComponent extends React.Component {
    constructor(props) {
        super(props)
        this.routes = this.props.props.navigation.state.routes
    }

    handleChooseTab = (routeName) => {
        this.props.props.jumpTo(routeName)
    }

    handleIcon = routeName => {
        switch(routeName){
            case "Motor":
                return "motorcycle";
            case "Cars":
                return "car";
            case "Truck":
                return "truck";
            case "Bike":
                return "motorcycle";
            case "Motor":
                return "motorcycle";
            case "Motor":
                return "motorcycle";
        }
    }
    renderItem = (item, index) => {
        return (
            <View style={{
                width: '50%',
                height: 60,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => this.handleChooseTab(item.routeName)}>
                    <Icon type={'FontAwesome'} name={this.handleIcon(item.routeName)} style={{color: this.props.props.navigation.state.index == index ? 'white' : 'black'}}/>
                </TouchableOpacity>
            </View>

        )
    }
    render() {
        return (
            <View style={{
                width: '100%',
                height: 60,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'green'
            }}>
                {this.routes && this.routes.map((item, index) => this.renderItem(item, index))}
            </View>
        )
    }
}