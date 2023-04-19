import React, { useEffect,useState } from 'react';
import {View, StyleSheet,Text, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import tw from 'twrnc'
import db from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { IconButton } from 'native-base';
const Details = ({navigation,route}) => {
    const {id}=route.params
    const [recipe, setrecipe] = useState({})
    useEffect(()=>{
        const getById=async()=>{
            let recipe=await getDoc(doc(db,'recipes',id))
            setrecipe(recipe.data())
        }
        getById()
    },[])
   
    return (
        <SafeAreaView style={tw` bg-[#edf7ff]`}>
               
           <View style={tw`p-2 `}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={tw`p-5 flex`} >
                    <Icon name='arrow-left' style={tw`text-2xl  w-10 h-10 text-orange-600`}/>
                </TouchableOpacity>
            <View style={tw`w-full h-40 shadow-lg bg-white rounded-3xl`}>
                <Image style={tw`w-full h-full rounded-3xl`} source={{uri:recipe.img}}/>
            </View>
            <View style={tw`p-4`}>
                <Text style={{fontFamily:'primary'}}>
                    {recipe.title}
                </Text>
            </View>

            <View style={tw`w-full h-100`}>
                <ScrollView style={tw`bg-orange-200 h-150  p-2 rounded-2xl shadow`}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                >
                <Text style={{fontFamily:'primary',backgroundColor:'#f8753a',textAlign:'center',borderRadius:10}}>
                    المقادير
                </Text>
                {recipe.ingredients&&recipe.ingredients.map((g,index)=>(
                     <Text style={{fontFamily:'primary',padding:5}} key={index}>
                        {g}
                     </Text>
                ))
               
                }

                <Text style={{fontFamily:'primary',backgroundColor:'#f8753a',textAlign:'center',borderRadius:10}}>
                   طريقة التحضير
                </Text>
                <View >
                {recipe.cooking&&recipe.cooking.map((g,index)=>(
                     <Text style={{fontFamily:'primary',padding:5}} key={index}>
                        {g}
                     </Text>
                ))
               
                }
                
                </View>
            </ScrollView>
            
           </View>
           </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Details;
