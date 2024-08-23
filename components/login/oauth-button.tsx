"use client"

import { createClient } from "@/utils/supabase/client"
import { useAuth } from "@/context/AuthProvider"
import { Github, Mail, Facebook } from 'lucide-react' // Adjust the import path as needed
import { Button } from "@/components/ui-libraries/shadcn/button"
import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { IconBrandGoogle } from "@tabler/icons-react"

// Mapping providers to their icons and texts
const providerData = {
  google: {
    icon: <IconBrandGoogle className="mr-2 h-4 w-4" />,
    text: "Google"
  },
  github: {
    icon: <Github className="mr-2 h-4 w-4" />,
    text: "Github"
  },
  discord: {
    icon: <DiscordLogoIcon className="mr-2 h-4 w-4" />,
    text: "Discord"
  },
  twitter: {
    icon: <TwitterLogoIcon className="mr-2 h-4 w-4" />,
    text: "Twitter"
  }
}

export function OAuthButton({ provider }: { provider: 'google' | 'github' | 'discord' | 'twitter' }) {
  const { signInWithOAuth } = useAuth()
  
  const handleSignIn = async () => {
    try {
        await signInWithOAuth(provider)
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  const { icon, text } = providerData[provider] || { icon: null, text: provider }

  return (
    <Button onClick={handleSignIn} className="flex items-center border p-2 rounded">
      {icon}
      {text}
    </Button>
  )
}