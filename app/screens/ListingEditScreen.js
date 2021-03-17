import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton
} from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'
import FormImagePicker from '../components/forms/FormImagePicker'
import Screen from '../components/Screen'
import useLocation from '../hooks/useLocation'
import listingsApi from '../api/listingsApi'
import listings from '../../backend/data/listings'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().moreThan(1).lessThan(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1, "Please select at least one image.")
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
    const location = useLocation()

    const handleSubmit = async (listing) => {
        const result = await listingsApi.addListing({ ...listing, location })

        if (!result.ok)
            return alert('Could not save the listing.')
        alert('Succcess')
    }

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: []
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
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
