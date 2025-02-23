import Link from "next/link";

export default function Header() {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/about-us",
    },
    {
      name: "Home",
      link: "/contact-us",
    },
  ];
  return (
    <nav className="py-4 px-14 border-b flex items-center justify-between">
      <img className="h-9" src="/logo.png" alt="" />
      <div className="flex gap-4 items-center font-semibold">
        {menuList?.map((item) => {
          return (
            <Link href={item?.link}>
              <button className="text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
                {item?.name}
              </button>
            </Link>
          );
        })}
      </div>
        <Link href={"login"}>
          <button className="bg-blue-600 font-bold px-5 py-2 rounded-full text-white">
            Login
          </button>
        </Link>
        <div>
        </div>
    </nav>
  );
}
