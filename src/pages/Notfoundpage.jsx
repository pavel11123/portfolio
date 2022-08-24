import { Link } from "react-router-dom";

const Notfoundpage = () => {
  return (
    <main className="main">
      <div>
        This page doesn't exist. Go <Link to="/">home</Link>
      </div>
    </main>
  );
};

export { Notfoundpage };
