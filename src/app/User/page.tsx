"use client";

import Profile from "@/components/Profile";
import { useDatabaseContext } from "@/context/DatabaseContext";
import { useEffect, useState } from "react";
import Loading from "../loading";

export default function User() {
  const { updated, setUpdated } = useDatabaseContext();

  const [posts, setPosts] = useState([
    { description: "", filePath: "", name: "", url: "" },
  ]);

  useEffect(() => {
    const getPosts = async () => {
      if (updated) {
        try {
          const res = await fetch("http://localhost:3000/api/upload");
          const data = await res.json();
          setPosts(data.dbData);
          console.log(data.dbData);
        } catch (error) {
          console.log(error);
        }
        setUpdated(!updated);
      }
    };
    getPosts();
  }, [updated, setUpdated]);

  const data = posts.map((post, index) => {
    return (
      <Profile
        details={false}
        key={index}
        id={index.toString()}
        img={post.filePath}
        desc={post.description}
        name={post.name}
        tags={post.url}
      />
    );
  });
  console.log(data);

  return (
    <div className="text-black m-10">
      <div>
        <h1 className="font-bold text-5xl">Anonymous😋</h1>
      </div>
      <div className="mt-5 mb-5 mr-5">
        <>
          {data[0].props.name === "" ? (
            <p className="mt-16 text-xl ">
              <span className="font-bold">Note:</span> Create some recipes first
              to see them here!👨‍🍳
            </p>
          ) : (
            <>
              <h2 className="text-2xl">Your Recipies</h2>
              <div className="flex flex-wrap">{data}</div>
            </>
          )}
        </>
      </div>
    </div>
  );
}
