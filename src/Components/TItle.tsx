type Props = {
    titulo: String;
  };
  
  function Title({ titulo }: Props) {
    return (
      <section className="grid justify-center text-center my-10">
        <p className="lg:text-5xl text-black-700  italic">{titulo}</p>
      </section>
    );
  }
  
  export default Title;
  