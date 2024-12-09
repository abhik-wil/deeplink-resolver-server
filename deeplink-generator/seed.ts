import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
	const template = await prisma.template.create({
		data: {
			name: "Example Template",
			description: "This is an example template",
			value: {
				context: {
					domain: "ONDC:RET10",
					action: "search",
					country: { filler: "pg", type: "string" },
					city: { filler: "pg", type: "string" },
					core_version: "1.2.0",
					bap_id: { filler: "pg", type: "string" },
					bap_uri: { filler: "pg", type: "string" },
					transaction_id: { filler: "pg", type: "string" },
					message_id: { filler: "pg", type: "string" },
					timestamp: { filler: "pg", type: "string" },
					ttl: "PT30S",
				},
				message: {
					intent: {
						item: {
							descriptor: {
								name: { filler: "user", type: "string" },
							},
						},
						fulfillment: {
							type: "Delivery",
							end: {
								location: {
									gps: { filler: "pg", type: "string" },
									address: {
										area_code: { filler: "pg", type: "string" },
									},
								},
							},
						},
						payment: {
							"@ondc/org/buyer_app_finder_fee_type": {
								filler: "user",
								type: "string",
							},
							"@ondc/org/buyer_app_finder_fee_amount": {
								filler: "user",
								type: "string",
							},
						},
						tags: [
							{
								code: "source_id",
								Value: { filler: "user", type: "string" },
							},
						],
					},
				},
			},
			templateStage: "SUBMITTED",
		},
	});

	const usecase = await prisma.usecase.create({
		data: {
			name: "Example Usecase",
			usecaseStage: "SUBMITTED",
			templateId: template.id,
			value: {
				context: {
					domain: "ONDC:RET10",
					action: "search",
					country: { filler: "pg", type: "string" },
					city: { filler: "pg", type: "string" },
					core_version: "1.2.0",
					bap_id: { filler: "pg", type: "string" },
					bap_uri: { filler: "pg", type: "string" },
					transaction_id: { filler: "pg", type: "string" },
					message_id: { filler: "pg", type: "string" },
					timestamp: { filler: "pg", type: "string" },
					ttl: "PT30S",
				},
				message: {
					intent: {
						item: {
							descriptor: {
								name: "XYZ-item-name",
							},
						},
						fulfillment: {
							type: "Delivery",
							end: {
								location: {
									gps: { filler: "pg", type: "string" },
									address: {
										area_code: { filler: "pg", type: "string" },
									},
								},
							},
						},
						payment: {
							"@ondc/org/buyer_app_finder_fee_type": "percent",
							"@ondc/org/buyer_app_finder_fee_amount": "0",
						},
						tags: [
							{
								code: "source_id",
								value: "3a87b1c8-9d07-474b-ab25-9909735ecbef", // auto generated when deeplink is created
							},
						],
					},
				},
			},
		},
	});
  console.log("Seeded Template", template);
  console.log("Seeded Usecase", usecase);
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
