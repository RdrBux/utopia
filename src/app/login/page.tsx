import Logo from "../ui/logo";
import LoginForm from "../ui/login/login-form";

export default function Home() {
	return (
		<div className="grid grid-cols-2 min-h-screen">
			<div className="flex flex-col gap-4 items-center justify-center h-full m-4 self-center ml-auto">
				<LoginForm />
			</div>

			<div className="flex flex-col items-center justify-center w-full h-full">
				{/* <iframe className="w-[600px] h-[600px]" src="https://lottie.host/embed/d31b355e-02ec-4411-b28d-1bfeca4f88bb/ah2jU1P5k3.json"></iframe> */}
			</div>
		</div>
	)
}