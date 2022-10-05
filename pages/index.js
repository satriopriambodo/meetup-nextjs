import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Bruckhaufen_%28Wien%29_-_Moschee_%284%29.JPG",
    address: "Some address, 12345 X City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/Bruxelles_%28Cinquantenaire%29_la_grande_Mosqu%C3%A9e.JPG",
    address: "Some address 2, 12345 X City",
    description: "This is a second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch("/api/meetups");
  const client = await MongoClient.connect(
    "mongodb+srv://satrio:asdzxc123@cluster0.jp6xvhp.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups"); //can be different

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
