import React from 'react';
import styled from 'styled-components';

const Picture = styled.section `
    width: 220px;
    height: 160px;
    background-color: #E8E8E8;
`;

const Card = styled.section `
    display: flex;
    flex-direction: column;
    margin-right: 14px;
    
`;

const Paragraph = styled.p `
    margin-bottom: 40px;
`;

export const EmployeeCard = () => {
    return (
        <>
            <Card>
                <Picture />
                <p>Ansatt Ansattnavn</p>
                <Paragraph>Stilling</Paragraph>
            </Card>
        </>
    )
};

export default EmployeeCard;