import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AuthCard from "../components/auth/AuthCard";

// Placeholder so the "Forgot password?" link has somewhere to go.
// Real password reset needs the backend.
export default function ForgotPasswordPage() {
  return (
    <AuthCard
      title="Forgot password?"
      description="Password reset will be available once the backend is connected."
    >
      <Link
        to="/login"
        className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft size={16} />
        Back to login
      </Link>
    </AuthCard>
  );
}
