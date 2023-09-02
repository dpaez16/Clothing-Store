import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Loader, Dimmer } from 'semantic-ui-react';
import CatalogCarousel from "./catalogCarousel/catalogCarousel";
import { CustomModal, useModal } from '../modal/modal';
import ProductAPIClient from '../../api/productApiClient';

import './productCatalog.css';

export default function ProductCatalog(props) {
    const navigate = useNavigate();
    const [
        modalOpen,
        setModalOpen,
        modalContent,
        isModalError,
        setModalError
    ] = useModal();

    const [ catalogItems, setCatalogItems ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const { catalogName } = props;

    useEffect(() => {
        ProductAPIClient.fetchProductCatalog(catalogName)
        .then(newCatalogItems => {
            setCatalogItems(newCatalogItems);
            setIsLoading(false);
        })
        .catch(err => {
            setIsLoading(false);
            setModalError(err);
        });
    }, [catalogName]);

    if (isLoading) {
        return (
            <Dimmer active>
                <Loader content='Loading' />
            </Dimmer>
        );
    }

    return (
        <div className="ProductCatalog">
            <Header as='h1'>{catalogName}</Header>
            <CatalogCarousel catalogItems={catalogItems} />
            <CustomModal    modalOpen={modalOpen}
                            modalContent={modalContent}
                            isModalError={isModalError}
                            setModalOpen={setModalOpen}
                            navigateHandler={() => navigate('/')}
            />
        </div>
    );
};