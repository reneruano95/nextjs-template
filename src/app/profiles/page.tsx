"use client";

import { Container } from "react-bootstrap";
import { getAllProfiles } from "../lib/actions";
import { Profiles } from "../lib/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Page() {
  const { isLoading, data } = useQuery({
    queryKey: ["profiles"],
    queryFn: getAllProfiles,
    refetchOnWindowFocus: true,
  });

  if (isLoading) {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    );
  }

  return (
    <Container>
      <p>Profiles</p>
      <ul>
        {data.map((profile: Profiles) => (
          <li key={profile.id}>
            <Link href={`profiles/${profile.id}`}>{profile.Name}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
