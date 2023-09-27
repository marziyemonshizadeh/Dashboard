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
    <div className="d-flex justify-content-center ">
      <div
        className="card text-center text-light p-md-4"
        style={{ maxWidth: "300px", height: "100vh" }}
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
