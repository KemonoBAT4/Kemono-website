module.exports = {
    port: 5000,
    jwtSecret: '!!CryptoCat@!!',
    jwtExpirationInSeconds: 60 * 60, // 1 hour
    userRoles: {
      USER: 'user',
      ADMIN: 'admin'
    }
  }