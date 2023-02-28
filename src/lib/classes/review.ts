import type Reader from "./reader";

class Review {
	constructor(private _text: string, private _rating: number, private _author: Reader) {}

	get text(): string {
		return this._text;
	}

	get rating(): number {
		return this._rating;
	}

	get author(): Reader {
		return this._author;
	}

	setText(newText: string) {}

	setRating(newRating: number) {}
}

export default Review;
