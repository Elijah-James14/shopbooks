import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="flex w-full dark:text-white">
      <div className="w-1/2 m-auto">
        <h1 className="font-bold text-3xl mb-5 ml-2">
          The Ultimate Ebook Store
        </h1>

        <p className="block mb-8 ml-2 text-lg">
          CodeBook is the world's most popular and authoritative source for
          computer science ebooks. Find ratings and access to the newest books
          digitally.
        </p>
        <Link to="/products" className="">
          <span className="bg-blue-600 rounded p-3 text-white font-bold ml-2 ">
            Explore Books
          </span>
        </Link>
      </div>
      <div className="w-1/2 mt-5 mr-2 ml-3">
        <img
          className="rounded"
          src="https://images.pexels.com/photos/9969255/pexels-photo-9969255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Study Set"
        />
      </div>
    </section>
  );
};

export default HeroSection;
