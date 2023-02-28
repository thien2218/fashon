export type TMark = "read" | "to-read"| "is-reading" | "dropped";

class BookFragment {
	constructor(
		readonly title: string,
		readonly authors: string[],
		readonly coverUrl: string,
		readonly price: number,
		readonly avgRating: number,
		readonly ratingCount: number,
      readonly genre: string,
      readonly quantity: number,
	) {}

   mark(markType: TMark) {

   }

   borrow() {

   }

   purchase() {

   }
}

export default BookFragment;
