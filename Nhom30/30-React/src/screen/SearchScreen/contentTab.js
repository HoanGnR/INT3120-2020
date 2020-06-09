import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'native-base'

const data = {
    id: 1,
    iconName: 'motorbike',
    listItem: [
        {
            id: 1,
            name: 'Tất cả lỗi',
            listChild: [
                {
                    id: 1,
                    name: 'Điều khiển xe đi không đúng chiều, phần đường, làn đường',
                    fee: '300.000 - 400.000 vnđ'
                },
                {
                    id: 2,
                    name: 'Dừng,đỗ xe trong hầm đường bộ sai quy định',
                    fee: '500.000 - 1.000.000 vnđ'
                }
            ]
        }
    ]
}

export default class ContentTab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isChoose: false
        }
    }
    isChoosed = () => {
        this.setState({ isChoose: !this.state.isChoose })
    }
    renderChild = item => {
        return (
            <View style={{paddingTop:5, paddingBottom:5}}>
                <Text style={{fontWeight:'bold'}}>{item.name}</Text>
                <Text style={{paddingTop:3}}>{item.fee}</Text>
            </View>
        )
    } 
    renderItem = item => {
        const { width } = Dimensions.get('window')
        return (
            <>
                <TouchableOpacity
                    style={{
                        width: width,
                        height: 50,
                        backgroundColor: '#c9c9c9',
                        alignItems: 'center',
                        paddingLeft: 20,
                        flexDirection: 'row'
                    }}
                    disabled={item.listChild.length ? false : true}
                    onPress={() => this.isChoosed()}
                >
                    <View style={{ width: width / 2 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.name}</Text>
                    </View>
                    <View style={{ width: width / 2, alignItems: 'flex-end', paddingRight: 40 }}>
                        <Icon type={'Fontisto'} name={this.state.isChoose ? 'angle-up' : 'angle-down'} style={{ fontSize: 14 }} />
                    </View>
                </TouchableOpacity>
                {this.state.isChoose &&
                <View style={{width:width, backgroundColor:'pink', paddingLeft:15, paddingRight:15}}>
                    <FlatList 
                        data={item.listChild}
                        renderItem = {({item}) => this.renderChild(item)}
                        keyExtractor={item => item.id}
                    />
                </View>}
            </>
        )
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={data.listItem}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}
