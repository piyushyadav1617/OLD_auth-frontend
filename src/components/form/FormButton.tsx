export const FormButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="submit"
      className="w-full text-white hover:shadow-lg rounded-lg mt-8 py-3 md:mt-11 btn-ca bg-gradient-to-r from-black to-[#6F6F6F] flex items-center justify-center"
    >
      {children}
    </button>
  );
};