export default function Container({ children }) {
  return (
    <div className="w-full max-w-container mx-auto">
      {children}
    </div>
  );
}