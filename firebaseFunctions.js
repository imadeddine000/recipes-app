import {getDocs,collection} from'firebase/firestore'
import db from './firebaseConfig'

// const GetRecipes=async()=>{
//     const recipesArray=[]
    
//     let recipes=await getDocs(collection(db,'recipes'));
//     recipes.docs.forEach((item)=>{
//         recipesArray.push(item.data())    
//     })
    
//     return recipesArray
// }
// const recipesArray=GetRecipes()
// console.log('testing \n',recipesArray[0])

