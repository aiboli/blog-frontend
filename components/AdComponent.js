import { useEffect } from "react";

const AdComponent = ({ adFormat = "auto" }) => {
  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (e) {
      console.error("Error loading ads:", e);
    }
  }, []);

  return (
    <ins
      class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-8073958171092439"
      data-ad-slot="2040743276"
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdComponent;
