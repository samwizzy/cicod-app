import {
  getUserProfile,
  updateUserAsync,
} from "@/store/reducers/profile.slice";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import clsx from "clsx";

const defaultValues = {
  name: "",
  location: "",
  bio: "",
};

function Profile() {
  const dispatch = useDispatch();
  const { user, loading, status } = useSelector(({ profile }) => profile);
  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues,
  });

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("location", user.location);
      setValue("bio", user.bio);
    }
  }, [user, setValue]);

  const onSubmit = (data) => {
    dispatch(updateUserAsync(data));
    reset(null);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-1">{user?.name} Github profile</h2>

      <div className={clsx("success font-bold", { error: status.code })}>
        {status.message}
      </div>

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
          <span>Update</span>
          {loading && <ClipLoader size={16} color="#4CAF50" />}
        </button>
      </form>
    </div>
  );
}

export default Profile;
