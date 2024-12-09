import { publishTemplate } from "@/app/actions";
import { CustomTextArea } from "@/app/components";
import {
	Button,
	MenuItem,
	Paper,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { TemplateStage } from "@prisma/client";
import Form from "next/form";
import { redirect } from "next/navigation";
import React from "react";

const PublishTemplatePage = async ({
	params,
}: {
	params: { templateId: string };
}) => {
	const templateId = (await params).templateId;
	const handleFormSubmit = async (formData: FormData) => {
		"use server";
		await publishTemplate(templateId, formData);
		redirect("/");
	};
	return (
		<>
			<Typography variant="h2" sx={{ my: 2 }} align="center">
				Customize Template
			</Typography>
			<Form action={handleFormSubmit} formMethod="POST">
				<Paper elevation={4} sx={{ p: 2 }}>
					<Stack direction="row">
						<Typography>Template ID:</Typography>
						<Typography>{templateId}</Typography>
					</Stack>
					<Stack direction="row" my={2}>
						<Typography>Template Name:</Typography>
						<TextField name="templateName" placeholder="Template Name" />
					</Stack>
					<Stack direction="row" my={2}>
						<Typography>Template Description:</Typography>
						<CustomTextArea
							name="templateDescription"
							placeholder="Template Description"
						/>
					</Stack>
					<Stack direction="row">
						<Typography>Push to:</Typography>
						<Select
							name="submissionOption"
							defaultValue={TemplateStage.PUBLISHED}
						>
							<MenuItem value={TemplateStage.SUBMITTED}>Keep Private</MenuItem>
							<MenuItem value={TemplateStage.PUBLISHED}>
								Publish to GitHub
							</MenuItem>
						</Select>
					</Stack>
				</Paper>
				<Button type="submit" variant="contained" sx={{ my: 2 }}>
					Submit
				</Button>
			</Form>
		</>
	);
};

export default PublishTemplatePage;
