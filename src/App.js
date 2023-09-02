import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/homePage/homePage';
import ProductCatalog from './components/productCatalog/productCatalog';
import ProductPage from './components/productPage/productPage';
import PageNotFoundPage from './components/pageNotFoundPage/pageNotFoundPage';

import { CATALOG_NAMES, SHIRT_SIZES } from './utils/consts';

import './App.css';

function App() {
    return (
        <Router>
        <div id='app'>
        <Routes>
            <Route  path="/"
                    element={<HomePage />}
            />
            <Route  path="/shirts"
                    element={
                        <ProductCatalog catalogName={CATALOG_NAMES.SHIRTS} />
                    }
            />
            <Route  path={`/${CATALOG_NAMES.SHIRTS.toLowerCase()}/:shirtName`}
                    element={<ProductPage sizeOptions={SHIRT_SIZES} />}
            />
            <Route  path="*"
                    element={<PageNotFoundPage />}
            />
        </Routes>
        </div>
        </Router>
    );
}

export default App;
