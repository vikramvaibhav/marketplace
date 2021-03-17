import React, { useEffect } from 'react'
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import colors from '../config/colors'
import Icon from './Icon'

const ImageInput = ({ imageUri, onChangeImage }) => {

    useEffect(() => {
        requestPermission()
    }, [])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!granted) alert('Sorry, we need camera roll permissions to make this work!')
    }

    const handlePress = () => {
        if (!imageUri) {
            selectImage()
        } else {
            Alert.alert('Delete', 'Are you sure you want to delete this image?',
                [
                    { text: 'Yes', onPress: () => onChangeImage(null) },
                    { text: 'No' }
                ])
        }
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            })
            if (!result.cancelled) onChangeImage(result.uri)
        } catch (error) {
            console.log('Error while reading an image', error)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (
                    <Icon name="camera" size={70} backgroundColor={colors.light} iconColor={colors.medium} />
                )}
                {imageUri && (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 100
    },
    image: {
        height: 100,
        width: 100
    }
})

export default ImageInput