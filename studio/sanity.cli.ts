import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "94i1aqwt",
    dataset: "production",
  },
  deployment: {
    appId: "dftz99smz1bepcx7od45sdj7",
    autoUpdates: true,
  },
});
