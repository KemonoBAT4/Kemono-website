module.exports = {
  port: 5000,
  jwtSecret: '!!CryptoCat@!!',
  jwtExpirationInSeconds: 60 * 60, // 1 hour
  roles: {
    USER: 'user',
    ADMIN: 'admin'
  }
}