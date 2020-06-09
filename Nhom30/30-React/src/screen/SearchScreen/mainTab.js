import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import CustomComponent from './customComponent'
import ContentTab from './contentTab'
import {dataSearchScreen} from '../../helper/constant'

class MainTab extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        
        let tabs = createMaterialTopTabNavigator(
            {
                "Motor": ContentTab,
                "Cars": ContentTab
            },
            {
                tabBarComponent: props => {
                    return <CustomComponent props={props}/>
                },
            }
        )
        const TabNavigator = createAppContainer(tabs);
        return <TabNavigator screenProps={{
                    parent:this
                }}
        />
    }
}
export default MainTab;
