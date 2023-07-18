import Link from 'next/link';
import PostButton from './api/data/components/PostButton';
import DeleteButton from './api/data/components/DeleteButton';
import PatchButton from './api/data/components/PatchButton';
import { Button } from '@/ui/button';

export default async function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100 dark:bg-slate-900">
			<h1 className='className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
				Hello World!
			</h1>

			<div className="flex gap-4">
				<Button asChild>
					<Link href="/api/data" target="_blank">
						/api/data
					</Link>
				</Button>

				<PostButton />

				<DeleteButton />

				<PatchButton />
			</div>
		</main>
	);
}
