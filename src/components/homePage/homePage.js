import { Header } from 'semantic-ui-react';
import './homePage.css';

export default function HomePage() {
    return (
        <div className="HomePage">
            <Header as='h1'>Clothing Shop</Header>
            <a href="/shirts">Shirts</a>
            <a href="/hoodies">Hoodies</a>
        </div>
    );
};