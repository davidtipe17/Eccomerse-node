import "dotenv/config"
import app from "./config/express"

const port = process.env.NODE_PORT;
const main = async () => {
    app.listen(port, ()=> {
        console.log(`express running in Port: ${port}`)
    });
};

main();