"use client";

import { getProfileById } from "@/app/lib/actions";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { Container } from "react-bootstrap";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data, isLoading } = useQuery({
    queryKey: ["profiles", id],
    queryFn: () => getProfileById(id),
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
      <Link href={"/profiles"}>Back</Link>
      <h2>Profile {data.Name}</h2>
      <img src={data.Picture} width={100} height={100} />
    </Container>
  );
}
