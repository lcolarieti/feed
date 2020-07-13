import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type ReceivedProps = {
  searchMode: boolean;
};

const GridMessage: React.FC<ReceivedProps> = (props: ReceivedProps) => {
  const {searchMode} = props;

  return <div className="grid-message">
    {searchMode && <FontAwesomeIcon icon={faSearch} />}
    <p>Ops, there are no results!</p>
  </div>;
};

export default GridMessage;

