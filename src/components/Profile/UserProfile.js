import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";
import Header from "../Header";

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <Header />
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
