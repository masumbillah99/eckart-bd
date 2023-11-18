"use client";

import AdminDashboard from "@/components/Dashboard/AdminDash/AdminDashboard";
import UserDashboard from "@/components/Dashboard/UserDash/UserDashboard";
import useAuth from "@/hooks/useAuth";

const DashboardPage = () => {
  const { user, role } = useAuth();

  return (
    <section>
      {user && role === "admin" ? (
        <section>
          <AdminDashboard />
        </section>
      ) : (
        <section>
          <UserDashboard />
        </section>
      )}
    </section>
  );
};

export default DashboardPage;
