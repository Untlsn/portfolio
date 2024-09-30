const headStackKey = Symbol('headStack') as InjectionKey<{ value: number }>

export function createHeadStack() {
	provide(headStackKey, { value: 0 });
}

export function useHeadStack() {
	const headStack = inject(headStackKey);
	if (!headStack) return 0;
	return headStack.value++;
}

