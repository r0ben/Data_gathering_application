import React from "react";
import { StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native';
import MicIcon from '@mui/icons-material/Mic';

const LandingPage = () =>{
    return(
        <View>
            <View style={styles.topStyle}>
                
                <Text style={{textAlign:"center",
                color:'#0A74BC',
                fontSize:20,
                fontWeight:"bold",
                position:'fix'
                
                }}>Data Gathering App</Text>

            </View>
            <View style={styles.middleStyle}>
                
                <Text style={{fontSize:30,
                fontWeight:"bold",marginTop:5}}
                >Please</Text>
                <Text style={{fontSize:18}}>Read and Record the text below </Text>
                
                <View style={{height:220,width:'75%',backgroundColor:'white',marginTop:15,borderRadius:15,
                shadowColor: 'gray',
                shadowOpacity: 0.5,
                shadowRadius: 10,
                
               
            }}>
                <View style={styles.cardView}>
                    <Text style={{fontSize:20,
                    marginTop:30,
                    textAlign:"center"
                    }}>तिम्रो नाम के हो?</Text>
                    
                    <TouchableOpacity  onPress={()=>{
                        console.log('Clicked..');
                    }}>  
                    
                        <MicIcon style={{color:'white',    
                        marginTop:65,
                        fontSize:35,
                        backgroundColor:'#0A74BC',
                        padding:10,
                        borderRadius:'50%',

                   
                    }} 
                    />

                    </TouchableOpacity>
                </View>
                
            </View>
            <Image style={{height:100,
            marginTop:2,
            width:'100vw'}}
            source={require('../assets/gif.png')}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topStyle:{
       display:"flex",
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"center",
       height:30, 
    },
    middleStyle:{
        display: "flex",
        alignItems:"center",
        marginTop:10,
        backgroundColor:'rgba(10,116,188,0.1)',
        height:400,
        
    
    },
    cardView:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    }  
})


export default LandingPage;