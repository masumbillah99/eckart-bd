import UserOverview from "@/components/Dashboard/UserDashboard/UserOverview";

const UserOverviewPage = () => {
  return (
    <section className="md:ml-10 mt-3">
      <h3 className="text-2xl font-bold mb-5">Overview</h3>

      <UserOverview />
    </section>
  );
};

export default UserOverviewPage;
