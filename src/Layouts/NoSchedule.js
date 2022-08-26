import React from "react";
import CreateButton from "../Components/CreateButton";
import TextComponent from "../Components/TextComponent";

const NoSchedule = () => {
  return (
    <div style={{ padding: "9.8% 34.64% 22.8%" ,position:'relative'}}>
      <img
        src="https://i.ibb.co/m6n1ZR4/Events-rafiki-1.png"
        alt="Events-rafiki-1"
        className="noschedule-Image"
      />
      <TextComponent
        className="noschedule-Image-Text"
        label="There are no schedules get started by creating schedules"
      />
      <CreateButton/>
    </div>
  );
};

export default NoSchedule;
