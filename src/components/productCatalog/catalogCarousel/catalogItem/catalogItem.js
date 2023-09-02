import { useNavigate } from 'react-router-dom';
import './catalogItem.css';

export default function CatalogItem(props) {
    const navigate = useNavigate();
    const { imgSrc, catalogItemName, catalogItemUrl } = props;

    const clickHandler = event => {
        event.preventDefault();

        navigate(catalogItemUrl, {
            state: {
                productName: catalogItemName,
                productImageUrl: imgSrc
            }
        });
    };

    return (
        <div className="CatalogItem">
            <img src={imgSrc} alt={catalogItemName} />
            <a  href={catalogItemUrl}
                onClick={clickHandler}
            >
                {catalogItemName}
            </a>
        </div>
    );
};