import Card from "./Card.ts";

export default class Deck {
  name = "";
  cards: Card[] = [];
  usedCards: Card[] = [];

  addCard(card: Card): this {
    this.cards.unshift(card);
    return this;
  }

  addCards(cards: Card[]): this {
    cards.forEach((card) => this.addCard(card));
    return this;
  }

  shuffle(): this {
    this.cards.sort(() => Math.random() - 0.5);
    return this;
  }

  drawCard(): Card {
    if (this.cards.length > 0) {
      const card = this.cards.shift()!;
      this.usedCards.unshift(card);
      return card;
    } else {
      throw new Error("Lista de cartas está vazia.");
    }
  }
}
