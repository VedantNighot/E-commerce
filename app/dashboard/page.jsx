import { Button } from "@heroui/react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-10">
      <h1>DashBoard</h1>
      <Link href={'/admin'}>
      <Button>
        Admin Panel
      </Button>
      </Link>
    </main>
  );
}
