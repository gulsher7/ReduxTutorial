//import liraries
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import actions from '../redux/actions';


// create a component
const Home = (props) => {


    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                let res = await actions.getPosts()
                console.log("all posts", res)
                setData(res)
            } catch (error) {
                console.log("error raised", error)
            }
        })();
    }, [])


    const deletePost = async (id) => {
        try {
            const res = await actions.deletePost(id)
            console.log('res++++', res)
            let arry = [...data]
            let modifyArray = arry.filter((val,i)=>{
                if(val.id !== id){
                    return val
                }
            })
            setData(modifyArray)
        } catch (error) {
            console.log("error raised", error)
        }
    }


    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.boxView}>
                <Text style={styles.heading}>{item.id}. {item.title}</Text>
                <Text>{item.body}</Text>

                <TouchableOpacity onPress={()=>deletePost(item.id)} style={styles.btnStyle}>
                    <Text style={{color: 'white'}}>DELETE</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>

                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
                />
            </SafeAreaView>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    },
    boxView: {
        borderWidth: 1,
        padding: 16,
        borderRadius: 8
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        textTransform:'capitalize'
    },
    btnStyle: {
        marginTop: 10,
        alignSelf:'flex-end',
        backgroundColor:'red',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4
    }
});

//make this component available to the app
export default Home;