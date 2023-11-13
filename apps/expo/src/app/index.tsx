import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";

import { getItemFor, storeData } from "~/utils/storageUtils";

const HAS_LAUNCHED = "HAS_LAUNCHED";

export default function Index() {
  // first time lauch app
  const [hasLaunched, setHasLaunched] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const hasLaunched = await getItemFor(HAS_LAUNCHED);
      if (hasLaunched) {
        setHasLaunched(true);
      } else {
        await storeData(HAS_LAUNCHED, "true");
      }
    };
    getData().catch((err) => console.error(err));
  }, []);
  if (!hasLaunched) return <Redirect href={"/home"} />;
  else return <Redirect href={"/onboarding/onboard"} />;
}
