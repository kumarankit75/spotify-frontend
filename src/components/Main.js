export default function Main({ title, children }) {
  return (
    <div className="flex-1 bg-dark p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      {children}
    </div>
  );
}
