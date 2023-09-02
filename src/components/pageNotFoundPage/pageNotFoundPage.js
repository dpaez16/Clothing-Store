import './pageNotFoundPage.css';

export default function PageNotFoundPage() {
    return (
        <div className="PageNotFoundPage">
            <h1>Whoops!</h1>
            <h2>404 Page Not Found</h2>
            <p>Try the <a href="/">homepage</a> instead.</p>
        </div>
    );
};