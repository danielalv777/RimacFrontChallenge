// hooks/useAuthToken.js
import { useMutation } from 'react-query';
import { useCallback } from 'react';
import { getPlans } from './getPlans';

const GET_PLANS = "getPlans";

export const useGetPlans = () => {
    const handleSuccess = useCallback(async (data, variables) => {
        const {
            option,
            setPlansArray,
        } = variables;
        if (option === 'option1') {
            const result = data.slice(0, 3);
            setPlansArray(result);
        } else {
            const result = data.slice(-3);
            setPlansArray(result);
        }
    }, []);

    const { mutate: geUserPlans, isLoading, isError, error } = useMutation({
        cacheTime: 0,
        refetchOnWindowFocus: false,
        onSuccess: handleSuccess,
        mutationKey: [GET_PLANS],
        mutationFn: getPlans,
    });
    
    return {
        isLoadingPlans: isLoading,
        isErrorGetPlans: isError,
        errorGetPlans: error,
        getPlans: geUserPlans,
    };
};