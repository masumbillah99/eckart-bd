import ProfileSetting from "@/components/Dashboard/ProfileSetting/ProfileSetting";

const UserProfilePage = () => {
  return (
    <section className="md:ml-10 mt-3">
      <h3 className="text-2xl font-bold mb-5">My Orders</h3>

      <ProfileSetting />
    </section>
  );
};

export default UserProfilePage;
