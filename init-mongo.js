db.createUser(
  {
    user: 'user',
    pwd: 'masterkey',
    roles: [
      {
        role: 'readWrite',
        db: 'employee'
      }
    ]
  }
)
