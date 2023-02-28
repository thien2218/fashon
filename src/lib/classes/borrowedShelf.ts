import BookFragment from "./bookFragment";
import BookGroup from "./bookGroup";

class Borrowed extends BookFragment {
   constructor(
      title: string,
      authors: string[],
      coverUrl: string,
      price: number,
      avgRating: number,
      ratingCount: number,
      genre: string,
      quantity: number,
      private _deadline: Date,
      readonly borrowedDate: Date,
      readonly extendFee: number,
      private _returnDate: Date | null = null
   ) {
      super(title, authors, coverUrl, price, avgRating, ratingCount, genre, quantity);
   }

   computeDaysRemained(): number {
      return 0;
   }

   get deadline(): Date {
      return this._deadline;
   }

   setDeadline(newDeadline: Date) {}

   get returnDate(): Date | null {
      return this._returnDate;
   }

   returnBook() {}
};

class BorrowedShelf extends BookGroup<Borrowed> {
	constructor(
		bookTitlesCount: number,
		bookFragments: Borrowed[]
	) {
		super(bookTitlesCount, bookFragments);
	}

	// getExpiredBooks(): Borrowed[] {

   // }

	// getBorrowingBooks(): Borrowed[] {

	// }

	// getReturnedBooks(): Borrowed[] {

	// }
}

export default BorrowedShelf;
