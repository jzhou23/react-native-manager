import React from 'react';
import { Card, CardSection, Input, Button } from './common';

const EmployeeCreate = () => {
  return (
    <Card>
      <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
        />
      </CardSection>

      <CardSection>
        <Input
          label="Phone"
          placeholder="555-555-5555"
        />
      </CardSection>

      <CardSection>
        <Button>
          Create
        </Button>
      </CardSection>

    </Card>
  );
};

export default EmployeeCreate;
