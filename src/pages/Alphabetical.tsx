import { useWebsocket } from "@/components/hooks/useWebsocket";
import ShareViewLayout from "@/components/layouts/ShareViewLayout";
import ShareTable from "@/components/main/ShareTable";

const Alphabetical = () => {
  const { isLoading, stockPrices } = useWebsocket();
  return (
    <ShareViewLayout>
      {isLoading ? "Loading..." : <ShareTable stockPrices={stockPrices} />}
    </ShareViewLayout>
  );
};

export default Alphabetical;
