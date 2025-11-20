const cors =require("cors");

export const corsMiddleware = cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});
