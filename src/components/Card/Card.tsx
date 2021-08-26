import React, { FC } from 'react';

type CardProps = {
  title: string;
};

const Card: FC<CardProps> = ({ title }) => <div>{title}</div>;

export default Card;
