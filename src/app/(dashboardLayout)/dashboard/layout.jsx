import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";

export const metadata = {
  title: "Dashboard | Hat-Bazar",
};

const DashboardLayout = ({ children }) => {
  return (
    <main className="w-full lg:flex relative dark:text-white">
      <div>
        <Sidebar />
      </div>
      <section className="lg:w-[80%] w-full min-h-screen pt-5 px-5 md:pt-10">
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
