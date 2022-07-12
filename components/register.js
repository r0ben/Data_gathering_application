import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,Linking } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Dropdown from './dropdown'

const RegisterForm = ()=> {
      const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
      const [dobLabel,setDobLabel] = useState('Date of Birth')
      const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        //console.warn("A date has been picked: ", date);
        setDobLabel(date.toDateString())
        hideDatePicker();
      };
  return (
    <View >
      
        <View style={styles.container1}>
      <Text style={styles.textStyle1}>Sign Up</Text>
      </View>
      <View style={{alignItems:'center',justifyContent:'center'}}>
      <TextInput 
      style={styles.textStyle2}
      placeholder="Name"
      />
      <TextInput 
      style={styles.textStyle2}
      placeholder="Email"
      keyboardType='email'
      />
      <TextInput 
      style={styles.textStyle2}
      placeholder="Mobile Number"
      keyboardType='numeric'
      />
      <Text style={styles.textStyle3}>
        *This app uses ID by mobile number, if the number changes you can't redeem the points.
      </Text>
      <Text  style={styles.textStyle2}
      onPress={showDatePicker}
      >{dobLabel } </Text>
        <View styles={{marginHorizontal:20,color:'red'}}><Dropdown  /></View>
      
       <View>
        <TextInput 
        style={styles.textStyle2}
        placeholder='Address'/>
      </View>
     
      <TextInput 
        style={styles.textStyle2}
        placeholder='Password'
        secureTextEntry='true'/>
       <TextInput 
        style={styles.textStyle2}
        placeholder='Confirm Password'
        secureTextEntry='true'
        />

      </View>
      
      
      
      <View >
        <View style={{alignItems:'center'}}>
        <TouchableOpacity
        style={styles.createButton}>
        
        <Text style={{color:'white',fontWeight:'bold'}}>Create Account</Text>
        
        </TouchableOpacity></View> 
        
        
        <Text style={styles.textStyle4}>Already Have Account?</Text>
        <TouchableOpacity onPress={()=>{
          Linking.openURL('https://www.google.com/')
        }} 
        >
          <Text style={{textAlign:'center',color:'#16B2E3',fontWeight:'bold'}}>Log In</Text>
        </TouchableOpacity>
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            placeholder='Date of Birth'
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
      
   </View>
        </View>
        
    
  );
}

const styles = StyleSheet.create({
  textStyle1:{
    paddingVertical:60,
    fontSize:40,
    color:'white',
    fontWeight:'bold',
    textAlign:'center'
  },
  container1:{
    borderWidth:1,
    borderColor:'#16B2E3',
    height:120,
    backgroundColor:'#16B2E3',
    borderBottomRightRadius:150

  },
  textStyle2:{
    borderWidth:1,
    padding: 10,
    marginHorizontal:20,
    marginVertical:10,
    borderRadius:10,
    borderColor:'gray',
    width:'80%'
  },
  textStyle3:{
    marginVertical:0,
    marginHorizontal:20,
    color:'red'
  },
  createButton:{
    textAlign:'center',
    borderWidth:1,
    width:150,
    justifyContent:'center',
    marginHorizontal:110,
    padding:10,borderRadius:25,
    backgroundColor:'#16B2E3',
    borderColor:'#16B2E3',

   },
   textStyle4:{
    color:'gray',
    textAlign:'center',
    padding:10
    

   }

  
  
});


export default RegisterForm;
