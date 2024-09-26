// hooks/useAuthToken.js
import { useMutation } from 'react-query';
import { useCallback } from 'react';
import { authLogin } from './authLogin';

const INIT_LOGIN = "initLogin";

export const useAuthLogin = () => {
    const handleSuccess = useCallback(async (data, variables) => {
        const {
            handleManageUser,
        } = variables;
        localStorage.setItem('user', JSON.stringify(data));
        await handleManageUser?.(data);
    }, []);

    const { mutate: getUserAuth, isLoading, isError, error } = useMutation({
        cacheTime: 0,
        refetchOnWindowFocus: false,
        onSuccess: handleSuccess,
        mutationKey: [INIT_LOGIN],
        mutationFn: authLogin,
    });
    
    return {
        isLoadingLogin: isLoading,
        isErrorLogin: isError,
        errorLogin: error,
        getUser: getUserAuth,
    };
};