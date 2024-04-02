import { Image, Text, TouchableOpacity, View } from "react-native";
import { Cat } from "../interfaces/AppInterface";


interface Props extends Cat {
    onPress: (textToTranslate: string, idItem: number) => void
}

export default function CardCat({ id, text, url, onPress}: Props) {

    return(
        <TouchableOpacity key={id}
        style={{
            flexDirection: 'row',
            gap: 10,
            backgroundColor: '#f7f697',
            borderRadius: 30,
            marginVertical: 8
        }}

        onPress={() => onPress(text, id)}
        >
        <Image
            style={{
                width: 150,
                height: 150,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30
            }}
            source={{
                uri: url
            }}
        />
        <Text
            numberOfLines={6}
            style={{
                fontSize: 20,
                color: 'black',
                flex: 1,
                justifyContent: 'flex-start',
                paddingRight: 5,
            }}
        >{text}</Text>
    </TouchableOpacity>
    )
}