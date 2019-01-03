import { useEffect, useMemo, useState } from "react";

export const useMedia = query => {
	const mediaQueryList = useMemo(
		() => {
			return window.matchMedia(query);
		},
		[query]
	);

	const [matches, setMatches] = useState(mediaQueryList.matches);

	useEffect(
		() => {
			const newMatches = mediaQueryList.matches;

			if (newMatches !== matches) {
				setMatches(newMatches);
			}

			const handleMediaQuery = event => {
				setMatches(event.matches);
			};

			mediaQueryList.addListener(handleMediaQuery);

			return () => {
				mediaQueryList.removeListener(handleMediaQuery);
			};
		},
		[mediaQueryList]
	);

	return matches;
};
