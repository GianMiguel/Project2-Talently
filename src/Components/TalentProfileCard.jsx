import React from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import * as Helpers from "../Helpers/helpers";

export default function TalentProfileCard(props) {
  const user = props.currentUser.profileCard;

  const [displayEdit, setDisplayEdit] = React.useState(false);
  const [profileInfo, setProfileInfo] = React.useState({
    profileFirstName: user.profileFirstName,
    profileLastName: user.profileLastName,
    profileJobTitle: user.profileJobTitle,
    profileEmail: user.profileEmail,
    profileLinkedIn: user.profileLinkedIn,
    profileWebsite: user.profileWebsite,
    profileSkills: user.profileSkills,
    profileBio: user.profileBio,
    profileExperience: user.profileExperience,
    profileImage: user.profileImage,
  });
  const [formError, setFormError] = React.useState({
    hasError: false,
    msg: "",
  });
  const [formSuccess, setFormSuccess] = React.useState({
    hasSuccess: false,
    msg: "",
  });
  // const [selectedFile, setSelectedFile] = React.useState();
  // const [isFilePicked, setIsFilePicked] = React.useState(false);

  function showEditForm(e) {
    e.preventDefault();
    setDisplayEdit(true);
    setFormSuccess({
      hasSuccess: false,
      msg: "",
    });
  }

  function closeEditForm(e) {
    e.preventDefault();
    setDisplayEdit(false);
    setFormError({
      hasError: false,
      msg: "",
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    // Validation
    if (
      profileInfo.profileFirstName === "" ||
      profileInfo.profileLastName === "" ||
      profileInfo.profileJobTitle === "" ||
      profileInfo.profileEmail === "" ||
      profileInfo.profileLinkedIn === "" ||
      profileInfo.profileWebsite === "" ||
      profileInfo.profileBio === ""
    ) {
      return setFormError({
        hasError: true,
        msg: "Form Text Fields cannot be blank",
      });
    }
    if (
      profileInfo.profileBio.length < 60 ||
      profileInfo.profileBio.length > 150
    ) {
      return setFormError({
        hasError: true,
        msg: "Your profile bio must be at least 60 characters and below 150 characters",
      });
    }

    if (
      profileInfo.profileExperience < 0 ||
      profileInfo.profileExperience > 100
    ) {
      return setFormError({
        hasError: true,
        msg: "Please enter a valid number for years of experience",
      });
    }
    // VALIDATION FOR PICTURE TURNED OFF TEMPORARILY
    // if (!isFilePicked) {
    //   return setFormError({
    //     hasError: true,
    //     msg: "Please upload your profile picture",
    //   });
    // }
    if (profileInfo.profileSkills.length === 0) {
      return setFormError({
        hasError: true,
        msg: "Please select at least 1 field of expertise",
      });
    }
    // UPLOAD IMAGE - TEMPORARILY UNAVAILABLE - USE PLACEHOLDER IMAGE INSTEAD
    // setProfileInfo((prevProfileInfo) => ({
    //   ...prevProfileInfo,
    //   profileImage: "placeholder-image.png",
    // }));

    // SEND DATA TO APP
    props.handleTalentEdit(props.currentUser.id, profileInfo);
    // CLEAR ERROR
    setFormError({
      hasError: false,
      msg: "",
    });
    // SET SUCCESS
    setFormSuccess({
      hasSuccess: true,
      msg: "Profile updated!",
    });
    // CLOSE EDIT DISPLAY
    setDisplayEdit(false);
  }

  function handleTextInputChange(e) {
    const { name, value } = e.target;
    setProfileInfo((prevProfileInfo) => ({
      ...prevProfileInfo,
      [name]: value,
    }));
  }

  // function handleImgUpload(e) {
  //   setSelectedFile(e.target.files[0]);
  //   setIsFilePicked(true);
  //   setProfileInfo((prevProfileInfo) => ({
  //     ...prevProfileInfo,
  //     profileImg: e.target.files[0].name,
  //   }));
  //   // PREVIEW IMAGE
  // }

  function handleFilterBox(e) {
    if (e.target.checked === true) {
      setProfileInfo((prevProfileInfo) => ({
        ...prevProfileInfo,
        profileSkills: [...prevProfileInfo.profileSkills, e.target.name],
      }));
    }
    if (e.target.checked === false) {
      let newSkills = profileInfo.profileSkills.filter(
        (skill) => e.target.name !== skill
      );

      setProfileInfo((prevProfileInfo) => ({
        ...prevProfileInfo,
        profileSkills: newSkills,
      }));
    }
  }

  return (
    <div className={`talent--card ${displayEdit && "talent--card--expanded"}`}>
      <div
        className={`talent--card--background ${
          displayEdit && "talent--card--expanded"
        }`}
      >
        <span>
          <BsFillBookmarkStarFill className="talent--connected" />
        </span>
      </div>
      <div className="talent--image--wrapper">
        <img
          src={require(`../images/${
            user.profileImage || "placeholder-image.png"
          }`)}
          alt={user.profileFirstName}
        />
      </div>
      {!displayEdit ? (
        <>
          {props.currentUser.profileActivated ? (
            <div className="talent--card--info">
              <div className="talent--card--header">
                <h4 className="talent--card--name">
                  {Helpers.fullNameFormatter(
                    user.profileFirstName,
                    user.profileLastName
                  )}
                </h4>
                <h4 className="talent--card--role">
                  {Helpers.textFormatter(user.profileJobTitle)}
                </h4>
                <h4 className="talent--card--website">
                  {Helpers.textFormatter(user.profileWebsite)}
                </h4>
              </div>
              <div className="talent--card--button--wrapper">
                <button className="talent--card--btn talent--card--btn--email">
                  <span className="talent--card--btn--logo">
                    <img
                      src={require(`../images/email.png`)}
                      alt="email logo"
                    />
                  </span>
                  Email
                </button>
                <button className="talent--card--btn talent--card--btn--linkedin">
                  <span className="talent--card--btn--logo">
                    <img
                      src={require(`../images/linkedin.png`)}
                      alt="LinkedIn logo"
                    />
                  </span>
                  LinkedIn
                </button>
              </div>
              <div className="talent--card--experience--wrapper">
                <p>
                  <span className="talent--card--experience">
                    {user.profileExperience === 0
                      ? "Entry-level and job ready"
                      : `${user.profileExperience} year${
                          user.profileExperience === 1 ? "" : "s"
                        } of experience`}
                  </span>
                </p>
              </div>
              <div className="talent--card--about--wrapper">
                <h4 className="talent--card--about--header">About</h4>
                <p className="talent--card--about">{user.profileBio}</p>
              </div>

              <h4 className="talent--card--fields--header">
                Field{user.profileSkills.length === 1 ? "" : "s"}
              </h4>
              <div className="talent--card--fields--wrapper">
                {user.profileSkills.map((field, i) => (
                  <p key={i} className="talent--card--fields">
                    {Helpers.fieldFormatter(field)}
                  </p>
                ))}
              </div>
              <div className="profile--card--note">
                <small>
                  <em>
                    *The two information below can not be seen by recruiters but
                    can be accessed through the buttons above
                  </em>
                </small>
              </div>
              <h4 className="talent--card--about--header">Email Address</h4>
              <p className="talent--card--about">{user.profileEmail}</p>
              <div className="profile--card--note">
                <small>
                  <em>
                    *Profile email is different from account credentials email.
                  </em>
                </small>
              </div>
              <h4 className="talent--card--about--header">LinkedIn</h4>
              <p className="talent--card--about">{user.profileLinkedIn}</p>
              <p className="talent--card--about talent--card--connections">
                <strong>
                  Number of connections: {props.currentUser.connections.length}
                </strong>
              </p>
            </div>
          ) : (
            <div className="talent--card--profile--inactive--msg--wrapper">
              <p className="talent--card--profile--inactive--msg--header">
                Welcome to{" "}
                <span className="talent--card--brand--text">
                  talently<span className="talent--card--brand--dot">.</span>
                </span>
              </p>
              <p className="talent--card--profile--inactive--msg">
                Please activate your profile by clicking the button below and
                filling up the profile information form.
              </p>
            </div>
          )}
          {formSuccess.hasSuccess && (
            <div className="account--card--content account--card--success--wrapper">
              <span className="account--card--edit--success">
                {formSuccess.msg}
              </span>
            </div>
          )}
          <button
            className="talent--card--connect--button profile--card--edit--button"
            onClick={showEditForm}
          >
            {props.currentUser.profileActivated
              ? "Edit Profile"
              : "Activate Profile"}
          </button>
        </>
      ) : (
        <div className="talent--edit--form--wrapper">
          {/* profileFirstName: user.profileFirstName,
              profileLastName: user.profileLastName,
              profileJobTitle: user.profileJobTitle,
              profileEmail: user.profileEmail,
              profileLinkedIn: user.profileLinkedIn,
              profileWebsite: user.profileWebsite,
              profileSkills: user.profileSkills,
              profileBio: user.profileBio,
              profileExperience: user.profileExperience,
              profileImage: user.profileImage, */}
          <form onSubmit={handleFormSubmit}>
            <div className="profile--form--wrapper">
              <div className="form--group--wrapper">
                <label htmlFor="firstNameProfile">First Name:</label>
                <input
                  onChange={handleTextInputChange}
                  type="text"
                  id="firstNameProfile"
                  name="profileFirstName"
                  value={profileInfo.profileFirstName}
                />
                <label htmlFor="lastNameProfile">Last Name:</label>
                <input
                  onChange={handleTextInputChange}
                  type="text"
                  id="lastNameProfile"
                  name="profileLastName"
                  value={profileInfo.profileLastName}
                />
                <label htmlFor="jobTitle">Preferred Job Title:</label>
                <input
                  onChange={handleTextInputChange}
                  type="text"
                  id="jobTitle"
                  name="profileJobTitle"
                  value={profileInfo.profileJobTitle}
                />
                <div className="profile--card--note">
                  <small>
                    <em>
                      *Your email and LinkedIn account can not be seen by
                      recruiters but can be accessed through the buttons on your
                      profile card
                    </em>
                  </small>
                </div>
                <label htmlFor="emailProfile">Email:</label>
                <input
                  onChange={handleTextInputChange}
                  type="email"
                  id="emailProfile"
                  name="profileEmail"
                  value={profileInfo.profileEmail}
                />
                <div className="profile--card--note">
                  <small>
                    <em>
                      *Profile email is different from account credentials
                      email.
                    </em>
                  </small>
                </div>
                <label htmlFor="linkedInProfile">LinkedIn:</label>
                <input
                  onChange={handleTextInputChange}
                  type="text"
                  id="linkedInProfile"
                  name="profileLinkedIn"
                  value={profileInfo.profileLinkedIn}
                />
                <label htmlFor="websiteProfile">Website:</label>
                <input
                  onChange={handleTextInputChange}
                  type="text"
                  id="websiteProfile"
                  name="profileWebsite"
                  value={profileInfo.profileWebsite}
                />
                <label htmlFor="bioProfile">{`About you: `}</label>
                <div className="profile--card--note">
                  <small>
                    <em>
                      *(Minimum length of 60 characters, Maximum length of 150
                      characters)
                    </em>
                  </small>
                </div>
                <textarea
                  minLength="60"
                  maxLength="150"
                  id="bioProfile"
                  rows={5}
                  name="profileBio"
                  value={profileInfo.profileBio}
                  onChange={handleTextInputChange}
                />
                <label htmlFor="experienceProfile">Years of Experience:</label>
                <input
                  onChange={handleTextInputChange}
                  type="number"
                  id="experienceProfile"
                  name="profileExperience"
                  value={profileInfo.profileExperience}
                  required
                />
                <label htmlFor="imageProfile">Profile picture:</label>
                <input
                  type="file"
                  id="imageProfile"
                  // onChange={handleImgUpload}
                  disabled
                />
              </div>
              <div className="form--group--wrapper">
                <div className="filter--group">
                  <div className="profile--card--note">
                    <small>
                      <em>Please select the fields you are proficient in</em>
                    </small>
                  </div>
                  <h4 className="profile--form--field--header">
                    Web Development
                  </h4>
                  {/* front-end-developement */}
                  <div className="filter--input--group">
                    <input
                      type="checkbox"
                      onChange={handleFilterBox}
                      id="front-end-development"
                      name="front-end-development"
                      defaultChecked={
                        profileInfo.profileSkills.includes(
                          "front-end-development"
                        )
                          ? true
                          : false
                      }
                    />
                    <label htmlFor="front-end-development">
                      Front End Development
                    </label>
                  </div>
                  {/* back-end-developement */}
                  <div className="filter--input--group">
                    <input
                      type="checkbox"
                      onChange={handleFilterBox}
                      id="back-end-development"
                      name="back-end-development"
                      defaultChecked={
                        profileInfo.profileSkills.includes(
                          "back-end-development"
                        )
                          ? true
                          : false
                      }
                    />
                    <label htmlFor="back-end-development">
                      Back End Development
                    </label>
                  </div>
                  {/* full-stack-developement */}
                  <div className="filter--input--group">
                    <input
                      type="checkbox"
                      onChange={handleFilterBox}
                      id="full-stack-development"
                      name="full-stack-development"
                      defaultChecked={
                        profileInfo.profileSkills.includes(
                          "full-stack-development"
                        )
                          ? true
                          : false
                      }
                    />
                    <label htmlFor="full-stack-development">
                      Full Stack Development
                    </label>
                  </div>
                </div>
                <div className="filter--group">
                  <h4 className="profile--form--field--header">
                    Software Development
                  </h4>
                  {/* android-development */}
                  <div className="filter--input--group">
                    <input
                      type="checkbox"
                      onChange={handleFilterBox}
                      id="android-development"
                      name="android-development"
                      defaultChecked={
                        profileInfo.profileSkills.includes(
                          "android-development"
                        )
                          ? true
                          : false
                      }
                    />
                    <label htmlFor="android-development">
                      Android Development
                    </label>
                  </div>
                  {/* ios-development */}
                  <div className="filter--input--group">
                    <input
                      type="checkbox"
                      onChange={handleFilterBox}
                      id="ios-development"
                      name="ios-development"
                      defaultChecked={
                        profileInfo.profileSkills.includes("ios-development")
                          ? true
                          : false
                      }
                    />
                    <label htmlFor="ios-development">iOS Development</label>
                  </div>
                  {/* web-design */}
                  <div className="filter--input--group">
                    <input
                      type="checkbox"
                      onChange={handleFilterBox}
                      id="web-design"
                      name="web-design"
                      defaultChecked={
                        profileInfo.profileSkills.includes("web-design")
                          ? true
                          : false
                      }
                    />
                    <label htmlFor="web-design">Web Design</label>
                  </div>
                  {/* software-engineering */}
                  <div className="filter--input--group">
                    <input
                      type="checkbox"
                      onChange={handleFilterBox}
                      id="software-engineering"
                      name="software-engineering"
                      defaultChecked={
                        profileInfo.profileSkills.includes(
                          "software-engineering"
                        )
                          ? true
                          : false
                      }
                    />
                    <label htmlFor="software-engineering">
                      Software Engineering
                    </label>
                  </div>
                </div>
                <div className="filter--group">
                  {/* photography */}
                  <h4 className="profile--form--field--header">
                    Digital Media
                  </h4>
                  <div className="filter--input--group">
                    <input
                      type="checkbox"
                      onChange={handleFilterBox}
                      id="photography"
                      name="photography"
                      defaultChecked={
                        profileInfo.profileSkills.includes("photography")
                          ? true
                          : false
                      }
                    />
                    <label htmlFor="photography">Photography</label>
                  </div>
                  {/* videography */}
                  <div className="filter--input--group">
                    <input
                      type="checkbox"
                      onChange={handleFilterBox}
                      id="videography"
                      name="videography"
                      defaultChecked={
                        profileInfo.profileSkills.includes("videography")
                          ? true
                          : false
                      }
                    />
                    <label htmlFor="videography">Videography</label>
                  </div>
                  {/* graphic-design */}
                  <div className="filter--input--group">
                    <input
                      type="checkbox"
                      onChange={handleFilterBox}
                      id="graphic-design"
                      name="graphic-design"
                      defaultChecked={
                        profileInfo.profileSkills.includes("graphic-design")
                          ? true
                          : false
                      }
                    />
                    <label htmlFor="graphic-design">Graphic Design</label>
                  </div>
                  {/* digital-animation */}
                  <div className="filter--input--group">
                    <input
                      type="checkbox"
                      onChange={handleFilterBox}
                      id="digital-animation"
                      name="digital-animation"
                      defaultChecked={
                        profileInfo.profileSkills.includes("digital-animation")
                          ? true
                          : false
                      }
                    />
                    <label htmlFor="digital-animation">Digital Animation</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile--form--button--wrapper">
              {formError.hasError && (
                <div className="account--card--content account--card--error--wrapper">
                  <span className="account--card--edit--error">
                    {formError.msg}
                  </span>
                </div>
              )}
              <button
                className="talent--card--connect--button profile--card--edit--button"
                type="submit"
              >
                Save Profile Information
              </button>
              <button
                className="talent--card--connect--button profile--card--edit--button"
                onClick={closeEditForm}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
