import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem'
import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton
} from '../components/forms'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().moreThan(1).lessThan(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category')
})

const categories = [
    { label: 'Furniture', value: 1, backgroundColor: '#8FBC8F', icon: 'chair' },
    { label: 'Laptop & Computers', value: 2, backgroundColor: '#ADD8E6', icon: 'laptop' },
    { label: 'Musical Instruments', value: 3, backgroundColor: '#20B2AA', icon: 'guitar' },
    { label: 'Clothes', value: 4, backgroundColor: '#87CEFA', icon: 'tshirt' },
    { label: 'Books', value: 5, backgroundColor: '#3CB371', icon: 'book' },
    { label: 'Cellphones', value: 5, backgroundColor: '#2F4F4F', icon: 'mobile-alt' }
]

const ListingEditScreen = () => {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title" />
                <AppFormField maxLength={7} name="price" keyboardType="number-pad" placeholder="Price" />
                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category" />
                <AppFormField
                    maxLength={255}
                    multiline name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})

export default ListingEditScreen
