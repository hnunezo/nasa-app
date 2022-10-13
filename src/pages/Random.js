import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLoading, setDate, setMedia } from "../states/page";
import { FaQuestion, FaCalendarDay } from "react-icons/fa";
import ButtonIcon from "../components/stateless/ButtonIcon";

const Random = () => {
  const date = useSelector((state) => state.page.date);
  const media = useSelector((state) => state.page.media);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        date
          ? `https://api.nasa.gov/planetary/apod?api_key=u08v1CMqurAnLVaqhXKSChW3ML3VWtTT93hObPau&date=${date}`
          : "https://api.nasa.gov/planetary/apod?api_key=u08v1CMqurAnLVaqhXKSChW3ML3VWtTT93hObPau"
      )
      .then((response) => {
        dispatch(setMedia(response.data));
        console.log(response);
        dispatch(changeLoading(false));
      })
      .catch(() => dispatch(changeLoading(false)));
  }, [date]); // eslint-disable-line

  const randomDate = () => {
    dispatch(
      setDate(
        `${Math.floor(Math.random() * (2021 - 2015 + 1)) + 2015}-${
          Math.floor(Math.random() * (12 - 1 + 1)) + 1
        }-${Math.floor(Math.random() * (29 - 1 + 1)) + 1}`
      )
    );
  };
  return (
    <div className="container-general">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="borders">
          <h3 className="text-center container-title">{media.title}</h3>
          <div className="container-media">
            <div className="container-img">
              {media.media_type === "video" ? (
                <iframe
                  style={{ height: "90%", width: "90%" }}
                  src={media.url}
                  title={media.title}
                />
              ) : (
                <img src={media.url} alt="xd" className="img" />
              )}
            </div>
            <div className="d-flex flex-column p-4  ">
              <div className="d-flex flex-column align-items-center mb-4">
                {!date ? (
                  <h2>Daily NASA Picture</h2>
                ) : (
                  <h2>Random NASA Picture</h2>
                )}
                <div className="d-flex gap-4">
                  <ButtonIcon
                    onClick={() => randomDate()}
                    label={"Random"}
                    icon={<FaQuestion />}
                  />
                  <ButtonIcon
                    onClick={() => dispatch(setDate(""))}
                    label={"Daily"}
                    icon={<FaCalendarDay />}
                  />
                </div>
              </div>
              <div className="container-text">
                <p>{media.explanation}</p>
                {media.media_type === "video" ? null : (
                  <a href={media.hdurl} target="_blank" rel="noreferrer">
                    <button className="button-general">See HD Version</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Random;
