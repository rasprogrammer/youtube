'use client';

import { authorize } from '../../api/auth';
import Spinner from '../Spinner';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface ProtectRouteProps {
  children: React.ReactNode;
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({ children }) => {
  const router = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const authorizeMutation = useMutation({
    mutationFn: authorize,
    onSuccess: data => {
      toast.success(data.message || 'Authentication successful');
      setIsLoading(false);
    },
    onError: (err: Error) => {
      toast.error(err.message || 'Unauthorized access');
      router('/signin');
    },
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (!storedToken) {
      router('/signin');
    } else {
      authorizeMutation.mutate({ token: storedToken });
    }

    return () => setIsLoading(false);
  }, []);

  if (isLoading || authorizeMutation.isPending) {
    return (
      <div className='bg-background_yellow flex h-screen items-center justify-center'>
        <div className='flex flex-col items-center space-y-4'>
          {/* Animated Spinner */}
          <Spinner />
          {/* Loading Text */}
          <p className='text-xl font-medium text-gray-700'>Verifying...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectRoute;
