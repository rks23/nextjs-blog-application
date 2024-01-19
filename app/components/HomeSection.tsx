import { getAllBlogs } from "@/lib/helpers";
import Image from "next/image";
import BlogItem from "./BlogItem";

const blogs = [
  {
    id: "1",
    title: "First Blog",
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, omnis iusto. Facilis expedita iure doloribus itaque sapiente, soluta exercitationem dicta non unde quasi voluptas commodi, magni nisi vero ipsam pariatur reprehenderit possimus voluptatum explicabo architecto. Possimus eos, repellat dicta distinctio nemo nihil explicabo unde atque nisi quis et sapiente sequi dolor cupiditate qui impedit aliquam voluptas eligendi omnis praesentium earum eaque, quasi reiciendis itaque? Ab amet tempora fuga voluptates aperiam, nulla laudantium quisquam nostrum animi mollitia suscipit laborum sunt quos soluta enim sequi ipsum fugit quod voluptatibus molestiae fugiat minus molestias similique quaerat. Nemo voluptatem, suscipit nihil odio laborum et distinctio, nam dolores hic tempore exercitationem, saepe expedita amet quos ad facere cumque magnam? Quidem delectus dolorem fugit cupiditate beatae vel saepe accusamus sed et blanditiis est alias impedit praesentium, modi reprehenderit, neque qui odio tenetur quis voluptatum dignissimos. Error beatae, hic, repudiandae reiciendis enim harum, in aut facilis labore veritatis placeat cumque minima tempora et dolorem tempore. Libero quasi repellendus illo. Sit consequuntur, ut odio officia, magni iure nisi reiciendis ipsum beatae nihil quas est sapiente iste natus asperiores iusto! Et quas ipsam nostrum adipisci maxime dolorum ducimus cum porro molestias dicta impedit, consequuntur, beatae tempora reprehenderit eaque exercitationem.",
    imageUrl:
      "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userId: "65a4e6af60ddc9a2679805a0",
    createdAt: "2024-01-15T11:09:53.241Z",
    updateAt: "2024-01-15T11:09:53.241Z",
    categoryId: "65a4fed40dfa8a3bd37a158c",
    location: "Ktm, Nepal",
  },
  {
    id: "2",
    title: "First Blog",
    decription: "Hello world, my first blog",
    imageUrl:
      "https://images.unsplash.com/photo-1546074177-ffdda98d214f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userId: "65a4e6af60ddc9a2679805a0",
    createdAt: "2024-01-15T11:09:53.241Z",
    updateAt: "2024-01-15T11:09:53.241Z",
    categoryId: "65a4fed40dfa8a3bd37a158c",
    location: "Ktm, Nepal",
  },
  {
    id: "3",
    title: "First Blog",
    decription: "Hello world, my first blog",
    imageUrl:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userId: "65a4e6af60ddc9a2679805a0",
    createdAt: "2024-01-15T11:09:53.241Z",
    updateAt: "2024-01-15T11:09:53.241Z",
    categoryId: "65a4fed40dfa8a3bd37a158c",
    location: "Ktm, Nepal",
  },
  {
    id: "4",
    title: "First Blog",
    decription: "Hello world, my first blog",
    imageUrl:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userId: "65a4e6af60ddc9a2679805a0",
    createdAt: "2024-01-15T11:09:53.241Z",
    updateAt: "2024-01-15T11:09:53.241Z",
    categoryId: "65a4fed40dfa8a3bd37a158c",
    location: "Ktm, Nepal",
  },
  {
    id: "5",
    title: "First Blog",
    decription: "Hello world, my first blog",
    imageUrl:
      "https://images.unsplash.com/photo-1518976024611-28bf4b48222e?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userId: "65a4e6af60ddc9a2679805a0",
    createdAt: "2024-01-15T11:09:53.241Z",
    updateAt: "2024-01-15T11:09:53.241Z",
    categoryId: "65a4fed40dfa8a3bd37a158c",
    location: "Ktm, Nepal",
  },
  {
    id: "6",
    title: "First Blog",
    decription: "Hello world, my first blog",
    imageUrl:
      "https://images.unsplash.com/photo-1586380951230-e6703d9f6833?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userId: "65a4e6af60ddc9a2679805a0",
    createdAt: "2024-01-15T11:09:53.241Z",
    updateAt: "2024-01-15T11:09:53.241Z",
    categoryId: "65a4fed40dfa8a3bd37a158c",
    location: "Ktm, Nepal",
  },
];

const HomeSection = async () => {
  // const blogs = await getAllBlogs(6);

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
      <hr className="p-3 my-4" />
      <div className="flex flex-col justify-center items-center">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Recent Articles</h2>
        </div>
        <div className="flex w-full flex-wrap justify-center">
          {blogs.map((blog) => (
            <BlogItem key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
