type FabricCardProps = {
  fabricName: string;
  gsm: number;
  costPerMeter: number;
  breathability: number;
  sustainabilityScore: number;
  onGsmChange: (gsm: number) => void;
  onFabricSelect: () => void;
};
