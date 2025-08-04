import { useEffect } from "react";

const AdminRedirect = () => {
  useEffect(() => {
    // Store the last page before redirect (for safe back navigation)
    localStorage.setItem("lastPage", window.location.href);

    // Decide admin URL based on environment
    const adminUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000" // Local admin
        : "https://admin.elysianescapes.com"; // Live admin

    // Replace current URL (no history entry)
    window.location.replace(adminUrl);
  }, []);

  return <p>Redirecting to Admin Panel...</p>;
};

export default AdminRedirect;
