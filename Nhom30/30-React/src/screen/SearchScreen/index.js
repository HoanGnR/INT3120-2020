import React from 'react'
import BasePage from '../../base/BasePage'
import { dataSearchScreen } from '../../helper/constant'
import { View, Text } from 'react-native'
import MainTab from './mainTab'

export default class SearchScreen extends BasePage {
  constructor(props) {
    super(props)
  }
  renderTab = () => {
    return <MainTab props={this}/>
  }
  renderContent = () => {
    return (
      <View style={{width:'100%', height:'100%' }}>
        {this.renderTab()}
      </View>
    )
  }
}
