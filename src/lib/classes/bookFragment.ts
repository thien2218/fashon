export type TLabel = "Read" | "To read" | "Is reading" | "Dropped" | null;
export type TStatus =
	| "In use"
	| "Returned"
	| "Extendable"
	| "Expired"
	| "Unavailable for borrow"
	| null;

class BookFragment {
	private extendFeeRate = 0.03;

	constructor(
		readonly bookId: string,
		readonly title: string,
		readonly authors: string[],
		readonly coverUrl: string,
		readonly price: number,
		readonly avgRating: number,
		readonly ratingCount: number,
		readonly genre: string,
		readonly quantity: number,

		private _markDate: Date | null,
		private _label: TLabel,

		private lastBorrowDate: Date | null,
		private _borrowTime: number | null,
		private _extendableTime: number | null,
		private allowBorrow: boolean,
		private _isReturned: boolean = false,
	) {}

	// BORROW ACTIVITY
	get remainingTime(): number {
		// Compute the remaining time by this formula:
		// this.lastBorrowDate + this._borrowTime - currentTime
		// Return remaining time if it's greater than 0
		// Else return 0
		return 0;
	}

	get status(): TStatus {
		return this.allowBorrow
			? "Unavailable for borrow"
			: !this.isReturned && this.remainingTime > 0 && this.lastBorrowDate
			? "In use"
			: this.isReturned && this.remainingTime > 0
			? "Returned"
			: this._extendableTime && this.remainingTime <= 0
			? "Extendable"
			: this._extendableTime == 0
			? "Expired"
			: null;
	}

	get extendFee(): number {
		return this.extendFeeRate * this.price;
	}

	get borrowTime(): number | null {
		return this._borrowTime;
	}

	get extendableTime(): number | null {
		return this._extendableTime;
	}

	get isReturned(): boolean | null {
		return this._isReturned;
	}

	setBorrowTime(newBorrowTime: number) {
		// Update the new borrow time of a book in the database
	}

	setExtendableTime(extendableTime: number) {}

	returnFrom(userId: string) {
		// Set is returned to true
		// Calculate the time remains
		// Set it as new borrow time
	}

	lendTo(userId: string) {
		// Only run if this book is allowed to be borrowed
		// Write the record to the database
		// Set the last borrow date
		// Set the new borrow time
	}

   extendBorrow(userId: string) {}

	// MARK ACTIVITY
	get markDate(): Date | null {
		return this._markDate;
	}

	get label(): TLabel {
		return this._label;
	}

	markBook(userId: string, label: TLabel) {}
}

export default BookFragment;
