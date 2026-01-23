type SectionsProps = {
  children: React.ReactNode;
};

export const Sections = ({ children }: SectionsProps) => {
  return (
    <>
      <div className="container">
        <div className="content">
          <section>{children}</section>
        </div>
      </div>
    </>
  );
};
