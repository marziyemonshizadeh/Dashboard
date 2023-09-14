import { DevTool } from "@hookform/devtools";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

export default function newUser() {
  useEffect(() => {
    swal({
      title: "لطفا فیلترشکن خود را فعال کنید",
      text: " کاربر عزیز روی دکمه کلیک کنید",
      icon: "warning",
      button: "ok",
    });
  }, []);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });
  console.log("Errors =>", errors);

  const formSubmitting = async (data) => {
    await fetch(
      "https://dashboard-94416-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )
      .then((res) => {
        swal({
          title: "کاربر مورد نظر با موفقیت اضافه شد",
          text: "لطفا رو دکمه کلیک کنید",
          icon: "success",
          button: "ok",
        });
        return res.data;
      })
      .catch((err) => console.log(err));
    console.log("Data =>", data);
  };
  return (
    <div className="text-center px-md-4 py-md-4" style={{ height: "100vh" }}>
      <DevTool control={control} placement="top-left" />

      <h2 className="fw-bold fs-4">کاربر جدید</h2>
      <form
        className="col-lg-6 col-md-5 col-10 mx-auto clearfix"
        onSubmit={handleSubmit(formSubmitting)}
      >
        <div className="d-flex flex-column cart-body gap-2 text-center mt-5">
          <div className="form-floating text-muted">
            <input
              type="text"
              className="form-control form-style"
              id="floatingInput1"
              placeholder="نام کاربری"
              {...register("userName", {
                required: "وارد کردن نام کاربری اجباری می باشد",
                minLength: {
                  value: 3,
                  message: "نام کاربری حداقل باید 3 کاراکتر داشته باشه",
                },
                maxLength: {
                  value: 12,
                  message: "نام کاربری حداکثر باید 12 کاراکتر داشته باشه",
                },
              })}
              style={{ backgroundColor: "#E0E0E0" }}
            />
            <label htmlFor="floatingInput1">نام کاربری</label>
          </div>
          {errors.userName && errors.userName.message}

          <div className="form-floating text-muted">
            <input
              type="text"
              className="form-control form-style"
              id="floatingInput1"
              placeholder="ایمیل"
              style={{ backgroundColor: "#E0E0E0" }}
              {...register("email", {
                required: "وارد کردن ایمیل اجباری می‌باشد",
                minLength: {
                  value: 10,
                  message: "ایمیل حداقل باید 10 کاراکتر داشته باشه",
                },
                maxLength: {
                  value: 30,
                  message: "ایمیل حداکثر باید 30 کاراکتر داشته باشه",
                },
                pattern: {
                  value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                  message: "ایمیل وارد شده معتبر نمی‌باشد",
                },
              })}
            />
            <label htmlFor="floatingInput1">ایمیل</label>
          </div>
          {errors.email && errors.email.message}

          <div className="form-floating text-muted">
            <input
              type="password"
              className="form-control form-style"
              id="password"
              placeholder="رمز"
              style={{ backgroundColor: "#E0E0E0" }}
              {...register("password", {
                required: "وارد کردن پسورداجباری می‌باشد",

                minLength: {
                  value: 3,
                  message: "پسورد حداقل باید 3 کاراکتر داشته باشه",
                },
                maxLength: {
                  value: 12,
                  message: "پسورد حداکثر باید 12 کاراکتر داشته باشه",
                },
              })}
            />
            <label htmlFor="password">رمز</label>
          </div>
          {errors.password && errors.password.message}

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
