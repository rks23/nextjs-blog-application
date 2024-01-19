"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {
  id: string;
  title: string;
  decription: string;
  imageUrl: string;
  userId: string;
  createdAt: string;
  updateAt: string;
  categoryId: string;
  location: string;
};

function getTextFromHtml(html: string) {
  const elm = document.createElement("span");
  elm.innerHTML = html;
  return elm.innerText;
}

const BlogItem = (props: Props) => {
  return (
    <Card className="hover:border-slate-950 duration-500 flex flex-col w-[400px] h-[550px] mx-4 my-2 rounded-lg">
      <CardHeader>
        <Image
          width={400}
          height={100}
          className="h-48 rounded-sm"
          alt={props.title}
          src={
            props.imageUrl ??
            "https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </CardHeader>
      <CardTitle className="p-3 ">{props.title}</CardTitle>
      <CardContent className="w-full text-slate-900">
        <p className="tracking-wide w-full px-2 py-1 text-left">
          {getTextFromHtml(props.decription)}
        </p>
      </CardContent>
      <CardFooter className="w-full h-full p-3">
        <button className="ml-auto mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 hover:text-violet-100 font-semibold duration:500">
          View More
        </button>
      </CardFooter>
    </Card>
  );
};
export default BlogItem;
