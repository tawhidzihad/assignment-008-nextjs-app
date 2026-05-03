import RegisterPageCompo from "@/components/RegisterPageCompo/RegisterPageCompo";

export const metadata = {
	title: "Booklend - Register",
	description:
		"Create your Booklend account to borrow books, manage your collection, and explore new reads.",
};

const RegisterPage = () => {
	return (
		<>
			<RegisterPageCompo></RegisterPageCompo>
		</>
	);
};

export default RegisterPage;
