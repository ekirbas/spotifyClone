import React, { useState } from "react";
import { Icon } from "../Icons";

const userData = {
  name: "Emre Kırbaş",
  image:
    "https://media.licdn.com/dms/image/D4D03AQEZvmZtgupNVA/profile-displayphoto-shrink_800_800/0/1662129409840?e=2147483647&v=beta&t=wSeexRLA_0c2D2MJPBKzthZIa1o4Z-CfI8S4QbTC6Hs",
};

function ActiveAccount() {
  const [accountMenu, setAccountMenu] = useState(false);
  return (
    <div className="userAccountContainer">
      <button
        className="userBorderButton"
        onClick={() => {
          setAccountMenu(!accountMenu);
        }}
      >
        <img className="userAvatar" src={`${userData.image}`} />
        <span className="userNameTxt">{userData.name}</span>
        <span className="arrowBottom">
          <Icon name="arrowBottom" />
        </span>
      </button>
      {
        //AccountMenu
        accountMenu ? (
          <div className="accountMenu">
            <ul>
              <li>
                <div
                  className="accountMenuOption"
                  target={"_blank"}
                  onClick={() => window.open("https://www.google.com")}
                >
                  Hesap
                  <span>
                    <Icon name="toLink" />
                  </span>
                </div>
              </li>
              <li>
                <div className="accountMenuOption">Profil</div>
              </li>
              <li>
                <div
                  className="accountMenuOption"
                  target={"_blank"}
                  onClick={() => window.open("https://www.google.com")}
                >
                  Premium'a Yükselt
                  <span>
                    <Icon name="toLink" />
                  </span>
                </div>
              </li>
              <li>
                <div className="accountMenuOption">Oturumu kapat</div>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )
      }
    </div>
  );
}

export default ActiveAccount;
