import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faPersonDigging, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

export default function ConstructionPage()
{
  return (
    <div className="bg-[#13163C] h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-8">
        <FontAwesomeIcon
            icon={faClockRotateLeft}
            className="h-32 w-32"
        />
        <h1 className="font-extrabold text-2xl font-google-flex">Awesome Website coming soon!</h1>
      </div>
    </div>
  );
}