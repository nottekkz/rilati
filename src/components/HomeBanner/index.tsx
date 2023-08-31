import { Button, Form, Input } from "antd";
import thumbnail1 from "../../assets/images/Homepage.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Environment from "../../network/baseUrl";

import { useSelector } from "react-redux";
import "./HomeBanner.scss";
import { useState } from "react";
import SignUpModal from "../SignUpModal";
import SignInModal from "../SignInModal";

const HomeBanner = () => {
  const [signUpToggle, setSignUpToggle] = useState(false);
  const [signInToggle, setSignInToggle] = useState(false);
  const { isDark = false } = useSelector((store: any) => store.theme);
  const { isLogin = false } = useSelector((storeState: any) => storeState.auth);
  const getUser = localStorage.getItem(Environment.LOCAL_STORAGE_USER_KEY);
  const loginUser = getUser ? JSON.parse(getUser) : null;
  return (
    <div
      className="home-banner position-relative d-flex align-items-center"
      style={{ backgroundImage: `url("${thumbnail1}")` }}
    >
      {/*
      <div className="home-banner__background-video">
         <video
          preload="true"
          autoPlay
          loop
          muted={true}
          playsInline
          controls
          width="500px"
        >
          <source src="./bgVideo.mp4" type="video/mp4" />
          <source src="./bgVideo.ogg" type="video/ogg" />
          Your browser does not support HTML video.
        </video>
      </div>
         */}
      <Container
        className="h-100 d-flex justify-content-center align-self-center"
        fluid
      >
        <Row className="align-self-center w-100  align-items-center ">
          <Col sm={12} md={6} lg={6}>
            <div className="d-flex flex-column justify-content-end h-100">
              {/* <h1 className="title">🌍 Rilati</h1> */}
              <h1 className="title">Rilati</h1>
              <h1 className="desc">
                Your career is a journey, not a destination.
                {/* <br /> Let Rilati guide you */}
              </h1>
              {/* <p className="desc">
                Join a global community of remote workers living and traveling
                around the world
              </p>
              <div className="user-avator">
                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/b9355c2757c6b4741b0f4def87d8a588.jpg?1666719817"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/b9355c2757c6b4741b0f4def87d8a588.jpg?1666719817"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/fd009e31fd649a100dc7f00012c78633.jpg?1556700871"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/fd009e31fd649a100dc7f00012c78633.jpg?1556700871"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/b0a2af7d999f9dd783060e1ad5bb7e7e.jpg?1666722725"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/b0a2af7d999f9dd783060e1ad5bb7e7e.jpg?1666722725"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/edc6e792bc10280f0fc529255fcff680.jpg?1627186954"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/edc6e792bc10280f0fc529255fcff680.jpg?1627186954"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/51728fb342ab30a4ecb939bfba931f39.jpg?1666717749"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/51728fb342ab30a4ecb939bfba931f39.jpg?1666717749"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/f714694d6aa475456cbb9294151d9918.jpg?1666718271"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/f714694d6aa475456cbb9294151d9918.jpg?1666718271"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/548b3c056041a57ee590e57bf70118e2.jpg?1620186768"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/548b3c056041a57ee590e57bf70118e2.jpg?1620186768"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/c3fa607b4dff6c5bec5ffa9c112ed6f6.jpg?1666719416"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/c3fa607b4dff6c5bec5ffa9c112ed6f6.jpg?1666719416"
                />

                <img
                  alt="Nomad List member"
                  width="40"
                  src="https://nomadlist.com/assets/img/users/a5c1f423ee4d878f57da8d71d7ef73bb.jpg?1666716359"
                  height="40"
                  data-src="https://nomadlist.com/assets/img/users/a5c1f423ee4d878f57da8d71d7ef73bb.jpg?1666716359"
                />
              </div> */}
            </div>
          </Col>

          <Col
            sm={12}
            md={6}
            lg={6}
            className="d-md-flex d-none justify-content-center justify-content-md-end mb-4 mb-md-0"
          >
            {!(isLogin || loginUser) && (
              <div className="subcription__form_wrapper d-flex flex-column align-items-center mb-4">
                {/* <img src={thumbnail} className="w-100" /> */}
                <Form>
                  <Form.Item className="my-1 mb-2 my-md-3">
                    <Input placeholder="Type your email...." />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      className="btn btn-primary mb-0 mb-md-3 w-100"
                      onClick={() => setSignUpToggle(true)}
                    >
                      Join Us
                    </Button>
                  </Form.Item>
                  <span>
                    Already Member?
                    <span
                      onClick={() => setSignInToggle(true)}
                      className="cursor-pointer"
                    >
                      {" "}
                      Log In
                    </span>
                  </span>
                </Form>
              </div>
            )}
            <svg
              viewBox="0 0 1440 120"
              className="wave"
              // color={isDark ? "" : "white"}
            >
              <path
                fill={isDark ? "" : "#f5f5f5"}
                d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"
              ></path>
            </svg>
          </Col>
        </Row>
      </Container>

      <SignUpModal
        isModalOpen={signUpToggle}
        handleOk={() => setSignUpToggle(false)}
        handleCancel={() => setSignUpToggle(false)}
        footer={false}
      />
      <SignInModal
        isModalOpen={signInToggle}
        handleOk={() => setSignInToggle(false)}
        handleCancel={() => setSignInToggle(false)}
        footer={false}
      />
    </div>
  );
};

export default HomeBanner;
