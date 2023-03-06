import type BookFragment from "./bookFragment";

class BookGroup {
	constructor (private _bookTitlesCount: number, private _bookFragments: BookFragment[]) {}

	get bookTitlesCount(): number {
		return this._bookTitlesCount;
	}

	get books(): BookFragment[] {
		return this._bookFragments;
	}

   setBookTitlesCount(bookTitlesCount: number) {}

   setBooks(books: BookFragment[]) {}

   borrowBatch() {}

   returnBatch() {}

   markBatch() {}
}

export default BookGroup;
