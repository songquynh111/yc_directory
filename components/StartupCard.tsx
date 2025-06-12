/* eslint-disable react/jsx-no-comment-textnodes */
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, 'author'> & {author?: Author}

export default function StartupCard({ post }: { post: StartupTypeCard }) {
  const {
    _id,
    _createdAt,
    views,
    author,
    category,
    title,
    description,
    image,
  } = post;
  return (
    <li key={_createdAt} className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary"></EyeIcon>
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={"https://placehold.co/48x48"}
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          ></Image>
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup_card_desc">{description}</p>
        <img src={image} alt="placeholder" className="startup-card_img" />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`} className="text-14-medium">
        <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
            <Link href={`/startup/${_id}`}>View Pitch</Link>
        </Button>
      </div>
    </li>
  );
}
