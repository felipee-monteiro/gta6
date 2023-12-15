import * as HoverCard from "@radix-ui/react-hover-card";
import { IoIosMore } from "react-icons/io";
import CardHeader from "./CardHeader";
import { FaCode } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import Card from "./Card";
import MenuItem from "./MenuItem";

export default function PostCard() {
  return (
    <div className="post-card">
      <div className="post-card-header">
        <CardHeader
          imgSrc={
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/meta-icons/rockstar/favicon-180x180.png"
          }
          title={"Rockstar Games"}
          subtitle={"@RockstarGames"}
        />
        <div className="header-menu-item">
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <button>
                <IoIosMore color="rgba(255, 255, 255, 0.5)" />
              </button>
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content className="HoverCardContent" sideOffset={5}>
                <Card
                  style={{
                    backgroundColor: "black",
                    border: "2px solid white",
                    width: "100%",
                  }}
                  body={() => {
                    return (
                      <>
                        <div style={{ textAlign: "center" }}>
                          <MenuItem
                            icon={<FaCode />}
                            title={"Incorporar Código"}
                          />
                          <MenuItem
                            icon={<IoShareSocial />}
                            title={"Compartilhar"}
                          />
                        </div>
                      </>
                    );
                  }}
                />
                <HoverCard.Arrow className="HoverCardArrow" />
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </div>
      </div>
      <div className="post-content">
        <p>
          We are excited to announce the active development of the next Grand
          Theft Auto.
        </p>
      </div>
      <div className="post-image">
        <iframe
          width="100%"
          height="680"
          src="https://www.youtube.com/embed/QdBZY2fkU-0"
          title="Watch Trailer 1: Tuesday, December 5 at 9AM ET"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        {/* <img
          src="https://pbs.twimg.com/media/GARHvUFWwAAVF9N?format=jpg&name=small"
          width={"100%"}
          alt=""
        /> */}
        <div className="post-image-metadata">
          <a href="#">11 AM 1 de Dezembro de 2023</a>
          &bull;
          <span>134,1mi</span>Visualizações
        </div>
      </div>
    </div>
  );
}
