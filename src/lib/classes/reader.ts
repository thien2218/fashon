export type TRole = "free" | "vip" | "admin";

class Cart {}

class Reader {
	constructor (
		private _username: string,
		private _photoUrl: string,
		private role: TRole,
		private _points: number,
		private _annualGoal: number,
		private _favouriteGenres: string[],
	) {}

	get points(): number {
		return this._points;
	}

	get annualGoal(): number {
		return this._annualGoal;
	}

	get username(): string {
		return this._username;
	}

	get photoUrl(): string {
		return this._photoUrl;
	}

   get favouriteGenres(): string[] {
      return this._favouriteGenres;
   }

	setPoints(newPoints: number) {}

	setAnnualGoal(newAnnualGoal: number) {}

	setUsername(newUsername: string) {}

	setPhoto(imgFile: File) {}

   setFavouriteGenres(favouriteGenres: string[]) {}

	registerMembership(membership: "free" | "vip") {}

	addReview(rating: number, text?: string) {}
}

export default Reader;
