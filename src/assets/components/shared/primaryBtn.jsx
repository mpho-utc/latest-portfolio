import { Link } from "react-router-dom";


export default function PrimaryBTN({ type, text, href, loading, onClick }) {
  return (
    <Link
      to={href}
      type={type || 'button'}
      onClick={loading ? undefined : onClick}
      className="btn-primary cursor-pointer text-lg md:text-xl inline-block text-center"
    >
      {text}
    </Link>
  );
}


