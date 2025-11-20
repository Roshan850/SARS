const rateLimit =require("express-rate-limit");

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
});
   // messeage: "Too many requests from this IP, please try aganin later.",
