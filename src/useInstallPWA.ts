import { useCallback } from "react";

let deferredPrompt: Event | null = null;

const handleBeforeInstallPrompt = (event: Event) => {
  event.preventDefault();
  deferredPrompt = event;
};

window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

export const useInstallPWA = () =>
  useCallback(() => {
    if (deferredPrompt) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (deferredPrompt as any).prompt();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (deferredPrompt as any).userChoice.then(() => {
        deferredPrompt = null;
      });
    }
  }, []);
