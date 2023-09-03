import React from "react";

export default function newUser() {
  return (
    <div className="text-center px-md-4 py-md-4" style={{ height: "100vh" }}>
      <h2 className="fw-bold fs-4">کاربر جدید</h2>
      <form className="col-lg-6 col-md-5 col-10 mx-auto clearfix">
        <div className="d-flex flex-column cart-body gap-2 text-center mt-5">
          <div className="form-floating text-muted">
            <input
              type="text"
              name="name"
              className="form-control form-style"
              id="floatingInput1"
              placeholder="نام کاربری"
              style={{ backgroundColor: "#E0E0E0" }}
            />
            <label htmlFor="floatingInput1">نام کاربری</label>
          </div>
          <div className="form-floating text-muted">
            <input
              type="email"
              name="email"
              className="form-control form-style"
              id="floatingInput1"
              placeholder="ایمیل"
              style={{ backgroundColor: "#E0E0E0" }}
            />
            <label htmlFor="floatingInput1">ایمیل</label>
          </div>
          <div className="form-floating text-muted">
            <input
              type="password"
              name="password"
              className="form-control form-style"
              id="floatingInput2"
              placeholder="رمز"
              style={{ backgroundColor: "#E0E0E0" }}
            />
            <label htmlFor="floatingInput2">رمز</label>
          </div>

          <button
            type="submit"
            className="btn mt-2 fw-bold"
            style={{ backgroundColor: "#9C27B0", color: "white" }}
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
