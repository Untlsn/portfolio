type ZipNamed<T extends Record<string, unknown[]>> = {
	[K in keyof T]: T[K][number]
}[];

export function zipNamed<T extends Record<string, unknown[]>>(values: T): ZipNamed<T> {
	const entries = Object.entries(values);

	return entries[0][1].map((_, i) => {
		const res: any = {};
		entries.forEach(([key, arr]) => {
			res[key] = arr[i];
		});

		return res;
	});
}
