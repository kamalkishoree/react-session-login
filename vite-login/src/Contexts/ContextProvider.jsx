import React, { createContext, useContext, useState } from "react";

const stateContext = createContext({
  currentUser: {},
  userToken: " ",
  setCurrentUser: () => {},
  SetUserToken: () => {},
});

const tmpSurveys = [
  {
    id: 1,
    image_url: "https://api.your surveys.xyz/images/vJutXzn02CDwdOyh.png",
    title: "TheCodeholic YouTube channel",
    slug: "thecodeholic-youtube-channel",
    status: true,
    description:
      "My name is Zura.<br>I am Web Developer with 9+ years of experience, free educational content creator, CTO, Lecturer and father of two wonderful daughters.<br><br>The purpose of the  channel is to share my several years of experience with beginner developers.<br>Teach them what I know  and make my experience as a lesson for others.",
    created_at: "2022-01-07 13:23:41",
    updated_at: "2022-01-18 16:34:19",
    expire_date: "2022-01-23",
    questions: [
      {
        id: 15,
        type: "text",
        question: "From which country are you?",
        description: null,
      },
      {
        id: 16,
        type: "checkbox",
        question: "Which language videos do you want to see on my channel?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earumeos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat raesentium quae quos ratione, recusandae totam velit!",
        data: {
          options: [
            {
              uuid: "8ee03188-9e7e-44e5-9176-7574c0beec6f",
              text: "JavaScript",
            },
            {
              uuid: "fe9497f2-8f05-4c82-9586-26e36736fa9e",
              text: "PHP",
            },
          ],
        },
      },
    ],
  },
];

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });
  const [userToken, SetUserToken] = useState("");

  return (
    <>
      <stateContext.Provider
        value={{
          currentUser,
          setCurrentUser,
          userToken,
          SetUserToken,
        }}
      >
        {children}
      </stateContext.Provider>
      ;
    </>
  );
};
export default ContextProvider;
export const useStateContext = () => useContext(stateContext);
