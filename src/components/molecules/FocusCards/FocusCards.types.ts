export interface FocusCard {
  title: string;
  description?: string;
  src: string;
}

export interface FocusCardsProps {
  cards: FocusCard[];
  onCardClick?: (index: number) => void;
  className?: string;
}
