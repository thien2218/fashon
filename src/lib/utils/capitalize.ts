export const capitalize = (str: string): string => {
	let capitalized = str[0].toUpperCase();

	for (let i = 1; i < str.length; i++) {
		capitalized += str[i];
	}

	return capitalized;
};
