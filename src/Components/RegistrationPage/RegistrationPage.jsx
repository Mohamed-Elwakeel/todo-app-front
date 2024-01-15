import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./RegistrationPage.module.css";
import { useFormik } from "formik";
import * as yup from "yup";

const RegistrationPage = () => {
    const formik = useFormik({
        // Initial values for the input fields
        initialValues: {
            name: "",
            userName: "",
            email: "",
            password: "",
        },

        validationSchema: yup.object({
            name: yup
                .string("Enter your full name")
                .trim()
                .min(3, "Must be more than 3 characters")
                .required("Required")
                .matches(/^[a-zA-Z ]*$/, "The name must be letters only"),
            userName: yup
                .string("Enter user name")
                .trim()
                .min(3, "Must be more than 3 letters")
                .max(15, "Must be 15 characters or less")
                .required("Required")
                .matches(
                    /^[a-zA-Z0-9]{3,30}$/,
                    "The username should only contain letters and numbers, it should not contain spaces or signs"
                ),
            // gender: yup.string("Choose gender").trim().required("Required"),    
            email: yup.string().email("Invalid email address").required("Required"),
            password: yup.string().required("Required"),
        }),
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={styles.registerContainer}>
            <header>Sign Up</header>
            <form className={styles.formConatiner} onSubmit={formik.handleSubmit}>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Fullname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}
                <input
                    id="userName"
                    name="userName"
                    type="text"
                    placeholder="User Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                />
                {formik.touched.userName && formik.errors.userName ? (
                    <div>{formik.errors.userName}</div>
                ) : null}
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
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                <button type="submit">Submit</button>
            </form>
            <h3>
                Already have an account?
                <Link to="/login"> Sign In</Link>
            </h3>
            <Outlet />
        </div>
    );
};

export default RegistrationPage;
