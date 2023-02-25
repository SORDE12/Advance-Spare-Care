import React, { useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);


  setTimeout(() => {
    setLoading(false);
  }, "2000");

  if (loading) {
    return (
      <div>
        <img
          style={{ width: "50%", margin: "auto" }}
          src="https://miro.medium.com/max/1400/1*tgeDQa6FqQ4XU7WhKUD_Xw.gif"
          alt=""
        />
      </div>
    );
  } else {
    return (
      <div>
        <img
          style={{ width: "50%", margin: "auto" }}
          src="https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif"
          alt=""
        />
      </div>
    );
  }
}
