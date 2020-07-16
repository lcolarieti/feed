import React from 'react';
import {connect, ConnectedProps} from 'react-redux';


const connector = connect(null, {});
type PropsFromRedux = ConnectedProps<typeof connector>
type FooterProps = {
  count: number
};
type Props = FooterProps & PropsFromRedux;

const Footer: React.FC<Props> = (props) => {
  const {count} = props;

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

export default connector(Footer);