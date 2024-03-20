// // app/page.js
import Link from "next/link";

export default function RootPage() {
  return (
    <main className="flex flex-col items-center justify-between h-screen bg-black text-white p-24">
      <div>
        <h1 className="text-4xl font-bold mb-5">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <p className="text-lg">
          <Link href="/week-2" passHref>
            <span className="cursor-pointer hover:underline">
              Link to Week 2 Assignment
            </span>
          </Link>
        </p>
        <p className="text-lg">
          <Link href="/week-3" passHref>
            <span className="cursor-pointer hover:underline">
              Link to Week 3 Assignment
            </span>
          </Link>
        </p>
        <p className="text-lg">
          <Link href="/week-4" passHref>
            <span className="cursor-pointer hover:underline">
              Link to Week 4 Assignment
            </span>
          </Link>
        </p>
        <p className="text-lg">
          <Link href="/week-5" passHref>
            <span className="cursor-pointer hover:underline">
              Link to Week 5 Assignment
            </span>
          </Link>
        </p>
        <p className="text-lg">
          <Link href="/week-6" passHref>
            <span className="cursor-pointer hover:underline">
              Link to Week 6 Assignment
            </span>
          </Link>
        </p>
        <p className="text-lg">
          <Link href="/week-7" passHref>
            <span className="cursor-pointer hover:underline">
              Link to Week 7 Assignment
            </span>
          </Link>
        </p>
        <p className="text-lg">
          <Link href="/week-8" passHref>
            <span className="cursor-pointer hover:underline">
              Link to Week 8 Assignment
            </span>
          </Link>
        </p>
      </div>
    </main>
  );
}
