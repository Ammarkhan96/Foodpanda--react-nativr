import { Button, View, Text} from 'react-native'


export default function({navigation}) {
    return (
        <View>
            <Text>Home</Text>
            <Button
            title='Go to Home'
            onPress={() => navigation.navigate('Profile')}
            ></Button>
        </View>
    )
}


