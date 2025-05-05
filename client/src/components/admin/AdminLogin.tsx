import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check password against hardcoded value
    if (password === "Asianart01") {
      setError(false);
      // Store in session storage to persist across page refreshes
      sessionStorage.setItem("adminAuthenticated", "true");
      onLogin();
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
        variant: "default",
      });
    } else {
      setError(true);
      toast({
        title: "Authentication failed",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 mb-4">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-neutral-800">Admin Authentication</h1>
          <p className="text-neutral-600 mt-2">Please enter the password to access the admin area</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={error ? "border-red-500" : ""}
              autoFocus
            />
            {error && (
              <p className="text-sm text-red-500">Incorrect password. Please try again.</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary text-white hover:text-white hover:bg-[#4ECDC4] transition-all duration-300"
          >
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AdminLogin;