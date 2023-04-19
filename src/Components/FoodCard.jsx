import { Card, IconButton } from 'native-base';
import React from 'react';
import {View, StyleSheet,Pressable,Image,Text, SafeAreaView, TouchableOpacity, PermissionsAndroid} from 'react-native';
import tw from 'twrnc'

const FoodCard = ({navigation,state,title,img,id,index}) => {
    return (
      <>
      {state!='row'?<>
      <Pressable style={tw` m-1  rounded-3xl p-2 bg-white shadow-lg `}
        onPress={()=>navigation.navigate('Details',{id})}
        key={index}
      >
            <View>
            <Image style={tw`h-50  rounded-3xl`} source={{uri:img}}/>
            </View>
            <View style={tw` p-2 `} >
                <Text style={{fontFamily:'primary',textAlign:'right'}}>{title}</Text>
            </View>
        </Pressable>
      </>:<>
      <Pressable style={tw` p-1 bg-white m-1 shadow-md rounded-2xl flex flex-row justify-between w-auto `}
       key={index}
       onPress={()=>navigation.navigate('Details',{id})}
       >
            <View>
            <Image style={tw`h-20 w-20  rounded-md`} source={{uri:img}}/>
            </View>
            <View style={tw`flex flex-row justify-between p-2  rounded-md`}>
                <Text style={{fontFamily:'primary',fontSize:10}}>{title}  </Text>
            </View>
        </Pressable>
      </>}
      </>
    );
}

const styles = StyleSheet.create({})

export default FoodCard;
