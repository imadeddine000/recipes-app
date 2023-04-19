
import React from 'react';
import { Image, Pressable, TouchableOpacity } from 'react-native';
import {View, StyleSheet,Text} from 'react-native';
import tw from 'twrnc'
const SliderItem = ({navigation,title,img,id,index}) => {
    
    return (
        <View style={tw` p-1 h-full relative`} key={index}>
           <TouchableOpacity>
            <Pressable 
                onPress={()=>{navigation.navigate('Details',{id})}}
            >
            <Image style={tw`h-full w-80 rounded-lg`} source={{uri:img}}/>
            <View style={tw`absolute flex  bg-[#f3763e] p-1 bottom-2  w-full shadow  `}>
                <Text  style={{fontFamily:'primary',fontSize:10,textAlign:'center'}}>
                    {title}
                </Text>
            </View>
            </Pressable>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default SliderItem;
