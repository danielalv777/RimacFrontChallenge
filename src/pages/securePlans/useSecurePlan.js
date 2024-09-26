// Hooks
import { useCallback, useEffect, useState } from "react";
import { useGetPlans } from "../../services/getPlans/useGetPlans";
import { useNavigate } from 'react-router-dom';

export default function useSecurePlan() {

    const getPlansMutation = useGetPlans();
    const navigate = useNavigate();

    const [user, setUSer] = useState("");
    const [userLogin, setUserLogin] = useState({})
    const [currentView, setCurrentView] = useState("selectPlan");
    const [planSelected, setPlanSelected] = useState({});
    const [isSelectedOption1 , setSelectedOption1] = useState(false);
    const [isSelectedOption2 , setSelectedOption2] = useState(false);
    const [plansArray, setPlansArray] = useState([]);

    const handleChangeCardOption = useCallback((value) => {
        if (value === 'option1') {
            setSelectedOption1(!isSelectedOption1);
            setSelectedOption2(false);
            getPlansMutation.getPlans({
                option: 'option1',
                setPlansArray: setPlansArray,
            });
        }
        if (value === 'option2') {
            setSelectedOption2(!isSelectedOption2);
            setSelectedOption1(false);
            getPlansMutation.getPlans({
                option: 'option2',
                setPlansArray: setPlansArray,
            });
        }
    }, [isSelectedOption1, isSelectedOption2])

    const handleSelectPlan = useCallback((plan) => {
        setCurrentView("summarize");
        setPlanSelected(plan);
    },[]);

    const handleBackPlan = useCallback(() => {
        if (currentView === "selectPlan") {
            navigate('/');
        } else {
            setCurrentView('selectPlan');
        }
    }, [currentView]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const userGet = localStorage.getItem('user');
            const userLogin = localStorage.getItem('userLogin');
            if (userGet) {
                try {
                    setUSer(JSON.parse(userGet));
                    setUserLogin(JSON.parse(userLogin));
                } catch (error) {
                    console.error('Error fetching questions:', error);
                }
            }
        }
        fetchQuestions();
    },[])

    return {
        user: user,
        userLogin: userLogin,
        isSelectedOption1: isSelectedOption1,
        isSelectedOption2: isSelectedOption2,
        handleChangeCardOption: handleChangeCardOption,
        plansArray: plansArray,
        currentView: currentView,
        handleSelectPlan: handleSelectPlan,
        planSelected: planSelected,
        handleBackPlan: handleBackPlan,
    };
}