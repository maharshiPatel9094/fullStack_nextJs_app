import mongoose from "mongoose";

// defining type
type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  // check if db is already connected
  if (connection.isConnected) {
    console.log(" Already Connected to Databse ");
    return;
  }

  //   handle try catch for db connection
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    console.log(db);

    connection.isConnected = db.connections[0].readyState;

    console.log(" DB Connected Successfully ");
  } catch (error) {
    console.log(" Database Connection Failed ", error);

    process.exit(1);
  }
}

// export dbconnect
export default dbConnect;
