const { Toaster } = require("react-hot-toast")

const ToastWrapper = () => {
    return (
        
            <Toaster
                position="top-center"
                reverseOrder={false}
                containerStyle={{
                    top : '1.25rem',
                    right : '1.25rem',
                    fontSize : '1.15rem',
                }}
            />
        
    );
};

export {ToastWrapper}