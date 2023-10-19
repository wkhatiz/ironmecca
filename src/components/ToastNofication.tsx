type toastNotificationProps = {
  headerText: string,
  messageText: string
}

function ToastNotification(props: toastNotificationProps) {
  let {headerText, messageText} = props;
  return (
    <div>
      <h3>{headerText}</h3>
      <p>{messageText}</p>
    </div>
  );
}

export default ToastNotification;
