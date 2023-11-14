export const metadata = {
  title: "Dashboard | Hat-Bazar",
};

const DashboardLayout = ({ children }) => {
  <main className="w-full lg:flex relative dark:text-white lg:static">
    <div>Sidebar</div>
    <section className="lg:w-[80%] w-full  min-h-screen  pt-5 px-5  md:pt-10 ">
      {children}
    </section>
  </main>;
};

export default DashboardLayout;
