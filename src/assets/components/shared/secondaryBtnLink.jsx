import { Link } from "react-router-dom";

export default function SecondaryBTNLink({ type, text, href, loading, handleSubmit }) {
  return (
    <Link
      to={href}
      type={type || 'button'}
      onClick={loading ? undefined : handleSubmit}
      className="btn-secondary cursor-pointer text-lg md:text-xl inline-block text-center"
    >
      {loading ? 'Submitting...' : text}
    </Link>
  );
}