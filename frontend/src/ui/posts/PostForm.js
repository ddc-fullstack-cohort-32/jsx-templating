import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import {Formik} from "formik";
import {httpConfig} from "../../utils/httpConfig";
import {useDispatch} from "react-redux";
import {fetchAllMisquotes} from "../../store/misquote";
import * as Yup from "yup"
import {FormDebugger} from "../../utils/FormDebugger";

export function PostForm() {

    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        misquoteAttribution: Yup.string()
            .required("A misquote attribution is required to create a misquote")
            .max(64, "misquote attribution cannot be over 64 characters "),
        misquoteContent: Yup.string()
            .required(" misquote content is required to create a misquote")
            .max(255, "misquote content cannot be over 255 characters "),
        misquoteSubmitter: Yup.string()
            .required("Please specify who is submitting this misquote")
            .max(64, "misquote submitter cannot be over 64 characters "),

    })

    const handleSubmit = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/misquote/", values).then(reply => {
            const {message, type, status} = reply
            if (status === 200) {
                resetForm()
                dispatch(fetchAllMisquotes())
            }
            setStatus({message, type})
        })
    }

    const misquote = {
        misquoteAttribution: "",
        misquoteContent: "",
        misquoteSubmitter: ""
    }

    return (
        <>
            <Formik
                onSubmit={handleSubmit}
                initialValues={misquote}
                validationSchema={validator}
            >
                {PostFormContent}
            </Formik>
        </>
    )
}


function PostFormContent(props) {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <InputGroup>
                        <FormControl
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Attribution"
                            value={values.misquoteAttribution}
                            name="misquoteAttribution"
                        />
                    </InputGroup>
                    {errors.misquoteAttribution && touched.misquoteAttribution && <>
                        <div className="alert alert-danger">
                            {errors.misquoteAttribution}
                        </div>
                    </>}
                </Form.Group>

                <Form.Group>
                    <InputGroup>
                        <FormControl
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Submitter"
                            value={values.misquoteSubmitter}
                            name="misquoteSubmitter"
                        />

                    </InputGroup>
                    {errors.misquoteSubmitter && touched.misquoteSubmitter && <>
                        <div className="alert alert-danger">
                            {errors.misquoteSubmitter}
                        </div>
                    </>}
                </Form.Group>

                <Form.Group>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon="dog"/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            as="textarea"
                            placeholder="Meow Meow Goes Here"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.misquoteContent}
                            name="misquoteContent"
                        />

                        <InputGroup.Append>
                            <Button variant="primary" type="submit"> Submit <FontAwesomeIcon
                                icon="envelope"/></Button>
                        </InputGroup.Append>
                    </InputGroup>
                    {errors.misquoteContent && touched.misquoteContent && <>
                        <div className="alert alert-danger">
                            {errors.misquoteContent}
                        </div>
                    </>}
                </Form.Group>
                {/*<FormDebugger {...props} />*/}
            </Form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>
    )
}
