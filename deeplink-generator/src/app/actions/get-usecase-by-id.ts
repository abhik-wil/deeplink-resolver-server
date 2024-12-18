"use server";
import { db } from "../../../db";

export async function getUsecaseById(id: string) {
	const usecase = await db.usecase.findUnique({
		where: {
			id,
		},
	});
	return usecase;
}