const colors = [
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-purple-100 text-purple-700",
  "bg-amber-100 text-amber-700",
  "bg-pink-100 text-pink-700",
];

export default function UserAvatar({ user, size = "h-10 w-10" }) {
  const name = String(user?.name ?? "User");

  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`flex ${size} shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
        colors[user?.id % colors.length]
      }`}
    >
      {initials}
    </div>
  );
}