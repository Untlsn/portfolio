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

	return {
		get current() {
			return data.value[lengthSnap - 1];
		},
		finish() {
			data.value[lengthSnap] = true;
		},
	};
}

export function useChainTimeout(ms: number): ComputedRef<boolean> {
	const state = useChain();

	watchEffect(() => {
		if (state.current) setTimeout(state.finish, ms);
	});

	return computed(() => state.current);
}
