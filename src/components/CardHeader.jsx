import { MdVerified } from "react-icons/md";
import * as HoverCard from "@radix-ui/react-hover-card";
import Button from "./Button";
import Card from "./Card";

export default function CardHeader({ imgSrc, title, subtitle, recursive = true }) {
  return (
    <div className="user-data">
      <HoverCard.Root>
        {recursive ? (
          <HoverCard.Trigger asChild>
            <img
              src={imgSrc}
              width={"40px"}
              height={"40px"}
              className="avatar"
            />
          </HoverCard.Trigger>
        ) : (
          <img src={imgSrc} width={"40px"} height={"40px"} className="avatar" />
        )}
        <HoverCard.Portal>
          <HoverCard.Content className="HoverCardContent" sideOffset={5}>
            <Card
              style={{
                backgroundColor: "black",
                border: "2px solid white",
                maxWidth: "17rem",
                maxHeight: "13rem",
              }}
              body={() => {
                return (
                  <div className="post-card-header">
                    <CardHeader
                      imgSrc={
                        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/meta-icons/rockstar/favicon-180x180.png"
                      }
                      recursive={false}
                      title={"Rockstar Games"}
                      subtitle={"@RockstarGames"}
                    />
                    <p
                      className="card-description"
                      style={{
                        margin: "0",
                        marginBottom: "1rem",
                        fontSize: "1rem",
                      }}
                    >
                      The official home of Rockstar Games on Twitter
                    </p>
                    <div className="popover-content">
                      <div className="popover-content-wrapper">
                        <span>14440</span>&nbsp;{" "}
                        <p className="card-description">Seguindo</p>
                      </div>
                      <div className="popover-content-wrapper">
                        <span>18,4mi</span>&nbsp;{" "}
                        <p className="card-description">Seguidores</p>
                      </div>
                    </div>
                    <Button
                      style={{ marginTop: "0.4rem", width: "100%" }}
                      text={"Seguir"}
                    />
                  </div>
                );
              }}
            />
            <HoverCard.Arrow className="HoverCardArrow" />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
      <div className="user-metadata">
        <h3 className="username">
          {title} <MdVerified color="gold" />
        </h3>
        <p className="description">{subtitle}</p>
      </div>
    </div>
  );
}
