import React, { FC } from 'react';
import { StyledCard } from './Card.styles';

type CardProps = {
  title: string;
};

const Card: FC<CardProps> = ({ title }) => (
  <StyledCard>
    <div>{title}</div>
  </StyledCard>
);

export default Card;
