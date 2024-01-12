import BoxLine from '@/components/BoxLine';
import Center from '@/components/Center';
import CentreAlignText from '@/components/CentreAlignText';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Section from '@/components/Section';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';


const ButtonImg = styled(Link)`
  color: #f4b183;
  cursor: pointer;
  text-align: center;
  letter-spacing: .5px;
  border: 2px solid transparent;
  border-radius: 4px;
  margin-top: 22px;
  margin-bottom: 8px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 23px;
  text-decoration: none;
  transition: all .3s;
  display: inline-block;
  box-shadow: 0 1px 1px transparent;
  border: 2px solid #f4b183;
  &&:hover{
    background-color: #f4b183;
    color: #3b3838;
    -webkit-box-shadow: 0px 0px 26px 1px rgba(244, 177, 131, 0.2);
    -moz-box-shadow: 0px 0px 26px 1px rgba(244, 177, 131, 0.2);
    box-shadow: 0px 0px 26px 1px rgba(244, 177, 131, 0.2);
  }
`;

const GlavniBox = styled.div`
 padding-top: 80px;
`;


const ErrorPage = ({ statusCode }) => {
  return (
    <>
    {/* <Header /> */}
      <div>
        <div>
          {statusCode
            ? 
            <>
            <Header />
            <GlavniBox>
             <Section>
              <Center>
                <CentreAlignText>
                  <h1>404</h1>
                  <h2>Page Not Found</h2>
                  <BoxLine />
                  <ButtonImg href={"/"}>Take Me Home</ButtonImg>
                </CentreAlignText>
              </Center>
             </Section>
            </GlavniBox>
            </>
            : 'An error occurred on the client'
            }
        </div>
      </div>
      <Footer />
    </>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;