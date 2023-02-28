import BookFragment, { type TMark } from "./bookFragment";
import BookGroup from "./bookGroup";

class Marked extends BookFragment {
	constructor(
		title: string,
		authors: string[],
		coverUrl: string,
		price: number,
		avgRating: number,
		ratingCount: number,
		genre: string,
		quantity: number,
		private _markedDate: Date,
		private _markedAs: TMark
	) {
		super(title, authors, coverUrl, price, avgRating, ratingCount, genre, quantity);
	}

	get markedDate(): Date {
		return this._markedDate;
	}

	setMarkedDate(newMarkedDate: Date): void {}

	get markedAs(): string {
		return this._markedAs;
	}

	setMarkedAs(newMarkedAs: string): void {}
}

class MarkedShelf extends BookGroup<Marked> {
	constructor(bookTitlesCount: number, markedBooks: Marked[]) {
		super(bookTitlesCount, markedBooks);
	}

	// getToReadBooks(): Marked[] {

	// }

	// getReadBooks(): Marked[] {

	// }

	// getReadingBooks(): Marked[] {

	// }

	// getDroppedBooks(): Marked[] {

	// }
}

export default MarkedShelf;
