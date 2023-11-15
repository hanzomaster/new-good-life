import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";

import { getItemFor, storeData } from "~/utils/storageUtils";

const HAS_LAUNCHED = "HAS_LAUNCHED";

export default function Index() {
  const session = false;
  // const session = await auth();
  // first time launch app
  const [firstLaunched, setHasLaunched] = useState(false);
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
  // if (!firstLaunched) return <Redirect href={"/home"} />;
  // else return <Redirect href={"/onboarding/onboard"} />;
  if (!firstLaunched) {
    if (!session) {
      return <Redirect href={"/auth/SignIn"} />;
    } else {
      return <Redirect href={"/home"} />;
    }
  } else {
    return <Redirect href={"/onboarding/onboard"} />;
  }
}
