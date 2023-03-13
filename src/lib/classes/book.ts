import BookFragment, { type TLabel } from "./bookFragment";

class Book extends BookFragment {
	constructor (
      bookId: string,
		title: string,
		authors: string[],
		coverUrl: string,
		price: number,
		avgRating: number,
		ratingCount: number,
		genre: string,
		quantity: number,
      allowBorrow: boolean,
      
		readonly description: string,
		readonly pageCount: number,
		readonly publisher: string,
		readonly publishedYear: number,
		readonly language: string,
		readonly previewLink: string,
		readonly subtitle: string,
      
      markDate: Date | null,
      label: TLabel,

      lastBorrowDate: Date | null,
      borrowTime: number | null,
      extendableTime: number,
      isReturned: boolean = false,
   ) {
		super(
         bookId,
			title,
			authors,
			coverUrl,
			price,
			avgRating,
			ratingCount,
			genre,
			quantity,
         allowBorrow,

         markDate,
         label,
         
         lastBorrowDate,
         borrowTime,
         extendableTime,
         isReturned,
		);
	}

   // get authorWikiLinks(): Array<string> {}
}

export default Book;