import { useState, useEffect } from "react";
import "./Login.css"; // Importing the CSS file
import { Link, useNavigate } from "react-router-dom";
import { useListings } from "../context/ListingsContext"; // Importing global state

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Get global state functions
  const { setListings, userListings, setUserListings, setUserId } = useListings();

  // Load user listings from localStorage on mount
  useEffect(() => {
    const storedUserListings = JSON.parse(localStorage.getItem("userListings"));
    if (storedUserListings) {
      setUserListings(storedUserListings);
    }
  }, []);

  // Save user listings only if userId exists
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      localStorage.setItem("userListings", JSON.stringify(userListings));
    }
  }, [userListings]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous error messages

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.user?.id) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user.id);
        localStorage.setItem("userEmail", data.user.email);
        setUserId(data.user.id);
      } else {
        throw new Error("User data is missing in the response");
      }

      // Fetch all listings
      const listingsResponse = await fetch("http://localhost:5000/api/listings");
      const allListings = await listingsResponse.json();
      setListings(allListings);

      // Fetch logged-in user's listings
      const userListingsResponse = await fetch(
        `http://localhost:5000/api/listings/user/${data.user.id}`
      );
      const userListings = await userListingsResponse.json();
      console.log("Fetched user listings:", userListings);
      setUserListings(userListings);

      navigate("/browse-all");
    } catch (err) {
      console.error("Login Error:", err);
      setError(err.message);
    }
  };

  return (
    <div className="login-container">

      <div className="login-box">
        <img src="projectlogo.jpg.webp" alt="" />
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* <div className="forget">
            <Link id="forget" to="/forgot-password">Forgot Password?</Link>
          </div> */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="py-2">
          Don't have an account? <span><Link to="/signup">Signup</Link></span>
        </p>
      </div>
    </div>
  );
};

export default Login;
