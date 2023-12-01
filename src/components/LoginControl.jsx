import React, { useState } from 'react';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
    {isLoggedIn ? (
      <div className='header-right-wrap'>
        <button onClick={handleLogoutClick}style={{
            margin: "0 10px",
            borderRadius: "15px",
            width: "70px",
            height: "30px",
          }}>로그아웃</button>
        <h2 style={{color:"white"}}>환영합니다!</h2>
      </div>
    ) : (
      <div className='header-right-wrap'>
        <button onClick={handleLoginClick}style={{
            margin: "0 10px",
            borderRadius: "15px",
            width: "70px",
            height: "30px",
          }}>로그인</button>
        <h2 style={{color:"white"}}>로그인 해주세요!</h2>
      </div>
    )}
  </div>
  );
}

export default LoginControl;

