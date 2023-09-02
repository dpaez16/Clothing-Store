import { Input } from 'semantic-ui-react';
import './productSizeSelection.css';

export default function ProductSizeSelection(props) {
    const { productSizeOptions, onChange } = props;

    const sizeSelectionHandler = (_, data) => {
        const newSize = data.value;
        onChange(newSize);
    };

    return (
        <fieldset className="ProductSizeSelection">
            <legend>Size</legend>
            {
                productSizeOptions.map((productSize, idx) => {
                    return (
                        <div key={idx}>
                            <Input  type="radio"
                                    name="product-size-option"
                                    id={productSize}
                                    value={productSize}
                                    onChange={sizeSelectionHandler}
                            />
                            <span className='product-size-option-label'>{productSize}</span>
                        </div>
                    );
                })
            }
        </fieldset>
    );
};