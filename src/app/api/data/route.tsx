import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const users = await db.user.findMany();

	return NextResponse.json(users);
}

export async function POST(request: Request) {
	const newUser = await db.user.create({
		data: {
			name: 'Rich',
			email: 'hello@prisma.com',
			age: '100',
			address: {
				city: 'Los Angeles',
				country: 'USA',
				state: 'CA',
				street: '456 Elm St',
			},
		},
	});

	return NextResponse.json(newUser);
}
