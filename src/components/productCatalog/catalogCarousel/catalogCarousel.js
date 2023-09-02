import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CatalogItem from './catalogItem/catalogItem';

import 'swiper/css';
import 'swiper/css/navigation';
import './catalogCarousel.css';

export default function CatalogCarousel(props) {
    const { catalogItems } = props;

    return (
        <Swiper
            navigation={true} 
            modules={[Navigation]} 
            className="CatalogCarousel"
        >
            {
                catalogItems.map((catalogItem, idx) => {
                    const newUrl = catalogItem.urlParam;
                    const catalogItemName = catalogItem.name;
                    const imageUrl = catalogItem.imageUrl;

                    return (
                        <SwiperSlide key={idx}>
                            <CatalogItem imgSrc={imageUrl}
                                         catalogItemName={catalogItemName}
                                         catalogItemUrl={newUrl}
                            />
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
};