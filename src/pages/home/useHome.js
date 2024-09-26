// Libraries
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';

// Hooks
import { useForm } from "react-hook-form";
import { useCallback, useRef } from "react";
import { useAuthLogin } from "../../services/userLogin/useAuthLogin";

// Constants
import { DEFAULT_VALUES, FIELD_USER_DOCUMENT_NUMBER, FIELD_USER_DOCUMENT_TYPE, FIELD_USER_PHONE_NUMBER } from "./constants";
import schema from "./schema";


export default function useHome() {
    const formRef = useRef(null);
    const navigate = useNavigate();
    const authLoginMutation = useAuthLogin();
    
    const {
        watch,
        control,
        register,
        setValue,
        reset,
        clearErrors,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "all",
        resolver: yupResolver(schema),
        defaultValues: DEFAULT_VALUES,
    });

    const handleManageUser = useCallback(() => {
        navigate('/planes');
        clearErrors();
        reset();
    }, []);

    const submit = useCallback(() => {
        const user = {
            dni: watch(FIELD_USER_DOCUMENT_NUMBER),
            phone: watch(FIELD_USER_PHONE_NUMBER),
        }
        localStorage.setItem('userLogin', JSON.stringify(user))
        authLoginMutation.getUser({
            handleManageUser: handleManageUser,
        })
    }, []);

    const handleChangeDocumentType = useCallback((type) => {
        setValue(FIELD_USER_DOCUMENT_TYPE, type.value)
    },[setValue])

    return {
        formRef: formRef,
        watch: watch,
        control: control,
        errors: errors,
        register: register,
        handleSubmit: handleSubmit,
        submit: submit,
        handleChangeDocumentType: handleChangeDocumentType,
        isLoading: authLoginMutation.isLoadingLogin,
    };
}