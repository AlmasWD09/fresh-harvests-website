

const CommonLayout = () => {
    return (
        <>
            <div className="mt-10 lg:mt-0">
                <div className="">
                    <div className="bg-primaryGray h-screen flex flex-col justify-center items-center px-2 py-8 lg:py-0  rounded-md">
                        <h1 className="text-3xl lg:text-8xl text-secondery font-bold text-center py-10 uppercase">wellcome <br /> <span className="text-4xl">{"ALMAS HOSSAIN"}!!</span></h1>
                        <p className="max-w-[600px] text-center">Welcome to Fresh Harvest Grocery Shop! We're thrilled to have you with us. Explore our wide range of fresh and quality groceries, carefully selected to meet your needs. Enjoy a seamless shopping experience with exclusive deals, convenient browsing, and fast checkout. Thank you for choosing us as your trusted grocery partner!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommonLayout;