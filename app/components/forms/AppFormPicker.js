import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import AppErrorMessage from './AppErrorMessage'
import PickerItem from '../PickerItem'


const AppFormPicker = ({ name, items, numberOfColumns, PickerItemComponent = PickerItem, placeholder }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext()
    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormPicker
