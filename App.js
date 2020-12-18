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
    value:"Redmi Note 9",
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
                  <Text style={styles.styleList}>Product Name: {listItem.value}</Text>
              </TouchableOpacity>
            </View>
          )
        })
      }
      </ScrollView>
    </View>
  )
}

function ProductDetail({navigation,route}){
  const dt = route.params.detail;
  return(
    <View>
      <Text style={styles.styleList}>Detail</Text>
      <Text style={styles.styleList}>{dt}</Text>
    </View>
  )
}

function ListEmployee({navigation}){
  const [getEList,setEList] = useState([{
    key:"emp1",
    name:"Ahmed",
    designation:"Front End Developer",
    desc: "Ahmed is new to Front End Developer"
  }])
  return(
    <View style={{justifyContent:"center"}}>
      <ScrollView>
        {getEList.map((listItem)=>{
          const detail = listItem.desc;
          return(
            <View>
              <TouchableOpacity onPress={()=> navigation.navigate("Employee Detail",{detail})}>
                  <Text style={styles.styleList}>Name: {listItem.name}</Text>
                  <Text style={styles.styleList}>Designation:{listItem.designation}</Text>
              </TouchableOpacity>
            </View>
          )
        })
      }
      </ScrollView>
    </View>
  )
}



function EmployeeDetail({navigation,route}){
  const dt = route.params.detail;
  return(
    <View>
      <Text style={styles.styleList}>Detail</Text>
      <Text style={styles.styleList}>{dt}</Text>
    </View>
  )
}


function ListOrder({navigation}){
  const [getOList,setOList] = useState([{
    key:"ord1",
    orderNumber:"1",
    productName:"Redmi Note 9",
    price : "Rs:31000",
    customerInfo:"Ali",
    orderDate:"19 Dec 2020",
    shipingStatus: "Yes"
  }])
  return(
    <View style={{justifyContent:"center"}}>
      <ScrollView>
        {getOList.map((listItem)=>{
          const custName = listItem.customerInfo;
          const orderDt = listItem.orderDate;
          const shiping = listItem.shipingStatus;
          return(
            <View>
              <TouchableOpacity onPress={()=> navigation.navigate("Order Detail",{custName,orderDt,shiping
              })}>
                  <Text style={styles.styleList}>Order No:{listItem.orderNumber}</Text>
                  <Text style={styles.styleList}>Product Name:{listItem.productName}</Text>
                  <Text style={styles.styleList}>Price: {listItem.price}</Text>
              </TouchableOpacity>
            </View>
          )
        })
      }
      </ScrollView>
    </View>
  )
}

function OrderDetail({navigation,route}){
  const custinfo = route.params.custName;
  const ordDate = route.params.orderDt;
  const ship = route.params.shiping;
  return(
    <View>
      <Text style={styles.styleList}>Customer Name:{custinfo}</Text>
      <Text style={styles.styleList}>Date:{ordDate}</Text>
      <Text style={styles.styleList}>Shipped:{ship}</Text>
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
        <Stack.Screen name="Employee Detail" component={EmployeeDetail}/>
        <Stack.Screen name="Order List" component={ListOrder}/>
        <Stack.Screen name="Order Detail" component={OrderDetail}/>
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
  },
  styleList:{
   fontSize:30,
   fontWeight:'bold',
   textAlign:'center', 
  }

});