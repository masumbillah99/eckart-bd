import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h3>Error page</h3>
            <Link to={'/'}>Go Back</Link>
        </div>
    );
};

export default ErrorPage;