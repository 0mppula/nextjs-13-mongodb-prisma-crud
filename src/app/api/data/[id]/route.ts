import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
	try {
		const id = params.id;

		const deletedUser = await db.user.delete({
			where: { id },
		});

		return NextResponse.json(deletedUser);
	} catch (error) {
		console.log('error');
	}
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
	try {
		const id = params.id;

		const updatedUser = await db.user.update({
			where: { id },
			data: {
				name: 'Updated Rich',
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

		return NextResponse.json(updatedUser);
	} catch (error) {
		console.log('error');
	}
}
