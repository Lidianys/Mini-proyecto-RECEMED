function Header() {
  const userName = localStorage.getItem("userName") || "Invitado";

  return (
    <header className="bg-rm-blue-100 text-white p-4 flex justify-end">
      <span className="text-lg">{userName}</span>
    </header>
  );
}

export default Header;
