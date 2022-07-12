import React,{useState} from "react";
import { View } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

const Dropdown = () =>{
    const [selected, setSelected] = useState("");
    const data = [
        {key:'1',value:'Male'},
        {key:'2',value:'Female'},
        {key:'3',value:'Others'},
      ];
    return(
      <View style={{ marginHorizontal:20,width:'60%'}}>
        <SelectList setSelected={setSelected}
         data={data}
         placeholder='Gender'
         set search={false}
         
        />
      </View>
        
            
        
        
      )
};


export default Dropdown;