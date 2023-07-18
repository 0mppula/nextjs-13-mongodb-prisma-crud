'use client';

import axios from 'axios';
import { useState } from 'react';
import { Button } from './ui/button';

const PatchButton = () => {
	const [loading, setLoading] = useState(false);

	const handleClick = async () => {
		setLoading(true);
		await axios.patch(`/api/data/${'64b65d577333f1bec28fe01b'}`);
		setLoading(false);
	};

	return (
		<Button onClick={handleClick} disabled={loading}>
			Patch
		</Button>
	);
};

export default PatchButton;
