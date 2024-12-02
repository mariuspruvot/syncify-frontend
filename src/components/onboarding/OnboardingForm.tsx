"use client";
import { useState } from "react";
import { ChevronRight, Music, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useRouter } from "next/navigation";

const OnboardingForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    bio: "",
    visibility: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    bio: "",
    visibility: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: "",
      bio: "",
      visibility: "",
    };

    // Username validation
    if (!formData.username) {
      newErrors.username = "Username is required";
      isValid = false;
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
      isValid = false;
    } else if (!formData.username.startsWith("@")) {
      newErrors.username = "Username must start with @";
      isValid = false;
    }

    // Bio validation
    if (formData.bio && formData.bio.length > 160) {
      newErrors.bio = "Bio must be less than 160 characters";
      isValid = false;
    }

    // Step 2 validation
    if (step === 2 && !formData.visibility) {
      newErrors.visibility = "Please select visibility";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        console.log("Submitting data:", formData);
        // Ici tu attendras ton appel Supabase
        // await supabase.from('profiles').upsert({ ... });

        // Attendre avant de rediriger
        router.push("/dashboard");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (validateForm()) {
      if (step < 3) setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {step === 1 && <User className="w-5 h-5" />}
            {step === 2 && <Music className="w-5 h-5" />}
            {step === 1 && "Profil"}
            {step === 2 && "Sharing Settings"}
          </CardTitle>
          <CardDescription>
            {step === 1 && "Set up your Syncify profile"}
            {step === 2 && "Configure your sharing settings"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="@username"
                  value={formData.username}
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                    setErrors({ ...errors, username: "" });
                  }}
                  className={errors.username ? "border-red-500" : ""}
                />
                {errors.username && (
                  <p className="text-sm text-red-500 mt-1">{errors.username}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input
                  id="bio"
                  placeholder="Say something about yourself..."
                  value={formData.bio}
                  onChange={(e) => {
                    setFormData({ ...formData, bio: e.target.value });
                    setErrors({ ...errors, bio: "" });
                  }}
                  className={errors.bio ? "border-red-500" : ""}
                />
                {errors.bio && (
                  <p className="text-sm text-red-500 mt-1">{errors.bio}</p>
                )}
                <p className="text-sm text-muted-foreground text-center">
                  {formData.bio.length}/160
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="visibility">Profile Visibility</Label>
                <Select
                  onValueChange={(value) => {
                    setFormData({ ...formData, visibility: value });
                    setErrors({ ...errors, visibility: "" });
                  }}
                >
                  <SelectTrigger
                    className={errors.visibility ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Choose your visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="friends">Friends Only</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
                {errors.visibility && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.visibility}
                  </p>
                )}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button variant="ghost" onClick={prevStep} disabled={step === 1}>
            Back
          </Button>
          <Button
            onClick={step === 2 ? handleSubmit : nextStep}
            className="flex items-center gap-2"
          >
            {step === 2 ? "Finish" : "Next"}
            {step !== 2 && <ChevronRight className="w-4 h-4" />}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OnboardingForm;
