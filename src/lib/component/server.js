import express from "express";

const app = express();

app.use(express.json());

app.get("/api/about", (req, res) => {
  res.json({
    message: "About data fetched successfully",
  });
});

app.post("/api/blog", (req, res) => {
  const { title } = req.body;

  res.json({
    message: "Blog created successfully",
    blog: {
      title: title,
    },
  });
});

app.put("/api/hydration", (req, res) => {
  const { id, name } = req.body;

  res.json({
    message: "Hydration data completely updated",
    hydration: {
      id: id,
      name: name,
    },
  });
});

app.patch("/api/products", (req, res) => {
  const { id, price } = req.body;

  res.json({
    message: "Product partially updated",
    product: {
      id: id,
      price: price,
    },
  });
});

app.delete("/api/student", (req, res) => {
  const { id } = req.body;

  res.json({
    message: "Student deleted successfully",
    deletedId: id,
  });
});

app.listen(3000, () => {
  console.log("Backend server running on http://localhost:3000");
});
