export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    uri: process.env.MONGOURI,
  },
  jwtSecret: process.env.JWT_SECRET,
});
