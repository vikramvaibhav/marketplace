import React from 'react'
import { useFormikContext } from 'formik'

import AppErrorMessage from './AppErrorMessage'
import ImageInputList from '../ImageInputList'


const FormImagePicker = ({ name }) => {

    const { errors, setFieldValue, touched, values } = useFormikContext()

    const imageUris = values[name]


    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri])
    }

    const handleRemove = (uri) => {
        setFieldValue(name, imageUris.filter((imageUri) => imageUri !== uri))
    }

    return (
        <>
            <ImageInputList
                imageUris={values[name]}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default FormImagePicker