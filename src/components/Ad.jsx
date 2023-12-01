import React, { useState } from 'react';

const Ad = () => {
  const [showAd, setShowAd] = useState(true);

  const handleToggleClick = () => {
    setShowAd(prevState => !prevState);
  };

  return (
    <div>
      {showAd ? (
        <div>
          <img style={{ width: "100vw" }} src="https://i.postimg.cc/4dpjFwkD/Untitled.jpg" alt="Ad Image" />
          <button onClick={handleToggleClick}>광고 안보기</button>
        </div>
      ) : (
        <button onClick={handleToggleClick}>광고 보기</button>
      )}
    </div>
  );
};

export default Ad;





