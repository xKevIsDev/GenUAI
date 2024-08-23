import { User } from '@supabase/supabase-js';

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  emailLogin: (formData: FormData) => Promise<void>;
  signUp: (formData: FormData) => Promise<void>;
  signInWithOAuth: (provider: 'google' | 'github' | 'discord' | 'twitter') => Promise<void>;
  signOut: () => Promise<void>;
}