import Link from 'next/link';
import PostButton from './api/data/components/PostButton';
import DeleteButton from './api/data/components/DeleteButton';
import PatchButton from './api/data/components/PatchButton';

export default async function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Hello World!</h1>

			<div className="flex gap-4">
				<Link href="/api/data">/api/data</Link>
				<PostButton />
				<DeleteButton />
				<PatchButton />
			</div>
		</main>
	);
}
