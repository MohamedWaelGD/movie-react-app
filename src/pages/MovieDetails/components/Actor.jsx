import React, { useState } from "react";
import { imageUrl } from "../../../services/movieService.js";

const Actor = ({ actor }) => {
  const [actorImage, setActorImage] = useState(imageUrl(actor.profile_path));
  return (
    <div className={"flex flex-col items-center justify-center gap-2"}>
      <img
        src={actorImage}
        alt={actor.name}
        className={"h-[150px] w-[150px] rounded-full object-cover"}
        onError={() => setActorImage("/placeholder.png")}
      />
      <p className={"text-center"}>{actor.name}</p>
    </div>
  );
};

export default Actor;
