export default function Footer() {
  return (
    <div className="w-full flex justify-center">
      <button
        className="bg-primary text-white p-2 rounded-lg hover:brightness-95"
        onClick={() => window.location.reload()}
      >
        I want more cats!
      </button>
    </div>
  );
}
