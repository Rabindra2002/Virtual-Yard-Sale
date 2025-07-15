import { useState } from "react";
import { useListings } from "../context/ListingsContext";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { login } = useListings();
  const navigate = useNavigate();

  const checkPasswordStrength = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (!value) {
      setPasswordStrength("");
    } else if (checkPasswordStrength(value)) {
      setPasswordStrength("Strong Password");
    } else {
      setPasswordStrength("Weak Password: Must include upper, lower, number, special character, min 8 chars.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!checkPasswordStrength(password)) {
      setError(
        "Password must contain upper, lower case, digit, special character, and be at least 8 characters long."
      );
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Unexpected response from server. Check API endpoint.");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setSuccess("Signup successful! Redirecting to login...");
      login({ id: data.userId, name, email });

      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img src="projectlogo.jpg.webp" alt="Logo" />
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            {password && (
              <p
                className={`strength-message ${
                  passwordStrength === "Strong Password" ? "strong" : "weak"
                }`}
              >
                {passwordStrength}
              </p>
            )}
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        <p className="py-2">
          Already have an account? <span><Link to="/login">Login</Link></span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
