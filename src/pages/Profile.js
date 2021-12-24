import { getUserAsync, updateProfile } from "@/store/reducers/profile.slice";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const defaultValues = {
  name: "",
  location: "",
  bio: "",
};

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(({ profile }) => profile.user);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  useEffect(() => {
    dispatch(getUserAsync());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("location", user.location);
      setValue("bio", user.bio);
    }
  }, [user, setValue]);

  const onSubmit = (data) => {
    dispatch(updateProfile(data));
    reset(null);
  };

  console.log(errors, "errors");
  console.log(user, "user");

  return (
    <div>
      <h2 className="text-lg font-bold mb-1">{user?.name} Github profile</h2>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="field"
            placeholder="Name"
            {...register("name", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            className="field"
            placeholder="Name"
            {...register("location", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input
            id="bio"
            type="text"
            className="field"
            placeholder="Name"
            {...register("bio", { required: true })}
          />
        </div>

        <button type="submit" className="submit-btn">
          Update
        </button>
      </form>
    </div>
  );
}

export default Profile;
