import React from 'react';
import AcademiesTable from '../../containers/AcademiesTable';

import { Container } from '../../styled';

const AcademiesPage: React.FunctionComponent = () => {
  return (
    <Container>
      <AcademiesTable />
    </Container>
  );
};

export default AcademiesPage;
