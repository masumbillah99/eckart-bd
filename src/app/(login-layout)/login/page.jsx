import LoginForm from "./LoginForm";

export const metadata = { title: "Login | HatBazar" };

const LoginPage = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-10">
      <h1 className="text-2xl font-bold text-center">
        Login to connect with us
      </h1>
      <div className="max-w-xl mx-auto bg shadow-lg border rounded-lg mt-5">
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
