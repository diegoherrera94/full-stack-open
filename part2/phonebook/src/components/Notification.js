const Notification = ({message}) => {
    if(message.message === null){
        return null;
    }

    const style = message.isError ? "error" : "notification";

    return(
        <div className={style}>
            {message.message}
        </div>
    );
    
}

export default Notification;