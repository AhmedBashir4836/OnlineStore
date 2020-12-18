import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';



function HomeScreen({navigation}){    
    return(
      <View style={styles.container}>
        <View style={{padding:50}}>
          <TouchableOpacity onPress={() => navigation.navigate("Product List")}>
            <Text style={styles.textStyle}>Manages Product</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{padding:50}}>
          <TouchableOpacity onPress={() => navigation.navigate("Employee List")}>
            <Text style={styles.textStyle}>Manages Employee</Text>
         </TouchableOpacity>
        </View>

        <View style={{padding:50}}>
          <TouchableOpacity onPress={() => navigation.navigate("Order List")}>
            <Text style={styles.textStyle}>Manages Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

function ListProduct({navigation}){
  const [getPList,setPList] = useState([{
    key:"item1",
    value:["Redmi Note 9"],
    desc:"Redmi Note 9 a product of Xiaomi"
  }])
  return(
    <View style={{justifyContent:"center"}}>
      <ScrollView>
        {getPList.map((listItem)=>{
          const detail = listItem.desc;
          return(
            <View>
              <TouchableOpacity onPress={()=> navigation.navigate("Product Detail",{detail})}>
                  <Text>{listItem.value}</Text>
              </TouchableOpacity>
            </View>
          )
        })
      }
      </ScrollView>
    </View>
  )
}
function ProductDetail({navigation}){
  return(
    <View>

    </View>
  )
}

function ListEmployee(){
  return(
    <View>

    </View>
  )
}


function ListOrder(){
  return(
    <View>

    </View>
  )
}

const Stack = createStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={HomeScreen} 
        options={{
          title: 'Home Screen',
          headerStyle: {
            backgroundColor: 'pink',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen name="Product List" component={ListProduct}/>
        <Stack.Screen name="Product Detail" component={ProductDetail}/>
        <Stack.Screen name="Employee List" component={ListEmployee}/>
        
        <Stack.Screen name="Order List" component={ListOrder}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize:20,
    fontWeight:'bold',
    padding:10
  }
});