import React, { useState } from "react";
import Button from "./components/Button";

const App = () => {

  const yes = ()=>{
    alert("Working")
  }

  const [loading, setLoading] = useState(false)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Button loading={loading} setLoading={setLoading} children="Customizable" onClick={yes}/>
    </div>
  );
};

export default App;
