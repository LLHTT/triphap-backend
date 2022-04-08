module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'da13f3e12b34b9cf67c302d02f2b412b'),
  },
});
