const ChainSymbol = Symbol() as InjectionKey<Ref<boolean[]>>;

export function createChain(first = true) {
	const value = ref([first]);
	provide(ChainSymbol, value);
	return value;
}

export function useChain() {
	const data = inject(ChainSymbol);
	if (!data) throw new Error('Chain context is not provided');

	const lengthSnap = data.value.length;
	data.value.push(false);

	return computed({
		get() {
			return data.value[lengthSnap - 1];
		},
		set(value) {
			data.value[lengthSnap] = value;
		},
	});
}
