/* Libraries */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    Platform,
    ScrollView,
    Dimensions,
    TextInput,
    ImageBackground,
    StatusBar,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// ICON IMPORT
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// THEME IMPORT
import * as theme from '../../Constants/theme';

// CONSTANTS
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const graphic = require('../../../assets/images/podcast-graphic-2.png');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popularChannels: [
                {
                    image:
                        'https://images.unsplash.com/photo-1523987659364-8ad26ea657ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=frank-albrecht-EOG8BeJfz4I-unsplash.jpg&w=640',
                },
                {
                    image:
                        'https://images.unsplash.com/photo-1583248881102-32809a3f6130?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=gene-jeter-kcV7BxcVtU4-unsplash.jpg',
                },
                {
                    image:
                        'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=austin-distel-Hg3BHX6U5jg-unsplash.jpg',
                },
                {
                    image:
                        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=israel-palacio-Y20JJ_ddy9M-unsplash.jpg',
                },
                {
                    image:
                        'https://images.unsplash.com/photo-1561365789-e4cd39d6b21c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=fernando-lavin-YDdZ6nbGS24-unsplash.jpg',
                },
                {
                    image:
                        'https://images.unsplash.com/photo-1588523900549-d60e602ced7c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=nacho-carretero-molero-yE5_bQNQgfU-unsplash.jpg',
                },
                {
                    image:
                        'https://images.unsplash.com/photo-1508473066486-a07f0e2f8ff9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=steve-halama-t5zp-0ZXFPg-unsplash.jpg',
                },
            ],
            trending: [
                {
                    id: 1,
                    image:
                        'https://images.unsplash.com/photo-1567596275753-92607c3ce1ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jonathan-farber-gjHmip_Lmg4-unsplash.jpg',
                    title: 'The Secrets to popular podcast',
                    author: 'Julia rose',
                    readMins: 53,
                },
                {
                    id: 2,
                    image:
                        'https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=andreas-klassen-gZB-i-dA6ns-unsplash.jpg',
                    title: 'Entrepreneurship and lift hacks for millenials',
                    author: 'Joey V',
                    readMins: 35,
                },
                {
                    id: 3,
                    image:
                        'https://images.unsplash.com/photo-1567596275753-92607c3ce1ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jonathan-farber-gjHmip_Lmg4-unsplash.jpg',
                    title: 'The Secrets to popular podcast',
                    author: 'Julia rose',
                    readMins: 53,
                },
                {
                    id: 4,
                    image:
                        'https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=andreas-klassen-gZB-i-dA6ns-unsplash.jpg',
                    title: 'Entrepreneurship and lift hacks for millenials',
                    author: 'Joey V',
                    readMins: 35,
                },
                {
                    id: 5,
                    image:
                        'https://images.unsplash.com/photo-1567596275753-92607c3ce1ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jonathan-farber-gjHmip_Lmg4-unsplash.jpg',
                    title: 'The Secrets to popular podcast',
                    author: 'Julia rose',
                    readMins: 53,
                },
                {
                    id: 6,
                    image:
                        'https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=andreas-klassen-gZB-i-dA6ns-unsplash.jpg',
                    title: 'Entrepreneurship and lift hacks for millenials',
                    author: 'Joey V',
                    readMins: 35,
                },
            ],
        };
    }

    static navigationOptions = {
        headerShown: false,
    };

    // LIFECYCLE METHODS
    componentDidMount = () => {};
    // END LIFECYCLE METHODS

    // UTILITY FUNCTIONS
    // END UTILITY FUNCTIONS

    // FUNCTIONAL COMPONENTS
    // END FUNCTIONAL COMPONENTS

    // RENDERING FUNCTIONS
    renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                style={{
                    ...styles.shadow,
                    width: '100%',
                    height: EStyleSheet.value('70rem'),
                    padding: EStyleSheet.value('10rem'),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: EStyleSheet.value('15rem'),
                    marginBottom: EStyleSheet.value('20rem'),
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center', width: '65%'}}>
                    <Image
                        source={{uri: item.image}}
                        style={{resizeMode: 'cover', height: EStyleSheet.value('50rem'), aspectRatio: 1, borderRadius: EStyleSheet.value('10rem')}}
                    />
                    <View style={{marginLeft: EStyleSheet.value('10rem'), justifyContent: 'space-between', height: EStyleSheet.value('44rem')}}>
                        <Text style={{fontWeight: 'bold', color: 'black', opacity: 0.6, fontSize: EStyleSheet.value('12rem')}}>{item.title}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontWeight: 'bold', color: 'grey', opacity: 0.6, fontSize: EStyleSheet.value('10rem')}}>By {item.author}</Text>
                            <Feather name={'clock'} color={'turquoise'} size={EStyleSheet.value('12rem')} style={{marginLeft: EStyleSheet.value('5rem')}} />
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    color: 'turquoise',
                                    fontSize: EStyleSheet.value('10rem'),
                                    marginLeft: EStyleSheet.value('5rem'),
                                }}>
                                {item.readMins} mins
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        ...styles.totalCenter,
                        height: EStyleSheet.value('30rem'),
                        aspectRatio: 1,
                        borderRadius: EStyleSheet.value('15rem'),
                        backgroundColor: 'turquoise',
                    }}>
                    <FontAwesome5 name={'play'} color={'white'} size={EStyleSheet.value('12rem')} />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor: theme.colors.themeCol}}>
                <StatusBar barStyle={'light-content'} />
                <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <SafeAreaView style={{flex: 1}}>
                        <View style={{flex: 1, padding: theme.appDims.boundary}}>
                            {/* SEARCH BAR */}
                            <View
                                style={{
                                    alignItems: 'center',
                                    width: '100%',
                                    height: EStyleSheet.value('40rem'),
                                    borderRadius: EStyleSheet.value('5rem'),
                                    backgroundColor: '#00000017',
                                    flexDirection: 'row',
                                    paddingHorizontal: EStyleSheet.value('10rem'),
                                }}>
                                <Feather name={'search'} color={'white'} size={EStyleSheet.value('20rem')} style={{width: '10%'}} />
                                <TextInput style={{height: '100%', width: '100%'}} placeholder={'search'} placeholderTextColor={'white'} />
                            </View>

                            <View style={{flex: 1, justifyContent: 'center', width: '100%'}}>
                                {/* INFO */}
                                <Text style={{color: 'white', fontSize: EStyleSheet.value('30rem'), fontWeight: '300', lineHeight: EStyleSheet.value('40rem')}}>
                                    {'Discover\nyour favourite\n'}
                                    <Text style={{fontWeight: 'bold'}}>{'podcast'}</Text>
                                </Text>
                                {/* GRAPHI IMAGE */}
                                <Image
                                    source={graphic}
                                    style={{
                                        height: EStyleSheet.value(`${HEIGHT / 4.5}rem`),
                                        width: EStyleSheet.value(`${HEIGHT / 4.5}rem`),
                                        resizeMode: 'contain',
                                        position: 'absolute',
                                        right: '-8%',
                                        bottom: '-35%',
                                    }}
                                />
                            </View>
                        </View>
                    </SafeAreaView>
                    <View style={{backgroundColor: 'white', height: EStyleSheet.value(`${HEIGHT / 1.7}rem`), borderTopLeftRadius: EStyleSheet.value('50rem')}}>
                        <SafeAreaView style={{flex: 1}}>
                            {/* POPULAR PODCAST CHANNEL */}
                            <View
                                style={{
                                    marginTop: EStyleSheet.value('20rem'),
                                    width: '100%',
                                    padding: theme.appDims.boundary,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                <Text style={{color: 'black', fontSize: EStyleSheet.value('22rem'), fontWeight: 'bold', opacity: 0.8}}>Popular channels</Text>
                                <TouchableOpacity>
                                    <Text style={{color: 'skyblue', fontSize: EStyleSheet.value('16rem')}}>See all</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: '100%', height: EStyleSheet.value('50rem')}}>
                                <ScrollView
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{paddingHorizontal: theme.appDims.boundary}}>
                                    {this.state.popularChannels.map((item, index) => {
                                        return (
                                            <Image
                                                key={index.toString()}
                                                source={{uri: item.image}}
                                                style={{
                                                    height: EStyleSheet.value('50rem'),
                                                    aspectRatio: 1,
                                                    borderRadius: EStyleSheet.value('10rem'),
                                                    marginRight: EStyleSheet.value('16rem'),
                                                }}
                                            />
                                        );
                                    })}
                                </ScrollView>
                            </View>

                            {/* TRENDING PODCAST */}
                            <View
                                style={{
                                    width: '100%',
                                    padding: theme.appDims.boundary,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                <Text style={{color: 'black', fontSize: EStyleSheet.value('22rem'), fontWeight: 'bold', opacity: 0.8}}>Trending</Text>
                                <TouchableOpacity>
                                    <Text style={{color: 'skyblue', fontSize: EStyleSheet.value('16rem')}}>See all</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1}}>
                                <FlatList
                                    data={this.state.trending}
                                    renderItem={this.renderItem}
                                    keyExtractor={({id}) => id.toString()}
                                    contentContainerStyle={{paddingHorizontal: theme.appDims.boundary}}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>
                        </SafeAreaView>
                    </View>
                </View>
            </View>
        );
    }
    // END RENDERING FUNCTIONS
}

const styles = EStyleSheet.create({
    totalCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});

export default Home;
