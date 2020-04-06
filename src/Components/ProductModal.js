import React,{useState} from "react";
import {
    View,
    Modal,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";
import { Feather, Ionicons } from '@expo/vector-icons';
import FloatingLabel from 'react-native-floating-labels';
import { connect } from 'react-redux';
import * as Config from '../Hooks/Config';

const ProductModal = (props) => {

    const { item, modalvisibility, pressHandler , shoppedProduct }=props;
    var [quantity,setquantity]=useState('')
    var [total,setTotal]=useState(item.price)
    const [warning,setWarning]=useState(false)
    const [disableCart,setDisableCart]=useState(true)

    const changeHandler= qty =>{
        if(qty > 0){
            setWarning(false)
            setquantity(qty);
            setTotal(qty*item.price);
            setDisableCart(false)
           }else{
            setWarning(true)
            setDisableCart(true)
        }
        
    }

    return (
        <>
            <Modal 
            transparent={true} 
            visible={modalvisibility}
            >

                <View style={modalstyle.mainModal} >
                <TouchableOpacity
                style={modalstyle.crossbtn}
                onPress={()=>{
                    pressHandler()
                }}
                >
                    <Feather
                    name="x"
                    style={{
                        color:'#ffffff95'
                    }}
                    />
                </TouchableOpacity>
                    <View style={modalstyle.formContainer} >
                
                        <View style={modalstyle.mainIcon} >
                            {
                               !shoppedProduct ?  
                            
                            <Feather 
                            name="shopping-cart" 
                            style={modalstyle.cartIcon}
                            />
                            :
                            <Feather 
                            name="check-circle"
                            style={modalstyle.cartIcon}
                            />
                            }
                        </View>
                
                        <Text style={modalstyle.title} >{item.name}</Text>
                        
                        {
                            !shoppedProduct ? 
                            <>
                                    <View>
                        
                                    <FloatingLabel
                                        labelStyle={{ color: '#fff' }}
                                        inputStyle={modalstyle.fieldsLabel}
                                        value={quantity.toString()}
                                        keyboardType="number-pad"
                                        onChangeText={(qty)=>{
                                            changeHandler(qty)
                                        }}
                                        returnKeyType="done"
                                    >
                                        Quantity
                                        
                                    </FloatingLabel>

                                    {
                                        warning ? 
                                        <Text
                                        style={{
                                            color:'#fff',
                                            paddingTop:5,
                                            paddingLeft:5
                                            }}
                                        >Quantity should be above the 0</Text>
            
                                        :null
                                    }
                                
                                    <View style={modalstyle.totalContainer} >
                        
                                        <View style={modalstyle.cashIcon} >
                                            <Ionicons name="md-cash" style={modalstyle.cash} />
                                        </View>
                        
                                        <View style={modalstyle.totalPrice} >
                                            <Text style={modalstyle.itemPrice} >RS-{total}</Text>
                                        </View>
                        
                                    </View>
                        
                                </View>
                                <View style={modalstyle.actionContainer} >
                        
                                    <TouchableOpacity
                                        style={modalstyle.actionbtn}
                                        onPress={() => {
                                            pressHandler()
                                        }}
                                    >
                                        <Feather name="x" style={modalstyle.actionbtntextl} />
                                        <Text style={modalstyle.actionbtntextr} >Back</Text>

                                    </TouchableOpacity>
                        
                                    <TouchableOpacity 
                                    disabled={disableCart}
                                    style={{
                                        ...modalstyle.actionbtn,
                                        backgroundColor:disableCart?'#ccc':'#fff'
                                    }}
                                    onPress={()=>{
                                        let payload={
                                            id:item.id,
                                            name:item.name,
                                            quantity:quantity,
                                            img:item.images[0].src.replace('localhost',Config.ip),
                                            price:item.price,
                                            total:total
                                        }
                                        props.addToCart(payload)
                                    }}
                                    >
                                        <Text style={modalstyle.actionbtntextl} >Cart</Text>
                                        <Feather name="arrow-right" style={modalstyle.actionbtntextr} />
                                    </TouchableOpacity>
                                </View>
                                
                            </>

                            :null
                            }           
                       
                     
                    </View>
                
                </View>
            
            </Modal>
        
        </>
    )

}


const modalstyle = StyleSheet.create({
    crossbtn:{
        position:'absolute',
        top:10,
        left:10,
        backgroundColor:222,
        padding:10,
        borderRadius:50
    },
    mainModal: {
        backgroundColor: '#00000090',
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    formContainer: {
        width: Dimensions.get('screen').width * 0.9,
        backgroundColor: '#ff6e00f2',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    mainIcon: {
        backgroundColor: '#fff',
        height: 100,
        width: 100,
        marginTop: -70,
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 50
    },
    cartIcon: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#ff6e00f2'
    },
    title: {
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: '#fff',
        marginTop: 10
    },
    fieldsLabel: {
        color: '#ffffff',
        fontSize: 18,
        borderWidth: 0,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        padding: 10
    },
    totalContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        marginVertical: 20,
        paddingVertical: 5,
        borderRadius: 10
    },
    cashIcon: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 13,
        borderRadius: 100,
        zIndex: 9
    },
    cash: {
        fontSize: 20,
        color: '#ff6e00f2'
    },
    totalPrice: {
        backgroundColor: '#222',
        borderRadius: 20,
        paddingVertical: 5,
        paddingLeft: 27,
        paddingRight: 10,
        marginLeft: -30,
        borderWidth: 1,
        borderColor: '#fff'
    },
    itemPrice: {
        color: '#fff',
        fontSize: 25,
        marginHorizontal: 10
    },
    actionContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
    },
    actionbtn: {
        alignSelf: 'flex-end',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 100,
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    actionbtntextl: {
        fontSize: 18,
        marginHorizontal: 1
    },
    actionbtntextr: {
        fontSize: 18
    }
})

const mapstateToProp=state=>{
    return{
        prd:state.products
    }
}

const mapActionToProp=dispatch=>{

    return{
        addToCart:(payload)=>dispatch({type:'addProduct',payload:payload})
    }
}


export default connect(mapstateToProp,mapActionToProp)(ProductModal) 