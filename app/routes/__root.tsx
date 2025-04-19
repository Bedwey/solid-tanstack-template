import {
	Outlet,
	createRootRoute,
	HeadContent,
	Scripts,
} from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";

import "@unocss/reset/tailwind-compat.css";
import "virtual:uno.css";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charset: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<div dir="rtl">
				<Outlet />
				<TanStackRouterDevtools />
			</div>
		</>
	);
}
