export const validateUser = (req, res, next) => {
    const { name, email, role, status } = req.body;

    // Name validation
    if (!name || name.trim() === "") {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    // Email validation
    if (!email || email.trim() === "") {
        return res.status(400).json({
            message: "Email is required"
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: "Invalid email format"
        });
    }

    // Role validation
    if (role !== "Admin" && role !== "Customer") {
        return res.status(400).json({
            message: "Role must be Admin or Customer"
        });
    }

    // Status validation
    if (status !== "Active" && status !== "Inactive") {
        return res.status(400).json({
            message: "Status must be Active or Inactive"
        });
    }

    next();
};