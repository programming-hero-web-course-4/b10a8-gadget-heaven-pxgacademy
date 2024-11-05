import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Blogs | Gadget Heaven</title>
      </Helmet>
      <section className="pb-16">
        <div className="bg-primary w-full px-5">
          <div className="max-w-7xl mx-auto py-12">
            <div className="text-white text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-semibold mb-2">Statistics</h2>
              <p>
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>Blogs</section>
    </>
  );
};

export default Blogs;
