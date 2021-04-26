import { alertConfirmedUrl, alertRaisedUrl } from '@App/constants/images';
import * as React from 'react';
import AlertCountCard from './alert-count-card';
import RowWrapper from './row-wrapper';
import Wrapper from './wrapper';

const Alert = () => {
  return (
    <Wrapper>
      <RowWrapper>
        <AlertCountCard
          count={100}
          title={'Alert raised'}
          iconUrl={alertRaisedUrl}
        />
        <AlertCountCard
          count={100}
          title={'Alert qualified'}
          iconUrl={alertConfirmedUrl}
        />
      </RowWrapper>
    </Wrapper>
  );
};

export default Alert;
