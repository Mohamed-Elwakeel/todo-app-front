import React from 'react';
import styles from "./LoginPage.module.css";
import { useFormik } from 'formik';
import * as yup from "yup"
import { Link, Outlet } from 'react-router-dom';

const LoginPage = () => {
    const formik = useFormik({
        // Initial values for the input fields
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: yup.object({
            email: yup.string().email("Invalid email address").required("Required"),
            password: yup.string().required("Required"),
        }),

        onSubmit: (values) => {
            console.log("signIn", JSON.stringify(values, null, 2))
        }
    })

    return (
        <div className={styles.loginConatiner}>
            <header>Sign In</header>
            <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
                <button type="submit">Sign In</button>
            </form>
            <h3>
                Don't have an account?
                <Link to="/register"> Sign Up</Link>
            </h3>
            <Outlet />
        </div>
    )
}

export default LoginPage
