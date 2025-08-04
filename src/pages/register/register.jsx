import React, { useState } from "react";
import "./register.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Invalid email";
    if (!formData.phone.match(/^\+?\d{10,15}$/)) newErrors.phone = "Invalid phone";
    if (formData.password.length < 6) newErrors.password = "Password must be 6+ characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "", password: "", confirmPassword: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="registerPage">
      <h1>Create Your Account</h1>
      <form onSubmit={handleSubmit} noValidate className="registerForm">
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your full name"
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1234567890"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter a strong password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>

        <label>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </label>

        <button type="submit" className="submitBtn">Register</button>

        {submitted && <p className="successMsg">Registration successful!</p>}
      </form>
    </div>
  );
};

export default RegisterPage;
