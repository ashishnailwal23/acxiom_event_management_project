// ErrorPage.js

import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">Oops! Something went wrong</h1>
        <p className="error-message">Please check your login credentials and try again.</p>
      </div>
    </div>
  );
};

export default ErrorPage;