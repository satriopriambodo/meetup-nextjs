import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data; //useless

    const client = await MongoClient.connect(
      "mongodb+srv://satrio:asdzxc123@cluster0.jp6xvhp.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups"); //can be different

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
