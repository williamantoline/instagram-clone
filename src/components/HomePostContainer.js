import Icon from "elements/Icon";
import ProfileBadge from "elements/ProfileBadge";
import React from "react";
import Column from "./Column";

import "./HomePostContainer.scss";

import shania_yan from "../assets/img/shania_yan.png";
import ic_info from "../assets/icons/ic_info.svg";
import ic_like from "../assets/icons/ic_like.svg";
import ic_comment from "../assets/icons/ic_comment.svg";
import ic_share from "../assets/icons/ic_share.svg";
import ic_save from "../assets/icons/ic_save.svg";
import ic_sticker from "../assets/icons/ic_sticker.svg";

import Text from "./Text";
import Row from "./Row";
import Link from "elements/Link";

export default function HomePostContainer(props) {
  return (
    <>
      <div className="home-post-container">
        <div className="home-post-container-header">
          <ProfileBadge size={2} className="mr-10" />
          <Column>
            <Text fs={14} fw={600} className="mb-3">
              shaniayanofc
            </Text>
            <Text fs={12} fw={400}>
              Uluwatu
            </Text>
          </Column>
          <Icon className="ml-auto mr-6" img={ic_info} />
        </div>
        <div className="home-post-container-content">
          <img src={shania_yan} />
        </div>
        <div className="home-post-container-body">
          <div className="home-post-container-body-interaction">
            <Row>
              <div className="flex">
                <Icon className="mr-16" img={ic_like} />
                <Icon className="mr-16" img={ic_comment} />
                <Icon img={ic_share} />
              </div>
              <div>
                <Icon img={ic_save} />
              </div>
            </Row>
          </div>
          <div className="home-post-container-body-likes mt-14">
            <Text fs={14} fw={400}>
              Liked by <Link fw={600}>gll.ne</Link> and{" "}
              <Link fw={600}>others</Link>
            </Text>
          </div>
          <div className="home-post-container-body-caption mt-12">
            <Text fs={14} fw={400}>
              <Link fs={14} fw={600}>
                shaniayanofc
              </Link>{" "}
              1..2..3..✨
            </Text>
          </div>
          <div className="home-post-container-body-comment mt-8">
            <Text fs={14} fw={400}>
              <Link>View all 25 comments</Link>
            </Text>
          </div>
          <div className="home-post-container-body-time-translate mt-14">
            <Text fs={10} fw={400}>
              4 DAYS AGO
              <Link className="ml-8" fs={12} fw={600}>
                See Translation
              </Link>
            </Text>
          </div>
        </div>
        <div className="home-post-container-input">
          <Row>
            <div className="flex">
              <Icon img={ic_sticker} />
              <input
                className="ml-12 input"
                placeholder="Add a comment"
              ></input>
            </div>
            <Link fs={14} fw={700}>
              Post
            </Link>
          </Row>
        </div>
      </div>
    </>
  );
}
