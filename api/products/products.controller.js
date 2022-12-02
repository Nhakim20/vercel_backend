const { create, getProductById, getProduct, updateProduct, deleteProduct, searchProduct } = require("./products.service");

module.exports = {
  createProducts: (req, res) => {
    const body = req.body;
    console.log(body);

    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getProductById: (req, res) => {
    const id = req.params.id;
    getProductById(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(401);
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "product not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getProduct: (req, res) => {
    getProduct((err, results) => {
      if (err) {
        console.log(err);
        return res.status(401);
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateProduct: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    data.id = id

    updateProduct(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(401);
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "failed to update product",
        });
      }
      return res.json({
        success: 1,
        message: "update successfully",
      });
    });
  },
  deleteProduct: (req, res) => {
    const id = req.params.cobi;
    const data = req.body.name;
    console.log(id);
    console.log(data);
    deleteProduct(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(401);
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "record not found",
        });
      }
      return res.json({
        success: 1,
        message: "product delete successfuly",
      });
    });
  },
  searchProduct: (req, res) => {
    const name = req.params.name;
    console.log(name);
    searchProduct(name, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(401);
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "product not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
