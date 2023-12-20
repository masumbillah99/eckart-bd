import WishList from "@/components/Dashboard/UserDashboard/WishList";

const WishListPage = () => {
  return (
    <section className="md:ml-10 mt-3">
      <h3 className="text-2xl font-bold mb-5">My Wishlist</h3>

      <WishList />
    </section>
  );
};

export default WishListPage;
