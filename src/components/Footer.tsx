import React from 'react';


const Footer: React.FC<{count: number}> = ({count}) => {

  return (
    <footer>
      <div className="main-content">
        <div className="right">
          <p>
            Total items: {count}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;