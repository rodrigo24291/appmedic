import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { registerUser } from '../../redux/teamduck';
import { useDispatch, useSelector } from 'react-redux';
import '../FormStyle.css';

export default function Register() {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    console.log(user)
    const formik = useFormik({
        initialValues: {
            name: user?.name || '',
            surname: user?.surname || '',
            description: user?.description || ''

        },
        onSubmit: value => {

            dispatch(registerUser(value));

        },
        validationSchema: yup.object({
            name: yup.string().min(4, 'Debe tener minimo 4 caracteres').required('Campo obligatorio'),
            surname: yup.string().min(4, 'Debe tener minimo 4 caracteres').required('Campo obligatorio'),
            description: yup.string().required('Campo obligatorio')
        })
    });

    const handleChangeCkeditor = (e, editor) => {
        formik.setValues(previous => {
            previous.description = editor.getData();
            return previous;
        });
    }

    const handleBlurCkeditor = () => {
        formik.setTouched({
            ...formik.touched,
            description: true
        });
    }


    return (
        <div>
            <form className="form-container" onSubmit={formik.handleSubmit}>
                <input className="input-field" type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Slide Title"></input>
                {formik.touched.name && formik.errors.name}
                <input className="input-field" type="text" name="surname" value={formik.values.surname} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Write order" ></input>
                {formik.touched.surname && formik.errors.surname}
                <CKEditor
                    editor={ClassicEditor}
                    data={formik.values.description}
                    onChange={handleChangeCkeditor}
                    onBlur={handleBlurCkeditor}
                />
                {formik.touched.description && formik.errors.description}
                <button className="submit-btn" type="submit">Send</button>
            </form>
        </div>
    );
}