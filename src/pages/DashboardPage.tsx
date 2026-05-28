import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-monsoon-dark p-4">
        <GlassCard className="p-8 text-center">
          <h2 className="mb-4 font-display text-2xl font-bold text-text">Access Denied</h2>
          <p className="text-text-muted">Please log in to view this page.</p>
          <Button onClick={() => navigate('/login')} className="mt-6">
            Go to Login
          </Button>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-monsoon-dark p-4">
      <GlassCard className="w-full max-w-lg p-8 text-center md:p-10">
        <h2 className="mb-4 font-display text-3xl font-bold text-text-muted">
          Welcome, {user.username}!
        </h2>
        <p className="mb-6 text-lg text-text-muted">
          This is your personalized dashboard for YK Trawell Diaries.
        </p>
        <div className="space-y-4">
          <p className="text-text-muted">
            <span className="font-semibold text-primary">Email:</span> {user.email}
          </p>
          <p className="text-text-muted">
            <span className="font-semibold text-primary">Upcoming Trips:</span> None booked yet.
          </p>
          <p className="text-text-muted">
            <span className="font-semibold text-primary">Past Adventures:</span> Explore our gallery for inspiration!
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:justify-center">
          <Button onClick={() => navigate('/')} variant="secondary">
            Explore Trips
          </Button>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
      </GlassCard>
    </div>
  );
};

export default DashboardPage;
