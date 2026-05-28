import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    const success = await login(email, password);
    if (success) {
      navigate('/dashboard'); // Redirect to a protected page after login
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-monsoon-dark p-4">
      <GlassCard className="w-full max-w-md p-8 md:p-10">
        <h2 className="mb-6 text-center font-display text-3xl font-bold text-text-muted">
          Login to YK Trawell Diaries
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-center text-red-500">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <p className="mt-6 text-center text-text-muted">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-primary hover:underline">
            Sign Up
          </Link>
        </p>
        <p className="mt-4 text-center text-sm text-text-muted">
            <span className="font-bold">Hint:</span> Try email: test@example.com, password: password123
          </p>
      </GlassCard>
    </div>
  );
};

export default LoginPage;
