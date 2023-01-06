import Link from "next/link";

const Home = () => {
  return (
    <main className="min-h-screen text-black bg-white ">
      <div>
        <h1 className="mb-6 text-black"> Test Link</h1>

        <Link href="/register" className="px-6 py-3 bg-blue-800 rounded-full">
          {" "}
          7 Jetzt Abonieren
        </Link>
      </div>
    </main>
  );
};

export default Home;
