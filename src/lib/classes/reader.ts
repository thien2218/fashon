type TRole = "free" | "vip" | "admin";

class Cart {
   
}

class Reader {
	constructor(
		private _username: string,
		private _photoUrl: string,
		private _role: TRole,
		private _points: number,
		private _annualGoal: number,
		private _favouriteGenres: string[]
	) {}

	registerMembership(membership: "free" | "vip") {}

	addReview(rating: number, text?: string) {}

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

	setPoints(newPoints: number) {}

	setAnnualGoal(newAnnualGoal: number) {}

	setUsername(newUsername: string) {}

	setPhoto(imgFile: File) {}
}

export default Reader;
