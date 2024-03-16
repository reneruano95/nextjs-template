import { Jumbotron } from "@/components/Jumbotron";
import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Jumbotron />
      <Link href="/about">About</Link>
      <br />
      <Link href="/profiles">Profiles</Link>
    </Container>
  );
}
