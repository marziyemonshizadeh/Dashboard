import { useEffect, useState } from "react";
// import Clock from "react-live-clock";

export default function click() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  console.log(new Date());
  useEffect(() => {
    const id = tick();
    return () => clearTimeout(id);
  }, []);

  const tick = () => {
    return setInterval(() => {
      setTime(() => new Date().toLocaleTimeString());
    }, 1000);
  };
  return (
    <div className="d-flex justify-content-center " style={{ height: "100vh" }}>
      <div
        className="card text-center text-light p-4"
        style={{ maxWidth: "500px", maxHeight: "120px", marginTop: "100px" }}
      >
        {new Date().toDateString()}
        <br />
        <p className="text-light fw-bolder fs-1" dir="ltr">
          {time}
        </p>
      </div>
    </div>
  );
}
