export default function Button({ text }: { text: string }) {
  return (
    <button className="py-[10px] px-[20px] font-medium text-[19px] leading-[95%] tracking-[-0.01em] lowercase text-white bg-[linear-gradient(356deg,#ffa8a3_0%,#ff291c_73%,#ff291c_100%)]">
      {text}
    </button>
  );
}
