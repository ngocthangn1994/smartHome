import { FaCircle } from "react-icons/fa";

interface HealthRowProps {
  data: { color: string; name: string; number: number; percent: number }[];
}

function HealthRow({ data }: HealthRowProps) {
  return (
    <>
      <div className="w-full sm:max-w-sm space-y-2">
        {data.map((item) => (
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <FaCircle className={item.color} />
              <p>{item.name}</p>
            </div>

            <div className="flex gap-1">
              <p className="font-bold">{item.number}</p>
              <p>({item.percent}%)</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HealthRow;
