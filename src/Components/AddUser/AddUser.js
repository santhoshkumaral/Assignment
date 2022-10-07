import React from "react";
import { Formik, Form } from "formik";
import Textfield from "../InputFieldComp/InputFieldComp";
import * as Yup from "yup";
import "./style.css";
import axios from "axios";
const AddUser = () => {
    constvalidate = Yup.object({
        first_name: Yup.string()
            .required("first_name is required")
            .max(15, "Must be 15 characters or less"),

        last_name: Yup.string()
            .required("last_name is required")
            .max(15, "Must be 15 characters or less"),

        email: Yup.string()
            .required("Email is required")
            .email("Invalid Email Address"),
    });
    constaddUsers = (data) => {
        axios
            .post("https://reqres.in/api/users", {
                data: {
                    email: data.email,
                    first_name: data.first_name,
                    last_name: data.last_name,
                },
            })
            .then(function (response) {
                //check the console mdata
                console.log("response", response);
            })
            .catch((error) => {
                throwerror;
            });
    };
    return (
        <div>
            <Formik
                initialValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                    addUsers(values);
                }}
            >
                {(formik) => (
                    <div className="Form">
                        < div className="inputs">
                            <Form className="form_data">
                                <Textfield label="First Name" name="first_name" type="text" />
                                <Textfield label="last Name" name="last_name" type="text" />
                                <Textfield label="Email" name="email" type="email" />

                                <button className="btnadduser" type="submit">
                                    Add User
                                </button>
                            </Form>
                        </div>
                    </div >
                )
                }
            </Formik>
        </div>
    );
};
export default AddUser;























