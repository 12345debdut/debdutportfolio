const prod=process.env.NODE_ENV==='production';

module.exports={
    'process.env.BASE_URL':prod?'http://debdutportfolio.club':'http://localhost:3000',
    'process.env.NAMESPACE':'http://debdutportfolio.club',
    'process.env.CLIENT_ID':'2TLFjSYZgBOjK73a5EIoMTYVKsnR51py'
}