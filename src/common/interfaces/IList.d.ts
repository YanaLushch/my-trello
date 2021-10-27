import ICard from './ICard';

export default interface IList {
  title: string;
  id: string;
  cards: ICard[] | null;
}
