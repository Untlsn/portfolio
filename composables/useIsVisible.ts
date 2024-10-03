import { useIntersectionObserver } from '@vueuse/core';

export default function useIsVisible() {
	const target = shallowRef<HTMLElement|undefined>();
	const visible = shallowRef(false);

	useIntersectionObserver(target, ([{ isIntersecting }]) => {
		visible.value = isIntersecting;
	});

	return [target, visible] as const;
}