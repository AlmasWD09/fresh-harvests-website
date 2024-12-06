import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/')
    }
    return (
        <div className="h-screen bg-primary/80 flex justify-center items-center relative">
                <div className="h-screen flex flex-col justify-center items-center text-white ">
                    <h1 className="text-9xl font-bold">404</h1>
                    <p className="text-4xl ">Page Not Found</p>
                    <span className="w-40 my-2 h-[4px] rounded-full bg-white"></span>
                    <p className="text-center px-4">An error occurred. Please try again or contact support.</p>
                    <button 
                    onClick={handleNavigate}
                    className="bg-white text-black p-4 my-4 rounded">BACK HOME</button>
                </div>
        </div >
    );
};

export default ErrorPage;