import React, { useState } from "react";

export default function Question({data}) {
  
    const [active, setActive] = useState("")

    const toggleQuestion = () => {
        setActive(active === "" ? "active" : "")
    }

    return (
    <div onClick={toggleQuestion} className={`q-wrap ${active}`}>
      {data.title}
      <span className={`diff-cat ${data.category}`}>
          {data.category}
      </span>
      <div className="q-content">{data.question} <br/><br/><span className="io-code">{data.io}</span>  </div>
    </div>
  );
}
