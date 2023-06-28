const Refund = () => {
  return (
    <div className="p-4  max-w-screen-2xl mx-auto pt-16">
      <a
        className="inline-block cursor-pointer rounded-full bg-gradient-to-r from-pink-darkPink to-blue-light px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
        href="/"
      >
        Back to Home
      </a>
      <h1 className="font-bold font-serif text-2xl pt-20">Refund policy</h1>
      <p className="p-2 font-sans text-base">
        If after making payment you change your mind and want a refund of your
        payment, the amount to be refunded will depend on how much work is done.
        The refund amount will be the amount excluding the payment for work done
        till that time.
      </p>
      <p className="p-2 font-sans text-base">
        If you feel unsatisfactory of our services, you can request for a
        refund, after your request our experts will check the quality of work
        and depending on that the refund amount will be decided.
      </p>
    </div>
  );
};

export default Refund;
