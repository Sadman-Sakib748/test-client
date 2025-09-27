"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function AuthModal({ isOpen, onClose, initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleMode = () => setMode(mode === "login" ? "register" : "login");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="font-geist sm:max-w-md w-full mx-4 p-6 overflow-y-auto max-h-[90vh] bg-card border-0 shadow-2xl">
        <div className="pt-10">
          <DialogHeader className="text-center mb-8">
            <DialogTitle className="text-2xl font-bold text-foreground">
              {mode === "login" ? "Login" : "Sign Up"}
            </DialogTitle>
          </DialogHeader>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="h-10 bg-input border-border focus:border-primary focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="h-10 bg-input border-border focus:border-primary focus:ring-primary pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked)}
              />
              <Label htmlFor="remember" className="text-sm text-muted-foreground">
                Remember me
              </Label>
            </div>

            <Button type="button" className="w-full h-10 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm rounded-lg">
              {mode === "login" ? "Login" : "Sign Up"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-card px-3 text-muted-foreground">Or Sign in with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button type="button" variant="outline" className="h-10 border-border hover:bg-muted bg-transparent">
                Google
              </Button>
              <Button type="button" variant="outline" className="h-10 border-border hover:bg-muted bg-transparent">
                Facebook
              </Button>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
                <button type="button" className="text-primary hover:text-primary/80 font-semibold underline ml-1" onClick={toggleMode}>
                  {mode === "login" ? "Sign up" : "Login"}
                </button>
              </p>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
