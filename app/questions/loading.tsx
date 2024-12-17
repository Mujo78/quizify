import LoadingDots from "@/components/UI/LoadingDots";

const Loading = () => {
  return (
    <div className="h-screen w-full bg-blue-100 flex justify-center items-center">
      <LoadingDots color="white" />
    </div>
  );
};

export default Loading;
