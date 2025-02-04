import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Form from './form';
import PageContainer from '../../PageContainer';
import registrationImage from '../../../assets/images/registration.jpg';

const Index = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Card.Body className="p-5 d-flex flex-column flex-md-row justify-content-around align-items-center">
        <div>
          <Image src={registrationImage} roundedCircle alt={t('signUpPage.srcAlt')} />
        </div>
        <Form />
      </Card.Body>
    </PageContainer>
  );
};

export default Index;
