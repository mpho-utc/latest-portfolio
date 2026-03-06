


export default function SecondaryBTN({ type, text, href, loading, handleSubmit }) {
  return (
    <button
      to={href}
      type={type || 'button'}
      onClick={loading ? undefined : handleSubmit}
      className="btn-secondary cursor-pointer text-lg md:text-xl inline-block text-center"
    >
      {loading ? 'Submitting...' : text}
    </button>
  );
}


