const Batches = () => {
  return (
    <section className="w-full bg-[#F5E9DC] py-16 px-6 md:px-12 lg:px-24 font-sans">
      <h2 id="batches" className="text-4xl md:text-5xl font-bold text-[#583015] text-center mb-10">
        Batch Timings
      </h2>

      <div 
      
      className="max-w-3xl mx-auto overflow-x-auto shadow-lg border border-[#A27448] rounded-3xl">
        <table className="min-w-full table-auto bg-white">
          <thead>
            <tr className="bg-[#A27448] text-white">
              <th className="py-4 px-12 text-lg font-semibold text-left rounded-tl-xl">Batch</th>
              <th className="py-4 px-20 text-lg font-semibold text-right rounded-tr-xl">Timing</th>
            </tr>
          </thead>
          <tbody className="text-[#8C745C] text-md">
            {[
              ["Batch 1", "9:00 AM – 11:00 AM"],
              ["Batch 2", "9:30 AM – 11:30 AM"],
              ["Batch 3", "5:30 PM – 7:30 PM"],
              ["Batch 4", "6:00 PM – 8:00 PM"],
              ["Batch 5", "6:30 PM – 8:30 PM"],
            ].map(([batch, timing], idx, arr) => (
              <tr
                key={batch}
                className={`border-b border-[#E3D3BC] hover:bg-[#f9f4ef] transition ${
                  idx === arr.length - 1 ? "" : "border-b"
                }`}
              >
                <td
                  className={`py-3 px-12 text-left ${
                    idx === arr.length - 1 ? "rounded-bl-xl" : ""
                  }`}
                >
                  {batch}
                </td>
                <td
                  className={`py-3 px-14 text-right ${
                    idx === arr.length - 1 ? "rounded-br-xl" : ""
                  }`}
                >
                  {timing}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Batches;
