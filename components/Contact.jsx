export default function Contact() {
  return (
    <div className="max-w-[1240px] h-screen m-auto p-4">
      <h1 className="text-2xl font-bold text-center p-4">Submit your message!</h1>
      <form className="max-w-[600px] m-auto">
        <div className="flex flex-col">
          <input className="border shadow-lg p-3 w-full" type="text" placeholder="Name" />
          <input className="border shadow-lg p-3 w-full my-3" type="email" placeholder="Email" />
        </div>
        <textarea className="border shadow-lg p-3 w-full" name="message" id="message" cols="30" rows="5" placeholder="message..." />
        <button className="border shadow-lg p-3 w-full mt-2 bg-slate-700 font-bold text-white">Submit</button>
      </form>
    </div>
  );
}
