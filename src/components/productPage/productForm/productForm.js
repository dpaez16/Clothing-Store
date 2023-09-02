import { useState, useEffect } from "react";
import { Input, Button, Form } from 'semantic-ui-react';
import ProductSizeSelection from './productSizeSelection/productSizeSelection';
import { validateEmail, validatePhoneNumber } from '../../../utils/validators';

import './productForm.css';

export default function ProductForm(props) {
    const [state, setState] = useState({
        customerName: '',
        customerEmail: '',
        phoneNumber: '',
        productSize: '',
    });
    const [formValid, setFormValid] = useState(false);

    const { sizeOptions, submitOrderHandler } = props;

    useEffect(() => {
        const { customerName, customerEmail, phoneNumber, productSize } = state;

        setFormValid(
            customerName &&
            validateEmail(customerEmail) &&
            validatePhoneNumber(phoneNumber) &&
            productSize
        );
    }, [state]);

    const submitHandler = event => {
        event.preventDefault();

        submitOrderHandler(state);
    };

    const handleFormInputChange = (event) => {
        const { name, value } = event.target;
        setState(oldState => ({
            ...oldState,
            ...{ [name]: value }
        }));
    };

    const sizeSelectionHandler = (newSize) => {
        const event = {
            target: {
                name: "productSize",
                value: newSize
            }
        };

        handleFormInputChange(event);
    };

    return (
        <Form className="ProductForm">
            <ProductSizeSelection productSizeOptions={sizeOptions} 
                                  onChange={sizeSelectionHandler}
            />
            <Input  name="customerName" 
                    type="text" 
                    label="Name" 
                    onChange={handleFormInputChange}
                    className="ProductForm__Input"
                    fluid
            />
            <Input  name="customerEmail" 
                    type="text" 
                    label="Email" 
                    onChange={handleFormInputChange} 
                    className="ProductForm__Input"
                    fluid
            />
            <Input  name="phoneNumber" 
                    type="text" 
                    label="Phone Number" 
                    onChange={handleFormInputChange} 
                    className="ProductForm__Input"
                    fluid
            />
            <Button onClick={submitHandler}
                    disabled={!formValid}
                    positive
                    fluid
            >
                Submit Order
            </Button>
        </Form>
    );
};