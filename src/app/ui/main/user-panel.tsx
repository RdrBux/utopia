import { auth } from "@/auth/lucia";
import { redirect } from "next/navigation";
import * as context from "next/headers";
import Form from "../form";

export default async function UserPanel() {
	const authRequest = auth.handleRequest("GET", context);
	const session = await authRequest.validate();
	if (!session) redirect("/login");
	return (
		<aside className="flex flex-col gap-6 bg-card h-fit">
			<>
				<h1>Profile</h1>
				<p>User id: {session.user.userId}</p>
				<p>Email: {session.user.email}</p>
				<Form action="/api/logout">
					<input type="submit" value="Sign out" />
				</Form>
			</>
			{/* <img className="rounded-full self-center w-24 h-24" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile picture" />
			<div className="text-center -mt-3">
				<h5 className="mb-1 text-xl font-medium">Juan Pérez</h5>
				<div className="text-sm text-gray-500">Visual Designer</div>
			</div>
			<h5 className="text-xl font-bold leading-none mt-3">Progreso esta semana</h5>
			<div className="p-4 rounded-lg bg-primary-100 border border-primary-300 text-primary-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam ut quod quo aperiam eaque maiores.</div>
			<div className="p-4 rounded-lg bg-primary-100 border border-primary-300 text-primary-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam ut quod quo aperiam eaque maiores.</div> */}
		</aside>
	)
}