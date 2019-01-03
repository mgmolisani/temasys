import React from "react";
import "./App.css";
import Header from "./shared/Header";

import Spinner from "./brand/Spinner";
import { useCreateLayer } from "./hooks/useSetLayer";

const App = () => {
	const modalLayer = useCreateLayer("modal");

	return (
		<div>
			<Header />
			<Spinner />
			{modalLayer}
		</div>
	);
};

export default App;
