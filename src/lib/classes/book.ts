import BookFragment from "./bookFragment";

class Book extends BookFragment {
   constructor(
		title: string,
		authors: string[],
		coverUrl: string,
		price: number,
		avgRating: number,
		ratingCount: number,
      genre: string,
      quantity: number,
      readonly description: string,
      readonly pageCount: number,
      readonly publisher: string,
      readonly publishedYear: number,
      readonly language: string,
      readonly previewLink: string,
      readonly subtitle: string,
   ) {
      super(title, authors, coverUrl, price, avgRating, ratingCount, genre, quantity);
   }
}

export default Book;