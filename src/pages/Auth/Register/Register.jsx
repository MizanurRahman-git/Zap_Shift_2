import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    const profileImg = data.image[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        const formData = new FormData();
        formData.append("image", profileImg);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api_key}`;

        axios
          .post(image_API_URL, formData)
          .then((res) => {
            const updateInfo = {
              displayName: data.name,
              photoURL: res.data.data.url,
            };
            updateUserProfile(updateInfo)
              .then((res) => {
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* Name field */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-400">Name is Required</p>
          )}

          {/* image field */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input"
            placeholder="Photo"
          />
          {errors.image?.type === "required" && (
            <p className="text-red-400">Photo is Required</p>
          )}

          {/* email field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-400">Email is Required</p>
          )}

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-400">Password is Required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-400">Password must be 6 digits.</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-400">
              Password will be must at least one uppercase, at least one
              lowercase, at least one number, and at least one special
              character.
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>
          Already have an account.{" "}
          <Link className="text-green-600 underline" to="/login">
            Login
          </Link>
        </p>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Register;
