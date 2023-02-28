class BookGroup<T> {
	constructor(private _bookTitlesCount: number, private _bookFragments: T[]) {}

	get bookTitlesCount(): number {
		return this._bookTitlesCount;
	}

	get books(): T[] {
		return this._bookFragments;
	}
}

export default BookGroup;
