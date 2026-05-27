import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="shihai_cookie_consent"
      style={{
        background: "rgba(5,20,30,0.95)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "18px 24px",
      }}
      buttonStyle={{
        background: "#06b6d4",
        color: "#fff",
        borderRadius: "999px",
        padding: "10px 18px",
        fontSize: "14px",
        fontWeight: 600,
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "999px",
        padding: "10px 18px",
        fontSize: "14px",
      }}
      expires={180}
      onAccept={() => {
        Cookies.set("analytics", "true");
      }}
      onDecline={() => {
        Cookies.set("analytics", "false");
      }}
    >
      We use cookies to improve your experience, analyze traffic,
      and enhance site performance. By clicking Accept, you consent
      to our use of cookies.
    </CookieConsent>
  );
}