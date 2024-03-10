import { useFormik } from 'formik'

const validate = values => {
    const errors = {};
    if (!values.firstName)
    {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15)
    {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName)
    {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20)
    {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email)
    {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const Login = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validate,
        onSubmit: values => {
            console.log('submitted----', JSON.stringify(values))
        }
    })

    return (
        <form id="login-form" onSubmit={ formik.handleSubmit }>
            <label htmlFor="firstName">First Name</label>
            <input
                type="firstName"
                id="firstName"
                name="firstName"
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                value={ formik.values.firstName }
            />
            { formik.touched.firstName && formik.errors.firstName ? (
                <div className='validation-div'>{ formik.errors.firstName }</div>
            ) : null }

            <label htmlFor="lastName">Last Name</label>
            <input
                type="lastName"
                id="lastName"
                name="lastName"
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                value={ formik.values.lastName }
            />
            { formik.touched.lastName && formik.errors.lastName ? (
                <div className='validation-div'>{ formik.errors.lastName }</div>
            ) : null }

            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                id="email"
                name="email"
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                value={ formik.values.email }
            />
            { formik.touched.email && formik.errors.email ? (
                <div className='validation-div'>{ formik.errors.email }</div>
            ) : null }

            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login