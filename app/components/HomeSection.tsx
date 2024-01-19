const HomeSection = () => {
  return (
    <section className="w-full my-4">
      <div className="w-full flex xs:flex-col md:flex-row justify-center items-center">
        <div className="p-8 w-3/4 flex flex-col gap-3">
          <p className="tracking-wide lg:text-6xl md:text-3xl xs:text-2xl sm:text-2xl font-semibold md:w-2/4 xs:w-4/4 text-start text-gray-900">
            Learn from the best, and become the best
          </p>
          <p className="tracking my-2 md:text-2xl xs:text-md font-semibold md:w-3/4 xs:w-full text-start text-gray-900">
            Learn it by doing it for FREE with practical step by step Series and
            Articles
          </p>
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
