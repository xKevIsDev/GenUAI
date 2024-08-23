'use client'

import { useState, useTransition } from 'react'
import { useAuth } from "@/context/AuthProvider"
import { Button } from "@/components/ui-libraries/shadcn/button"
import { Input } from "@/components/ui-libraries/shadcn/input"
import { Label } from "@/components/ui-libraries/shadcn/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui-libraries/shadcn/dialog"
import { Github, Mail, LogOut, User, Loader2 } from "lucide-react"
import { useRouter } from 'next/navigation'
import { OAuthButton } from './oauth-button'

export default function LoginButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const { user, loading, signInWithOAuth, signOut, emailLogin, signUp } = useAuth()
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    startTransition(() => {
      if (isSignUp) {
        signUp(formData)
      } else {
        emailLogin(formData)
      }
    })
  }

  const handleOAuthSignIn = (provider: 'google' | 'github' | 'discord' | 'twitter') => {
    signInWithOAuth(provider)
  }

  const handleSignOut = async () => {
    await signOut()
    router.refresh()
  }

  if (loading) {
    return <Button variant="outline" disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Loading</Button>
  }

  return (
    <div className="fixed top-4 right-4">
      {!user && (
      <Dialog open={isOpen} onOpenChange={(open) => {
        setIsOpen(open)
        if (!open) setIsSignUp(false)
      }}>
        <DialogTrigger asChild>
            <Button variant="secondary" className='border-[0.5px] rounded-xl border-purple-400'>Login</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] text-white">
          <DialogHeader>
            <DialogTitle>{isSignUp ? 'Sign Up' : 'Login'}</DialogTitle>
            <DialogDescription>
              {isSignUp ? 'Create a new account' : 'Login to your account'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {isSignUp ? 'Sign Up' : 'Login'} with Email
            </Button>
            <Button 
              type="button" 
              variant="link" 
              onClick={() => setIsSignUp(!isSignUp)}
              className="w-full"
            >
              {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
            </Button>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            <div className="grid grid-cols-2 gap-6">
              <OAuthButton provider="google" />
              <OAuthButton provider="github" />
              <OAuthButton provider="discord" />
              <OAuthButton provider="twitter" />
            </div>
          </form>
        </DialogContent>
      </Dialog>
      )}
    </div>
  )
}