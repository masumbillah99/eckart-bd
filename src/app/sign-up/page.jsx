import SignUpForm from "./SignUpForm";

export const metadata = { title: "SignUp | HatBazar" };

const SignUpPage = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-10">
      <h1 className="text-2xl font-bold text-center">Sign up in our website</h1>
      <div className="max-w-xl mx-auto bg shadow-lg rounded-lg">
        <SignUpForm />
      </div>
    </section>
  );
};

export default SignUpPage;
