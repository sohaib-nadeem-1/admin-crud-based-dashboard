export const validateProduct = (req, res, next) => {
    const { name, category, price, stock } = req.body;

    if (!name || !name.trim()) {
        return res.status(400).json({
            message: "Product name is required"
        });
    }

    if (!category || !category.trim()) {
        return res.status(400).json({
            message: "Product category is required"
        });
    }

    if (price === undefined || price === null || price === "") {
        return res.status(400).json({
            message: "Product price is required"
        });
    }

    if (Number.isNaN(Number(price))) {
        return res.status(400).json({
            message: "Product price must be a number"
        });
    }

    if (Number(price) < 0) {
        return res.status(400).json({
            message: "Product price cannot be negative"
        });
    }

    if (stock === undefined || stock === null || stock === "") {
        return res.status(400).json({
            message: "Product stock is required"
        });
    }

    if (!Number.isInteger(Number(stock))) {
        return res.status(400).json({
            message: "Product stock must be an integer"
        });
    }

    if (Number(stock) < 0) {
        return res.status(400).json({
            message: "Product stock cannot be negative"
        });
    }

    next();
};