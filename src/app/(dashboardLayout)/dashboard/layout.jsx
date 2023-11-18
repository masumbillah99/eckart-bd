import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";

export const metadata = {
  title: "Dashboard | Hat-Bazar",
};

const DashboardLayout = ({ children }) => {
  return (
    <main className="w-full xl:flex relative dark:text-white">
      <section>
        <Sidebar />
      </section>
      <section className="w-full xl:w-[90%] px-5">
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
