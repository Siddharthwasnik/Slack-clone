"use client"

import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import { SignInFlow } from "../types"


interface SignInCardProps{
  setState:(state:SignInFlow) => void;
};

export function SignInCard({setState }:SignInCardProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({ email: "", password: "" })

  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault()

    // Basic validation
    let emailError = ""
    let passwordError = ""
    if (!email.includes("@")) {
      emailError = "Please enter a valid email"
    }
    if (password.length < 6) {
      passwordError = "Password must be at least 6 characters"
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError })
      return
    }

    setErrors({ email: "", password: "" })
    console.log({ email, password })
    // Continue with your login logic
  }

  return (
    <Card className="w-full max-w-md mx-auto p-6"> 
      <CardHeader>
        <h2 className="text-2xl font-bold">Login to Continue</h2>
        <CardDescription>
          Use your email and password to continue
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && (
              <p className="text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <Separator/>

        <div className="flex flex-col">
          <button>
            Countinue with Google
          </button>
           <button>
            Countinue with Google
          </button>
        </div>
        <p>
          Don&apos;t have an account ? <span onClick={()=> setState("signUp")} className="text-blue-400 cursor-pointer  hover:underline">Sing up </span> 
        </p>
      </CardContent>
    </Card>
  )
}
