import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Header, Loader, Dimmer } from 'semantic-ui-react';
import ProductForm from './productForm/productForm';
import { CustomModal, useModal } from '../modal/modal';
import ProductAPIClient from '../../api/productApiClient';

import './productPage.css';

export default function ProductPage(props) {
    const urlParams = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [
        modalOpen,
        setModalOpen,
        modalContent,
        isModalError,
        setModalError, 
        setModalNonError
    ] = useModal();

    const [ productMetadata, setProductMetadata ] = useState({
        productName: undefined,
        productImageUrl: undefined
    });
    const [ isLoading, setIsLoading ] = useState(true);

    const { sizeOptions } = props;

    useEffect(() => {
        ProductAPIClient.fetchProductMetadata(location, urlParams)
        .then(metadata => {
            setIsLoading(false);
            setProductMetadata(oldMetadata => ({
                ...oldMetadata,
                ...metadata
            }));
        })
        .catch(err => {
            setIsLoading(false);
            setModalError(err);
        });
    }, [location, urlParams]);

    const submitOrderHandler = (orderMetadata) => {
        ProductAPIClient.submitOrder(orderMetadata)
        .then((data) => {
            console.log(data);
            setModalNonError("Order submitted!");
        })
        .catch(err => {
            setModalError(err);
        });
    };

    if (isLoading) {
        return (
            <Dimmer active>
                <Loader content='Loading' />
            </Dimmer>
        );
    }

    const { productName, productImageUrl } = productMetadata;
    return (
        <div className='ProductPage'>
            <Header as='h1'>{productName}</Header>
            <img    src={productImageUrl} 
                    alt={productName} 
                    className='ProductPage__Image'
            />
            <ProductForm    sizeOptions={sizeOptions} 
                            submitOrderHandler={submitOrderHandler}
            />
            <CustomModal    modalOpen={modalOpen}
                            modalContent={modalContent}
                            isModalError={isModalError}
                            setModalOpen={setModalOpen}
                            navigateHandler={() => navigate('/')}
            />
        </div>
    );
};