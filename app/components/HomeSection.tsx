import Image from "next/image";

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
        <div className="md:w-2/4 xs:w-3/4 md:mx-2 xs:my-2">
          <Image
            className="w-full rounded-2xl drop-shadow-2xl"
            alt="carousel image"
            width={300}
            height={200}
            src="https://plus.unsplash.com/premium_photo-1682140999442-e9e2a5f55be6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
