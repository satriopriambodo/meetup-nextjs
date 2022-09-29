import MeetupList from "../components/meetups/MeetupList";

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

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
