import React,{useState,useEffect} from 'react';
import {View, StyleSheet, TextInput,ScrollView,Text} from 'react-native';
import FoodCard from './FoodCard'
import tw from 'twrnc';
import db from '../../firebaseConfig';
import {getDocs,collection} from'firebase/firestore'

const Search = ({navigation}) => {

    const [recipes, setrecipes] = useState([]);
    const [search, setsearch] = useState('')
    useEffect(()=>{
      fetchData=async()=>{
        let temp=[]
        let recipesFB=await getDocs(collection(db,'recipes'));
         recipesFB.forEach(doc=>{
          let newV={id:doc.id,recipe:doc.data()}
          temp.push(newV)
        })
        
        setrecipes(temp)
      }
      fetchData()
       
    },[db])

    return (
        <View style={tw`p-1 mt-10 bg-yellow-500 h-full`}>

            <View style={tw`p-2 m-2 bg-gray-200 rounded-md`}>
                <TextInput placeholder='search' onChangeText={newText=>setsearch(newText)} defaultValue={search}/>
            </View>
           
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={tw` w-full h-110 p-1 bg-yellow-500 `}
               >
                {recipes.map((recipe,index)=>(
                    <>
                        {recipe.recipe.title.includes(search)?
                  <FoodCard state={'row'} navigation={navigation} title={recipe.recipe.title} img={recipe.recipe.img}  id={recipe.id} index={index} key={index} />
                        :<></>
                    }
                    </>
                ))}
                
               </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Search;
