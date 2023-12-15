import {
  BiBookmarkAlt,
  BiHomeAlt,
  BiListCheck,
  BiLogoTwitter,
  BiMessage,
  BiNotification,
  BiPlus,
  BiSearch,
  BiSolidUserAccount,
} from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
import MenuItem from "./components/MenuItem";
import PostCard from "./components/PostCard";
import Card from "./components/Card";

import { VscAccount } from "react-icons/vsc";
import { BiLogoApple, BiLogoGoogle } from "react-icons/bi";
import Button from "./components/Button";
import CardHeader from "./components/CardHeader";
import PostButton from "./components/PostButton";

function App() {
  return (
    <>
      <div className="container">
        <aside>
          <div className="menu-wrapper">
            <MenuItem
              icon={<BiLogoTwitter color="rgb(29, 161, 242)" />}
              hoverable={false}
            />
            <MenuItem icon={<BiHomeAlt />} title={"Home"} />
            <MenuItem icon={<BiSearch />} title={"Explorar"} />
            <MenuItem icon={<BiNotification />} title={"Notificações"} />
            <MenuItem icon={<BiMessage />} title={"Mensagens"} />
            <MenuItem icon={<BiListCheck />} title={"Listas"} />
            <MenuItem icon={<BiBookmarkAlt />} title={"Bookmarks"} />
            <MenuItem icon={<BiSolidUserAccount />} title={"Comunidades"} />
            <MenuItem icon={<BiLogoTwitter />} title={"Premium"} />
            <MenuItem icon={<VscAccount />} title={"Perfil"} />
            <MenuItem icon={<BiPlus />} title={"Mais"} />
            <PostButton />
          </div>
        </aside>
        <main className="main-content">
          <div className="main-content-header">
            <div className="header-menu-item">
              <button>
                <FiArrowLeft />
              </button>
              <span>Post</span>
            </div>
          </div>
          <div className="posts-container">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </main>
        <aside className="final-content">
          <Card
            title={"Acabou de Chegar ao Twitter ?"}
            subtitle={
              "Inscreva-se para ter sua própria timeline personalizada!"
            }
            body={() => {
              return (
                <div className="card-buttons">
                  <Button
                    text={"Inscreva-se com o Google"}
                    icon={<BiLogoGoogle />}
                  />
                  <Button
                    text={"Inscreva-se com a Apple"}
                    icon={<BiLogoApple size={"1.4rem"} />}
                  />
                  <Button text={"Criar Conta"} />
                </div>
              );
            }}
            footer={() => {
              return (
                <>
                  Ao se inscrever, você concorda com os{" "}
                  <a href="#">Termos de Serviço</a> e a{" "}
                  <a href="#">Política de Privacidade</a>, incluindo o{" "}
                  <a href="#">Uso de Cookies</a>.
                </>
              );
            }}
          />
          <Card
            title={"Pessoas Relevantes"}
            body={() => {
              return (
                <div className="post-card-header">
                  <CardHeader
                    imgSrc={
                      "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/meta-icons/rockstar/favicon-180x180.png"
                    }
                    title={"Rockstar Games"}
                    subtitle={"@RockstarGames"}
                  />
                  <Button text={"Seguir"} />
                </div>
              );
            }}
          />

          <div className="final-content-footer">
            <a href="#">Termos de Serviço</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Política de Cookies</a>
            <a href="#">Acessibilidade</a>
            <a href="#">Informações de Anúncios</a>
            <a href="#">Mais ...&nbsp;&nbsp;&nbsp;</a>
            &copy;2023 Twitter Corp.
          </div>
        </aside>
      </div>
    </>
  );
}

export default App;
