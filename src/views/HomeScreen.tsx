//rnf

import { View, Text, Image, ScrollView, Modal, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Cat } from '../interfaces/AppInterface';
import CardCat from '../components/CardCat';

const baseTranslateURL = "https://swift-translate.p.rapidapi.com/translate";

export default function HomeScreen( {navigation, route}: any) {

    //hooks
    //estructura: [variable, funcion]
    const [list, setList] = useState([] as Cat[]);
    const [isLoading, setIsLoading] = useState(false);
    const [numGatos, setNumGatos] = useState(10);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [dataModal, setDataModal] = useState({} as any);


    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get('https://meowfacts.herokuapp.com/?count=' + numGatos);
            const response2 = await axios.get('https://api.thecatapi.com/v1/images/search?limit=' + numGatos);

            if (response.status == 200 && response2.status == 200) {
                const newList = []
                for (var i = 0; i < numGatos; i++) {
                    const newObj = {
                        id: i,
                        text: response.data.data[i],
                        url: response2.data[i].url
                    }
                    newList.push(newObj);
                }
                setList(newList);
            }

        } catch (error) {
            console.log(error);
        }
    }

    const getTranslation = async (itemText: String, idItem: number) => {
        const body = {
            text: itemText,
            sourceLang: "en",
            targetLang: "es"
        }
        const headers = {
            "X-RapidAPI-Key": "bd61e28000msh611526b6fc0c620p1155dejsnd52dce060b93",
            "X-RapidAPI-Host": "swift-translate.p.rapidapi.com"
        }

        try {
            const response = await axios.post(baseTranslateURL, body, { headers });

            if (response.status == 200) {
                setDataModal({
                    ...list[idItem],
                    translatedText: response.data.translatedText
                })
                setIsVisibleModal(true)
            }
        } catch (error) {
            console.log('Hubo un error al traducir: ', error);
        }
    }

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: '#0a151c',
                padding: 15,
            }}
        >

            <TouchableOpacity
            onPress={()=> navigation.navigate("Login")}>
                <View>
                    <Text style={{color: "white"}}>IR A LOGIN</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> navigation.navigate("Profile")}>
                <View>
                    <Text style={{color: "white"}}>IR A PERFIL</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> navigation.navigate("Favorites")}>
                <View>
                    <Text style={{color: "white"}}>IR A FAVORITOS</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> navigation.navigate("History")}>
                <View>
                    <Text style={{color: "white"}}>IR A HISTORIAL</Text>
                </View>
            </TouchableOpacity>
        

            {
                list.map((item) => (
                    <CardCat
                        key={item.id} {...item}
                        onPress={() => getTranslation(item.text, item.id)}
                    />
                ))
            }

            <Modal visible={isVisibleModal} transparent animationType='fade'>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.7)',
            }}>
                <View style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    alignItems: 'center',
                    padding: 20,
                    width: '95%',
                    minHeight: '90%',
                    position: 'relative',
                }}>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: 'bold',
                        marginBottom: 20,
                        marginTop: 20,
                        color: 'black',
                    }}>
                        Traducción
                    </Text>
                    <Image
                        style={{
                            width: 250,
                            height: 250,
                            borderRadius: 10,
                            marginBottom: 10,
                        }}
                        source={{ uri: dataModal.url }}
                    />
                    <Text style={{
                        fontSize: 18,
                        margin: 30,
                        color: 'black',
                        fontWeight: 'bold',
                    }}>
                        {dataModal.translatedText}
                    </Text>
        
                    <TouchableOpacity
                        onPress={() => setIsVisibleModal(false)}
                        style={{
                            position: 'absolute', 
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: 'blue',
                        }}>
                            ← Volver
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        


        </ScrollView>
    )
}