"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

import * as Bi from "react-icons/bi";
import PostOptions from "./components/post-options/post-options.component";
import { PostProps } from "./post.types";
import DeleteModal from "../delete-modal/delete-modal.component";

function Post({
  handleDeleteModal,
  text,
  image,
  name,
  isMyPost,
  deleteModalMessage,
  showDeleteModal,
  isLoadingDeletePost,
  handleDelete,
  handleCancel,
}: PostProps) {
  const { data: session } = useSession();
  const [isLiked, setIsLiked] = React.useState<boolean>(false);
  const [showOptions, setShowOptions] = React.useState<boolean>(false);
  return (
    <>
      {
        <DeleteModal
          handleCancel={handleCancel}
          handleDelete={handleDelete}
          showDeleteModal={showDeleteModal}
          message={deleteModalMessage}
          isLoading={isLoadingDeletePost}
        />
      }
      <div
        className="
    w-full
    h-auto
    border
   border-[#d0d0d0]
    border-opacity-50
    shadow-md
    rounded-lg
    flex
    items-center
    justify-center
    flex-col
    p-4
    gap-6
    animate-fade-up
    "
        onClick={() => { if (showOptions) setShowOptions(!showOptions) }}
      >
        <div className="w-full flex items-center justify-items-start gap-4 my-2 border-b pb-5 border-[#d0d0d0]">
          {session?.user?.image && (
            <Image
              src={image || ""}
              blurDataURL={image || ""}
              width={30}
              height={30}
              priority={true}
              alt="use-profile"
              className="rounded-full"
            />
          )}
          <span className="text-sm font-medium">{name}</span>

          <PostOptions
            handleDeleteModal={handleDeleteModal}
            showOptions={showOptions}
            handleShowOptions={setShowOptions}
            isMyPost={isMyPost}
          />
        </div>
        <div className="w-full flex items-start justify-items-start">
          <p className="text-sm font-medium">{text}</p>
        </div>
        {/* <div className="relative w-full h-96">
        <Image
          src={
            "https://raw.githubusercontent.com/matheus98rocha/prime-flix/master/public/readme/home.png"
          }
          blurDataURL={
            "https://raw.githubusercontent.com/matheus98rocha/prime-flix/master/public/readme/home.png"
          }
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="post-image"
          placeholder="blur"
        />
      </div> */}
        <div className="w-full flex items-center justify-around my-2 border-t pt-5 border-[#d0d0d0]">
          {isLiked ? (
            <Bi.BiSolidLike
              className="hover:cursor-pointer animate-jump text-primary"
              size={25}
              onClick={() => setIsLiked(false)}
            />
          ) : (
            <Bi.BiLike
              className="hover:cursor-pointer animate-jump"
              size={25}
              onClick={() => setIsLiked(true)}
            />
          )}
          {/* <Bi.BiCommentAdd className="hover:cursor-pointer" size={25} />
        <Bi.BiShare className="hover:cursor-pointer" size={25} />
        <Bi.BiSend className="hover:cursor-pointer" size={25} /> */}
        </div>
      </div>
    </>
  );
}

export default Post;