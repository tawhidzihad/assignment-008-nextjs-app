import LoginPageCompo from "@/components/LoginPageCompo/LoginPageCompo";

export const metadata = {
	title: "Booklend - Login",
	description:
		"Login to your Booklend account and continue borrowing your favorite books.",
};

const LogInPage = () => {
	return (
		<>
			<LoginPageCompo></LoginPageCompo>
		</>
	);
};

export default LogInPage;
