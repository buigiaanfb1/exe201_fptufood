import React, { useEffect } from 'react';
import LoginBox from '../component/login';






const LoginPage: React.FC = () => {
  useEffect(() => {
    window.document.title = 'FPT-Food';
  }, []);

  return (
    <div className="ui tight grid content login-page"> 
      <div className="login-box">
        <LoginBox />
      </div>
    </div>
  );
};

export default LoginPage;
