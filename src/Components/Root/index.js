import React, { useState } from "react";
import Card from "../Card";

const users = [
  {
    name: "Tasos Tos",
    job: "Dev",
    text: "vreg regrror reopkrejo gejgeijgo4 erojeiio oj4ijo43g4",
  },
  {
    name: "Eirini Op",
    job: "Dev",
    text: "fregre grggre fekfe fefnoeif43 g43g4g4",
  },
  {
    name: "Dimitris Pa",
    job: null,
    text: "fioere grengoig4 gorfnoif3 4foewifof3",
  },
  {
    name: "Mike Ko",
    job: "Log",
    text: "ferfjer 4fnrefrfe gregrege fefrefer",
  },
];

const Root = () => {
  const [activeUser, setActiveUser] = useState(0);
  return users.map((user, index) =>
    activeUser === index ? (
      <Card
        user={user}
        key={index}
        setActive={setActiveUser}
        activeUser={activeUser}
        usersLength={users.length}
      />
    ) : (
      ""
    )
  );
};

export default Root;
