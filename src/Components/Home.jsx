import React from 'react';
import {Text,Flex,IconButton,Actionsheet, useDisclose} from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'
import tw from 'twrnc'
import { useEffect ,useState} from 'react';
import { ScrollView, View ,TouchableOpacity, RefreshControl} from 'react-native';
import SliderItem from './SliderItem';
import FoodCard from './FoodCard';
import db from '../../firebaseConfig';
import {getDocs,collection} from'firebase/firestore'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from "expo";
const Home = ({navigation}) => {
    const [recipes, setrecipes] = useState([]);

    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
    
    
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();
  
    return (
        <SafeAreaView style={tw`bg-[#edf7ff]`} >
          
               <View  style={tw`flex flex-row justify-between items-center w-full p-2`} >
                        <Text style={tw` font-bold text-xl flex-1 text-center`}>OllyFood</Text>
                        <TouchableOpacity style={tw`p-2`} onPress={()=>navigation.navigate('Search')}>
                          <Icon name='search' style={tw`text-xl`}/>
                        </TouchableOpacity> 
               </View>


              


               <View style={tw`w-full h-40`}>
               <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={tw`p-1`}
                
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
                >
                  
                 
               {recipes&&recipes.map((recipe,index)=>(
              
                  <SliderItem navigation={navigation} title={recipe.recipe.title} img={recipe.recipe.img}  id={recipe.id} index={index} key={index} />
              
               ))}
            
                 </ScrollView>
                
               </View>

               <View style={tw`p-4 text-xl font-bold`}>
                <Text style={{fontFamily:'primary'}}>اكتشف المزيد من الاطباق</Text>
               </View>

               {/*this is the cards section*/}
               
               <ScrollView
                showsVerticalScrollIndicator={false}
                style={tw` w-full h-110 p-1 bg-[#edf7ff] `}
               >
                {recipes&&recipes.map((recipe,index)=>(
                 
                  <FoodCard navigation={navigation} title={recipe.recipe.title} img={recipe.recipe.img}  id={recipe.id} index={index} key={index} />
                  
                ))
                  }
                
               </ScrollView>
             
            
        </SafeAreaView>
    );
}



export default Home;
