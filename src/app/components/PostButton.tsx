'use client';

import axios from 'axios';
import { useState } from 'react';
import { Button } from './ui/button';

const PostButton = () => {
	const [loading, setLoading] = useState(false);

	const handleClick = async () => {
		setLoading(true);
		await axios.post('/api/data');
		setLoading(false);
	};

	return (
		<Button onClick={handleClick} disabled={loading}>
			Post
		</Button>
	);
};

export default PostButton;
