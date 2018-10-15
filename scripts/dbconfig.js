//---------------- to connect to OPC orcl2 instance ----------

const USERNAME = process.env.username;
const PASSWORD = process.env.password;
const CONNECTIONSTRING = process.env.connectionstring;

module.exports= {
    user:`${USERNAME}`,
    password:`${PASSWORD}`,
    connectString : `${CONNECTIONSTRING}`
}
