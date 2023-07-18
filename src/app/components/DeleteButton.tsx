'use client';

import axios from 'axios';
import { useState } from 'react';
import { Button } from './ui/button';

const DeleteButton = () => {
	const [loading, setLoading] = useState(false);

	const handleClick = async () => {
		setLoading(true);
		await axios.delete(`/api/data/${'64b528299ba5d87873b7e3a6'}`);
		setLoading(false);
	};

	return (
		<Button onClick={handleClick} disabled={loading}>
			Delete
		</Button>
	);
};

export default DeleteButton;
