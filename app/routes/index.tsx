import * as fs from "node:fs";
import { createFileRoute, useRouter } from "@tanstack/solid-router";
import { createServerFn } from "@tanstack/solid-start";
import { Button } from "~/components/ui/button";
import { Badge, badgeVariants } from "~/components/ui/badge";
import {
	TextField,
	TextFieldInput,
	TextFieldLabel,
} from "~/components/ui/text-field";

const filePath = "count.txt";

async function readCount() {
	return Number.parseInt(
		await fs.promises.readFile(filePath, "utf-8").catch(() => "0"),
	);
}

const getCount = createServerFn({
	method: "GET",
}).handler(() => {
	return readCount();
});

const updateCount = createServerFn({ method: "POST" })
	.validator((d: number) => d)
	.handler(async ({ data }) => {
		const count = await readCount();
		await fs.promises.writeFile(filePath, `${count + data}`);
	});

export const Route = createFileRoute("/")({
	component: Home,
	loader: async () => await getCount(),
});

function Home() {
	const router = useRouter();
	const state = Route.useLoaderData();

	return (
		<div class="flex flex-col items-center justify-center h-screen gap-2">
			<Button>Hello World!</Button>
			<Badge variant="default">times</Badge>
			<Badge variant="warning" round>
				times
			</Badge>
			<TextField class="grid w-full max-w-sm items-center gap-2">
				<TextFieldLabel for="email">البريد الإلكتروني</TextFieldLabel>
				<TextFieldInput
					type="email"
					id="email"
					placeholder="email@example.com"
					dir="ltr"
				/>
			</TextField>
			<Button>تسجيل الدخول</Button>
		</div>
	);
}
