export const LinkText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DC0FF] via-[#D478FF] to-[#FF41D5]">
      {children}
    </span>
  );
};