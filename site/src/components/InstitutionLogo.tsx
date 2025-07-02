type InstitutionLogoProps = {
  institution: string;
  className?: string;
};

const InstitutionLogo = ({ institution, className = "w-4 h-auto md:w-6 object-contain" }: InstitutionLogoProps) => {
  const filename = institution.split(" ").join("-").toLowerCase(); // e.g., "Kent State University" → "kent-state-university"
  const src = `/logos/${filename}.png`;

  return (
    <img
      src={src}
      alt={`${institution} logo`}
      className={className}
      loading="lazy"
    />
  );
};

export default InstitutionLogo;
