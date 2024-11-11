import { useTheme } from "../../Context/ThemeContext";
import Button from "../Button";

const EventCard = ({
  name,
  isOnline,
  description,
  date,
}: {
  name: string;
  isOnline: boolean;
  description: string;
  date: Date;
}) => {
  const { theme } = useTheme();

  const bgLines =
    theme == "light"
      ? "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]"
      : "bg-[linear-gradient(to_right,#d3d3d312_1px,transparent_1px),linear-gradient(to_bottom,#d3d3d312_1px,transparent_1px)]";
  return (
    <div
      className={`relative border-2 shadow-md w-[22rem] h-[30rem] rounded-lg p-2 text-center ${bgLines} bg-[size:24px_24px]`}
    >
      <p className="text-right text-sm font-bold">
        {isOnline ? "Online" : "On-Site"}
      </p>
      <div className="mt-12">
        <p className="font-semibold text-xs">YOU&apos;ARE INVITED TO</p>
        <p className="font-bold text-4xl mt-1">{name.toUpperCase()}</p>
      </div>
      <p className="text-xs mt-2 w-[80%] mx-auto">
        {description.length > 150
          ? description.substring(0, 150).concat(".....")
          : description}
      </p>
      <div className="absolute bottom-0 my-8">
        <div>
          <span className="text-base font-semibold">{date.toString()}</span>
        </div>
        <Button className="mt-12">DETAILS</Button>
      </div>
    </div>
  );
};

export default EventCard;

// className={`border w-96 h-96 rounded-lg p-2 text-center bg-[linear-gradient(to_right,#d3d3d312_1px,transparent_1px),linear-gradient(to_bottom,#d3d3d312_1px,transparent_1px)] bg-[size:24px_24px]`}
