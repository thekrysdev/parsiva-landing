import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Für eine reine Marketing-Page ohne ISR brauchen wir keinen Cache.
  // Später wenn wir dynamische Features haben, hier incrementalCache konfigurieren.
});
