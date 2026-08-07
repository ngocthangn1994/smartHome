interface DonutChartProps {
  total: number;
  centerLabel: string;
  sections: {
    value: number;
    color: string;
  }[];
}

function DonutChart({ total, centerLabel, sections }: DonutChartProps) {
  let currentPercents = 0;

  const gradientSections = sections.map((section) => {
    const startPercent = currentPercents;
    const endPercent = currentPercents + section.value;
    return `${section.color} ${startPercent}% ${endPercent}%`;
  });
  return (
    <>
      <div
        className="flex justify-center items-center w-40 h-40 rounded-full text-slate-600"
        style={{ background: `conic-gradient(${gradientSections.join(", ")})` }}
      >
        <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full bg-white">
          <p className="text-3xl font-bold">{total}</p>
          <p>{centerLabel}</p>
        </div>
      </div>
    </>
  );
}

export default DonutChart;
