import { useState, useEffect } from "react";
import { useListings } from "../context/ListingsContext";
import axios from "axios";
import "./UserProfile.css";
import { FaUserCircle } from "react-icons/fa";

const UserProfile = () => {
  const { user } = useListings();
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("profile");
    return saved ? JSON.parse(saved) : {
      name: user?.name || "",
      phone: user?.phone || "",
      email: user?.email || "",
      profilePhoto: user?.profilePhoto || null
    };
  });
  const [submittedUser, setSubmittedUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const email= user?.email || localStorage.getItem("userEmail");
    if (email) {
      axios.get(`http://localhost:5000/users/profile/${email}`).then((res) => {
        setProfile(res.data);
        setSubmittedUser(res.data);
        // localStorage.setItem("profile", JSON.stringify(res.data));
      }).catch((err) => console.error("Error fetching user data:", err));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...profile, [name]: value || " "};
    setProfile(updated);
    localStorage.setItem("profile", JSON.stringify(updated));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfile((prev) => ({ ...prev, profilePhoto: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", profile.name);
    formData.append("phone", profile.phone);
    formData.append("email", profile.email);
    if (profile.profilePhoto instanceof File) formData.append("profilePhoto", profile.profilePhoto);

    try {
      const res = await axios.post("http://localhost:5000/users/update-profile", formData, { headers: { "Content-Type": "multipart/form-data" } });
      setSubmittedUser(res.data);
      setProfile(res.data);
      localStorage.setItem("profile", JSON.stringify(res.data));
    } catch (err) {
      console.error("Error updating profile:", err);
    } finally {
      setLoading(false);
    }
  };

  const imageUrl = submittedUser?.profilePhoto || profile?.profilePhoto;
  const fullImageUrl = imageUrl && typeof imageUrl === "string" ? `http://localhost:5000/${imageUrl}` : null;

  return (
    <>
      <div className="text-center">
        <img src="home2.png" alt="Sample" className="image" />
        <div className="overlay-text">Profile</div>
      </div>
      <div className="cont">
        <div className="profile-container">
          <h2>My Profile</h2>
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="profile-photo">
              {fullImageUrl ? <img src={fullImageUrl} alt="Profile" /> : <FaUserCircle size={100} />}
              <input type="file" accept="image/*" onChange={handlePhotoChange} />
            </div>
            <label>Name:</label>
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
            <label>Phone Number:</label>
            <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
            <label>Email:</label>
            <input type="email" name="email" value={profile.email} onChange={handleChange} />
            <button type="submit" disabled={loading}>{loading ? "Updating..." : "Change Profile"}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
