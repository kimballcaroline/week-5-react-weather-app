export default function FormattedDate(props) {
  let currentTime = props.date;
  const options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  };
  let formattedDate = new Intl.DateTimeFormat("en-Us", options).format(
    currentTime
  );
  return formattedDate;
}
